<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EMPDetails.aspx.cs" Inherits="CRUD.EMPDetails" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="JavaScript/jquery-3.5.1.min.js" type="text/javascript"></script>
    <script src="JavaScript/CRUD/CRUD.js" type="text/javascript"></script>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <%--<table>
              <tr><th></th><th></th></tr>
                <tr><td>First Name</td><td><input id="txtFname" type="text"/></td></tr>
                <tr><td>Last Name</td><td><input id="txtLname" type="text"/></td></tr>
                <tr><td>Gender</td><td>Male<input type="radio" value="M" name="Gender"/>Female<input value="F" type="radio" name="Gender"/></td></tr>
                <tr><td>Qualification</td><td>10<input  id="chk10" type="checkbox"/>12<input id="chk12" type="checkbox"/>B.E.<input id="chkBE" type="checkbox"/></td></tr>
                <tr><td>City</td><td><select>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Pune</option>
                    <option>Bangalore</option>
                                     </select></td></tr>
                <tr>
                    <td><input value="save" id="btnsave" name="Save"style="width:108px" type ="button"/></td>
                </tr>
            </table>--%>
            <table id="tblEmp">
                <tr>
                    <th>Employee Name</th>
                    <th>DOB</th>
                    <th>DepartmentName</th>
                    <th>DesingnationName</th>
                </tr>
                <tr>
                    <td></td>
                    <td>Yellow</td>
                    <td></td>
                    <td>Yellow</td>
                </tr>
                <tr>
                    <td>Michelle</td>
                    <td>Purple</td>
                </tr>
            </table>
        </div>
    </form>
</body>


</html>
