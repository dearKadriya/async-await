/* eslint-disable */
import GameSavingLoader from './GameSavingLoader.js';

    (async () => {
      try {
        const saving = await GameSavingLoader.load();
      } catch (error) {
        throw new Error(error)
      }
    })();