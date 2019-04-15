<template lang="html">
  <div class="">
    <div class="page-holder w-100 d-flex flex-wrap mt-5">
    <div class="container-fluid px-xl-5">
      <section class="mb-4">
        <div class="row mb-4">
          <div class="col-lg-12 col-md-12 mb-4 mb-lg-0">
            <div class="card">
              <div class="card-header">
                <h2 class="h6 text-uppercase mb-0">Role </h2>
              </div>
              <div class="card-body">
                <p class="text-dark text-bold">  </p>
                <ul class="list-group text-dark">
                  <li class="list-group-item" v-for="client in  clients"> {{ client }} <button type="button" class="btn btn-primary ml-5 float-right" @click="assign"> <i class="fas fa-user-edit fa-2x m-1"></i> Asign </button> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
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
  methods : {
    assign : function() {
      alert('Im Clicked ');
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  color:red;
}
</style>
