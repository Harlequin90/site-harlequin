const saida = document.querySelector(".edit2");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 100);
  }
}

digitacao("Trabalho com apenas front-end", 0);