function changeMode(newLook,newColor,newMenu) {
    var wrap = document.getElementById('wrapper');
    var log = document.getElementById('head1');
    var men = document.getElementById('menu-tab');
    wrap.style.backgroundColor = newLook;
    log.style.color = newColor;
    men.style.color = newMenu;
}