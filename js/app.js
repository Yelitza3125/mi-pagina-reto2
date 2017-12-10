window.addEventListener('load', function() {
     var btn = document.getElementById('btn');
     var menu = document.getElementById('menu');
     

    btn.addEventListener('click', function showMenu(event) {
        var list = document.getElementById('list');
        var title = document.getElementById('header');
        menu.classList.toggle('menu-modal');
        list.classList.add('list');
        title.classList.add('title');

    }) 

});

