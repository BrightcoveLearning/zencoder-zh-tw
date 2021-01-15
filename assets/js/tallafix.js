var BCLS_tallafix = ( function (window, document) {
  var  talla_parent = document.getElementById('talla_parent'),
  t,
  n = 0;

  function fix_talla() {
    console.log('launching talla');
    
    t = window.setTimeout(displayChat(), 2000);
  }

  fix_talla();
})(window, document);