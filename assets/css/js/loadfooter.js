// last inn footer fra assets/snippets/footer.html og sett det inn før </body>
(async function(){
  try {
    const res = await fetch('assets/snippets/footer.html');
    if (!res.ok) return;
    const html = await res.text();
    // legg footer bakerst i body
    document.body.insertAdjacentHTML('beforeend', html);
  } catch(e){
    console.warn('Kunne ikke laste footer:', e);
  }
})();
