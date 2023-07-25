import Player from '~modules/player/player.module';
import Storage from '~modules/storage/storage.module';

let storage: Storage;
let player: Player;

export const initializeConfig = () => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!storage && !player) {
    storage = new Storage();
    storage.init();

    player = new Player();
    player.init();
  }

  return { player, storage };
};
