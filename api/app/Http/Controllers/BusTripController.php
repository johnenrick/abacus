<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BusTrip as DBItem;

class BusTripController extends APIController
{
  function __construct(){
    $this->model = new DBItem();
    $this->APIControllerConstructor();
    $this->foreignTable = ['bus', 'driver', 'bus_trip_ticket'];
    $this->notRequired = array('arrival_datetime', 'remarks');
  }
  function routeSalesSummary(Request $request){
    $requestArray = $request->all();
    $this->aliased = [
      'total_amount' => 'sum(bus_trip_tickets.total_amount)',
    ];
    $requestArray['with_foreign_table'] = array('route');
    $this->groupByColumn = array('route_id');
    $this->leftJoinChildTable = array('bus_trip_tickets' => array());
    $this->select = array('route_id');
    // $this->select = array('route_id', 'bus_trip_tickets.total_amount', 'bus_trip_tickets.created_at');
    return $this->output($this->retrieveEntry($requestArray));
  }
}
