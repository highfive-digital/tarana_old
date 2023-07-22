import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { useSnapshot } from 'valtio';
import { SView } from '~components';
import SText from '~components/SText/SText';
import Tile from '~components/Tile/Tile';
import Player from '~modules/player/player.module';
import { type Track } from '~modules/player/player.types';
import { playerState } from '~states/player';
import { colors } from '~styles';

const player = new Player();

const track1: Track[] = [
  {
    url: 'http://107.182.234.197:7466/;stream.mp3', // Load media from the network
    title: 'Radio Zindagi Romance',
    artist: 'Radio Zindagi',
    genre: 'Progressive House, Electro House',
    artwork:
      'http://res.cloudinary.com/megabyt-5/image/upload/v1621792541/tarana-radio-app/thumbnail-icons/india/maharashtra/mumbai/st-f6f8ee2c919f8909.png' // Load artwork from the network
  }
];

const Home = () => {
  const snap = useSnapshot(playerState);

  useEffect(() => {
    player.init();
    if (snap.status === 'IDLE') {
      player.attachEventListeners();
      player
        .add(track1)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  }, [snap.status]);

  return (
    <SView display='flex' flex={1} justifyContent='center' alignItems='center'>
      <SText marginBottom={15}>{snap.status}</SText>

      <Tile
        src={snap.currentTrack?.artwork}
        size='xl'
        title={snap.currentTrack?.title}
        subTitle={snap.currentTrack?.artist}
        radius='lg'
      />
      <Pressable
        onPress={() => {
          player.play();
        }}
        accessibilityLabel='Learn more about this purple button'
        style={{
          width: 200,
          height: 60,
          backgroundColor: colors.red[600],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          marginTop: 20
        }}
      >
        <SText>PLAY NOW</SText>
      </Pressable>
      <Pressable
        onPress={() => {
          player.pause();
        }}
        accessibilityLabel='Learn more about this purple button'
        style={{
          width: 200,
          height: 60,
          backgroundColor: colors.red[600],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          marginTop: 20
        }}
      >
        <SText>PAUSE NOW</SText>
      </Pressable>

      <SView marginTop={12}>
        <SText>{snap.metaData?.title}</SText>
        <SText>{snap.metaData?.artist}</SText>
      </SView>
    </SView>
  );
};

export default Home;
