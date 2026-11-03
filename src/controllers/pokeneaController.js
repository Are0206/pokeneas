const containerService = require('../services/containerService');
const pokeneaRepository = require('../repositories/pokeneaRepository');

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @returns {void}
 */
function show(request, response) {
  const pokenea = pokeneaRepository.getRandom();

  const viewData = {
    image: pokenea.image,
    philosophicalPhrase: pokenea.philosophicalPhrase,
    containerId: containerService.getContainerId(),
  };

  response.render('index', viewData);
}

module.exports = { show };