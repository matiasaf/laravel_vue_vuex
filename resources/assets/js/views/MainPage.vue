<template>
<div>

  <Parallax urlImage="https://www.entrerios.gov.ar/portal/userfiles/banner/banner_5.png" />

  <BarraBotones />

  <div class="row">

    <Noticias v-for="noticia in noticias" :noticia="noticia" :key="noticia.id" />

    <div class="col-sm-4">

      <Flyers src_img="https://www.entrerios.gov.ar/portal/imagenes/btn_portal.png" />
      <Flyers src_img="https://www.entrerios.gov.ar/portal/imagenes/btn_GA.png" />
      <Flyers src_img="https://www.entrerios.gov.ar/portal/imagenes/btn_recibo.png" />
      <Flyers src_img="https://www.entrerios.gov.ar/portal/imagenes/btn_plataformacuidadana.png" />

    </div>

  </div>

  <Carrousel />

  <div class="row">

    <ImagenesOrganismos v-for="imagenOrganismo in imagenesOrganismos" :imagenOrganismo="imagenOrganismo" />

  </div>

  <NumerosImportantes />

  <Footer />

</div>
</template>

<script>

import {
  mapGetters,
  mapActions
} from 'vuex'

import Parallax from '../components/Parallax';
import BarraBotones from '../components/BarraBotones';
import Noticias from '../components/Noticias';
import Flyers from '../components/Flyers';
import Footer from '../components/Footer';
import NumerosImportantes from '../components/NumerosImportantes';
import Carrousel from '../components/Carrousel';
import ImagenesOrganismos from '../components/ImagenesOrganismos';

export default {

  data: function() {
    return {
      imagenesOrganismos: [{
          src_img: 'https://www.entrerios.gov.ar/portal/userfiles/images/otras_imagenes/btn_mingob.png',
        },
        {
          src_img: 'https://www.entrerios.gov.ar/portal/userfiles/images/otras_imagenes/btn_minplan.png',
        },
        {
          src_img: 'https://www.entrerios.gov.ar/portal/userfiles/images/otras_imagenes/btn_produccion.png',
        },
        {
          src_img: 'https://www.entrerios.gov.ar/portal/userfiles/images/otras_imagenes/btn_minecon.png',
        },
        {
          src_img: 'https://www.entrerios.gov.ar/portal/userfiles/images/otras_imagenes/btn_dsocial.png',
        },
        {
          src_img: 'https://www.entrerios.gov.ar/portal/userfiles/images/otras_imagenes/btn_salud.png',
        },
      ]
    }
  },

  components: {
    Parallax,
    BarraBotones,
    Noticias,
    Flyers,
    Footer,
    NumerosImportantes,
    Carrousel,
    ImagenesOrganismos,
  },

  methods: {

  },

  computed: mapGetters({
    noticias: 'allNoticias'
  }),

  created() {
    this.$store.dispatch('getAllNoticias')
  },

  mounted() {

  }

}
</script>
