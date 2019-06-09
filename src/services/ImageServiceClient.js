let _singleton = Symbol();

export default class ImageServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken) {
      throw new Error('Singleton module service.')
    }
  }

  static instance() {
    if (!this[_singleton]) {
      this[_singleton] = new ImageServiceClient(_singleton);
    }
    return this[_singleton];
  }


    // todo, to retrieve images from mongoDB



}