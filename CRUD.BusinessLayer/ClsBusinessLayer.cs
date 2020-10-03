using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRUD.DataLayer;
using System.Configuration;

namespace CRUD.BusinessLayer
{
    public class ClsBusinessLayer
    {
        public string SelectEmpDetails(string InXML) {
            ClsDataLayer objDL = new ClsDataLayer();

            return objDL.SelectEmpDetails(InXML);
        }   
    }
}
