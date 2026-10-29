const pokeneasData = require('../data/pokeneasData');

/**
 * @returns {import('../types').Pokenea[]}
 */
function getAll() {
  return pokeneasData;
}

/**
 * @returns {import('../types').Pokenea}
 */
function getRandom() {
  const randomIndex = Math.floor(Math.random() * pokeneasData.length);

  return pokeneasData[randomIndex];
}

module.exports = { getAll, getRandom };