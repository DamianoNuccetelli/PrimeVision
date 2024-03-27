using CLSerilog;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PrimeVision.API.Areas.Identity.Data;
using PrimeVision.API.Data;

namespace PrimeVision.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Add CORS
            var ReactSpecificOrigins = "enablecorsPrimeVision";

            var builder = WebApplication.CreateBuilder(args);

            var connectionString = builder.Configuration.GetConnectionString("PrimeVisionAPIContextConnection") ?? throw new InvalidOperationException("Connection string 'PrimeVisionAPIContextConnection' not found.");

            //Rimuovo Microsoft logger
            builder.Logging.ClearProviders();

            // Configurazione del logger Serilog
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .MinimumLevel.Override("Microsoft", LogEventLevel.Error)
                .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Fatal)
                .Enrich.FromLogContext()
                .Enrich.WithMachineName()
                .Enrich.WithProcessId()
                .Enrich.WithEnvironmentUserName()
                .WriteTo.File("C:\\LOGS\\PrimeVision\\applog-.txt", rollingInterval: RollingInterval.Day)
                .WriteTo.Console()
                .CreateLogger();

            builder.Host.UseSerilog();

            builder.Services.AddDbContext<PrimeVisionAPIContext>(options => options.UseSqlServer(connectionString));

            builder.Services.AddIdentity<PrimeVisionUser, IdentityRole>(
             options =>
             {
                 options.SignIn.RequireConfirmedAccount = true;
                 options.Password.RequiredUniqueChars = 0;
                 options.Password.RequireUppercase = false;
                 options.Password.RequireNonAlphanumeric = false;
                 options.Password.RequireLowercase = false;
                 options.Password.RequiredLength = 8;
             })
             .AddDefaultUI()
             .AddEntityFrameworkStores<PrimeVisionAPIContext>()
             .AddDefaultTokenProviders();

            // Add CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: ReactSpecificOrigins,
                                       builder =>
                                       {
                                           builder.WithOrigins("http://localhost:3000", "https://localhost:7209")
                                   .AllowAnyHeader()
                                   .AllowAnyMethod();
                                       });
            });

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();


            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthorization();
            // CORS
            app.UseCors(ReactSpecificOrigins);

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }



    }
}
