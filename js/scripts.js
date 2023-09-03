var funny =["assets/img/products-08.jpg", "assets/img/products-05.jpg", "assets/img/products-04.jpg","assets/img/products-07.jpg"]
var strong = 0
function slide(){
    var Tim = document.getElementById("prank")
    Tim.src = funny[strong]
    strong = strong + 1
    if (strong === 3) {
        strong = 0
    
    }

}
setInterval(slide,2000)
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})