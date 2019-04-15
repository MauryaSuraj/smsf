<template lang="html">
  <div class="page-holder w-100 d-flex flex-wrap mt-5">
    <div class="container m-3">
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <h1 class="m-auto p-auto">Profile Master </h1>
          <form>
            <fieldset class="form-group">
              <label for="castemaster"></label>
              <div class="row">
                <input type="text"  class="form-control col-md m-2" id="castemaster" placeholder="Enter Name">
                <select class="" name=""  class="form-control col-md m-2">
                  <option value="">Select option</option>
                  <option value="">Admin</option>
                </select>
                <input type="text"  class="form-control col-md m-2" id="se" placeholder="">
                <textarea name="name" rows="8" cols="80" class="form-control"></textarea>
              </div>
            </fieldset>
            <button type="submit" class="btn btn-primary" @click.prevent="alertm">Update Profile</button>
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
      this.$toasted.show('Profile is updated', {

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
