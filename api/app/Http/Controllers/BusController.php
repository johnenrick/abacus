<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bus as DBItem;

class BusController extends APIController
{
  function __construct(){
    $this->model = new DBItem();
    $this->APIControllerConstructor();
  }
}
