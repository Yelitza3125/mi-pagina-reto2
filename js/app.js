window.addEventListener('load', function() {
     var btn = document.getElementById('btn');
     var menu = document.getElementsByTagName('menu');

    btn.addEventListener('click', function hideMenu(event) {
        menu.style.display = 'none';
    })
});