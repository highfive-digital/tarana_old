import Player from '~modules/player/player.module';
import Storage from '~modules/storage/storage.module';

let storage: Storage;
let player: Player;

export const initializeConfig = () => {
  if (!storage && !player) {
    storage = new Storage();
    storage.init();

    player = new Player();
    player.init();
  }

  return { player, storage };
};
