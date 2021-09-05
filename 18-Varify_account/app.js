const timer = document.querySelector('#timer')
const btnPrim = document.querySelector('.btn_primary')

let i = 60;                  

function myLoop() {         
  setTimeout(function() {   
      timer.innerText = i 
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
    btnPrim.classList.remove('resend_code')
    btnPrim.innerHTML = `Resend Code - <span id="timer">60</span> sec.`
    i = 60
}
