<template lang="html">
  <div class="page-holder w-100 d-flex flex-wrap mt-5">
    <div class="container m-3">
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <h1 class="m-auto p-auto">Student Master</h1>
          <form>
            <fieldset class="form-group">
              <label for="castemaster">Session Name</label>
              <div class="row">
                <input type="number" min="1900" max="2099" step="1" class="form-control col-md m-2" id="castemaster" placeholder="Select Session">
                <input type="number" min="1900" max="2099" step="1" class="form-control col-md m-2" id="se" placeholder="Select Session">
              </div>
            </fieldset>
            <button type="submit" class="btn btn-primary" @click.prevent="alertm">Add Student</button>
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
      this.$toasted.show('Student is Admitted', {

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
