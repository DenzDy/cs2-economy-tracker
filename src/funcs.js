import './reset.css';
import './style.sass';
import CTSvg from './assets/CT.png';

let current_money = 800;
let bomb_plant = false;
let bomb_explode = false;
let win = false;
let buy = 0; // 0 - eco, 2050 - half buy, 3700 - rifles
let loss_bonus = 1400;
let round_count = 1;
let team = 'T';
let prev_round_state = 0;
export function reset_all(){
  current_money = 800;
  loss_bonus = 1400;
  console.log("Reset money");
}
export function update_money(){
  console.log(current_money);
  current_money = current_money > 16000 ? 16000 : current_money
  return current_money;
}
export function change_team(side){
 team = side;
 reset_all();
}
export function get_team(){
  return team;
}
export function match_end_onclick(winBool){
  win = winBool;
}
export function enemy_buy_onclick(buy_onclick){
  if(team == 'T'){
    switch(buy_onclick){
      case 0:
        buy = 650;
        break;
      case 1:
        buy = 2050;
        break;
      case 2:
        buy = 3700;
        break;
    }
    console.log(buy);
    return;
  }
  switch(buy_onclick){
    case 0:
      buy = 650;
      break;
    case 1:
      if(round_count == 2){buy = 1250+1000;}
      else{buy = 1250+650;}
      break;
    case 2:
      buy = 2900+650;
      break;
  }
  
}
export function update_loss_bonus(win_state){
  if(win_state){
    loss_bonus = loss_bonus - 500 < 1400 ? 1400 : loss_bonus - 500;   
  }
  else{
    loss_bonus = loss_bonus + 500 > 3400 ? 3400 : loss_bonus + 500;   
  }
}
export function bomb_explode_onclick(){
  bomb_explode = true;
}
export function bomb_plant_onclick(){
  bomb_plant = true;
}
export function next_round_onclick(){
  if(team == 'T'){
    if(win){
      if(bomb_explode){
        current_money = prev_round_state == 0 ? current_money + 3500 - buy : current_money + 3500;
      }
      else{
        current_money = prev_round_state == 0 ? current_money + 3250 - buy : current_money + 3250;

      }
    }
    else{
      current_money = prev_round_state == 1 ? current_money + loss_bonus : current_money + loss_bonus - buy;
    }
    update_loss_bonus(win);
    prev_round_state = win;
    bomb_plant = false;
    bomb_explode = false;
    round_count++;
  }
}

