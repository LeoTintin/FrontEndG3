var lugarInput = document.getElementById("lugar");
var desastreInput = document.getElementById("desastre");
var botao = document.getElementById("botao")
botao.addEventListener('click',function(){
    var lugar = lugarInput.value;
    var desastre = desastreInput.value;

    if (lugar === "Itaipava" && desastre === "Inundação") {
        window.location.href = 'http://127.0.0.1:5500/Frontg3/FrontEndG3///defensor/index.html?';
    }
    if (lugar === "Centro" && desastre === "Sequestro") {
        window.location.href = "outra-pagina.html";
    }
    if (lugar === "Quitandinha" && desastre === "Deslizamento") {
        window.location.href = "outra-pagina.html";
    }
    else{
        alert("erro");
    }
});
    
