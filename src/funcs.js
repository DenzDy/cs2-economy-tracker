import './reset.css';
import './style.sass';
import CTSvg from './assets/CT.png';

let current_money = 800;
let win_by_state = -1; // 0 - elim; 1 - bomb;
let win = -1;
let buy = 0; // 0 - eco, 2050 - half buy, 3700 - rifles
let loss_bonus = 1900;
let round_count = 1;
let team = 'T';
let prev_round_state = 0;
let winstreak = 0;
let weps_from_last = 0;
export function reset_all(){
  current_money = 800;
  loss_bonus = 1900;
  console.log("Reset money");
  winstreak = 0;
  weps_from_last =0;
  buy = 0;
  win_by_state = 0;
  prev_round_state = 0;
  win = -1;
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
export function win_by_state_parser(inp){
  win_by_state = inp;
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
      case 3:
        buy = 0;
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
function check_valid_input(){
  if(win != -1 || win_by_state != -1){
    return -1;
  }  
}
export function next_round_onclick(){
  if(win){
    if(win_by_state == 1){
      current_money = weps_from_last == 0 ? current_money + 3500 - buy : current_money + 3500;
    }
    else{
      current_money =  weps_from_last == 0 ? current_money + 3250 - buy : current_money + 3250;
    }
  }
  else{
    winstreak = 0;
    console.log('loss', loss_bonus);
    current_money = prev_round_state == 1 && winstreak > 1 ? current_money + loss_bonus : current_money + loss_bonus - buy;
  }
  current_money = win_by_state == 1 && team == 'T' ? current_money + 800 : current_money;
  update_loss_bonus(win);
  prev_round_state = win;
  winstreak++;
  win_by_state = -1;
  round_count++;

}
export function update_buy(buy){
  switch(buy){
    case "pistols":
      enemy_buy_onclick(0);
      weps_from_last = 0;
      break;
    case "eco":
      enemy_buy_onclick(3);
      weps_from_last = 0;
      break;
    case "smgs":
      enemy_buy_onclick(1);
      weps_from_last = 0;
      break;
    case "rifles":
      enemy_buy_onclick(2);
      weps_from_last = 0;
      break;
    case "lround":
      enemy_buy_onclick(3);
      weps_from_last = 1;
      break;
  }
}
export function update_win_state(buy){
  switch(buy){
    case "elim":
      win_by_state = 0;
      break;
    case "bomb":
      win_by_state = 1;
      break;
    case "time":
      win_by_state = 0;
      break;
  }
}