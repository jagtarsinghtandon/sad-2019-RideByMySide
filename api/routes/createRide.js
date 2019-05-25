// app.post('/createRide',(req,res)=>{
//     let emp = req.body;
//     var sql = "SET @EmpID =?; SET @Name=?; SET @EmpCode =?; SET @Salary =?; \
//      CALL EmployeeAddOrEdit(@EmpID,@Name,@Empcode,@Salary);"
//     mysqlConnection.query(sql,[emp.EmpID, emp.Name, emp.Empcode ,emp.Salary],(err, rows, fields)=>{
//         if(!err)
//        rows.forEach(element => {
//            if(element.constructor == Array)
//            res.send('Inserted Employee ID : '+ element[0].EmpID);
//        });
//         else
//         console.log(' Emp data is not showing \n ERROR :'+ err);
//     })
// });