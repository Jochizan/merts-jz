import mongoose from 'mongoose'
import config from './config'

(async () => {
  try {
    const db = await mongoose.connect(`${config.MONGO_DB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('Mongodb connection SUCCESS `');
    console.log('Database is connected to:', db.connection.name);
  } catch (err) {
    console.error('Mongodb connection FAIL ❌');
    console.error(err);
    process.exit(1);
  }
})();