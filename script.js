let gameSeq=[];
let userSeq=[];
let btns=["green","yellow","blue","red"];
let started=false;
let level=0;

document.addEventListener("keypress",function(){      
    if(started==false){
        started=true;
        levelUp();

    }  
});

let h2=document.querySelector('h2');

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(() => {
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}



function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randNo = Math.floor(Math.random() * 4);
    let randId = btns[randNo];
     let btn = document.querySelector(`.${randId}`);
       console.log(btn.getAttribute("id"));
     gameSeq.push(randId);
    gameFlash(btn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000);
       }
    }else{
         h2.innerHTML = `game Over! your score was <b>${level}</b> <br> Press Any key for restart`;
         reset()
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
         },1000);
    }
}

function btnpress(){
let btn=this;
userFlash(btn);

let btnid=btn.getAttribute("id");
userSeq.push(btnid);
console.log(userSeq);

checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll('.btn')
for(btn of allBtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}