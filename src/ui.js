import {change_team, enemy_buy_onclick, get_team, match_end_onclick, next_round_onclick, reset_all, update_buy, update_money, update_win_state} from './funcs.js'

function update_ui(){
    document.getElementById("team").innerHTML = get_team();
    document.getElementById("money").innerHTML = "$" + update_money();
    reset_active();
}

function reset_active(){
    for (let i of document.getElementsByTagName("button")){
        if(i.id != "team"){
            i.classList.remove("active-t");
            i.classList.remove("active-ct");
            console.log("removed");
        }
    }
    for(let i of document.getElementsByTagName("select")){
        i.selectedIndex = 0;
    }
}
for (let i of document.getElementsByTagName("button")){
    if(i.id != "team"){
        i.addEventListener("click", function(){
            if(get_team() == 'T'){
                i.classList.toggle("active-t");
            }
            else{
                i.classList.toggle("active-ct");
            }
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
    document.getElementById("lose").classList.remove("active-t");
    document.getElementById("lose").classList.remove("active-ct");

});
document.getElementById("lose").addEventListener("click", function(){
    match_end_onclick(false);
    document.getElementById("win").classList.remove("active-t");
    document.getElementById("win").classList.remove("active-ct");
});
function get_select_values(){
    let round_end = document.getElementById("round-end-state").value;
    let enemy_buy = document.getElementById("enemy-buy").value;
    update_win_state(round_end);
    update_buy(enemy_buy);

}
document.getElementById("next-round").addEventListener("click", function(){
    get_select_values();
    next_round_onclick();
    update_ui();
});

document.getElementById("reset").addEventListener("click", function(){
    reset_all();
    update_ui();
    console.log("reset!!!!");
});
