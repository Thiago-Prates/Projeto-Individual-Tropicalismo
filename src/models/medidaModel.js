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

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
