/*este e um arquivo .js*/

var sideBar = window.document.getElementById('sideBar')

botaoMenu.onclick = function(){
    sideBar.style.marginLeft = '0%'
}

sideBar.onclick = function(){
    sideBar.style.marginLeft = '-20%'
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        botaoMenu.onclick = function(){
            sideBar.style.marginLeft = '0%'
        }
        
        sideBar.onclick = function(){
            sideBar.style.marginLeft = '-45%'
        }

    } else {
        botaoMenu.onclick = function(){
            sideBar.style.marginLeft = '0%'
        }
        
        sideBar.onclick = function(){
            sideBar.style.marginLeft = '-20%'
        }
    }
  }
  
  var x = window.matchMedia("(max-width: 360px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes