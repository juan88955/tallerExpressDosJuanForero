import Property from "../../models/Property.js";

let updateProperty = async (req, res, next) => {
    try {
        const { _id, name, type, value, user } = req.body;

        const updatedProperty = await Property.findByIdAndUpdate(
            _id,
            { name, type, value, user },
            { new: true }
        );

        if (!updatedProperty) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        res.status(200).json({
            success: true,
            response: updatedProperty
        });
    } catch (error) {
        next(error);
    }
};

export default updateProperty;