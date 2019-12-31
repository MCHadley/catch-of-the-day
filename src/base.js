import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4msMLt-koLa3oF_HxgGoSvEa-GVuLZa0",
  authDomain: "catch-of-the-day-mchadley.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mchadley.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp };
export default base;