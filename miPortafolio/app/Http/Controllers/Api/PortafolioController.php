<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Portafolio;

class PortafolioController extends Controller
{
    public function index() {
        $portafolio = Portafolio::all();
        
        return $portafolio;
    }


    public function store(Request $request) {

        $new_data = new Portafolio();

        $new_data->nombre = $request->nombre;
        $new_data->email = $request->email;
        $new_data->mensaje = $request->mensaje;

        $new_data->save();

        return response()->json(['mensaje'=> 'Portafolio creado correctamente'], 201);

}
}
