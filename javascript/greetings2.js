const form = document.querySelector('.js-form');
const input = form.querySelector("input"); //form에서 받아와야 함.
const greeting = document.querySelector('.js-greetings');
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event){
    event.preventDefault(); //엔터를 눌러도 새로고침이 되지 않음.
    const currentValue = input.value;
    paintGreeting(currentValue);
    savename(currentValue);
}

function savename(text){
    localStorage.setItem('USER_LS', text);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadname();
}


init();