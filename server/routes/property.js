import express from "express";
import auth from "../middleware/profile.js";

import { getProperty, updateProperty, createProperty, deleteProperty, getProperties } from "../controllers/property.js";
const router = express.Router();
router.get("/:id", getProperty);
router.get("/", getProperties);
router.patch("/:id/user/:user", auth, updateProperty);
router.post("/:id", auth, createProperty);
router.delete("/:id", auth, deleteProperty);

export default router;
