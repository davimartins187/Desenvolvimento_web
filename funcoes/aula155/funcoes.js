// 1) Desligar a torneira;

    function desligarTorneira (){
        console.log("desligar torneira")
    }

    desligarTorneira()  

// 2) Pedir copo da água;

    function pedirCopoAgua(){
        return "Copo Agua"
    }

    let retorno = pedirCopoAgua()

// 3) Media de dois numeros;

    console.log(retorno)

    function calcularMedia (nota1, nota2){
        
        let totalNotas = nota1 + nota2
        let media = totalNotas / 2

        return media
    }

    let media = calcularMedia(8, 8)
    let novaMedia = media + 1 
    console.log(novaMedia)





