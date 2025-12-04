// last inn header fra assets/snippets/header.html og sett det inn i body før <main>
// men gjør ingenting hvis det allerede finnes et element med .site-header
(async function(){
  try {
    // sjekk om header allerede er på siden
    if (document.querySelector('.site-header')) {
      // header finnes allerede — ikke sett inn en ny
      console.log('Header finnes allerede — hopper over innsetting.');
      return;
    }

    // relativ sti (ingen ledende /)
    const res = await fetch('assets/snippets/header.html');
    if(!res.ok) {
      console.warn('Header ikke funnet:', res.status, res.statusText);
      return;
    }
    const html = await res.text();
    const main = document.querySelector('main');
    if(main){
      main.insertAdjacentHTML('beforebegin', html);
    } else {
      document.body.insertAdjacentHTML('afterbegin', html);
    }
  } catch(e){
    console.warn('Kunne ikke laste header:', e);
  }
})();
