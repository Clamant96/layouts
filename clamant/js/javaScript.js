var sideBar = window.document.getElementById('menu')

function funcaoMenu(x) {
    if (x.matches) { 
        /*e o id do botao que ativa o menu*/
        sideBar.style.marginLeft = '-55%'

        botaoMenu.onclick = function(){
            sideBar.style.marginLeft = '0%'
        }
        /*id="menu" == sideBar*/
        sideBar.onclick = function(){
            sideBar.style.marginLeft = '-55%'
        }

    } else {
        /*e o id do botao que ativa o menu*/
        sideBar.style.marginLeft = '-55%'

        botaoMenu.onclick = function(){
            sideBar.style.marginLeft = '0%'

        }
        /*id="menu" == sideBar*/
        sideBar.onclick = function(){
            sideBar.style.marginLeft = '-55%'

        }
        
    }
}
  
var x = window.matchMedia("(max-width: 360px)")
funcaoMenu(x) // Call listener function at run time
x.addListener(funcaoMenu) // Attach listener function on state changes

/*FUNCAO SCROLL*/

ScrollOut({
    targets: 'imagensMateira, sinteseMateira, p, h1'

})