<?php

use Illuminate\Database\Seeder;

class NoticiasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('noticias')->insert([
      'titulo' => 'Gestionan financiamiento para obras ambientales en el sector productivo.',
      'descripcion_corta' => 'La Secretaría de Ambiente gestiona financiamiento destinado a industrias y producción primaria para la ejecución de obras ambientales. En ese marco, este martes los titulares del organismo se reunieron con el coordinador provincial del Consejo Federal de Inversiones, Guillermo Gorskin.',
      'src_img' => 'http://cdn.noticiasgob.com.ar/fotos-crop/2018/05/22/l_1527035439.jpg'
      ]);
      DB::table('noticias')->insert([
      'titulo' => 'Vialidad y el Municipio de Libertador San Martín proyectan mejoras en caminos de la zona.',
      'descripcion_corta' => 'Para coordinar mejoras en caminos de esa zona del departamento Diamante y avanzar en un convenio de colaboración mutua, la titular de la Dirección Provincial de Vialidad (DPV), Alicia Benítez, se reunió con el intendente de Libertador San Martín, Raúl Casali.',
      'src_img' => 'http://cdn.noticiasgob.com.ar/fotos-crop/2018/05/23/l_1527076089.jpg'
      ]);
    }
}
