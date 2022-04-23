const insert = num => {
    var numero = document.getElementById(`Resultado`).innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
    };
    
    const clean = () => {
        document.getElementById('Resultado').innerHTML= ""
    };
    
    const back = () => {
       var Resultado= document.getElementById('Resultado').innerHTML;
       document.getElementById('Resultado').innerHTML = Resultado.substring(0,Resultado.length-1);
    }
    function Calcular(){
        var Resultado = document.getElementById('Resultado').innerHTML;
    
        Resultado ? document.getElementById('Resultado').innerHTML = eval(Resultado) : document.getElementById('Resultado').innerHTML = "";
    }