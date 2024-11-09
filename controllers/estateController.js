import estateModel from "../models/estateModel.js";
export const estateController = async (req, res) => {
  try {
    const estates = await estateModel.find({});
    res.status(201).send({
      success: true,
      message: "successfully retrieved results",
      estates,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
