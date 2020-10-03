using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace CRUD.DataLayer
{
    public class ClsDataLayer
    {

        // public static string con = ConfigurationManager.AppSettings["Constr"].ToString();
        // SqlConnection Connection = new SqlConnection(con);
        DataSet ds = new DataSet();
        SqlDataAdapter da;
        SqlCommand cmd = new SqlCommand();

        //public void SelectEmpDetails(string InXML)
        //{
        //    SqlConnection con = new SqlConnection(@"Data Source=LAPTOP-M24SQRFT\W4U;Initial Catalog=Study;User ID=sa;Password=Deltabrav0");
        //    SqlCommand cmd = new SqlCommand("select * from tbl_Employee", con);
        //    SqlDataAdapter sda = new SqlDataAdapter(cmd);
        //    DataSet ds = new DataSet();
        //    sda.Fill(ds);
        //    //GridView1.DataSource = ds;
        //    //GridView1.DataBind();

        //}
        public string SelectEmpDetails(string InXML)
        {
            String strConnString = ConfigurationManager.ConnectionStrings["conString"].ConnectionString;
            SqlConnection con = new SqlConnection(strConnString);

            string response = "";

            try
            {
               
                SqlCommand cmd = new SqlCommand("SP_Select_Emp_Details", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.Add(new SqlParameter("@XMLParam", InXML));
                cmd.Connection = con;
                con.Open();
                da = new SqlDataAdapter(cmd);
                da.Fill(ds);
                
                //response= JsonConvert.SerializeObject(ds, new DataSetConverter());
                response = JsonConvert.SerializeObject(ds, new DataSetConverter());
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                con.Close();
                con.Dispose();
            }

            return response;
        }


    }
}
