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


function buscarMedidasEmcoments() {
    const instrucaoSql = `
SELECT 
    c.idcomentario AS idComentario, u.nome AS nomeUsuario, c.descricao AS comentario, c.data_publicacao AS dataPublicacao
    FROM comentarios AS c JOIN usuario AS u ON c.fkusuario = u.id ORDER BY c.data_publicacao DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




    function salvar(fkusuario) {
  const instrucao = `insert into relatos (fkusuario, relato, video) values ('${relatos.fkusuario}', '${relatos.relato}', '${relato.video}')`;

  return database.executar(instrucao);
}

function buscarUsuarioPelaFk() {
  const instrucao = `select * from relatos`;

  return database.executar(instrucao);
}


function buscarRelatos() {
    var instrucaoSql = `
    SELECT u.nome, r.relato, r.video, r.data_relatos
    FROM relatos r
    JOIN usuario u ON r.fkusuario = u.id
    ORDER BY r.data_relatos DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmIndicadores,
    buscarMedidasEmcoments,
    salvar,
    buscarUsuarioPelaFk,
    buscarRelatos
}
