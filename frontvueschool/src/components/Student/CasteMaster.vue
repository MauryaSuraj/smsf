<template lang="html">
  <div class="page-holder w-100 d-flex flex-wrap mt-5">
    <div class="container m-3">
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <h1 class="m-auto p-auto">Caste Master</h1>
          <form>
            <fieldset class="form-group">
              <label for="castemaster">Caste Name</label>
              <input type="text" class="form-control" id="castemaster" placeholder="Enter Caste">
            </fieldset>
            <button type="submit" class="btn btn-primary" @click.prevent="alertm">Add Caste</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
