$(document).ready(function () {
    SelectEmpDetails();
    //$("#btnsave").click(function () {
    //    SaveDetails();
    //});

});


function SelectEmpDetails() {

    var xml = "<Root><Type>SelectEmpDetails</Type></Root>";



    $.ajax({
        type: "POST",
        url: "EmployeeDetails.aspx/SelectEmpDetails",
        data: "{inXML:'" + xml + "'}", //Data sent to server        
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var obj = $.parseJSON(data.d)
            //alert(obj)
            var respCode = data.d.responseCode;

            //$('#tblEmp tbody').empty();
             {
                obj = jQuery.parseJSON(data.d);
                //$("#divMainpagging").show();
                //$("#TotalRecord").html(obj.Table1[0].totalRecords);
                //paging('UsersSettings')
                var strEmp = '';
                for (i = 0; i < obj.Table.length; i++) {
                    //strEmp += '<tr>'
                    //strEmp += '<td colspan="4" height="20"></td>'
                    //strEmp += '</tr>'
                    strEmp += '<tr>'
                    strEmp += '<td>' + obj.Table[i].Name + '</td>'
                    strEmp += '<td>' + obj.Table[i].DateofBirth + '</td>'
                    strEmp += '<td>' + obj.Table[i].DepartmentName + '</td>'
                    strEmp += '<td>' + obj.Table[i].DesignationName + '</td>'
                    strEmp += '</tr>'

                   // strEmp='<tr><td colspan="10" height="20"></td></tr><tr><td>' + obj.Table[i].Name + '</td><td>' + obj.Table[i].DateofBirth + "</td><td>" + obj.Table[i].DepartmentName + "</td><td>" + obj.Table[i].DesignationName + "</td></tr>';
                    //$('#tblEmp').append('<tr ><td colspan="10" height="20"></td></tr><tr id="tr-' + obj.Table[i].Name + '"><td>' + obj.Table[i].DateofBirth + '</td><td>' + obj.Table[i].DepartmentName + "</td><td>" + obj.Table[i].DesignationName + "</td></tr>");
                   // $('#tblEmp tbody').append('<tr><td colspan="10" height="20"></td></tr><tr><td>' + obj.Table[i].Name + '</td><td>' + obj.Table[i].DateofBirth + "</td><td>" + obj.Table[i].DepartmentName + "</td><td>" + obj.Table[i].DesignationName + "</td></tr>");
                    
                }
                $('#tblEmp tbody').append(strEmp)
                $("#tblEmp").dataTable();
            }


            //if (respCode == 0) {
            //    obj = jQuery.parseJSON(UniformSpecialCharacter(data.d.responseData));
            //    //$("#divMainpagging").show();
            //    //$("#TotalRecord").html(obj.Table1[0].totalRecords);
            //    //paging('UsersSettings')
            //    for (i = 0; i < obj.Table.length; i++) {

            //        $('#tblEmp').append('<tr class="shadow_none"><td colspan="10" height="20"></td></tr><tr id="tr-' + obj.Table[i].Name + '"><td>' + obj.Table[i].Birthdate + '</td><td>' + obj.Table[i].Gender + "</td><td>" + obj.Table[i].DepartmentName + "</td><td>" + obj.Table[i].DesignationName + "</td><td>" + obj.Table[i].TotalSalary + "</td></tr>");
            //    }
            //}



        },
        failure: function (msg) {
            alert(msg);
        }
    });
}   


 

//function SaveDetails() {
//    var Inxml = "<Root><Type>SaveDetails</Type><Firstname>" + $("#txtFname").val() + "</Firstname><LastName>" + $("#txtFname").val() + "</LastName><Gender>" + $('input[name=Gender]:checked').val() + "</Gender><Qualification>" + $("#txtFname").val() + "</Qualification><City>" + $("#txtFname").val() +"</City></Root>"
//    //var parameter = [];

//    //parameter.push('Type');
//    //parameter.push('Firstname');
//    //parameter.push('LastName');
//    //parameter.push('Gender');
//    //parameter.push('Qualification');
//    //parameter.push('City');

//    //values = [];

//    //values.push('SaveDetails');
//    //values.push($("#txtFname").val());
//    //values.push($("#txtLname").val());
//    //values.push($('input[name=Gender]:checked').val());
//    //values.push('SaveDetails');

//    //var xml = CreateXML(parameter, values);
//    $.ajax({
//        type: 'POST',
//        dataType: 'json',
//        url: 'StudentDetails.aspx/Submit',
//        contentType: "application/json; charset=utf-8",
//        data: "{inXML :'" + Inxml + "'}",
//        success: function () {

//        },
//        failure: function () {
//        }
       
        
        
        
        
//    });
       
            
    
//}