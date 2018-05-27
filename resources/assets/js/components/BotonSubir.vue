<template>

  <a href="#" id="js_up" class="boton-subir">
    <!-- link del icono http://fontawesome.io/icon/rocket/ -->
    <i class="fas fa-chevron-up"></i>
  </a>

</template>

<script>

export default {

  created() {
    //invocamos al objeto (window) y a su método (scroll), solo se ejecutara si el usuario hace scroll en la página
    $(window).scroll(function(){
      if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
        $("#js_up").slideDown(300); //se muestra el botón en 300 mili segundos
      }else{ // si no
        $("#js_up").slideUp(300); //se oculta el botón en 300 mili segundos
      }
    });

    //creamos una función accediendo a la etiqueta i en su evento click
    $("#js_up i").on('click', function (e) {
      e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
      $("body,html").animate({ // aplicamos la función animate a los tags body y html
        scrollTop: 0 //al colocar el valor 0 a scrollTop me volverá a la parte inicial de la página
      },3000); //el valor 700 indica que lo ara en 700 mili segundos
      return false; //rompe el bucle
    });
  }

}
</script>

<style>
/*botón up*/
.boton-subir{
  display: none;
  background: #01afef;
  border: thin solid #fff;
  border-radius: 30px;
  position: fixed;
  right: 15px;
  bottom:10px;
  z-index: 999999999;

  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.45);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.45);
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.45);
}
/*evento hover*/
.boton-subir:hover{

}
/*estilos para el tag i*/
.boton-subir i{
  color: #fff;
  font-size: 2.2em;
  padding: 5px 10px 7px 8px;
}
</style>
