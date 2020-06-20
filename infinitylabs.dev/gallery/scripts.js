function open_img(img) {
    const fs = document.getElementById('fullscreen_container');
    fs.style.display = "block";
    document.getElementById('fullscreen_img').src=`../images/gallery/${img}.JPG`;
}

function close_img() {
    const fs = document.getElementById('fullscreen_container');
    fs.style.display = "none";
}

document.onkeydown = function(event) {
    const fs = document.getElementById('fullscreen_container');
    event = event || window.event;
    if ((event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) && fs.style.display == "block") {
        fs.style.display = "none";
    }
}