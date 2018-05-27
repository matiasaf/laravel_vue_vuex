<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Organismo;

class OrganismoController extends Controller
{
    public function getOrganismosByNombreAndAutoridad(Request $request)
    {

        $organismos = Organismo::where('nombre','like', '%'.$request->nombre.'%')
                                 ->where('director','like', '%'.$request->director.'%')
                                 ->get();

        return response()->json($organismos);
    }
}
