import { Schema, model } from "mongoose";

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Unknown",
  },
  gender: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  occupation: {
    type: Array,
    of: String,
  },
  appearances: {
    type: Array,
    of: Number,
  },
  portrayed: {
    type: String,
    required: true,
  },
});

const Character = model("character", CharacterSchema);
export default Character;
