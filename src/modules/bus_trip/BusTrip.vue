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
        'bus.description': {
          label_colspan: 5
        },
        'route_id': {
          label_colspan: 5
        },
        'driver_account_id': {
          label_colspan: 5
        }
      }
      let columnSetting = {
        'bus.description': {
          name: 'Bus Description'
        },
        'bus.plate_number': {
          name: 'Plate Number'
        },
        'route.description': {
          name: 'Route'
        },
        'driver_name': {
          value_function: (entry) => {
            console.log(entry)
            return entry['driver'] ? entry['driver']['account_information']['first_name'] + ' ' + entry['driver']['account_information']['last_name'] : 'None1'
          }
        },
        'arrival_datetime': {
          name: 'Time Arrived'
        }
      }
      let tableSetting = {
        filterSetting: filterSetting,
        columnSetting: columnSetting,
        retrieveParameter: {
          with_foreign_table: ['bus', 'route', 'driver']
        }
      }
      let formSetting = {
        inputs: {
          bus_id: {
            input_name: 'Bus',
            input_type: 'select',
            input_setting: {
              api: 'bus/retrieve',
              default_value: null,
              default_text: 'Select Bus'
            }
          },
          driver_account_id: {
            input_name: 'Driver',
            input_type: 'select',
            input_setting: {
              api: 'account_information/retrieve',
              api_parameter: {
                with_foreign_table: ['account'],
                condition: [{
                  column: 'account.account_type_id',
                  value: 3
                }]
              },
              api_option_text_function: (entry) => {
                return entry['first_name'] + ' ' + entry['full_name']
              },
              default_value: null,
              default_text: 'Select Driver'
            }
          },
          route_id: {
            input_name: 'Route',
            input_type: 'select',
            input_setting: {
              api: 'route/retrieve',
              default_value: null,
              default_text: 'Select Route'
            }
          }
        }
      }
      return {
        api: 'bus_trip',
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
