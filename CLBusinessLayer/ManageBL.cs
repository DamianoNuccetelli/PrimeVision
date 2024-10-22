﻿using CLCommon.Models;
using CLDataLayer;

namespace CLBusinessLayer
{
    public class ManageBL
    {
        private readonly PrimeVisionContext _context;
        private ManageDL oDL = null;

        public ManageBL(PrimeVisionContext context)
        {
            _context = context;

        }

        public async Task<List<TFilm>> GetAllFilms()
        {
            List<TFilm> listFilm = null;

            oDL = new ManageDL(_context);
            listFilm = await oDL.GetAllFilms();


            return listFilm;
        }

        public async Task<TFilm> GetDetailsFilm(int id)
        {
            TFilm oFilm = null;


            oDL = new ManageDL(_context);
            oFilm = await oDL.GetDetailsFilm(id);



            return oFilm;
        }

        public async Task<int> AddFilm(TFilm oFilm)
        {
            int iRet = 0;

            oDL = new ManageDL(_context);
            iRet = await oDL.AddFilm(oFilm);

            return iRet;
        }

        public async Task<int> UpdateFilm(TFilm oFilm)
        {
            int iRet = 0;

            oDL = new ManageDL(_context);
            iRet = await oDL.UpdateFilm(oFilm);

            return iRet;
        }

        public async Task<int> DeleteFilm(int id)
        {
            int iRet = 0;

            oDL = new ManageDL(_context);
            iRet = await oDL.DeleteFilm(id);


            return iRet;
        }




    }
}
