using Microsoft.AspNetCore.Http;
using Serilog;
using Serilog.Context;
using Serilog.Events;

namespace CLSerilog
{
    public class ManageSerilog
    {
        public static void ConfigureLogger()
        {
            string logFilePath = "C:\\LOGS\\PrimeVision\\applog-.txt";

            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose() 
                .MinimumLevel.Override("Microsoft", LogEventLevel.Error)
                .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Fatal)
                .Enrich.FromLogContext()
                .Enrich.WithMachineName()
                .Enrich.WithProcessId()
                .Enrich.WithEnvironmentUserName()
                .WriteTo.File(logFilePath, rollingInterval: RollingInterval.Day)
                .WriteTo.Console() 
                .CreateLogger();
        }

        //Logging dell'indirizzo IP del client
        public static void LogClientIPAddress(HttpContext httpContext)
        {
            string clientIPAddress = httpContext.Connection.RemoteIpAddress?.ToString();
            Log.Information("Client IP Address: {ClientIP}", clientIPAddress);
        }


    }
}
