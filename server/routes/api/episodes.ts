import { Router } from "express";

import Episode from "../../models/Episode";
import * as ERRORS from "../../constants/errors";

const router = Router();

/** Fetch all episodes */
router.get("/", async (_, res) => {
  const episode = await Episode.find();
  res.json(episode);
});

router.get("/:id", async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id);
    res.json(episode);
  } catch (error) {
    res.status(404).json({ error: ERRORS.EPISODE_NOT_FOUND });
  }
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
