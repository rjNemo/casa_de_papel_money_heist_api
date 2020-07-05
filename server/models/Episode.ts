import monggose, { Schema, model } from "mongoose";

const EpisodeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  season: {
    type: Number,
    required: true,
  },
  episode: {
    type: Number,
    required: true,
  },
  air_date: {
    type: String,
    required: true,
  },
  characters: {
    type: Array,
    of: String,
  },
});

const Episode = model("episode", EpisodeSchema);

export default Episode;
