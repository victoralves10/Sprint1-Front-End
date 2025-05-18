const form = document.querySelector("form");

form.onsubmit = function(e) {
  e.preventDefault();
  
  const dados = {
    nome: form.nome.value,
    nascimento: form.nascimento.value,
    cpf: form.cpf.value,
    genero: form.genero.value,
    telefone: form.telefone.value,
    email: form.email.value,
    rua: form.rua.value,
    numero: form.numero.value,
    bairro: form.bairro.value,
    cidade: form.cidade.value,
    estado: form.estado.value,
    cep: form.cep.value
  };

  console.log(dados); 


  window.location.href = "consulta.html";
};
