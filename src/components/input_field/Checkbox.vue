<template>
  <div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="hidden"
        v-bind:name="input_name"
        v-bind:value="form_data[db_name] ? form_data[db_name] : defaultValue"
        >
        <input class="form-check-input" type="checkbox"
        v-bind:value="form_data[db_name] ? form_data[db_name] : defaultValue"
        @change="valueChanged"
        v-bind:readonly="form_status === 'view'"
        >
      </label>
    </div>
  </div>
</template>
<script>
  export default{
    name: '',
    create(){

    },
    mounted(){
      this.defaultValue = this.default_value ? this.default_value : false
    },
    data(){
      return {
        defaultValue: false
      }
    },
    props: {
      input_setting: Object,
      default_value: String,
      input_name: String,
      field_name: String,
      db_name: String,
      form_data: Object,
      form_status: String
    },
    methods: {
      valueChanged(e){
        $(e.target).val()
        this.$emit('change', this.field_name, $(e.target).is(':checked'))
      }
    }

  }
</script>
<style scoped>

</style>
