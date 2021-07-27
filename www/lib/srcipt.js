// This is a JavaScript file
window.onload = function() {
  const cadastrar = document.querySelector("#cadastar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");

  cadastrar.addEventListener ("click", function(){
     let formdata = new FormData();
     formdata.append('nome', `${nome.value}`);
     formdata.append('curso', `${curso.value}`);


  });
  
}