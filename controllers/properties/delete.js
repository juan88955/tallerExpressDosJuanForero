import Property from "../../models/Property.js";

let deleteProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({
        success: false,
        message: "Property not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Property deleted",
      property: deletedProperty
    });
  } catch (error) {
    next(error);
  }
}

export default deleteProperty;