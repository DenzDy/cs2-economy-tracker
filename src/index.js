import './reset.css';
import './style.sass';
import CTSvg from './assets/CT.png';

let current_money = 800;
let bomb_plant = false;
let bomb_explode = false;
let win = false;
let buy = 0; // 0 - eco, 1 - half buy, 2 - rifles
function reset_money(){
  current_money = 800;
}

function match_end_onclick(winBool){
  win = winBool;
}
function enemy_buy_onclick(buy_onclick){
  switch(buy_onclick){
    case 0:
      buy = 0;
    case 1:
      buy = 1;
    case 2:
      buy = 2;
  }
}
function bomb_explode_onclick(){
  bomb_explode = true;
}
function bomb_plant_onclick(){
  bomb_plant = true;
}
function next_round(){
  
}