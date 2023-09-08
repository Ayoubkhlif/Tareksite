import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
function cehrche(x, y) {
    let i = 0;
    let condition = false
    while (!(condition) && i !== y.length) {
        if (x === y[i]) {
            condition = true
        } else {
            i++
        }
    }
    return (condition)
}
const firebaseConfig = {
    apiKey: "AIzaSyCmg9LuGWOqjOcyvm5N-sjx3eYLJr6LV3k",
    authDomain: "tarekapp-2c2d7.firebaseapp.com",
    projectId: "tarekapp-2c2d7",
    storageBucket: "tarekapp-2c2d7.appspot.com",
    messagingSenderId: "611601377693",
    appId: "1:611601377693:web:cb6783e7fa844e0b97e774",
    measurementId: "G-VL2DS3N2N5"
};
initializeApp(firebaseConfig)
const db = getFirestore()
let dicionnaire_client = {}
let list_client = []
const dicionnaire_client_firebase = doc(db, 'les clients du moniteur', '05395727')
getDoc(dicionnaire_client_firebase)
    .then((d) => {
        dicionnaire_client = d.data()
        for (const key in dicionnaire_client) {
            list_client.push(dicionnaire_client[key].substring(0, 8))
        }
    })
document.getElementById('for').addEventListener('submit', (e) => {
    let x = document.getElementById('cin').value
    if (!cehrche(x, list_client)) {
        alert('pas de client avec le cin ' + x)
        e.preventDefault()
    }
})


