const mongoConfig = {
  host: process.env.MONGO_HOST || '127.0.0.1',
  port: '27017',
  db: process.env.MONGO_DB || 'local',
};

export default mongoConfig;
