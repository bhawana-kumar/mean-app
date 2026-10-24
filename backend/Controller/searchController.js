const Vehicle = require("../model/vehicleModel")

const searchProducts = async (req, resp) => {
    try {
        const searchQuery = req.query.q;
        
        const regex = new RegExp(searchQuery, 'i');
        const result = await Vehicle.find({
            $or: [
                { brandName: regex },
                { carName: regex },
                { manufYear: regex },
                { engine: regex },
                { color: regex }
                
            ]
        });
        resp.send(result);
    } catch (err) {
        console.error(err);
        resp.status(500).send("An error occurred while searching for products.");
    }
};

module.exports = {
    searchProducts
}
