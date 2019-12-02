import {Cena} from './cena.js'
import {Cenario} from './cenario.js'
import {Personagem, Sprite} from './personagem.js'

let canvas = document.querySelector('.myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let contexto = canvas.getContext('2d');

let cena = new Cena(window, document, contexto);

cena.cenario = new Cenario('img/grass.png');

cena.cenario.personagem = new Personagem(new Sprite('img/sprite.png', 200, 8, 138, 74, 'baixo', 64, 64, 4), 3);

cena.prepararMundo();

cena.reproduzir();