import Property from "../../models/Property.js";

let updateProperty = async (req, res, next) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            const error = new Error("ID is required for update");
            error.statusCode = 400;
            throw error;
        }

        const existingProperty = await Property.findById(_id);
        if (!existingProperty) {
            const error = new Error("Property not found");
            error.statusCode = 404;
            throw error;
        }

        const updatedData = {};
        ['name', 'type', 'value', 'user'].forEach(field => {
            if (req.body[field] !== undefined) {
                updatedData[field] = req.body[field];
            }
        });

        const updatedProperty = await Property.findByIdAndUpdate(
            _id,
            updatedData,
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Property updated successfully",
            response: updatedProperty
        });
    } catch (error) {
        next(error);
    }
};

export default updateProperty;