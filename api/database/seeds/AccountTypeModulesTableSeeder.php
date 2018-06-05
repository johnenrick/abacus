<?php

use Illuminate\Database\Seeder;

class AccountTypeModulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB:: table('account_type_modules')->truncate();
      DB:: table('account_type_modules')->insert(array(
        // Admin
        array('id' => 1, 'module_id' => '', 'account_type_id' => ''),
        array('id' => 1, 'module_id' => '', 'account_type_id' => ''),
        array('id' => 1, 'module_id' => '', 'account_type_id' => '')
        // Cashier
        // Server
      ))
    }
}
