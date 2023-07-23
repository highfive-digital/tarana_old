import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { TrackType } from 'react-native-track-player';
import { useSnapshot } from 'valtio';
import { SView } from '~components';
import SText from '~components/SText/SText';
import Tile from '~components/Tile/Tile';
import VolumeSlider from '~components/VolumeSlider';
import Player from '~modules/player/player.module';
import { type Track } from '~modules/player/player.types';
import { playerActions, playerState } from '~states/player';
import { theme } from '~styles';

const player = new Player();

const track1: Track[] = [
  {
    url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/BOM_HIN_ESTAAC.m3u8', // Load media from the network
    title: 'Radio Mirchi Mumbai',
    type: TrackType.HLS,
    artist: 'Mirchi Mumbai',
    genre: 'Progressive House, Electro House',
    artwork: 'https://mirchiapi.s3.amazonaws.com/radio-stations/mumbai.png' // Load artwork from the network
  }
];

const track2: Track[] = [
  {
    url: 'https://funasia.streamguys1.com/live4', // Load media from the network
    title: 'BIG FM 106.2',
    type: TrackType.Default,
    artist: 'Tarana Audio',
    genre: 'Progressive House, Electro House',
    artwork:
      'http://res.cloudinary.com/megabyt-5/image/upload/v1623429142/tarana-radio-app/thumbnail-icons/india/maharashtra/mumbai/st-f0fbd10dde8bb905.png' // Load artwork from the network
  }
];

const Home = () => {
  const snap = useSnapshot(playerState);
  useEffect(() => {
    player.init();
    if (snap.status === 'IDLE') {
      player.attachEventListeners();
    }
  }, [snap.status]);

  console.log('RE_RENDERING');

  return (
    <SView display='flex' flex={1} justifyContent='center' alignItems='center'>
      <SText marginBottom={15}>{snap.status}</SText>

      <SView display='flex' flexDirection='row' gap={12}>
        <Tile
          src={'https://mirchiapi.s3.amazonaws.com/radio-stations/mumbai.png'}
          size='xl'
          title={'Radio Mirchi Mumbai'}
          subTitle={'Mirchi Mumbai'}
          radius='lg'
          onClick={() => {
            player
              .add(track1)
              .then((res) => {
                console.log(res);
                player.play();
              })
              .catch((res) => {
                console.log(res);
              });
          }}
        />
        <Tile
          src={
            'http://res.cloudinary.com/megabyt-5/image/upload/v1623429142/tarana-radio-app/thumbnail-icons/india/maharashtra/mumbai/st-f0fbd10dde8bb905.png'
          }
          size='xl'
          title={'BIG FM 106.2'}
          subTitle={'Tarana Audio'}
          radius='lg'
          onClick={() => {
            player
              .add(track2)
              .then((res) => {
                console.log(res);
                player.play();
              })
              .catch((res) => {
                console.log(res);
              });
          }}
        />
      </SView>

      <Pressable
        onPress={() => {
          player.pause();
        }}
        accessibilityLabel='Learn more about this purple button'
        style={{
          width: 200,
          height: 60,
          backgroundColor: theme.dark.button.primary,
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
        <SText>Elapsed Sleep Time: {snap.elapsedSleepDuration}</SText>
      </SView>

      <SView marginTop={12}>
        <SText>Sleep Timer set for : {snap.sleepTimeDuration / 60}</SText>
      </SView>
      <SView marginTop={50}>
        <SText>Set Sleep Timer Minutes</SText>
        <SView display='flex' flexDirection='row' gap={4}>
          <Pressable
            onPress={() => {
              playerActions.setSleepTimeDuration(1);
            }}
            accessibilityLabel='Learn more about this purple button'
            style={{
              width: 80,
              height: 60,
              backgroundColor: theme.dark.button.primary,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              marginTop: 20
            }}
          >
            <SText>1</SText>
          </Pressable>
          <Pressable
            onPress={() => {
              playerActions.setSleepTimeDuration(5);
            }}
            accessibilityLabel='Learn more about this purple button'
            style={{
              width: 80,
              height: 60,
              backgroundColor: theme.dark.button.primary,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              marginTop: 20
            }}
          >
            <SText>5</SText>
          </Pressable>
          <Pressable
            onPress={() => {
              playerActions.setSleepTimeDuration(10);
            }}
            accessibilityLabel='Learn more about this purple button'
            style={{
              width: 80,
              height: 60,
              backgroundColor: theme.dark.button.primary,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              marginTop: 20
            }}
          >
            <SText>10</SText>
          </Pressable>
        </SView>
      </SView>
      {/* <SView marginTop={20}>
        <SText>BUFFERED_POSITION:{snap.currentTrack.bufferPosition}</SText>
        <SText>CURRENT_POSITION:{snap.currentTrack.currentPosition}</SText>
      </SView> */}

      <SView width={'100%'} padding={12}>
        <VolumeSlider />
      </SView>
    </SView>
  );
};

export default Home;
