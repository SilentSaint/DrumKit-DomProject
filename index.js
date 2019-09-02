var x = document.querySelectorAll(".drum").length;
 for(let i = 0 ; i < x ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let y = this.innerHTML;
        makeSound(y);
        animate(y);
    })
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animate(event.key);
} )


function makeSound(event){
    switch (event) {
        case 'w':
            var tom1 = new Audio('sounds/tom1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':
                var tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play();
                break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'l':
            var kickBass = new Audio('sounds/kick-bass.mp3')
            kickBass.play();
            break;
        default:console.log(event.key);
            break;
    }

}

function animate(event){
    var activeButton = document.querySelector("." + event);

    activeButton.classList.add("pressed");
    setTimeout(()=>activeButton.classList.remove("pressed"),100);  
}