
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const theme=document.getElementById('themeToggle');
theme?.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  if(document.body.classList.contains('light')){
    document.documentElement.style.setProperty('--bg','#f5faf7');
    document.documentElement.style.setProperty('--panel','#ffffff');
    document.documentElement.style.setProperty('--panel2','#eef5f1');
    document.documentElement.style.setProperty('--text','#102019');
    document.documentElement.style.setProperty('--muted','#53675d');
    document.documentElement.style.setProperty('--border','#d8e5de');
  }else{
    location.reload();
  }
});
