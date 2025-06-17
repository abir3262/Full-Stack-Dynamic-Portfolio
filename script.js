const navbar = document.getElementsByClassName("navbar");

if (navbar.length > 0) {
    for (let i = 0; i < navbar[0].children.length; i++) {
        navbar[0].children[i].addEventListener('click', function (event) {
            console.log(event.target.innerText);
        });
    }
}
