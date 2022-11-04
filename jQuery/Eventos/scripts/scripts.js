//.ready es para esperar a qque la página esté cargada, es como el onload;
$(document).ready(function() {    
    $('#example').on('click', function(){
        console.log(this);
        console.log($(this));

        //Cuando hago click le añado una clase distinta
        //$(this).addClass('highlighted');
        $(this).toggleClass('highlighted'); //"como un interruptor" si la calss está la apaga, sino, la inyecta

    });
});
