// fantasia, aventura, drama

// o menino que descobriu o vento, 14, drama
// fratura, 14, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// o menino do pijama listrado, 12, drama, fantasia
// animais noturnos, 16, drama, aventura
// no ritmo da fe, 10, drama
// o leitor, 14, drama, fantasia

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  campoIdade = createinput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao,)
}