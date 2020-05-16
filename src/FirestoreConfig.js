import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCVR1x_OL3iPDbFn8G1rUznrzTxlerD1w4",
    authDomain: "iotplatform-a8400.firebaseapp.com",
    projectId: "iotplatform-a8400",

});

let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;