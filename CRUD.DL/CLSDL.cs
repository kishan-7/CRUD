using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Configuration;




namespace CRUD.DL
{
    public class CLSDL
    {
       public static string con=ConfigurationManager.AppSettings["Constr"].ToString();
        SqlConnection Connection=new SqlConnection(con);
        DataSet ds;
        SqlDataAdapter da;
        SqlCommand cmd = new SqlCommand(Connection);
        
        public void submit()
        {
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "";
            cmd.Parameters.AddWithValue("@Inxml","");
            //Connection = cmd.Connection;
            Connection.Open();
            cmd.ExecuteNonQuery();
            Connection.Close();

        }
        
        



    }
}
