export const TILE_CONFIG = {
  name: 'name',
  categories: 'categories',
  city: 'city',
  posterImage: 'player_image',
  iconImage: 'icon_image',
  streams: 'streams'
};

export const RADIO_TRACK_CONFIG = {
  artist: 'locations.0.city.name',
  stream: 'stream.url',
  artwork: 'imageUrl',
  title: 'name',
  genre: 'categories.0.name',
  dominantColor: 'dominantColor',
  blurHash: 'blurHash'
};

export const CITY_RADIO_TILE_CONFIG = {
  name: 'name',
  categories: 'categories',
  city: 'locations.0.city.name',
  posterImage: 'imageUrl',
  iconImage: 'imageUrl',
  streams: 'stream',
  dominantColor: 'dominantColor',
  blurHash: 'blurHash'
};
