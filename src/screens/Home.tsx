import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { useSnapshot } from 'valtio';
import { SView } from '~components';
import SText from '~components/SText/SText';
import Tile from '~components/Tile/Tile';
import Player from '~modules/player/player.module';
import { playerState } from '~states/playerState';
import { colors } from '~styles';

const player = new Player();

const track1 = [
  {
    url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/PAT_HIN_ESTAAC.aac', // Load media from the network
    title: 'Radio Mirchi Patna',
    artist: 'Radio Mirchi',
    genre: 'Progressive House, Electro House',
    date: '2022-27-17T07:00:00+00:00', // RFC 3339
    artwork:
      'https://static-media.streema.com/media/cache/73/55/7355b9f13d29c36c2053ac61c805d71a.jpg' // Load artwork from the network
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
        src={snap.currentTrack?.artwork as string}
        size='xl'
        title={snap.currentTrack?.title as string}
        subTitle={snap.currentTrack?.artist as string}
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
