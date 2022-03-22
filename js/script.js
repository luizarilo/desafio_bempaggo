function habilitar(){
    if(document.getElementById('item1').checked){
        document.getElementById('qntd1').removeAttribute("disabled");
    }
    else {
        document.getElementById('qntd1').setAttribute("disabled", "disabled");
    }
}

function habilitar2(){
    if(document.getElementById('item2').checked){
        document.getElementById('qntd2').removeAttribute("disabled");
    }
    else {
        document.getElementById('qntd2').setAttribute("disabled", "disabled");
    }
}

function habilitar3(){
    if(document.getElementById('item3').checked){
        document.getElementById('qntd3').removeAttribute("disabled");
    }
    else {
        document.getElementById('qntd3').setAttribute("disabled", "disabled");
    }
}