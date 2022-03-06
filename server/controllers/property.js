import mongoose from "mongoose";
import Property from "../models/Property.js";
import validateProperty from "../validation/property.js";

export const getProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findOne({ _id: id }).populate("user", ["-password"]);
    res.status(200).json(property);
  } catch (error) {
    res.status(400).send("Not Found");
    console.log(error);
  }
};

export const createProperty = async (req, res) => {
  const property = req.body;
  const { id } = req.params;
  const { errors, isValid } = validateProperty(req.body);
  if (!isValid) {
    return res.status(400).send(errors);
  }
  const newProperty = await new Property({ ...property, user: id, createdAt: new Date().toISOString() });
  try {
    await newProperty.save();
    res.status(202).json(newProperty);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProperty = async (req, res) => {
  const property = req.body;
  const { id, user } = req.params;
  const { errors, isValid } = validateProperty(req.body);
  console.log(req.userId);
  if (!isValid) {
    return res.status(400).send(errors);
  }
  if (mongoose.Types.ObjectId.isValid(id)) {
    const oldProperty = await Property.findOne({ _id: id });
    console.log(user);
    console.log(oldProperty.user.valueOf());
    if (user === oldProperty.user.valueOf()) {
      if (oldProperty) {
        const updatedProperty = await Property.findByIdAndUpdate(id, { ...property }, { new: true });
        res.status(200).send(updatedProperty);
      } else {
        res.status(400).send("Not Found");
      }
    } else {
      res.status(400).send("You dont have the auth to update this property");
    }
  } else {
    res.status(400).send("No Propery with such Id");
  }
};

export const deleteProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("No Properties with such Id");
  }
  await Property.findByIdAndRemove(id);
  res.json({ message: "Property deleted Successfully" });
};

export const getProperties = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; //GET THE STARTING INDEX OF EVERY PAGE
    const total = await Property.countDocuments({});
    const properties = await Property.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
    res.status(200).json({ data: properties, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    console.log(page);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};
