function calcular() {
    let kit = document.getElementById("kit").value
    let equipes = document.getElementById("equipe").value
    if (equipes == "Laranja") {
        if (Number(Kit) >= 97) {
            pontosKit = 5000 + ((kit - 97) * 30)
        }
        else if (kit >= 78) {
            pontosKit = 4000 + ((kit - 78) * 30)
        }
        else if (kit >= 19) {
            pontosKit = 1000 + ((kit - 19) * 30)
        }
        else if (kit >= 15) {
            pontosKit = 750 + ((kit - 15) * 30)

            alert(pontosKit)
        }
    }


    //delcarar variavel sem tipo
    let soma = 0
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)

    let Homenagem = document.getElementById("Homenagem").value
    soma = soma + Number(Homenagem)

    let Leite = document.getElementById("Leite").value
    soma = soma + (2 * Number(Leite))

    let Kit = document.getElementById("Kit").value
    soma = soma + (30 * Number(Kit))

    let Arroz5 = document.getElementById("PacArroz5kg").value
    soma = soma + (5 * Number(Arroz5))

    let Arroz1 = document.getElementById("PacArroz1kg").value
    soma = soma + Number(Arroz1)

    let Feijao2 = document.getElementById("PacFej2kg").value
    soma = soma + (2 * Number(Feijao2))

    let Feijao1 = document.getElementById("PacFej1kg").value
    soma = soma + (15 * Number(Feijao1))

    let Macarrao = document.getElementById("Macarrao").value
    soma = soma + (0.5 * Number(Macarrao))

    let Oleo = document.getElementById("Oleo").value
    soma = soma + Number(Oleo)

    document.getElementById("soma").innerHTML = soma.toFixed(2)
}