//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
// firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyCAj6LXVzMN3PEnyUmtKEXXptBjRzTJfYs",
    authDomain: "snut-a5acf.firebaseapp.com",
    databaseURL: "https://snut-a5acf.firebaseio.com",
    projectId: "snut-a5acf",
    storageBucket: "snut-a5acf.appspot.com",
    messagingSenderId: "541708693358",
    appId: "1:541708693358:web:9b61231fc6793bb12c9b7f",
    measurementId: "G-2RK1C4K352"
};



// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);
// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
