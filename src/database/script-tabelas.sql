use testeAPI;

show tables;
select *from votos;
select *from usuario;
select *from artistas;


create table usuario (
id int primary key auto_increment,
nome varchar(45), email varchar(45), senha varchar(45));

create table artistas (
idartista int primary key auto_increment,
nome varchar(45));

create table votos (
idvoto INT,
fkusuario INT, 
fkartista INT,
data_voto datetime default current_timestamp);

create table comentarios (
idcomentario INT auto_increment,
fkusuario INT,
descricao varchar(500),
data_publicacao datetime default current_timestamp,
constraint fkusuariocomentario foreign key (fkusuario) references usuario (id),
primary key (idcomentario, fkusuario));

create table relatos (
idrelatos INT primary key auto_increment,
relato varchar(1000), video varchar(255), data_relatos datetime default current_timestamp,
fkusuario INT, constraint fkusuariorelatos foreign key (fkusuario) references usuario (id));



insert into artistas (nome) values (
('Caetano Veloso'),
('Gilberto Gil'),
('Gal Costa'),
('Os Mutantes'),
('Torquato Neto'),
('Nara Leão'));


select *from votos;
select *from usuario;
select *from artistas;
select *from comentarios;
select *from relatos;

truncate table comentarios;
truncate table relatos;

describe usuario;
describe artistas;
describe votos;	

select u.id as "Identificador do usuário",
u.nome as "Nome do usuário",
u.email as "Email do usuário",
v.idvoto as "Identificador do voto",
a.nome as "Nome do artista votado",
v.data_voto as "Data do voto"
from
	usuario as u JOIN votos as v ON u.id = v.fkusuario
    JOIN artistas as a ON v.fkartista = a.idartista;
    
select c.idcomentario as "Identificador do comentario",
u.nome as "Nome do usuario",
c.descricao as "Comentario",
c.data_publicacao as "Data de publicação"
from 
	comentarios as c JOIN usuario as u ON c.fkusuario = u.id;
            
truncate table comentarios;



-- COMENTARIOS


"Essa música me leva direto para a sala da casa da minha avó, domingo à tarde, cheiro de café e rádio ligado. Que saudade!"

"A voz do Brasil tem timbre, tem alma. E a MPB é a trilha sonora da nossa história."

"Cada acorde dessa música toca um lugar diferente no coração. MPB é pura poesia sonora."

"Fechei os olhos e viajei no tempo. A música tem esse poder. Viva a MPB!"

"A MPB é patrimônio do Brasil. Não é só música, é memória, é luta, é amor."

"Do samba ao violão suave, essa é a arte que nos representa. Obrigado por compartilhar cultura!"

"Ouvir isso me lembra o quanto somos ricos musicalmente. O mundo precisa ouvir mais disso."

"Notas que choram, palavras que dançam. A MPB transforma silêncio em emoção."

"É impressionante como a simplicidade do violão e uma letra sincera podem tocar tão fundo."

"Quem ouve com o coração entende: essa música é uma carta de amor em forma de som."


Não sei quando começou exatamente toda essa história da paixão pela música, mas se tivesse que chutar, diria que é algo que nasceu antes mesmo de mim. Minha família sempre teve ligação com a música, principalmente com o canto, pois muitos deles louvavam a Deus, então sempre estive em contato com tudo isso. A música está no meu cerne e no meu intelecto, muito do que eu sou hoje devo a música, que me apresentou diferentes pontos de vistas da sociedade e da existência, e mais especificamente, a MPB me ensinou a me orgulhar de ser brasileiro e compreender um pouco o meu lugar no mundo, quem eu sou.