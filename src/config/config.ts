import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT,
};

export const config = Object.freeze(_config); // freeze method used for read only
