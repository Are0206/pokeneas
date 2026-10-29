const containerService = require('../services/containerService');
const pokeneaRepository = require('../repositories/pokeneaRepository');

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @returns {void}
 */
function show(request, response) {
  const pokenea = pokeneaRepository.getRandom();

  response.status(200).json({
    id: pokenea.id,
    name: pokenea.name,
    height: pokenea.height,
    ability: pokenea.ability,
    containerId: containerService.getContainerId(),
  });
}

module.exports = { show };