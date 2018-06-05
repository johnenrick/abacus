<template>
  <div>
    <module :api="api" :table_setting="table_setting" :form_setting="form_setting"></module>
  </div>
</template>
<script>
  export default{
    name: '',
    components: {
      'module': require('components/common_module/CommonModule.vue')
    },
    create(){

    },
    mounted(){

    },
    data(){
      let filterSetting = {
        'bus_trip.bus.description': {
          label_colspan: 5
        },
        'bus_trip.route_id': {
          label_colspan: 5
        },
        'conductor_account_id': {
          label_colspan: 5
        }
      }
      let columnSetting = {
        'bus_trip.bus.description': {
          name: 'Bus Description'
        },
        'bus_trip.bus.plate_number': {
          name: 'Plate Number'
        },
        'bus_trip.route.description': {
          name: 'Route'
        },
        total_amount: {
          data_type: 'decimal'
        },
        'conductor': {
          value_function: (entry) => {
            return entry['conductor'] ? entry['conductor']['account_information']['first_name'] + ' ' + entry['conductor']['account_information']['last_name'] : 'None'
          }
        },
        created_at: {
          name: 'Data & Time'
        }
      }
      let tableSetting = {
        filterSetting: filterSetting,
        columnSetting: columnSetting,
        retrieveParameter: {
          with_foreign_table: ['bus_trip', 'conductor']
        }
      }
      let busTrip = {}
      let selectedBusTripID = null
      let routeStopOptionFunction = (instance) => {
        let tempRouteStop = [{
          id: null,
          text: 'Select Bus Trip First'
        }]
        if(selectedBusTripID){
          tempRouteStop = ((selectedBusTripID) ? busTrip[selectedBusTripID] : busTrip[0]).slice(0)
          tempRouteStop.unshift({
            id: null,
            text: tempRouteStop.length ? 'Select Route' : 'No Route Stops'
          })
        }
        instance.setOption(tempRouteStop)
      }
      let formSetting = {
        retrieveParameter: {
          with_foreign_table: ['bus_trip']
        },
        inputs: {
          bus_trip_id: {
            input_name: 'Bus Trip',
            input_type: 'select',
            input_setting: {
              api: 'bus_trip/retrieve',
              api_parameter: {
                with_foreign_table: ['bus', 'route.route_stops']
              },
              default_value: null,
              default_text: 'Select Bus Trip',
              api_option_text_function: (entry) => {
                busTrip[entry['id']] = []// entry['route']['route_stops']
                for(let x in entry['route']['route_stops']){
                  busTrip[entry['id']].push({
                    id: entry['route']['route_stops'][x]['id'],
                    text: entry['route']['route_stops'][x]['name']
                  })
                }
                return entry['bus']['description'] + ' ' + entry['route']['description']
              },
              on_change: (value) => {
                selectedBusTripID = value
              }
            }
          },
          // conductor_account_id: {
          //   input_name: 'Conductor`',
          //   input_type: 'select',
          //   input_setting: {
          //     api: 'account/retrieve',
          //     api_parameter: {
          //       with_foreign_table: ['account_information'],
          //       condition: [{
          //         column: 'account_type_id',
          //         value: 4
          //       }]
          //     },
          //     api_option_text_function: (entry) => {
          //       console.log(entry)
          //       return entry['account_information'] ? entry['account_information']['first_name'] + ' ' + entry['account_information']['last_name'] : entry['username']
          //     },
          //     default_value: null,
          //     default_text: 'Select Conductor'
          //   }
          // },
          start_route_stop_id: {
            input_name: 'Start Route',
            input_type: 'select',
            input_setting: {
              update_on_data_change: (field, formData) => {
                return field === 'bus_trip_id'
              },
              option_function: routeStopOptionFunction
            }
          },
          end_route_stop_id: {
            input_name: 'End Route',
            input_type: 'select',
            input_setting: {
              update_on_data_change: (field, formData) => {
                return field === 'bus_trip_id'
              },
              option_function: routeStopOptionFunction
            }
          },
          passenger_quantity: {
            input_type: 'number'
          },
          total_distance: {
            input_type: 'number',
            muted_text: 'Total distance in kilometer'
          },
          total_amount: {
            input_type: 'number'
          }
        }
      }
      return {
        api: 'bus_trip_ticket',
        table_setting: tableSetting,
        form_setting: formSetting
      }
    },
    props: {
    },
    methods: {
    }

  }
</script>
<style scoped>

</style>
