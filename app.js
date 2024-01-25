
// DOM ELEMENTS 
const textbox = document.getElementById("abecedario")
const restart = document.getElementById('restart')
const timeContainer = document.getElementById("timeContainer")

// VARIABLES 
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var primerTecla = 0
var seg = 0
var contar



// ADD EVENT LISTENERS 
textbox.addEventListener('keyup', (e) => {
    /*console.log(e)*/
    if (e.code === "KeyZ") {
        stopCount()
        verifyEnteredData(textbox.value)
    }
    startCountDown()
    primerTecla = 1
})
restart.addEventListener('click', () => {
    clearInterval(contar)
    primerTecla = 0
    seg = 0
    timeContainer.innerText = seg.toFixed(2)
    textbox.value = ""
    textbox.focus()

})


// FUNCTIONS 
textbox.focus()

function stopCount() {
    clearInterval(contar)
}


function startCountDown() {
    if (primerTecla === 0) {
        contar = setInterval(() => {
            seg = seg + 0.01
            timeContainer.innerText = seg.toFixed(2)
        }
            , 10)
    }
}


function verifyEnteredData(textboxValue){
    if(textboxValue === alphabet){
        showSweetAlert(textboxValue, seg, "CORRECTO")
    }
    else{
        showSweetAlert(textboxValue, seg, "INCORRECTO")
    }
}

function showSweetAlert(textboxValue, time, result) {
    Swal.fire({
      title: 'RESULTADO DEL JUEGO',
    //   text: 'Este sirve para una sola linea. Si quiero mas de una linea, ver siguiente abajo',
      html: `<p> El texto ingresado: <br> 
                "<i>${textboxValue}</i>" <br><br> 
                Es <b>${result}</b><br><br>
                Tu tiempo fue de: <br>
                ${time.toFixed(2)} segundos</p>`,
      
      icon: 'info',
      position: 'center',
      showConfirmButton: true,
    //   timer: 3000  // Auto-close after 3 seconds
    });
  }