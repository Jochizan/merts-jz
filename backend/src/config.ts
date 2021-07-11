import dotenv from 'dotenv'

dotenv.config();

export default {
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  MONGO_HOST: process.env.HOST || 'localhost',
  MONGO_DB_URI: process.env.DB_URI || 'mern-db-ts',
  PORT: process.env.PORT || '5200'
}