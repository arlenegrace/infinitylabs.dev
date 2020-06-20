function open_img(img) {
    let fs = document.getElementById('fullscreen_container');
    fs.style.display = "block";
    document.getElementById('fullscreen_img').src=`../images/gallery/${img}.JPG`;
}

function close_img() {
    let fs = document.getElementById('fullscreen_container');
    fs.style.display = "none";
}

function esc_img() {
    var msg = document.getElementById('state-msg');

    document.body.addEventListener('keypress', function(e) {
        if(e.key == "Escape"){
            msg.textContent += 'Escape pressed:'
        }
    });
}

document.onkeydown = function(evt) {
    const fs = document.getElementById('fullscreen_container');
    evt = evt || window.event;
    if ((evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27) && fs.style.display == "block") {
        fs.style.display = "none";
    }
}