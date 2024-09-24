
    let NomeUtente=prompt("Inserisci il tuo nome: ")

    alert("Benvenuto " + NomeUtente)
    alert("Sei pronto per fare un quiz di cultura generale? ")

    let cont=0

    let domanda1=prompt("Qual è il paese più piccolo del mondo")
    domanda1=domanda1.trim()
    domanda1=domanda1.toLocaleLowerCase()

    if(domanda1 != 'vaticano'){
        alert("La risposta è sbagliata! Quella corretta è il vaticano")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    let domanda2=prompt("Qual è il fiume più lungo del mondo?")
    domanda2=domanda2.trim()
    domanda2=domanda2.toLocaleLowerCase()

    if(domanda2 != 'Nilo'){
        alert("La risposta è sbagliata! Quella corretta è il Nilo")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    let domanda3=prompt("Quando è avvenuta la scoperta dell'America?")
    domanda3=domanda3.trim()
    domanda3=domanda3.toLocaleLowerCase()

    if(domanda3 != '1492'){
        alert("La risposta è sbagliata! Quella corretta è il 1492")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    let domanda4=prompt("Chi ha scritto La Divina Commedia?")
    domanda4=domanda4.trim()
    domanda4=domanda4.toLocaleLowerCase()

    if(domanda4 != 'Dante Alighieri'){
        alert("La risposta è sbagliata! Quella corretta è la Divina Commedia")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    let domanda5=prompt("Qual è la capitale del Giappone?")
    domanda5=domanda5.trim()
    domanda5=domanda5.toLocaleLowerCase()

    if(domanda1 != 'Tokyo'){
        alert("La risposta è sbagliata! Quella corretta è Tokyo")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    let domanda6=prompt("In che anno è avvenuta la caduta del Muro di Berlino?")
    domanda6=domanda6.trim()
    domanda6=domanda6.toLocaleLowerCase()

    if(domanda1 != '1989'){
        alert("La risposta è sbagliata! Quella corretta è il 1989")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    let domanda7=prompt("Qual è l'elemento chimico con simbolo O")
    domanda7=domanda7.trim()
    domanda7=domanda7.toLocaleLowerCase()

    if(domanda1 != 'Ossigeno'){
        alert("La risposta è sbagliata! Quella corretta è il Ossigeno")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    






















