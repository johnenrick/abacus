<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BusTripTicket as DBItem;

class BusTripTicketController extends APIController
{
  function __construct(){
    $this->model = new DBItem();
    $this->foreignTable = ['bus_trip', 'conductor'];
    $this->notRequired = array('discount_id', 'discount_amount', 'status', 'remarks');
    $this->replaceSessionData = array(
      'conductor_account_id' => 'user_id'
    );
  }
  function dailySalesReport(Request $request){
    $this->aliased = [
      'total_total_amount' => 'sum(total_amount)',
      'date' => 'CAST(created_at AS DATE)'
    ];
    $this->groupByColumn = array('CAST(created_at AS DATE)');
    return $this->retrieveEntry($request->all());
  }
}
