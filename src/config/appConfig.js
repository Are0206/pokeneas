const appConfig = {
  port: Number(process.env.PORT) || 80,
  imagesBaseUrl:
    process.env.IMAGES_BASE_URL || 'https://storage.googleapis.com/pokeneas-express/',
};

module.exports = appConfig;