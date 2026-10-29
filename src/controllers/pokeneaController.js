const pokeneaRepository = require('../repositories/pokeneaRepository');

function show() {
  const pokenea = pokeneaRepository.getRandom();
  const containerId = containerService.getContainerId();

  return {
    image: pokenea.image,
    philosophicalPhrase: pokenea.philosophicalPhrase,
    containerId: containerId
  };
}

module.exports = {
  show
};