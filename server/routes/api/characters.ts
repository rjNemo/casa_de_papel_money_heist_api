import { Router } from "express";

import Character from "../../models/Character";

const router = Router();

router.get("/", async (_, res) => {
  const chars = await Character.find();
  res.json(chars);
});

export default router;
