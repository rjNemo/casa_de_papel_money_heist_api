import { Router } from "express";

import Character from "../../models/Character";

const router = Router();

/** Get all characters */
router.get("/", async (_, res) => {
  const chars = await Character.find();
  res.json(chars);
});

/** Get a character by ID */
router.get("/:id", async (req, res) => {
  try {
    const chars = await Character.findById(req.params.id);
    res.json(chars);
  } catch (error) {
    res.status(404).json({ error: "Character not found." });
  }
});

export default router;
