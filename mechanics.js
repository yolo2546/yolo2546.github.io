window.onscroll = function() {myFunction()};
var navbar = document.getElementById("options_group");
var sticky = navbar.offsetTop;
function myFunction() {
if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");
}
}

//sticky navigation bar//

document.querySelectorAll('.collapsible').forEach(button =>{
    button.addEventListener('click',() => {
        const collapsible_content = button.nextElementSibling.nextElementSibling;
        button.classList.toggle('collapsible--open');
        if(button.classList.contains('collapsible--open')) {
            collapsible_content.style.maxHeight = collapsible_content.scrollHeight +'px';
        } else {
            collapsible_content.style.maxHeight = 0;
        }
    });
});