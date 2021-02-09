let stars = document.getElementById("stars");

stars.onclick = function (event) {
    let target = event.target;
    let next = target.nextElementSibling;
    //Cambiaremos la clase del event.target y los elementos previos
    if (target.classList.contains('far')) {
        changeStarClass(target,'far','fas');
        target = target.previousElementSibling;
        while (target != null) {
            changeStarClass(target,'far','fas');
            target = target.previousElementSibling;
        }

    } else {
        while(next !=null){
            //Cambiaremos la clase de los elementos siguientes si ya les hemos cambiado la clase antes
            if(next.classList.contains('fas')){

                next.classList.remove('fas');
                next.classList.add('far');
                next = next.nextElementSibling;
            }else{
                break;
            }

        }
        
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
//Eliminamos la classe firstClass del elemento y le añadimos la classe secondClass
function changeStarClass(element,firstClass,secondClass){
    element.classList.remove(firstClass);
    element.classList.add(secondClass);

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


