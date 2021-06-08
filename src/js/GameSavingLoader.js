/* eslint-disable */
import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    const reader = await read();
    const data = await json(reader);
    return data
  }
}
