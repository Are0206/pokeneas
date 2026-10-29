const appConfig = require('./src/config/appConfig');
const createApp = require('./src/app');

const app = createApp();

app.listen(appConfig.port, () => {
  console.log(`Pokeneas app listening on port ${appConfig.port}`);
});