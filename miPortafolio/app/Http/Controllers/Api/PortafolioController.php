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
        // Validar los datos de entrada
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'mensaje' => 'required|string|max:255', // Solo necesitas especificar 'required' una vez
        ]);

        // Crear una nueva entrada en la base de datos
        $new_data = new Portafolio();
        $new_data->nombre = $validatedData['nombre'];
        $new_data->email = $validatedData['email'];
        $new_data->mensaje = $validatedData['mensaje'];

        $new_data->save();

        return response()->json(['mensaje'=> 'Portafolio creado correctamente'], 201);
}
}
