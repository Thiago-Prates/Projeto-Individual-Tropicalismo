
// efeitos da navbar 

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.menu');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.fade-in-scroll');

  const observer = new IntersectionObserver((entradas, observer) => {
      entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
              entrada.target.classList.add('visible');
              observer.unobserve(entrada.target);
          }
      });
  }, {
      rootMargin: '0px 0px -50px 0px', // Ajuste conforme necessário
  });

  elementos.forEach(el => observer.observe(el));

  
});


function cadastrar() {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_senha2.value;

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" 
  ) {
    alert 
      ("Existem campos em branco");
    return
  }
  if (senhaVar != confirmacaoSenhaVar) {
      alert ("Senhas não coincidem")

      return 
  }

  fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          alert 
        ("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

            window.location = "login.html";
         
        } else {
          alert ("Houve um erro ao tentar realizar o cadastro!");
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }

 


  function entrar() {

      var emailVar = ipt_emailLogin.value;
      var senhaVar = ipt_senhaLogin.value;

      if (emailVar == "" || senhaVar == "") {
          cardErro.style.display = "block"
          mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
          finalizarAguardar();
          return false;
      }
    

      console.log("FORM LOGIN: ", emailVar);
      console.log("FORM SENHA: ", senhaVar);

      fetch("/usuarios/autenticar", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              emailServer: emailVar,
              senhaServer: senhaVar
          })
      }).then(function (resposta) {
          console.log("ESTOU NO THEN DO entrar()!")

          if (resposta.ok) {
              console.log(resposta);

              resposta.json().then(json => {
                  console.log(json);
                  console.log(JSON.stringify(json));
                  sessionStorage.EMAIL_USUARIO = json.email;
                  sessionStorage.NOME_USUARIO = json.nome;
                  sessionStorage.ID_USUARIO = json.id;
                  sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)

                      window.location = "/votação.html";
                 

              });

          } else {
              alert("Login inválido tente novamente!")
              console.log("Houve um erro ao tentar realizar o login!");

              resposta.text().then(texto => {
                  console.error(texto);
              });
          }

      }).catch(function (erro) {
          console.log(erro);
      })

      return false;
  }

  



function cont_caetano() {
  var fkartistaVar = 1
  var fkusuarioVar = sessionStorage.getItem("ID_USUARIO"); 
  console.log("Usuário votando: ", fkusuarioVar);


  fetch("/usuarios/cont_caetano", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      fkusuarioServer: fkusuarioVar,
      fkartistaServer: fkartistaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        alert 
      ("Voto cadastrado com sucesso!");

          window.location = "dashboard.html";
       
      } else {
        alert ("Houve um erro ao tentar votar!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}


function cont_gil() {

  var fkartistaVar = 2
  var fkusuarioVar = sessionStorage.getItem("ID_USUARIO"); 
  console.log("Usuário votando: ", fkusuarioVar);


  fetch("/usuarios/cont_gil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      fkusuarioServer: fkusuarioVar,
      fkartistaServer: fkartistaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        alert 
      ("Voto cadastrado com sucesso!");

          window.location = "dashboard.html";
       
      } else {
        alert ("Houve um erro ao tentar votar!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function cont_gal() {
  
  var fkartistaVar = 3
  var fkusuarioVar = sessionStorage.getItem("ID_USUARIO"); 
  console.log("Usuário votando: ", fkusuarioVar);


  fetch("/usuarios/cont_gal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      fkusuarioServer: fkusuarioVar,
      fkartistaServer: fkartistaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        alert 
      ("Voto cadastrado com sucesso!");

          window.location = "dashboard.html";
       
      } else {
        alert ("Houve um erro ao tentar votar!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function cont_mut() {
  
  var fkartistaVar = 4
  var fkusuarioVar = sessionStorage.getItem("ID_USUARIO"); 
  console.log("Usuário votando: ", fkusuarioVar);


  fetch("/usuarios/cont_mut", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      fkusuarioServer: fkusuarioVar,
      fkartistaServer: fkartistaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        alert 
      ("Voto cadastrado com sucesso!");

          window.location = "dashboard.html";
       
      } else {
        alert ("Houve um erro ao tentar votar!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function cont_tor() {
  
  var fkartistaVar = 5
  var fkusuarioVar = sessionStorage.getItem("ID_USUARIO"); 
  console.log("Usuário votando: ", fkusuarioVar);


  fetch("/usuarios/cont_tor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      fkusuarioServer: fkusuarioVar,
      fkartistaServer: fkartistaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        alert 
      ("Voto cadastrado com sucesso!");

          window.location = "dashboard.html";
       
      } else {
        alert ("Houve um erro ao tentar votar!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function cont_nara() {
  
  var fkartistaVar = 6
  var fkusuarioVar = sessionStorage.getItem("ID_USUARIO"); 
  console.log("Usuário votando: ", fkusuarioVar);


  fetch("/usuarios/cont_nara", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      fkusuarioServer: fkusuarioVar,
      fkartistaServer: fkartistaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        alert 
      ("Voto cadastrado com sucesso!");

          window.location = "dashboard.html";
       
      } else {
        alert ("Houve um erro ao tentar votar!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}