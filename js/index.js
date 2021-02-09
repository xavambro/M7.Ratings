let stars = document.getElementById("stars");

stars.onclick = function (event) {
    let target = event.target;
    let next = target.nextElementSibling;
    if (target.classList.contains('far')) {
        changeStarClass(target,'far','fas');
        /* target.classList.remove('far');
        target.classList.add('fas'); */
        target = target.previousElementSibling;
        while (target != null) {
            changeStarClass(target,'far','fas');
            /* target.classList.remove('far');
            target.classList.add('fas'); */
            target = target.previousElementSibling;
        }

    } else {
        while(next !=null){
            if(next.classList.contains('fas')){
                
                removeNext(next);
                next = next.nextElementSibling;
            }else{
                break;
            }

        }
        /* changeStarClass(target,'fas','far'); */
        /* target.classList.remove('fas');
        target.classList.add('far');
        target = target.previousElementSibling;
        while (target != null) {
           /*  changeStarClass(target,'fas','far'); */
           /*  target.classList.remove('fas');
            target.classList.add('far');
            target = target.previousElementSibling;
        } */
 
    }
    //Con stoppropagation evitamos que el evento onclick del body se dispare tambien.
    event.stopPropagation();

}

stars.onmouseover = function (event) {
    changeColors(event,"orange");
}

stars.onmouseout = function (event) {
    changeColors(event,"purple")
}

document.body.addEventListener('click',function(){
    let allStars = document.querySelectorAll('i');
    for (let i=0; i< allStars.length;i++){
        if (allStars[i].classList.contains('fas')){
            allStars[i].classList.remove('fas');
            allStars[i].classList.add('far');
        }   
    }
    
});

function changeStarClass(element,firstClass,secondClass){
    element.classList.remove(firstClass);
    element.classList.add(secondClass);

}
function changeToFasClass(){

}
//Cambiamos el color de la estrella y las estrellas anteriores a un color determinado.
function changeColors(event,color){
    let target = event.target;
    target.style.color = color;
    target = target.previousElementSibling;
    while (target != null) {
        target.style.color = color;
        target = target.previousElementSibling;
    }
}

function removeNext(target){
    
        target.classList.remove('fas');
        target.classList.add('far');
        
    

}
