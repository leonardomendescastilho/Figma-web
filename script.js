

const menuBtn = document.querySelector('.hidden-menu-btn')


menuBtn.addEventListener('mouseover', ()=>{
  const menuSmallDevice = document.querySelector('.extends')
  const isHidden = menuSmallDevice.classList.contains('hidden')
  
  if(isHidden){
    menuSmallDevice.classList.remove('hidden');
    
  }

  menuSmallDevice.addEventListener('mouseleave', ()=>{
    menuSmallDevice.classList.add('hidden');
  })
})
