import * as firebase from 'firebase';
import 'firebase/firestore';

export class FirebaseWrapper {
  constructor() {
    this.initialized = false;
    this._firebaseInstance = null; //instanc of our npm package
    this._firebaseWrapperInstance = null; //instance of our wrapper
    this._firestore = null; //firestore functionality
  }

  Initialize(config) {
    if (!this.initialized) {
      //initialize firebase
      this._firebaseInstance = firebase.initializeApp(config); //estb connection between mobile app and firebase
      this._firestore = firebase.firestore();
      this.initialized = true;
      console.log('firebase connected!');
    } else {
      console.log('already intialized!');
    }
  }
  static GetInstance() {
    if (null == this._firebaseWrapperInstance) {
      this._firebaseWrapperInstance = new FirebaseWrapper();
    } else {
      //Already initialized, nothing more to do here
    }
    return this._firebaseWrapperInstance;
  }

  //collection path = users
  async CreateNewDocument(collectionPath, doc) {
    try {
      //creates reference to doc
      const ref = this._firestore.collection(collectionPath).doc();

      const timestamp = firebase.firestore.Timestamp.now().toDate();

      //firebase has an add method - can do ref.add and here's the object I would like you to add
      console.log('creatNewDoc is working');
      return await ref.set({ ...doc, createdAt: timestamp, id: ref.id });
    } catch (error) {
      console.log('at createNewDoc ', error);
    }
  }

  async getUser(collectionPath) {
    //creates reference to doc
    try {
      const ref = this._firestore.collection(collectionPath);

      return ref.get().then(querySnapshot => {
        let docData = [];
        querySnapshot.forEach(doc => {
          docData.push(doc.data());
        });
        return docData;
      });
    } catch (error) {
      console.log('getUser error ', error);
    }
  }

  // async UpdateUser(collectionPath, doc) {
  //   try {
  //     //creates reference to doc
  //     const ref = this._firestore.collection(collectionPath).doc();

  //     console.log('updateUser is working');
  //     return await ref.child(doc).update(value.remaining);
  //   } catch (error) {
  //     console.log('at updateUser ', error);
  //   }
  // }

  //after CreatePost.js stuff come back here
  //set up a listener to a collection - every time a new User is created, do a specific function
  async SetupCollectionListener(collectionPath, callback) {
    try {
      await this._firestore
        .collection(collectionPath)
        .orderBy('createdAt', 'asc')
        .onSnapshot(querySnapshot => {
          let container = [];
          querySnapshot.forEach(doc => {
            //doc.data - retrieves all fields as object
            container.push(doc.data());
          });
          return callback(container);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
