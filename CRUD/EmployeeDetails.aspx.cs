using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Web.Script.Services;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Configuration;
using CRUD.BusinessLayer;

namespace CRUD
{
    public partial class EmployeeDetails : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public static string SelectEmpDetails(string inXML)
        {
            ClsBusinessLayer objBL = new ClsBusinessLayer();
             return objBL.SelectEmpDetails(inXML);

        }
    }
}