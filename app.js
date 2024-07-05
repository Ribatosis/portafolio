// Navbar responsive

const navCheck = document.getElementById('nav-check');
const navLinks = document.querySelector('.nav-links');


navCheck.addEventListener('change', () => {
  navLinks.classList.toggle('show');
});


// Part 4

let $cont = document.querySelector('.cont');
let $elsArr = [].slice.call(document.querySelectorAll('.el'));
let $closeBtnArr = [].slice.call(document.querySelectorAll('.el__close-btn'));


setTimeout(function(){
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el){
  $el.addEventListener('click', function(){
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnArr.forEach(function($btn){
  $btn.addEventListener('click', function(e){
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});