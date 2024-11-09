import Property from "../../models/Property.js";

let allProperties = async (req, res, next) => {
    try {
        const properties = await Property.find().populate('user').exec();
        res.status(200).json({
            success: true,
            response: properties
        });
    } catch (error) {
        next(error);
    }
};

let getProperty = async (req, res, next) => {
    try {
        const property = await Property.findById(req.params.id);
        res.status(200).json({
            success: true,
            response: property
        });
    } catch (error) {
        next(error);
    }
};

export { allProperties, getProperty };