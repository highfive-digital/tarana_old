import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { useSnapshot } from 'valtio';
import { SView } from '~components';
import SText from '~components/SText/SText';
import Player from '~modules/player/player.module';
import { playerState } from '~states/playerState';
import { colors } from '~styles';

const player = new Player();

const track1 = {
  url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/PAT_HIN_ESTAAC.aac', // Load media from the network
  title: 'Radio Mirchi Patna',
  artist: 'Radio Mirchi',
  genre: 'Progressive House, Electro House',
  date: '2022-27-17T07:00:00+00:00', // RFC 3339
  artwork: 'https://static-media.streema.com/media/cache/73/55/7355b9f13d29c36c2053ac61c805d71a.jpg' // Load artwork from the network
};

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

  console.log(snap.status);

  return (
    <SView display='flex' flex={1} justifyContent='center' alignItems='center'>
      <SText>{snap.status}</SText>
      <SText>{snap.currentTrack?.title}</SText>
      <SText>{snap.currentTrack?.artist}</SText>
      <Pressable
        onPress={() => {
          player.play();
        }}
        accessibilityLabel='Learn more about this purple button'
        style={{
          width: 200,
          height: 60,
          backgroundColor: colors.red[500],
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
          backgroundColor: colors.red[500],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          marginTop: 20
        }}
      >
        <SText>PAUSE NOW</SText>
      </Pressable>
    </SView>
  );
};

export default Home;
