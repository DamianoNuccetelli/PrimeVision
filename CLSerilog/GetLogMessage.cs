using Serilog.Events;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CLSerilog
{
    public static class GetLogMessage
    {
        public static void ConfigureLogger()
        {
            //string logFilePath = "C:\\Development\\LOGS\\PrimeVision\\applog-.txt";

            //Log.Logger = new LoggerConfiguration()
            //    .MinimumLevel.Verbose()
            //    .MinimumLevel.Override("Microsoft", LogEventLevel.Error)
            //    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Fatal)
            //    .Enrich.FromLogContext()
            //    .Enrich.WithMachineName()
            //    .Enrich.WithProcessId()
            //    .Enrich.WithEnvironmentUserName()
            //    .WriteTo.File(logFilePath, rollingInterval: RollingInterval.Day)
            //    .WriteTo.Console()
            //    .CreateLogger();
        }

        public static string LogVerbose(string utenteLoggato, string nameSpace, string message)
        {
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, message);
        }

        public static string LogDebug(string utenteLoggato, string nameSpace, string message)
        {
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, message);
        }

        public static string LogInformation(string utenteLoggato, string nameSpace, string message)
        {
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, message);
        }

        public static string LogWarning(string utenteLoggato, string nameSpace, string message)
        {
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, message);
        }

        public static string LogError(string utenteLoggato, string nameSpace, string message)
        {
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, message);
        }

        public static string LogError(string utenteLoggato, string nameSpace, Exception ex)
        {

            string sErr = string.Empty;
            if (ex.InnerException != null)
            {
                sErr = string.Format("Source: {0}{4}Message: {1}{4}StackTrace: {2}{4}InnerException: {3}{4}", ex.Source, ex.Message, ex.StackTrace, ex.InnerException.Message, System.Environment.NewLine);
            }
            else
            {
                sErr = string.Format("Source: {0}{3}Message: {1}{3}StackTrace: {2}{3}", ex.Source, ex.Message, ex.StackTrace, System.Environment.NewLine);
            }
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, sErr);
        }

        public static string LogFatal(string utenteLoggato, string nameSpace, string message)
        {
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, message);
        }

        public static string LogFatal(string utenteLoggato, string nameSpace, Exception ex)
        {

            string sErr = string.Empty;
            if (ex.InnerException != null)
            {
                sErr = string.Format("Source: {0}{4}Message: {1}{4}StackTrace: {2}{4}InnerException: {3}{4}", ex.Source, ex.Message, ex.StackTrace, ex.InnerException.Message, System.Environment.NewLine);
            }
            else
            {
                sErr = string.Format("Source: {0}{3}Message: {1}{3}StackTrace: {2}{3}", ex.Source, ex.Message, ex.StackTrace, System.Environment.NewLine);
            }
            return string.Format("{0} - {1} ==> {2}", utenteLoggato, nameSpace, sErr);
        }
    }
}
