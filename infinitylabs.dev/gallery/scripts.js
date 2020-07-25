function open_img(img) {
    const fs = document.getElementById('fullscreen_container');
    const body = document.getElementsByTagName('body')[0];
    fs.style.display = "block";
    body.style.overflow = 'hidden';
    document.getElementById('fullscreen_img').src=`../images/gallery/${img}.JPG`;
}

function close_img() {
    const fs = document.getElementById('fullscreen_container');
    const body = document.getElementsByTagName('body')[0];
    fs.style.display = "none";
    body.style.overflow = 'visible';
}

document.onkeydown = function(event) {
    const fs = document.getElementById('fullscreen_container');
    event = event || window.event;
    if ((event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) && fs.style.display == "block") {
        close_img();
    }
}