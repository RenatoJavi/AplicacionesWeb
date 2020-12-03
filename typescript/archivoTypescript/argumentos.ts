(function () {
  function activar(quien?: string, objeto: string = 'batiseñal') {
    console.log(`${objeto}` + `${quien}`);
  }

  activar('Alfred');
})();
