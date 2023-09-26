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
  const url = dataExtractor(track, config.stream) || '';
  const artist = dataExtractor(track, config.artist) || '';
  const title = dataExtractor(track, config.title) || '';
  const artwork =
    dataExtractor(track, config.artwork) ||
    'https://cdn.statically.io/gh/megabyt-dev/def-img/6b991495/radio.png'; // use better fallback image
  const genre = dataExtractor(track, config.genre) || '';
  const bufferPosition = 0;
  const currentPosition = 0;
  const type: TrackType = url.includes('m3u8') ? TrackType.HLS : TrackType.Default;
  const blurHash = dataExtractor(track, config.blurHash);
  const dominantColor = dataExtractor(track, config.dominantColor);

  return {
    url,
    title,
    artist,
    artwork,
    bufferPosition,
    currentPosition,
    genre,
    type,
    dominantColor,
    blurHash
  };
};

export const getColorWithOpacity = (hexColor: string, opacity: number): string => {
  // Ensure opacity is within the valid range of 0 to 1
  opacity = Math.min(1, Math.max(0, opacity));

  // Parse the hex color to RGB components
  const r: number = parseInt(hexColor.slice(1, 3), 16);
  const g: number = parseInt(hexColor.slice(3, 5), 16);
  const b: number = parseInt(hexColor.slice(5, 7), 16);

  // Calculate the new RGB values with opacity
  const newR: number = Math.round(r * opacity);
  const newG: number = Math.round(g * opacity);
  const newB: number = Math.round(b * opacity);

  // Convert the RGB values to hex and pad with zeros if needed
  const newHexR: string = newR.toString(16).padStart(2, '0');
  const newHexG: string = newG.toString(16).padStart(2, '0');
  const newHexB: string = newB.toString(16).padStart(2, '0');

  // Create the new hex color with opacity
  const newHexColor: string = `#${newHexR}${newHexG}${newHexB}`;

  return newHexColor;
};

export const findDuplicatesAndRemove = <T>(jsonArray: T[], key: keyof T, count?: number): T[] => {
  const seen = new Set();
  const uniqueArray: T[] = [];

  for (const item of jsonArray) {
    const keyValue = item[key];

    if (!seen.has(keyValue)) {
      seen.add(keyValue);
      uniqueArray.push(item);

      if (count !== undefined && uniqueArray.length >= count) {
        break;
      }
    }
  }

  return uniqueArray;
};

export const getGreeting = () => {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? 'Good morning !' : currentHour < 18 ? 'Good afternoon !' : 'Good evening !';
  return greeting;
};
