/* ALL JAVASCRIPT USED ACROSS MULTIPLE SITES TO BE PLACED HERE */

/* MOBILE HAMBURGER BUTTON */
function open_nav() {
    const sidenav = document.getElementById('sidenav');
    const dropdown = document.getElementById('sidenav_container_id');
    const bg = document.getElementById('sidenav_bg');
    const header_logo = document.getElementById('center_header');
    const body = document.getElementsByTagName("body")[0];
    const main = document.getElementsByTagName("main")[0];

    /* MANUALLY CALCULATE DROPDOWN WIDTH, AUTO DOESN'T PLAY CLOSING TRANSITION */
    const opened = dropdown.style.width == '230px';

    document.getElementById('hamburger').classList.toggle("change");

    if (opened) {
        dropdown.style.width = '0vw';
        sidenav.style.width = '0vw';
        bg.style.width = '0vw';

        body.style.overflow = 'auto';
        main.style.opacity = '1';
        main.style.filter = 'blur(0px)';
        header_logo.style.opacity = '1';
        header_logo.style.filter = 'blur(0px)';
    } else {
        dropdown.style.width = '230px';
        sidenav.style.width = '100vw';
        bg.style.width = '100vw';

        body.style.overflow = 'hidden';
        main.style.opacity = '0.3';
        main.style.filter = 'blur(10px)';
        header_logo.style.opacity = '0.3';
        header_logo.style.filter = 'blur(10px)';
    }
}