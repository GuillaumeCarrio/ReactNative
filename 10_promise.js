
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise(resolve => setTimeout(resolve, 2000));
sleep().then(response => console.log(response));
module.exports = {sleep};