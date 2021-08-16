
// Route Hanlders
exports.productRoot = (req, res) => {
    return res.status(200).json({
         status: "sucess",
         message: "API is running"
     });
 };


exports.getClientKey = (req, res) => {
    var config = process.env.AYDEN_CLIENT_KEY;
    return res.status(200).json({
        data: config,
      });
};