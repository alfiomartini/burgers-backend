import express from "express";
import { connection } from "../database/client/index.js";
import {
  getAllIngredients,
  postIngredient,
  getIngredientId,
  deleteIngredientId,
  patchIngredientId,
} from "../controllers/ingredients.js";

const router = express.Router();

router.get("/", getAllIngredients(connection));

router.post("/", postIngredient(connection));

router.get("/:id", getIngredientId(connection));

router.delete("/:id", deleteIngredientId(connection));

router.patch("/:id", patchIngredientId(connection));

export default router;
