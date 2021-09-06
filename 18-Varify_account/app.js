const timer = document.querySelector('#timer')
const btnPrim = document.querySelector('.btn_primary')
const input = document.querySelectorAll('.number_input')

let i = 60; 

setInput()
  

function myLoop() {         
  setTimeout(function() {   
      timer.innerHTML = i 
    i--; 
                      
    if (i>=0) { 
        if(i==0){
            btnPrim.classList.add('resend_code')
            btnPrim.innerText = 'Resend Code'
              }                     
      myLoop(); 
    }                     
  }, 1000)
}

myLoop(); 

btnPrim.addEventListener('click', () =>{ 
    resetBtn()
    myLoop()
})

function resetBtn(){
    i = 60
    btnPrim.classList.remove('resend_code')
    btnPrim.innerHTML = `Resend Code - <span id="timer">60</span> sec.`
    
}

function setInput(){
input.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9){
      input[idx].value = ''
      setTimeout(() => input[idx + 1].focus(), 10 ) 
  
    } else if(e.key ==='Backspace'){
    setTimeout(() => input[idx -1].focus(), 10)
  }
}) 
})   
}   


