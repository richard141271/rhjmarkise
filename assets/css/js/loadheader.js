
// last inn header fra assets/snippets/header.html og sett det inn i body før <main>
(async function(){
  try {
    const res = await fetch('/assets/snippets/header.html');
    if(!res.ok) return;
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
