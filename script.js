let menubtn = document.querySelector('.fa-bars');
let navbar = document.querySelector('.nav-bar');

menubtn.addEventListener('click', () => {
    navbar.classList.toggle('close');
});










// scroll window links active
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.nav-bar ul a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header .nav-bar a[href*="${id}"]`).classList.add('active');
            });
        };
    });
};