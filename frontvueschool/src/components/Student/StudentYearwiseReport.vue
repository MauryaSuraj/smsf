<template lang="html">
  <div class="page-holder w-100 d-flex flex-wrap mt-5">
    <div class="container m-3">
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <h1 class="m-auto p-auto"> Student Year Wise Report </h1>
          <form>
            <fieldset class="form-group">
              <div class="row">
                <input type="number" min="1900" max="2100" step="1" class="form-control col-md m-3" id="castemaster"  placeholder="Select Start Year ">
                <input type="number" min="1900" max="2100" step="1" class="form-control col-md m-3" id="castemaster" placeholder="Select End Year">
                <button type="submit" class="btn btn-primary col-md m-3" @click.prevent="alertm">Get Report</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 p-2 bg-white">
          <h1 class="mx-0 p-auto ">Generated List Based On Query</h1>
          <table class="table table-reponsive">
            <thead class=" text-white bg-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Action</th>
                <th scope="col">Assign Role</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" n in 5 ">
                <th scope="row">{{ n }}</th>
                <td>Suraj Maurya</td>
                <td>Full Stack</td>
                <td>8851951226</td>
                <td>surajmaurya450@gmail.com</td>
                <td>Saket</td>
                <td>jan 12, 1900</td>
                <td><i class="far fa-edit text-primary" ></i> <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog text-success"></i></button> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data (){
    return{

    }
  },
  methods : {
    alertm () {
      this.$toasted.show('Report Is Generated', {

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
