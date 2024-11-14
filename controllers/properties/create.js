import Property from "../../models/Property.js";

let createProperty = async (req, res, next) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json({
            success: true,
            response: property,
            message: "Property created successfully"
        });
    } catch (error) {
        next(error);
    }
};

export default createProperty;