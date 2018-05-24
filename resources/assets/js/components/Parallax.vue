<template>
<div class="containerParallel">

  <section>
    <div :style="styles.image" data-type="background" data-speed="7" ></div>
  </section>

</div>
</template>

<script>
export default {

  props: ['urlImage'],

  data: function() {
    return {

      styles: {

        image: {

          backgroundAttachment: 'fixed',
          // backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '500',
          opacity: '0.8',
          backgroundImage: `url('${this.urlImage}')`

        }

      }

    }
  },

  methods: {

    parallaxIt: function() {


      // create variables
      var $fwindow = $(window);
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // on window scroll event
      $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      });

      // for each of content parallax element
      $('[data-type="content"]').each(function(index, e) {
        var $contentObj = $(this);
        var fgOffset = parseInt($contentObj.offset().top);
        var yPos;
        var speed = ($contentObj.data('speed') || 1);

        $fwindow.on('scroll resize', function() {
          yPos = fgOffset - scrollTop / speed;

          $contentObj.css('top', yPos);
        });
      });

      // for each of background parallax element
      $('[data-type="background"]').each(function() {
        var $backgroundObj = $(this);
        var bgOffset = parseInt($backgroundObj.offset().top);
        var yPos;
        var coords;
        var speed = ($backgroundObj.data('speed') || 0);

        $fwindow.on('scroll resize', function() {
          yPos = -((scrollTop - bgOffset) / speed);
          coords = '40% ' + yPos + 'px';

          $backgroundObj.css({
            backgroundPosition: coords
          });
        });
      });

      // triggers winodw scroll for refresh
      $fwindow.trigger('scroll');

    }
  },

  mounted: function() {
    this.parallaxIt();
  }

}
</script>

<style>
.containerParallel{
  height: 400px;
}

</style>
