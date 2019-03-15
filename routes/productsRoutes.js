var express =require("express"),
router=express.Router();
productController = require('../controllers/productController');
pc=new productController;
router.get("/", pc.getAll.bind(pc));
router.post("/name" , pc.create.bind(pc));
 router.put("/:id" ,pc.update.bind(pc));
 router.delete("/:id", pc.delete.bind(pc));
module.exports = router;