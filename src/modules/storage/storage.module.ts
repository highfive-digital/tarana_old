import { MMKV, type NativeMMKV } from 'react-native-mmkv';

class Storage {
  private static _instance: Storage;
  #mmkvInstance: NativeMMKV | undefined;
  constructor() {
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
    if (this.#mmkvInstance == undefined) {
      this.#mmkvInstance = new MMKV();
    } else {
      console.log('FAILED: Storage instance already created');
    }
  }

  get(key: string, type: 'number' | 'string' | 'boolean' | 'object') {
    let data;
    switch (type) {
      case 'number':
        data = this.#mmkvInstance != null ? this.#mmkvInstance.getNumber(key) : 0;
        break;
      case 'boolean':
        data = this.#mmkvInstance != null ? this.#mmkvInstance.getBoolean(key) : false;
        break;
      case 'string':
        data = this.#mmkvInstance != null ? this.#mmkvInstance.getString(key) : '';
        break;
      case 'object':
        data = JSON.parse(
          this.#mmkvInstance != null ? this.#mmkvInstance.getString(key) ?? '{}' : '{}'
        );
        break;
      default:
        break;
    }
    return data;
  }

  set(key: string, value: any, type: 'number' | 'string' | 'object') {
    const transformedValue = type === 'object' ? JSON.stringify(value) : value;
    if (this.#mmkvInstance !== undefined) {
      this.#mmkvInstance.set(key, transformedValue);
    }
  }

  getAllKeys() {
    if (this.#mmkvInstance !== undefined) {
      return this.#mmkvInstance.getAllKeys();
    }
  }

  contains(key: string) {
    if (this.#mmkvInstance !== undefined) {
      return this.#mmkvInstance.contains(key);
    }
  }

  delete(key: string) {
    if (this.#mmkvInstance !== undefined) {
      this.#mmkvInstance.delete(key);
    }
  }

  clear() {
    if (this.#mmkvInstance !== undefined) {
      this.#mmkvInstance.clearAll();
    }
  }
}

export default Storage;
