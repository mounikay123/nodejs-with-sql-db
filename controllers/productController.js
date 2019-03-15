productModel = require("../Models/productModel");
pm = new productModel;
productController = function(){

}
productController.prototype.getAll = function(req,res){
   pm.getAll(function(err,result){
res.send(result);
})
}
productController.prototype.create = function(req,res){
    pm.create(req.body,function(err,result){
    res.send(result);
  
})
}
productController.prototype.update = function(req,res){
    console.log(req,"moji");
    pm.update(req.params.id, req.body, function(err,result){
        res.send(result);
    })
}
productController.prototype.delete = function(req,res){
    pm.delete(req.params.id, req.body,function(err,result){
        res.send(result);
    })
}
module.exports = productController;