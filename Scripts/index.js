let myIndex = 0;

const currentSlide = () => {
    let i;
    const x = document.getElementsByClassName("slideBtn");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("currentSlide");
    }
    myIndex++;
    if(myIndex > x.length) {myIndex = 1};
    x[myIndex - 1].classList.add("currentSlide");
    setTimeout(currentSlide, 5000);
}

const slideThru = () => {
    let i;
    const x = document.getElementsByClassName("slideImg");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length) {myIndex = 1};
    x[myIndex - 1].style.display="block";
    setTimeout(slideThru, 5000);
}
slideThru();
currentSlide();