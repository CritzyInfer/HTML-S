function calcular() {
    // Declarar variáveis
    let soma = 0;
    let acaoSocial = document.getElementById("acaoSocial").value;
    soma = soma + Number(acaoSocial);

    let Homenagem = document.getElementById("Homenagem").value;
    soma = soma + Number(Homenagem);

    let Leite = document.getElementById("Leite").value;
    soma = soma + (2 * Number(Leite));

    let Kit = document.getElementById("kit").value;
    let suple = document.getElementById("Suple").value;

    let equipes = document.getElementById("equipe").value;

    
    let pontosKit = 0; 
    if (equipes === "Laranja") {

        Kit = Number(Kit); 
        suple = Number(suple);
        
        if (Kit >= 97 && suple >= 49) {
            pontosKit = 5000 + ((Kit - 97) * 30) + ((suple - 49) * 15);

        } else if (Kit >= 78 && suple >= 39) {
            pontosKit = 4000 + ((Kit - 78) * 30) + ((suple - 39) * 15);

        } else if (Kit >= 19 && suple >= 10) {
            pontosKit = 1000 + ((Kit - 19) * 30) + ((suple - 10) * 15);
}
    }
    if (equipes === "Preto") {
        Kit = Number(Kit); // Certificar que Kit é um número
        suple = Number(suple); // Certificar que Suple é um número
        if (Kit >= 103 && suple >= 52) {
            pontosKit = 5000 + ((Kit - 103) * 30) + ((suple - 52) * 15);
        } else if (Kit >= 82 && suple >= 39) {
            pontosKit = 4000 + ((Kit - 82) * 30) + ((suple - 39) * 15);
        } else if (Kit >= 21 && suple >= 10) {
            pontosKit = 1000 + ((Kit - 21) * 30) + ((suple - 10) * 15);
}
    }
    if (equipes === "Roxa") {
        Kit = Number(Kit); // Certificar que Kit é um número
        suple = Number(suple); // Certificar que Suple é um número
        if (Kit >= 102 && suple >= 51) {
            pontosKit = 5000 + ((Kit - 102) * 30) + ((suple - 51) * 15);

        } else if (Kit >= 82 && suple >= 41) {
            pontosKit = 4000 + ((Kit - 82) * 30) + ((suple - 41) * 15);

        } else if (Kit >= 20 && suple >= 10) {
            pontosKit = 1000 + ((Kit - 20) * 30) + ((suple - 10) * 15);
}
    }
    if (equipes === "Verde") {
        Kit = Number(Kit); // Certificar que Kit é um número
        suple = Number(suple); // Certificar que Suple é um número
        if (Kit >= 88 && suple >= 44) {
            pontosKit = 5000 + ((Kit - 88) * 30) + ((suple - 44) * 15);
        } else if (Kit >= 70 && suple >= 35) {
            pontosKit = 4000 + ((Kit - 70) * 30) + ((suple - 35) * 15);
        } else if (Kit >= 44 && suple >= 22) {
            pontosKit = 1000 + ((Kit - 19) * 30) + ((suple - 10) * 15);
}
    }
    if (equipes === "Vermelho") {
        Kit = Number(Kit); // Certificar que Kit é um número
        suple = Number(suple); // Certificar que Suple é um número
        if (Kit >= 93 && suple >= 47) {
            pontosKit = 5000 + ((Kit - 97) * 30) + ((suple - 49) * 15);
        } else if (Kit >= 74 && suple >= 38) {
            pontosKit = 4000 + ((Kit - 74) * 30) + ((suple - 38) * 15);
        } else if (Kit >= 19 && suple >= 9) {
            pontosKit = 1000 + ((Kit - 19) * 30) + ((suple - 9) * 15);
}
    }
     // Adicionar pontosKit ao total
     soma = soma + pontosKit;

    // Continuar somando os outros itens
    let Arroz5 = document.getElementById("PacArroz5kg").value;
    soma = soma + (5 * Number(Arroz5));

    let Arroz1 = document.getElementById("PacArroz1kg").value;
    soma = soma + Number(Arroz1);

    let Feijao2 = document.getElementById("PacFej2kg").value;
    soma = soma + (2 * Number(Feijao2));

    let Feijao1 = document.getElementById("PacFej1kg").value;
    soma = soma + Number(Feijao1);

    let Macarrao = document.getElementById("Macarrao").value;
    soma = soma + (0.5 * Number(Macarrao));

    let Oleo = document.getElementById("Oleo").value;
    soma = soma + Number(Oleo);

   

    // Exibir o valor da soma
    document.getElementById("soma").innerHTML = soma.toFixed(2);
}
