var express=require('express'),
router = express.Router();
router.use("/product", require('../routes/productsRoutes'));
module.exports = router;