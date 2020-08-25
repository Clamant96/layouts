/*este e um arquivo .js*/

var galeriaImg = window.document.getElementById('galeriaImg')
galeriaImg.onmouseenter = function(){
    galeriaImg.style.width = '100%'

};

galeriaImg.onmouseout = function(){
    galeriaImg.style.width = '33.3333%'
    
};