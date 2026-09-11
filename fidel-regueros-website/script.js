(function(){
    var nav = document.getElementById('siteNav');
    function onScroll(){
      if(window.scrollY > 40){ nav.classList.add('solid'); }
      else{ nav.classList.remove('solid'); }
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  })();
