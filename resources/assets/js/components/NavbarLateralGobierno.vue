<template>
<div class="containerNavbarLateral">

  <div class="row">

    <div class="col-sm-3">
      <div class="card">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                Consulta de organismos
              </a>
          <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                Poder Ejecutivo
              </a>
          <a class="nav-link" id="v-pills-organismos-sitios-web-tab" data-toggle="pill" href="#v-pills-organismos-sitios-web" role="tab" aria-controls="v-pills-organismos-sitios-web" aria-selected="false">
              Organismos con sitios webs
          </a>
          <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
              Poder Legislativo
          </a>
          <a class="nav-link" id="v-pills-poder-judicial-tab" data-toggle="pill" href="#v-pills-poder-judicial" role="tab" aria-controls="v-pills-poder-judicial" aria-selected="false">
              Poder Judicial
          </a>
          <a class="nav-link" id="v-pills-historia-casa-gobierno-tab" data-toggle="pill" href="#v-pills-historia-casa-gobierno" role="tab" aria-controls="v-pills-historia-casa-gobierno" aria-selected="false">
                Organismos Constitucionales
          </a>
          <a class="nav-link" id="v-pills-constitucion-simbolos-tab" data-toggle="pill" href="#v-pills-constitucion-simbolos" role="tab" aria-controls="v-pills-constitucion-simbolos" aria-selected="false">
                Entes Autárquicos
          </a>
          <a class="nav-link" id="v-pills-empresas-estado-tab" data-toggle="pill" href="#v-pills-empresas-estado" role="tab" aria-controls="v-pills-empresas-estado" aria-selected="false">
                Empresas del Estado
          </a>
          <a class="nav-link" id="v-pills-turismo-tab" data-toggle="pill" href="#v-pills-turismo" role="tab" aria-controls="v-pills-turismo" aria-selected="false">
                Universidades públicas
          </a>
        </div>
      </div>

    </div>
    <div class="col-sm-9">
      <div class="tab-content" id="v-pills-tabContent">

        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

          <ConsultaOrganismos />

        </div>
        <div class="tab-pane fade show " id="v-pills-organismos-sitios-web" role="tabpanel" aria-labelledby="v-pills-organismos-sitios-web-tab">

          <SitiosWebOrganismos />

        </div>

        <div class="tab-pane fade show" id="v-pills-poder-judicial" role="tabpanel" aria-labelledby="v-pills-poder-judicial-tab">

          <PoderJudicial />

        </div>

        <div class="tab-pane fade show" id="v-pills-empresas-estado" role="tabpanel" aria-labelledby="v-pills-empresas-estado-tab">

          <EmpresasEstado />

        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import ConsultaOrganismos from './ConsultaOrganismos';
import EmpresasEstado from './EmpresasEstado';
import PoderJudicial from './PoderJudicial';
import SitiosWebOrganismos from './SitiosWebOrganismos';

export default {

  components: {
    ConsultaOrganismos,
    EmpresasEstado,
    PoderJudicial,
    SitiosWebOrganismos,
  }

}
</script>

<style>
.containerNavbarLateral {
  background-color: white;
  color: black;
  margin: 2%;

  font-size: 1.0em;
  font-weight: 500;
}

a {
  color: #0fb3f0;
}

.titulo {
  font-size: 1.4em;
  font-weight: 600;

  color: #0fb3f0;

}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  background-color: #0fb3f0;
}
</style>
