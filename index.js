
function produ(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('descri')
    
    
    for(i = 0; i < x.length; i++){
        if (!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display ="none"
    
        }else{
            x[i].style.display = "block"
    
            
        }
        
      }
    
    }

  


function ali(){
    window.location = "https://walcursosonline.shop/indexalimentacao.html"
  }
  function mark(){
    window.location = "https://walcursosonline.shop/indexmarketing.html"
  }
  function con(){
    window.location = "https://walcursosonline.shop/indexconfeitaria.html"
  }
  function rece(){
    window.location = "https://walcursosonline.shop/indexreceitas.html"
  }
  function exe(){
    window.location = "https://walcursosonline.shop/indexexercicios.html"
  }

  function limpar(){

    var limpar = document.getElementById('limpar')

    var pro1 = document.getElementById('pro1')
    var pro2 = document.getElementById('pro2')
    var pro3 = document.getElementById('pro3')
    var pro4 = document.getElementById('pro4')
    var pro5 = document.getElementById('pro5')
    var pro6 = document.getElementById('pro6')
    var pro7 = document.getElementById('pro7')
    var pro8 = document.getElementById('pro8')
    var pro9 = document.getElementById('pro9')
    var pro10 = document.getElementById('pro10')
    var pro11 = document.getElementById('pro11')
    var pro12 = document.getElementById('pro12')
    var pro13 = document.getElementById('pro13')
    var pro14 = document.getElementById('pro14')
    var pro15 = document.getElementById('pro15')
    var pro16 = document.getElementById('pro16')
    var pro17 = document.getElementById('pro17')
    var pro18 = document.getElementById('pro18')
    var pro19 = document.getElementById('pro19')
    var pro20 = document.getElementById('pro20')


    limpar.style.display = "none"

    pro1.style.display = "none"
    pro2.style.display = "none"
    pro3.style.display = "none"
    pro4.style.display = "none"
    pro5.style.display = "none"
    pro6.style.display = "none"
    pro7.style.display = "none"
    pro8.style.display = "none"
    pro9.style.display = "none"
    pro10.style.display = "none"
    pro11.style.display = "none"
    pro12.style.display = "none"
    pro13.style.display = "none"
    pro14.style.display = "none"
    pro15.style.display = "none"
    pro16.style.display = "none"
    pro17.style.display = "none"
    pro18.style.display = "none"
    pro19.style.display = "none"
    pro20.style.display = "none"
  
  }

  
  function clicar(){
    var limpar = document.getElementById('limpar')
  
    limpar.style.display = "block"
  
  
  }





