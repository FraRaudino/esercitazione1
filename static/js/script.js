
    let NomeUtente=prompt("Inserisci il tuo nome: ")

    alert("Benvenuto " + NomeUtente)
    alert("Sei pronto per fare un quiz di cultura generale? ")

    let cont=0

    let domanda1=prompt("Qual è il paese più piccolo del mondo")
    domanda1=domanda1.trim()
    domanda1=domanda1.toLocaleLowerCase()

    if(domanda1 != 'vaticano'){
        alert("La risposta è sbagliata!")
    }else
    {
        alert("La risposta è corretta")
        cont++
    }

    

    






















