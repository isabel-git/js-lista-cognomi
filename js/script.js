var arreyNonOrd = "";
var outputCognNonOrd = document.getElementById("listaNonOrd");
var bvai = document.getElementById("vai");

// arrey dei cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];


// bottone
bvai.addEventListener("click",
  function() {
    // input cognome utente
    var cognUte = document.getElementById("cognome");
    console.log("cognome: ",cognUte.value);

    // output lista non ordinata
    var i = 0;
    while (i < cognomi.length) {
      arreyNonOrd = arreyNonOrd + "<li>" + cognomi[i] + "</li>";
      i++;
      outputCognNonOrd.innerHTML = arreyNonOrd;
    }
    // azzero il contatore


    // ordinare l'arrey


    // output arrey ordinato

    // posizione cognome utente
} )
