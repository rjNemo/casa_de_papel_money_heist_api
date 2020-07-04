import { Router } from "express";

import Episode from "../../models/Episode";

const router = Router();

router.get("/", async (_, res) => {
  const chars = await Episode.find();
  res.json(chars);
});

export default router;
