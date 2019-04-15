<template lang="html">
  <div class="page-holder w-100 d-flex flex-wrap mt-5">
    <div class="container m-3">
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <h1 class="m-auto p-auto">Stream Master</h1>
          <form>
            <fieldset class="form-group">
              <label for="castemaster">Stream Name</label>
              <input type="text" class="form-control" id="castemaster" placeholder="Enter stream Name">
            </fieldset>
            <button type="submit" class="btn btn-primary" @click.prevent="alertm">Add stream</button>
          </form>

        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 p-5 bg-white">
          <h3 class="h3"> Stream List </h3>
          <ul class="list-group">
            <li v-for="stream in streams" class="list-group-item"> {{ stream }} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      streams : [
        'Science',
        'Arts',
        'Vocational'

       ]
    }
  },
  methods : {
    alertm () {
      this.$toasted.show('Cast Is Submittes', {

        action : {
          icon : 'fa-times',
          onClick : (e, toastObject) =>{
            toastObject.goAway(0);
          }
        }
       })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
