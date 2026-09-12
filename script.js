(function(){
    var nav = document.getElementById('siteNav');
    function onScroll(){
      if(window.scrollY > 40){ nav.classList.add('solid'); }
      else{ nav.classList.remove('solid'); }
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  })();

  // Graceful placeholder for any image that hasn't been added to /images yet.
  // Once a real file is dropped in at the same path, this stops firing and the real photo shows.
  (function(){
    function applyFallback(img){
      if(img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = '1';
      var w = parseInt(img.getAttribute('width'), 10) || 800;
      var h = parseInt(img.getAttribute('height'), 10) || 600;
      var alt = img.getAttribute('alt') || 'Image on request';
      var title = alt.split(',')[0].split(' — ')[0];
      var esc = function(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
      var fontTitle = Math.max(13, Math.min(22, w * 0.045));
      var fontSub = Math.max(10, Math.min(14, w * 0.028));
      var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">'
        + '<rect width="100%" height="100%" fill="#f0efe9"/>'
        + '<rect x="1" y="1" width="' + (w - 2) + '" height="' + (h - 2) + '" fill="none" stroke="#dedcd4" stroke-width="2"/>'
        + '<text x="50%" y="47%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, serif" font-style="italic" font-size="' + fontTitle + '" fill="#8a877d">' + esc(title) + '</text>'
        + '<text x="50%" y="57%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" letter-spacing="1" font-size="' + fontSub + '" fill="#b3b0a6">IMAGE ON REQUEST</text>'
        + '</svg>';
      img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
      img.style.objectFit = 'contain';
      img.style.background = '#f0efe9';
    }
    document.querySelectorAll('img').forEach(function(img){
      if(img.complete && img.naturalWidth === 0){ applyFallback(img); }
      img.addEventListener('error', function(){ applyFallback(img); });
    });
  })();
