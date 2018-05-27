<?php

use Illuminate\Database\Seeder;

class OrganismosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('organismos')->insert([
      'nombre' => 'Dirección General de Informática',
      'organismo_padre' => 'Secretaría de Modernización del Estado, Ciencia y Tecnología.',
      'director' => 'César Raúl García',
      'url' => 'https://www.entrerios.gov.ar/dgin/index.php'
      ]);
        DB::table('organismos')->insert([
      'nombre' => 'Dirección General de Recursos Humanos',
      'organismo_padre' => 'Secretaría de Modernización del Estado, Ciencia y Tecnología.',
      'director' => 'Rosario Román Jalil',
      'url' => 'https://www.entrerios.gov.ar/dgrrhh/index.php'
      ]);
        DB::table('organismos')->insert([
      'nombre' => 'Secretaría de Energía',
      'organismo_padre' => 'Ministerio de Planeamiento, Infraestructura y Servicios.',
      'director' => 'González Jorge Daniel',
      'url' => 'http://www.entrerios.gov.ar/secretariadeenergia'
      ]);
        DB::table('organismos')->insert([
      'nombre' => 'Secretaría de Justicia',
      'organismo_padre' => 'Ministerio de Gobierno y Justicia.',
      'director' => 'Biaggini Pablo Alejandro',
      'url' => 'http://www.entrerios.gov.ar/secjusticia'
      ]);
        DB::table('organismos')->insert([
      'nombre' => 'Secretaría de Inversión Pública y Desarrollo territorial',
      'organismo_padre' => 'Ministerio de Pleaneamiento, Infraestructura y Servicios.',
      'director' => 'Albornoz Elda Graciela',
      'url' => 'http://www.entrerios.gov.ar/secjusticia'
      ]);
    }
}
