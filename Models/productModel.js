var mySql = require("mysql");
var connection = mySql.createConnection({
    host: "mysql.qa.talentscreen.io",
    user: "whiteboxqa",
    password: "Innovapath1*",
    database: "talentdb"
})
connection.connect(function (err) {
    if (err) {
        throw err;
    }

})
productModel = function () {
    this.mySql = connection;
}
productModel.prototype.getAll = function (callback) {
    this.mySql.query("SELECT * from customers", callback)
}
productModel.prototype.create = function (data, callback) {
    this.mySql.query('INSERT INTO customers SET ?', data, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result, "shourya");
            callback(null, data);
        }
    });
}
productModel.prototype.update = function (id, data, callback) {
   
    this.mySql.query("update customers SET ? where id = " + id, data, function (err, result) {

        if (err) {
            console.log(err);
        }
        // else {
        //     console.log(result);
        //     callback(null, data);
        // }
    })
}
productModel.prototype.delete = function(id,data,callback){
    this.mySql.query("DELETE FROM customers WHERE id = "                                                                                                                                                    + id,data , function(err,result){

        if(err){
            console.log(err,"fogg");

        }
        else{
            console.log(result);
            callback(null, data);
        }
    })
}
module.exports = productModel;