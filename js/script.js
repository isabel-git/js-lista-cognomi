var bvai = document.getElementById("vai");
var input = document.getElementById("cognome");
var controllo = true;
var arreyNonOrd = "";
var outputCognNonOrd = document.getElementById("listaNonOrd");
var arreyOrd = "";
var contenitore;
var outputCognOrd = document.getElementById("listaOrd");

// arrey dei cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];


// bottone
bvai.addEventListener("click",
  function() {
    // input cognome utente
    stringa = input.value;
    console.log("cognome: ",stringa);

    // Iniziale maiuscola
    stringa = stringa.charAt(0).toUpperCase() + stringa.slice(1);
    console.log("cognome in maiuscolo: ",stringa);

    // controllo cognome nell'arrey
    var i = 0;
    while (controllo && (i < cognomi.length)) {

      if (stringa === cognomi[i]) {
        controllo = false;
      }

      i++;
    }

    if (controllo) {
      cognomi.push(stringa);
    }

    // output lista non ordinata
    i = 0;
    while (i < cognomi.length) {
      arreyNonOrd = arreyNonOrd + "<li>" + cognomi[i] + "</li>";
      i++;
      outputCognNonOrd.innerHTML = "Lista non ordinata: " + "<br>" + arreyNonOrd;
    }

    // ordinare l'arrey
    i = 0; // azzero il contatore
    // confrontiamo a coppie l'elemento del arrey selezionato con quello successivo
    while (i < (cognomi.length - 1)) {
      // confrontiamo se bianchi e' maggiore di rossi
      if (cognomi[i] > cognomi[i + 1]) {
        contenitore = cognomi[i]; // con la variabile d'appoggio salvo il valore della variabile che voglio sovrascrivere
        cognomi[i] = cognomi[i + 1]; // sovrascrivo bianchi con rossi
        cognomi[i + 1] = contenitore; // sovrascrivendo rossi con il valore salvato nella variabili d'appoggio che e bianchi
        i = 0; // scambiando l'elemento lo faccio ripartire dell'elemento in posizione zero
      } else {

        i++;
      }
    }

    // output arrey ordinata
    i = 0;
    while (i < cognomi.length) {
      arreyOrd = arreyOrd + "<li>" + cognomi[i] + "</li>";
      i++;
      outputCognOrd.innerHTML = "Lista ordinata: " + "<br>" + arreyOrd;
    }

    i = 0;
    controllo = true;
    while (i < cognomi.length && controllo) {
      if (stringa === cognomi[i]) {
        controllo = false;
      }
      i++;
    }
    // output posizione cognome utente
    document.getElementById("posizione").innerHTML = "La posizione del tuo cognome e': " + i;
} )
