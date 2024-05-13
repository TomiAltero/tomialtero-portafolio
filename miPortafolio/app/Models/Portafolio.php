<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portafolio extends Model
{
    use HasFactory;

    protected $table = 'portafolio'; // Nombre de la tabla a la que se refiere el modelo

    protected $fillable = ['nombre', 'email', 'mensaje']; // Campos que se pueden llenar


}
