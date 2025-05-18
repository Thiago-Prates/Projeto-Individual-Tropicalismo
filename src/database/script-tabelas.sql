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
relato varchar(400), video varchar(255), data_relatos datetime default current_timestamp,
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