const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    name: String,  
    email: String,
    password: String 
})

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel
