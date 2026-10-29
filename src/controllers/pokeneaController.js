const containerService = require('../services/containerService');
const pokeneaRepository = require('../repositories/pokeneaRepository');

function show() {
  const pokenea = pokeneaRepository.getRandom();
  const containerId = containerService.getContainerId();

  const viewData = {
    image: pokenea.image,
    philosophicalPhrase: pokenea.philosophicalPhrase,
    containerId: containerId
  };

  return res.render('index', viewData);
}

module.exports = {
  show
};