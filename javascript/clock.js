var clockTitle = document.querySelector(".clockTitle");
//jonna 바보같은 실수.. 객체가 왜 안생기냐고 고민했는데 'clockTitle'이 아니라 'clockTIte'이라고 오타내서였음,,ㅅㅂ

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    clockTitle.innerHTML = `${hour<10 ? `0${hour}` : hour} : ${min < 10 ? `0${min}` : min} : ${sec<10 ? `0${sec}` : sec}`;
    // 삼항연산자--> 조건 ? 참 : 거짓
    //백택기호 -> 문자열이랑 변수 한번에 쓸 수 잇다!

}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();