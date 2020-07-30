/*======= EXPANDER MENU ========**/
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodyPadding = document.getElementById(bodyId)
    if (toggle && navbar) {
        gridListButton(navbar, bodyPadding);
    }
}
showMenu('nav-toggle', 'navbar', 'body-pd');
/*======= LIKE ACTIVVE ========**/
const linkColor = document.querySelectorAll('.nav__link')

function gridListButton(navbar, bodyPadding) {
    gridListButtons = document.querySelectorAll('.grid-list-button');
    gridListButtons.forEach(btn => {
        btn.addEventListener('click', gridListToggle);
        btn.addEventListener('click', navbarPadding(navbar, bodyPadding));
    });
}
function showAnimaition(gridToggle) {
    gridListButtons = document.querySelectorAll('.grid-list-button');
    gridListButtons.forEach(btn => {
        btn.addEventListener('click', gridToggle);
    });
}

function navbarPadding(navbar, bodyPadding = null) {
    return () => {
        navbar.classList.toggle('expander');
        bodyPadding.classList.toggle('body-pd');
        if (!document.querySelector('.expander')) {
            collapse__menu();
            gridListButtons = document.querySelectorAll('.grid-list-button');
            gridListButtons.forEach(btn => {
                btn.addEventListener('click', gridListToggle());
            });
        }
    };
}
/*============= Collapse ============*/
function collapse__menu() {
    var all = document.getElementsByClassName('collapse__menu')
    for (var i = 0; i < all.length; i++) {
        if (all[i].classList.contains("showCollapse")) {
            all[i].classList.remove("showCollapse")
        }
    }
}

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
/*======= COLLAPSE MENU ========**/
const linkCollapse = document.getElementsByClassName('collapse__link')
for (let i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function () {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')
        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    })
}


function gridListToggle() {
    let btn = this;
    btn.classList.toggle('animation');
    btn.classList.toggle('list');
}