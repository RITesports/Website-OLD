import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

import mongoConfig from '../../configs/mongo';

mongoose.set('toJSON', { transform: true, flattenDecimals: true, versionKey: false });

mongoose.plugin(mongoosePaginate);

const mongoUrl = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => {
    console.log(`Succesfully Connected to the Mongodb Database at URL: ${mongoUrl}`);
  })
  .catch(() => {
    console.log(`Error Connecting to the Mongodb Database at URL: ${mongoUrl}`);
  });
