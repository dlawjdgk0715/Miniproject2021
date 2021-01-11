const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const user = "currentuser";
const showing = "showing";


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value; //input태그 내 입력된 값
    paintGreetings(currentValue); 
    saveName(currentValue);
};
function saveName(text){
    localStorage.setItem(user,text);
};

function askForName(){
    form.classList.add(showing);
    form.addEventListener("submit",handleSubmit);
};

function makeTimeGreetings(){
    const date = new Date();
    const hour = date.getHours();

    /*모바일: mql - if부분 */
    var mql = window.matchMedia("screen and (max-width: 500px)");

    if (mql.matches) {
        if (hour >= 6 && hour < 12){
            return "🌞 Good morning 🌞";
        }
        else if(hour >= 12 && hour <18){
            return "🧋 Good afternoon 🧋";
        }
        else{
            return "🌜 Good evening 🌜";
        }
    } else {
        if (hour >= 6 && hour < 12){
            return "🌞 Good morning";
        }
        else if(hour >= 12 && hour <18){
            return "🧋 Good afternoon";
        }
        else{
            return "🌜 Good evening";
        }
    }
    
};

function paintGreetings(text){
    form.classList.remove(showing);
    greeting.classList.add(showing);
    greeting.innerText = `${makeTimeGreetings()} ${text}`;

    /*모바일 버전에서는 인삿말(엔터) 사용자이름 으로 표시 */
    var mql = window.matchMedia("screen and (max-width: 500px)");
    if(mql.matches){
        greeting.innerText = `${makeTimeGreetings()}\n${text}`;
    }
};

function loadName(){
    const currentuser = localStorage.getItem(user);
    if (currentuser == null){
        askForName();
    }
    else{
        paintGreetings(currentuser);
    }
};

function init(){
    loadName();
    setInterval(makeTimeGreetings,2.16e+7);
};

init();