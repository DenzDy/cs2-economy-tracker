import {change_team, get_team, match_end_onclick, next_round_onclick, update_money} from './funcs.js'

function update_ui(){
    document.getElementById("team").innerHTML = get_team();
    document.getElementById("money").innerHTML = "$" + update_money();
}

document.getElementById("team").addEventListener("click", function(){
    if(document.getElementById("team").innerHTML == 'T'){
        change_team('CT');
    }
    else{
        change_team('T');
    }
    update_ui();
});
document.getElementById("win").addEventListener("click", function(){
    match_end_onclick(true);
});
document.getElementById("next-round").addEventListener("click", function(){
    next_round_onclick();
    update_ui();
});
