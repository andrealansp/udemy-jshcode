let celular = function(){
    this.cor = "prata"

    this.ligar = function()
    {
        console.log('Uma Ligação');
        return "ligando";
    }
}

let objeto = new celular();
console.log(objeto)