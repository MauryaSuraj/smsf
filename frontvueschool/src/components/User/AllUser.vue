<template lang="html">
  <div class="page-holder w-100 d-flex flex-wrap mt-5">
    <div class="container m-3">
      <div class="row">
        <div class="col-md-12 my-3">
          <button type="button" class="btn btn-primary float-right" @click.prvent="popup"> Add New User <i class="fas fa-plus  m-auto p-auto p-2"></i> </button>
          <button type="button" class="btn btn-primary float-left" @click.prvent="popup"> Export / Import  <i class="fas fa-file-export"></i> </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <h1 class="m-auto p-auto">All Users</h1>
          <table class="table">
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="far fa-edit text-primary"></i>  <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog  text-success"></i></button> </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="far fa-edit text-primary"></i>  <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog  text-success"></i></button> </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="far fa-edit text-primary"></i>  <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog  text-success"></i></button> </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="far fa-edit text-primary"></i>  <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog  text-success"></i></button> </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="far fa-edit text-primary"></i>  <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog  text-success"></i></button> </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="far fa-edit text-primary"></i>  <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog  text-success"></i></button> </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="far fa-edit text-primary"></i>  <i class="fas fa-trash-alt text-danger"></i></td>
                <td> <button type="button" class="btn" @click="asignRole"><i class="fas fa-users-cog  text-success"></i></button> </td>
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
  data () {
    return {
      clients : ['Anvy Maurya','Suraj Maurya','Manoj Joshi','Shubham ','Sapience']
    }
  },
  methods :{
    popup : function () {
      alert(' Add New Student ');
    },
    asignRole(){
      alert('Role');
    }
  }

}
</script>

<style lang="css" scoped>

</style>
