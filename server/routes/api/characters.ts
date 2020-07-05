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

/** Post a character. TODO: accessible only after admin authentication */
router.post("/", async (req, res) => {
  const character = new Character({
    name: req.body.name,
    nickname: req.body.nickname,
    status: req.body.status,
    gender: req.body.gender,
    image: req.body.image,
    occupation: req.body.occupation,
    appearances: req.body.appearances,
    portrayed: req.body.portrayed,
  });

  try {
    const resp = await character.save();
    res.status(201).json(resp);
  } catch (error) {
    res.status(500).json({ error: "Invalid Request" });
  }
});

export default router;
