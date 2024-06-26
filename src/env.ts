import { joiValidator } from './utils/joiValidator';

const ENVS = {
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  PORT: Number(process.env.PORT),
  MONGODB_URL: process.env.MONGODB_URL,
};

export const ENV = joiValidator(ENVS);
