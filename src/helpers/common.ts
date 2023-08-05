import { TrackType } from 'react-native-track-player';
import { type Track } from '~modules/player/player.types';

/* eslint-disable no-prototype-builtins */
type NestedObject = Record<string, any>; // Define a type for nested objects

export const dataExtractor = (obj: NestedObject, key: string): any | null => {
  if (!(obj instanceof Object)) {
    // If the provided object is not an instance of Object (i.e., not a valid object), return null
    return null;
  }

  const keys = key.split('.'); // Split the key by dot notation to get individual keys
  let currentObj: NestedObject | any[] | null = obj; // Initialize a variable to keep track of the current object

  for (const k of keys) {
    if (currentObj === null) {
      // If current object is null, return null (gracefully handle nested null values)
      return null;
    }

    if (Array.isArray(currentObj)) {
      // If the current object is an array
      const index = parseInt(k, 10); // Convert the key to an integer (for array index)
      if (!Number.isNaN(index) && index >= 0 && index < currentObj.length) {
        // Check if the index is a valid number and within the array length
        currentObj = currentObj[index]; // Update the current object to the element at the given index
      } else {
        return null; // If the index is out of range, return null
      }
    } else if (currentObj instanceof Object) {
      // If the current object is a regular object

      if (currentObj.hasOwnProperty(k)) {
        // Check if the key exists in the current object
        currentObj = currentObj[k]; // Update the current object to the value associated with the key
      } else {
        return null; // If the key doesn't exist, return null
      }
    } else {
      return null; // If the current object is neither an array nor an object, return null
    }
  }

  return currentObj; // Return the final value found after traversing the keys
};

export const getTrackFromMetaData = (track: Track, config: any) => {
  const url = JSON.parse(dataExtractor(track, config.streams))[0] || '';
  const artist = dataExtractor(track, config.artist) || '';
  const title = dataExtractor(track, config.title) || '';
  const artwork = dataExtractor(track, config.artwork) || '';
  const genre = dataExtractor(track, config.genre) || '';
  const bufferPosition = 0;
  const currentPosition = 0;
  const type: TrackType = url.includes('m3u8') ? TrackType.HLS : TrackType.Default;

  return {
    url,
    title,
    artist,
    artwork,
    bufferPosition,
    currentPosition,
    genre,
    type
  };
};

export const isValidArray = (arr: any[]) => Array.isArray(arr) && arr.length;
