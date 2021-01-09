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
    if (hour >= 6 && hour < 12){
        return "🌞 Good morning";
    }
    else if(hour >= 12 && hour <18){
        return "🧋 Good afternoon";
    }
    else{
        return "🌜 Good evening";
    }
};

function paintGreetings(text){
    form.classList.remove(showing);
    greeting.classList.add(showing);
    greeting.innerText = `${makeTimeGreetings()} ${text}`;
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
    makeTimeGreetings();
};

init();