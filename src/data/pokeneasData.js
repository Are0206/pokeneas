const appConfig = require('../config/appConfig');

/**
 * @param {string} fileName
 * @returns {string}
 */
function buildImageUrl(fileName) {
  return `${appConfig.imagesBaseUrl}/${fileName}`;
}

/** @type {import('../types').Pokenea[]} */
const pokeneasData = [
  {
    id: 1,
    name: 'Parcerín',
    height: 1.62,
    ability: 'Saludo infinito',
    image: buildImageUrl('parcerin.png'),
    philosophicalPhrase: 'El que saluda primero nunca camina solo.',
  },
  {
    id: 2,
    name: 'Arepíquez',
    height: 1.4,
    ability: 'Resistencia al hambre',
    image: buildImageUrl('arepiquez.png'),
    philosophicalPhrase: 'Toda masa necesita su tiempo en el fogón.',
  },
  {
    id: 3,
    name: 'Chontadurok',
    height: 1.75,
    ability: 'Energía tropical',
    image: buildImageUrl('chontadurok.png'),
    philosophicalPhrase: 'Lo amargo también alimenta.',
  },
  {
    id: 4,
    name: 'Metrolina',
    height: 1.9,
    ability: 'Puntualidad absoluta',
    image: buildImageUrl('metrolina.png'),
    philosophicalPhrase: 'Llegar a tiempo es una forma de respeto.',
  },
  {
    id: 5,
    name: 'Silletón',
    height: 2.05,
    ability: 'Carga pesada',
    image: buildImageUrl('silleton.png'),
    philosophicalPhrase: 'Quien carga flores también carga historia.',
  },
  {
    id: 6,
    name: 'Guayabita',
    height: 1.25,
    ability: 'Dulzura persistente',
    image: buildImageUrl('guayabita.png'),
    philosophicalPhrase: 'Lo pequeño madura sin pedir permiso.',
  },
  {
    id: 7,
    name: 'Nubarrón',
    height: 1.68,
    ability: 'Lluvia repentina',
    image: buildImageUrl('nubarron.png'),
    philosophicalPhrase: 'El aguacero no avisa, pero siempre pasa.',
  },
  {
    id: 8,
    name: 'Tinticienta',
    height: 1.55,
    ability: 'Despertar ajeno',
    image: buildImageUrl('tinticienta.png'),
    philosophicalPhrase: 'Un tinto a tiempo arregla más que un consejo.',
  },
];

module.exports = pokeneasData;