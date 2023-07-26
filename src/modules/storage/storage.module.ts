import { MMKV, type NativeMMKV } from 'react-native-mmkv';

let mmkvInstance: NativeMMKV;

class Storage {
  private static _instance: Storage;
  constructor() {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (Storage._instance) {
      console.warn(
        'Instantiation failed: cannot create multiple instance of Storage returning existing instance'
      );
      return Storage._instance;
    }
    Storage._instance = this;
  }

  init() {
    // eslint-disable-next-line eqeqeq
    if (mmkvInstance == undefined) {
      mmkvInstance = new MMKV();
    } else {
      console.log('FAILED: Storage instance already created');
    }
  }

  get(key: string, type: 'number' | 'string' | 'boolean' | 'object') {
    let data;
    switch (type) {
      case 'number':
        data = mmkvInstance.getNumber(key);
        break;
      case 'boolean':
        data = mmkvInstance.getBoolean(key);
        break;
      case 'string':
        data = mmkvInstance.getString(key);
        break;
      case 'object':
        data = JSON.parse(mmkvInstance.getString(key) ?? '{}');
        break;
      default:
        break;
    }
    return data;
  }

  set(key: string, value: any, type: 'number' | 'string' | 'object') {
    const transformedValue = type === 'object' ? JSON.stringify(value) : value;
    mmkvInstance.set(key, transformedValue);
  }

  getAllKeys() {
    return mmkvInstance.getAllKeys();
  }

  contains(key: string) {
    mmkvInstance.contains(key);
  }

  delete(key: string) {
    mmkvInstance.delete(key);
  }

  clear() {
    mmkvInstance.clearAll();
  }
}

export default Storage;
