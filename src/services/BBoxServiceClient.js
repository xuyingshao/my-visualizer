let _singleton = Symbol();

export default class BBoxServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken) {
      throw new Error('Singleton module service.')
    }
  }

  static instance() {
    if (!this[_singleton]) {
      this[_singleton] = new BBoxServiceClient(_singleton);
    }
    return this[_singleton];
  }


    // todo, to retrieve bboxes from mongoDB



}