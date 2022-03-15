/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @since Mar 15 2022
 * @desc Bye message
 *       prints "Bye, good afternoon: [name]" on the terminal
 *
 */
'use strict';

/**
 * @constant
 * @type {string}
 * @default
 */
export const BYE_MESSAGE = 'Bye, good afternoon:';

/**
 * This function receives a name, and concantenates it with the welcome message
 * 
 * @param {string} theName 
 * @returns {string} the final string
 */
export function byeSomebody(theName) {
  return `${BYE_MESSAGE} ${theName}`;
}

/**
 * The main of the program
 * Takes the first parameter given on the terminal when the program is called
 */
export function main() {
  const theName = process.argv.slice(2);
  console.log(byeSomebody(theName));
};