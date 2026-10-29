const os = require('node:os');

/**
 * Inside a Docker container the hostname defaults to the short container id.
 *
 * @returns {string}
 */
function getContainerId() {
  return os.hostname();
}

module.exports = { getContainerId };