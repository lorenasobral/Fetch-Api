// This is a JavaScript file
window.onload = function() {
  const cadastrar = document.querySelector("#cadastar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const deletar = document.querySelector("#deletar");

  //cadastro de pessoas
  cadastrar.addEventListener ("click", function(){
     let formdata = new FormData();
     formdata.append('nome', `${nome.value}`);
     formdata.append('curso', `${curso.value}`);

    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",
      {
            body: formdata,
            method:"post",
            mode: 'cors',
            cache: 'default'
      }).then (

      );
  });

  //metodo listar pessoa
  buscar.addEventListener ("click", function(){
     let formdata = new FormData();
     formdata.append('nome', `${nome.value}`);
     formdata.append('curso', `${curso.value}`);
  fetch('https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}',
      {
            body: formdata,
            method:"post",
            mode: 'cors',
            cache: 'default'
      }).then (response=> {
        response.json().then(data => {
            nome.value = data['nome'];
            curso.value = data['curso'];
        })
      })
});

function limpar(){
  nome.value = "";
  curso.value = "";
}};

alterar.addEventListener("click", function(){
     
    fetch('https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}',
      {
            body: formdata,
            method:"put",
            mode: 'cors',
            cache: 'default',
            headers: {
              'content-type':'application/json; charset:UTF-8'
            },
            body:JSON,stringify({
              'nome' : '${nome.value}',
              'curso' : '${curso.value}',
            }).then(()=> {
              limpar();
            });
      });

      deletar.addEventListener("click", function(){
     
    fetch('https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}',
      {
        
            method:"delete",
            mode: 'cors',
            cache: 'default'
      });
