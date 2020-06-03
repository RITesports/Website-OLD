import mongoose from 'mongoose';

import mongoConfig from '../../configs/mongo';

const mongoUrl = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`;
mongoose.connect(mongoUrl, {
  useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true,
})
  .then(() => {
    console.log(`Succesfully Connected to the Mongodb Database at URL: ${mongoUrl}`);
  })
  .catch(() => {
    console.log(`Error Connecting to the Mongodb Database at URL: ${mongoUrl}`);
  });
