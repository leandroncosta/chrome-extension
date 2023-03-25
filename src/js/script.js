const handleHtmlContent = answer => {
  const html = `
    <section class="dialog-gpt">
     <h1>Resposta do seu Assistente:</h1>
      <p>${answer}</p>
    </section>
  `
  document.querySelector('#rcnt > div > div').insertAdjacentHTML("beforebegin", html)
}

const handleSeach = (question) => {
  const API_URL = "http://localhost:8080"

  fetch(`${API_URL}/answer?question=${question}`)
    .then(response => response.json())
    .then(response => {
      const { answer } = response
      handleHtmlContent(answer)
    })
}

document.body.onload = () => {
  const params = new URLSearchParams(window.location.search)
  //copiando o parametro de busca da janela do navegador para um novo objeto de busca

  const queryFromGoogle = params.get('q')
  //obtendo o valor com get, 'q' significa o query

  //se tiver algo no parametro de busca da janela do navegador, vai executar:
  if (queryFromGoogle) {
    handleSeach(queryFromGoogle)
  }
}
