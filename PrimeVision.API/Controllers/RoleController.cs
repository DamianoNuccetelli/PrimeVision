using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrimeVision.APIIdentity.Areas.Identity.Data;
using PrimeVision.APIIdentity.Data;
using PrimeVision.APIIdentity.ViewModels;

namespace PrimeVision.APIIdentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        // For Login - Logout
        private readonly SignInManager<PrimeVisionUser> _signInManager;

        // For Register
        private readonly UserManager<PrimeVisionUser> _userManager;

        private readonly RoleManager<IdentityRole> _roleManager;

        private readonly PrimeVisionAPIContext _dbContext;

        public RoleController(SignInManager<PrimeVisionUser> signInManager, UserManager<PrimeVisionUser> userManager, RoleManager<IdentityRole> roleManager, PrimeVisionAPIContext dbContext)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
            _dbContext = dbContext;
        }

        [HttpPost("CreateRoleAsync")]
        public async Task<bool> CreateRoleAsync(string roleName)
        {
            bool IsSuccess = false;
            try
            {
                // create the role and seed it to the database
                IdentityRole role = new IdentityRole(roleName);
                var result = await _roleManager.CreateAsync(role);
                IsSuccess = result.Succeeded;
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
                IsSuccess = false;
            }
            return IsSuccess;
        }

        [HttpPost("AddRoleToUserAsync")]
        public async Task<bool> AddRoleToUserAsync(string userId, string roleName)
        {
            bool IsSuccess = false;
            try
            {
                // get the user
                var user = await _userManager.FindByIdAsync(userId);
                //add the role to user
                var result = await _userManager.AddToRoleAsync(user, roleName);
                IsSuccess = result.Succeeded;
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
                IsSuccess = false;
            }
            return IsSuccess;
        }

        [HttpGet("GetDataUserRole")]
        public async Task<List<DataUserRole>> GetDataUserRole(string userId)
        {

            string spName = "dbo.GetDataUserRoles";
            IEnumerable<DataUserRole>? ListDataUserRole = new List<DataUserRole>(); //.AsQueryable();
            try
            {
                FormattableString query = $"EXECUTE {spName} @UserId={userId}";
                ListDataUserRole = await _dbContext.DataUserRole.FromSql(query).ToListAsync();
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
            }
            return ListDataUserRole.ToList();
        }

        [HttpGet("GetAllUserRoleAsync")]
        public async Task<List<string>> GetAllUserRoleAsync()
        {
            List<string> listRole = new List<string>();
            try
            {
                listRole = await _roleManager.Roles.Select(r => r.Name).ToListAsync();
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
            }
            return listRole.ToList();
        }

        [HttpGet("GetAllUserAsync")]
        public async Task<List<PrimeVisionUser>> GetAllUserAsync()
        {
            List<PrimeVisionUser> listUser = new List<PrimeVisionUser>();
            try
            {
                listUser = await _userManager.Users.ToListAsync();
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
            }
            return listUser.ToList();
        }
    }
}
