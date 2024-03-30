using CLCommon.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using CLCommon.Models;
using CLCommon.Repository;


namespace PrimeVision.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Add CORS
            var ReactSpecificOrigins = "enablecorsPrimeVision";

            var builder = WebApplication.CreateBuilder(args);


            var connectionString = builder.Configuration.GetConnectionString("PrimeVisionContextConnection") ?? throw new InvalidOperationException("Connection string 'PrimeVisionAPIContextConnection' not found.");

            builder.Services.AddDbContext<PrimeVisionContext>(options => options.UseSqlServer(connectionString));

            builder.Services.AddScoped<IRepositoryAsync<TAttore>, EntityFrameworkRepositoryAsync<TAttore>>(
                 serviceProvider =>
                 {
                     var options = serviceProvider.GetRequiredService<DbContextOptions<PrimeVisionContext>>();
                     return new EntityFrameworkRepositoryAsync<TAttore>(options);
                 }

                );
             


            // Add CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: ReactSpecificOrigins,
                                       builder =>
                                       {
                                           builder.WithOrigins("http://localhost:3000", "https://localhost:7209", "https://localhost:7278")
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

            // Configure the HTTP request pipeline.
            //if (app.Environment.IsDevelopment())
            //{
            app.UseSwagger();
            app.UseSwaggerUI();
            //}

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            // CORS
            app.UseCors(ReactSpecificOrigins);

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
