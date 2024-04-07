var toggle_btn = document.getElementById('theme-btn');
var body = document.querySelector('body');

var dark_theme_class = 'dark';



toggle_btn.addEventListener('click', function() {

    if (body.classList.contains(dark_theme_class)) {
        body.classList.remove(dark_theme_class);
} else {
    
    body.classList.add(dark_theme_class);

}

});