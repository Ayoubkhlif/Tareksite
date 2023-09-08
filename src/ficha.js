import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
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
let info_client = {}
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
function numbers8(params) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let test = true
    for (let i = 0; i < params.length; i++) {
        if (!cehrche(params[i], numbers)) {
            test = false
            break
        }
    }
    if (params.length !== 8) {
        test = false
    }
    return (test)
}
function winou(params) {
    for (let i = 0; i < params.length; i++) {
        if (params.substring(i, i + 4) === 'cin=' && numbers8(params.substring(i + 4, i + 12))) {
            return (params.substring(i + 4, i + 12))
        }
    }
}
getDoc(doc(db, 'les clients', '=>' + winou(document.URL)))
    .then((doc) => { info_client = doc.data() })
function terminerounon(obj) {
    let test = false
    for (const key in obj) {
        test = true
        break
    }
    return test
}
function change(params) {
    if (!params) {
        setTimeout(() => {
            change(terminerounon(info_client))
        }, 1000);
    } else {
        document.getElementById('name').innerHTML = info_client['prenom'] + ' ' + info_client['nom']
        let i = 1
        let conditionco = true
        let totalco = 0
        while (conditionco) {
            conditionco = false
            if (info_client[String(i) + 'co1h'] !== undefined) {
                conditionco = true
                const para = document.createElement('p')
                para.innerHTML = i + ') ' + new Date(info_client[String(i) + 'co1h']['seconds'] * 1000).toLocaleString() + ' : 1h'
                document.getElementById('code').appendChild(para)
                totalco++
            } else if (info_client[String(i) + 'co2h'] !== undefined) {
                conditionco = true
                const para = document.createElement('p')
                para.innerHTML = i + ') ' + new Date(info_client[String(i) + 'co2h']['seconds'] * 1000).toLocaleString() + ' : 2h'
                document.getElementById('code').appendChild(para)
                totalco += 2
            }
            i++
            if (!conditionco && totalco !== 0) {
                const em = document.createElement('em')
                em.innerHTML = "Total d'heurs = " + totalco + " heurs coût " + totalco * info_client['prixco'] + " dt"
                document.getElementById('code').appendChild(em)
            }
        }
        let i0 = 1
        let conditionci = true
        let totalci = 0
        while (conditionci) {
            conditionci = false
            if (info_client[String(i0) + 'ci1h'] !== undefined) {
                conditionci = true
                const para = document.createElement('p')
                para.innerHTML = i0 + ') ' + new Date(info_client[String(i0) + 'ci1h']['seconds'] * 1000).toLocaleString() + ' : 1h'
                document.getElementById('circulation').appendChild(para)
                totalci++
            } else if (info_client[String(i0) + 'ci2h'] !== undefined) {
                conditionci = true
                const para = document.createElement('p')
                para.innerHTML = i0 + ') ' + new Date(info_client[String(i0) + 'ci2h']['seconds'] * 1000).toLocaleString() + ' : 2h'
                document.getElementById('circulation').appendChild(para)
                totalci += 2
            }
            i0++
            if (!conditionci && totalci !== 0) {
                const em = document.createElement('em')
                em.innerHTML = "Total d'heurs = " + totalci + " heurs coût " + totalci * info_client['prixuc'] + " dt"
                document.getElementById('circulation').appendChild(em)
            }
        }
        let i1 = 1
        let conditionpa = true
        let totalpa = 0
        while (conditionpa) {
            conditionpa = false
            if (info_client[String(i1) + 'pa1h'] !== undefined) {
                conditionpa = true
                const para = document.createElement('p')
                para.innerHTML = i1 + ') ' + new Date(info_client[String(i1) + 'pa1h']['seconds'] * 1000).toLocaleString() + ' : 1h'
                document.getElementById('park').appendChild(para)
                totalpa++
            } else if (info_client[String(i1) + 'pa2h'] !== undefined) {
                conditionpa = true
                const para = document.createElement('p')
                para.innerHTML = i1 + ') ' + new Date(info_client[String(i1) + 'pa2h']['seconds'] * 1000).toLocaleString() + ' : 2h'
                document.getElementById('park').appendChild(para)
                totalpa += 2
            }
            i1++
            if (!conditionpa && totalpa !== 0) {
                const em = document.createElement('em')
                em.innerHTML = "Total d'heurs = " + totalpa + " heurs coût " + totalpa * info_client['prixuc'] + " dt"
                document.getElementById('park').appendChild(em)
            }
        }
        let i2 = 1
        let conditionac = true
        let totalac = 0
        while (conditionac) {
            conditionac = false
            if (info_client['ac' + String(i2)] !== undefined) {
                conditionac = true
                const para = document.createElement('p')
                for (const key in info_client['ac' + String(i2)]) {
                    para.innerHTML = key + ' : ' + new Date(info_client['ac' + String(i2)][key]['seconds'] * 1000).toLocaleString()
                    totalac += Number(key.substring(0, key.length - 2))
                }
                document.getElementById('acompt').appendChild(para)
            }
            i2++
            if (!conditionac && totalac !== 0) {
                const em = document.createElement('em')
                em.innerHTML = "Total acompt = " + totalac + " dt"
                document.getElementById('acompt').appendChild(em)
            }
        }
        let i3 = 1
        let list_ex = []
        while (info_client['ex' + String(i3)] !== undefined) {
            list_ex.push(info_client['ex' + String(i3)])
            i3++
        }
        let totalex = 0
        let prixco = info_client['matlabco1']
        for (const key in list_ex) {
            if (list_ex[key].substring(list_ex[key].length - 2, list_ex[key].length) === 'co') {
                const para = document.createElement('p')
                para.innerHTML = 'examen le ' + list_ex[key].substring(0, 10) + ' : ' + prixco + ' dt'
                para.style.color = '#4FFFBF'
                totalex += prixco
                document.getElementById('code').appendChild(para)
                prixco = info_client['matlabco2']
            } else if (list_ex[key].substring(list_ex[key].length - 2, list_ex[key].length) === 'ci') {
                const para = document.createElement('p')
                para.innerHTML = 'examen le ' + list_ex[key].substring(0, 10) + ' : ' + info_client['matlabci'] + ' dt'
                para.style.color = '#4FFFBF'
                totalex += info_client['matlabci']
                document.getElementById('circulation').appendChild(para)
            } else if (list_ex[key].substring(list_ex[key].length - 2, list_ex[key].length) === 'pa') {
                const para = document.createElement('p')
                para.innerHTML = 'examen le ' + list_ex[key].substring(0, 10) + ' : ' + info_client['matlabpa'] + ' dt'
                para.style.color = '#4FFFBF'
                totalex += info_client['matlabpa']
                document.getElementById('park').appendChild(para)
            }
        }
        let total = totalco * info_client['prixco'] + totalci * info_client['prixuc'] + totalpa * info_client['prixuc'] + totalex
        document.getElementById('tot').innerHTML = "Total d'acompts : " + totalac + " dt ; il rest : " + (total - totalac) + ' dt'
        document.getElementById('fich').style.display = 'flex'
        document.getElementById('car').style.display = 'none'
    }
}
change(false)