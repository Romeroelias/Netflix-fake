
document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
        handle = e.target
    }
    
    else {
        handle = e.target.closest(".handle")
    }

    if (handle != null) onHandleClick(handle)
})

function onHandleClick(handle) {
    const slider = handle.closest(".carousel-container").querySelector(".slider")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))

    if (handle.classList.contains("left-handle")){
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }

    if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
}


console.log(scrollValue);
   const scrollValue = window.scrollY;
function changeBg(){
    
 
    // const navbar = document.getElementById('wrapper');

    // if(scrollValue >= 5){
    //     navbar.classList.add('bg-change-color');
    // }

    // else{
    //     navbar.classList.remove('bg-change-color');
    // }


}
window.addEventListener('scroll', changeBg);