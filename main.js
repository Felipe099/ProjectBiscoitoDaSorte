const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const frase = document.querySelector(".screen2 p")
const openCookie = document.querySelector(".openCookie")
const openTryCookie = document.querySelector(".openTryCookie")
const frasesMotivacionais = [
  "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.",
  "A persistência realiza o impossível.",
  "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.",
  "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
  "Seus sonhos não precisam de plateia, eles só precisam de você.",
  "A persistência é o caminho do êxito.",
  "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
  "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
  "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
  "No meio da dificuldade encontra-se a oportunidade.",
  "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
]


openCookie.addEventListener("click", function() {
  handleTryCookie()
  const numberRandom = Math.round(Math.random() * 10)
  frase.innerText = frasesMotivacionais[numberRandom]
  console.log(numberRandom)

})
openTryCookie.addEventListener("click", handleTryCookie)


function handleTryCookie() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}





