document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu')
    menu.addEventListener('click',function(){
        document.getElementById('menu-drawer').classList.toggle("hide-mobile")
    })
  });