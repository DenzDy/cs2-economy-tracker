import {change_team, get_team} from './funcs.js'

function update_ui(){
    document.getElementById("team").innerHTML = get_team();
}

document.getElementById("team").addEventListener("click", function(){
    if(document.getElementById("team").innerHTML == 'T'){
        change_team('CT');
    }
    else{
        change_team('T');
    }
    update_ui();
})