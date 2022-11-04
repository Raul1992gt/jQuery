//.ready es para esperar a qque la página esté cargada, es como el onload;
$(document).ready(function() {    
    $(document).ready(function() {
        /*
                con elementos css
        let result = $('#animals .creature');
        console.log(result);
        */
       /*
       //Atravesando el DOM
       var result = $('#animals').find(' .creature'); //Encuentra todos los descendientes de #animals
       //es quivalente al codigo comentado de arriba
       console.log(result);
       */

       //first() last()
       var result = $('#animals').children()
            .first()
            .children('.creature')
            .last();
       console.log(result);
    });
});
