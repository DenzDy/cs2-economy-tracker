import {change_team, enemy_buy_onclick, get_team, match_end_onclick, next_round_onclick, update_money} from './funcs.js'

function update_ui(){
    document.getElementById("team").innerHTML = get_team();
    document.getElementById("money").innerHTML = "$" + update_money();
    reset_active();
}
function reset_active(){
    for (let i of document.getElementsByTagName("button")){
        if(i.id != "team"){
            i.classList.remove("active");
            console.log("removed");
        }
    }
}
for (let i of document.getElementsByTagName("button")){
    if(i.id != "team"){
        i.addEventListener("click", function(){
            i.classList.toggle("active");
        });    
    }
}
document.getElementById("team").addEventListener("click", function(){
    if(document.getElementById("team").innerHTML == 'T'){
        change_team('CT');
        document.getElementById("team").classList.add("ct");
        document.getElementById("team").classList.remove("t");

    }
    else{
        change_team('T');
        document.getElementById("team").classList.add("t")
        document.getElementById("team").classList.remove("ct");
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
document.getElementById("eco").addEventListener("click", function(){
    enemy_buy_onclick(0)
});
document.getElementById("smgs").addEventListener("click", function(){
    enemy_buy_onclick(1)
});
document.getElementById("rifles").addEventListener("click", function(){
    enemy_buy_onclick(2)
});
