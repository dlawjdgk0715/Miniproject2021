var dateTitle = document.querySelector(".dateTitle");

function getToday(){
     const date = new Date();
     dateContainer = Date().split(' ');
     const yy = date.getFullYear();
     //dateContainer[2]로 해도 똑같은거?
     const mm = dateContainer[1];
     const dd = dateContainer[0];

     dateTitle.innerHTML = yy +'. ' + mm +'. ' + dd;
     
}

function init(){
    getToday();
    setInterval(getToday,1.15741e-8);

}

init();