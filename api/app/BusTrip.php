<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusTrip extends APIModel
{
    public function bus(){
      return $this->belongsTo('App\Bus');
    }
    public function route(){
      return $this->belongsTo('App\Route');
    }
    public function driver(){
      return $this->belongsTo('App\Account', 'driver_account_id')->with('account_information');
    }
    public function bus_trip_ticket(){
      return $this->hasMany('App\BusTripTicket');
    }
}
