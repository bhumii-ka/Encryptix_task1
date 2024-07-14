var all = document.getElementsByClassName("button");
var display = document.getElementById("screen");

function addDisp(obj){
    let box=obj.target;
    if(display.textContent=='Error'){
        display.textContent='';
    }
    if (box.textContent=='C'){
        display.textContent='';
    }else if(box.textContent=='DEL'){
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
    }else if(box.textContent=='='){
        display.textContent=evaluate(display.textContent);
    }
    else{
        if(display.textContent.length<84){
            display.textContent+=box.textContent;
        }
    }
}
function addClass(obj){
    let box=obj.target;
    box.classList.add('clicked');
}

function remClass(obj){
    let box=obj.target;
    box.classList.remove('clicked');
}

function main(){
    for(var i=0; i<all.length;i++){
        all[i].addEventListener('mousedown',addClass.bind(this),false);
        all[i].addEventListener('mouseup',remClass.bind(this),false);
        all[i].addEventListener('touchstart',addClass.bind(this),false);
        all[i].addEventListener('touchend',remClass.bind(this),false);
        all[i].addEventListener('click',addDisp.bind(this),false);
    }
}

function evaluate(str){
    try{
        exp=eval(str);
        if(isNaN(exp)) throw 'Error';
        if(isFinite(exp)==false) throw 'Error';
        return exp;
    }
    catch(err){
        return("Error");
    }
}

main();
