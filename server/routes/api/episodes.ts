import { Router } from "express";

import Episode from "../../models/Episode";

const router = Router();

router.get("/", async (_, res) => {
  const chars = await Episode.find();
  res.json(chars);
});

/** Post a episode. TODO: accessible only after admin authentication */
router.post("/", async (req, res) => {
  const episode = new Episode({
    title: req.body.title,
    season: req.body.season,
    episode: req.body.episode,
    air_date: req.body.air_date,
    characters: req.body.characters,
  });

  try {
    const resp = await episode.save();
    res.status(201).json(resp);
  } catch (error) {
    res.status(500).json({ error: "Invalid Request" });
  }
});

export default router;
