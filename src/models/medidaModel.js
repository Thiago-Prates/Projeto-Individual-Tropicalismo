var database = require("../database/config");

function buscarUltimasMedidas() {
    instrucaoSql = `SELECT nome, count(fkartista) FROM votos JOIN artistas ON fkartista = idartista GROUP BY fkartista ORDER BY fkartista`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {
    instrucaoSql = `SELECT nome, count(fkartista) FROM votos JOIN artistas ON fkartista = idartista GROUP BY fkartista ORDER BY fkartista`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmIndicadores() {
    const instrucaoSql = `SELECT (SELECT COUNT(fkartista) FROM votos) AS totalVotos,
            (SELECT nome FROM artistas JOIN votos ON fkartista = idartista GROUP BY fkartista ORDER BY COUNT(fkartista) DESC LIMIT 1) AS maisVotado,
            (SELECT nome FROM artistas JOIN votos ON fkartista = idartista GROUP BY fkartista ORDER BY COUNT(fkartista) ASC LIMIT 1) AS menosVotado,
			(SELECT MAX(v) - MIN(v) FROM votos, (SELECT COUNT(*) AS v FROM votos GROUP BY fkartista) AS contagens) AS diferencavotos; `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmIndicadores
}
