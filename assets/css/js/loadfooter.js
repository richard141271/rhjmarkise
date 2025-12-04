// last inn footer fra assets/snippets/footer.html og sett det inn bakerst i body
(async function(){
  try {
    // samme relative sti som header-loaderen bruker
    const res = await fetch('assets/snippets/footer.html');
    if(!res.ok){
      console.warn('Footer ikke funnet:', res.status, res.statusText);
      return;
    }
    const html = await res.text();
    // unngå å legge til flere footere hvis det allerede finnes en
    if(document.querySelector('.site-footer')) {
      console.log('Footer finnes allerede — hopper over innsetting.');
      return;
    }
    document.body.insertAdjacentHTML('beforeend', html);
  } catch(e){
    console.warn('Kunne ikke laste footer:', e);
  }
})();
