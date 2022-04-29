/*
Atividade: API "catAPI"

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

    1. Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
    2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
*/
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getImg = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.webpurl;
  } catch (error) {
    console.log(error.message);
  }
};

const loadImg = async () => {
  const imgTag = document.getElementById('cat');
  imgTag.src = await getImg();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
