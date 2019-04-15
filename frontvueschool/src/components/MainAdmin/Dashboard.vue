<template lang="html">
  <div class="">
    <div class="page-holder w-100 d-flex flex-wrap">
    <div class="container-fluid px-xl-5">
      <section class="py-5">
        <div class="row">
          <div class="col-xl-3 col-lg-6 mb-4 mb-xl-0">
            <div class="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
              <div class="flex-grow-1 d-flex align-items-center">
                <div class="dot mr-3 bg-violet"></div>
                <div class="text">
                  <h6 class="mb-0">Total Student</h6><span class="text-gray"> 100 </span>
                </div>
              </div>
              <div class="icon text-white bg-violet"><i class="fas fa-users"></i></div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 mb-4 mb-xl-0">
            <div class="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
              <div class="flex-grow-1 d-flex align-items-center">
                <div class="dot mr-3 bg-green"></div>
                <div class="text">
                  <h6 class="mb-0">New Students</h6><span class="text-gray">32</span>
                </div>
              </div>
              <div class="icon text-white bg-green"><i class="fas fa-user-graduate"></i></div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 mb-4 mb-xl-0">
            <div class="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
              <div class="flex-grow-1 d-flex align-items-center">
                <div class="dot mr-3 bg-blue"></div>
                <div class="text">
                  <h6 class="mb-0">Total Teachers</h6><span class="text-gray">400</span>
                </div>
              </div>
              <div class="icon text-white bg-blue"><i class="fas fa-chalkboard-teacher"></i></div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 mb-4 mb-xl-0">
            <div class="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
              <div class="flex-grow-1 d-flex align-items-center">
                <div class="dot mr-3 bg-red"></div>
                <div class="text">
                  <h6 class="mb-0">Fee Collection</h6><span class="text-gray"> $ 45,000</span>
                </div>
              </div>
              <div class="icon text-white bg-red"><i class="fas fa-dollar-sign"></i></div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-4">
        <div class="row mb-4">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <div class="card">
              <div class="card-header">
                <h2 class="h6 text-uppercase mb-0">Toppers Of current Session</h2>
              </div>
              <div class="card-body">
                <p class="text-dark text-bold">List Of Topper's Students</p>
                <ul class="list-group text-dark">
                  <li class="list-group-item" v-for="client in  clients"> {{ client }} </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row align-items-center flex-row">
                  <div class="col-lg-12">
                    <h2 class="mb-0 d-flex align-items-center"><span>Pending </span></h2>
                    <hr><small class="text-muted h4">50+ </small> <button type="button" class="btn btn-outline-primary ml-5">Open</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center flex-row">
                  <div class="col-lg-12">
                    <h2 class="mb-0 d-flex align-items-center"><span>40+</span><span class="dot bg-violet d-inline-block ml-3"></span></h2><span class="text-muted text-uppercase small"> Request</span>
                    <hr><small class="text-muted">Here Will Be Information About the Paper Or person Who Request Any type of test</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="card">
              <div class="card-header">
                <h2 class="h6 text-uppercase mb-0"> Guest Teachers  </h2>
              </div>
              <div class="card-body">
                <p class="text-gray">Teacher Assigned To Class !!</p>
                <ul class="list-group text-gray">
                  <li class="list-group-item" v-for="client in  clients"> {{ client }} </li>
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
  data() {
    return {
      company : 'Sapience Infotrain',
      clients : ['Anvy Maurya','Suraj Maurya','Manoj Joshi','Shubham ','Sapience']
    }
  }
}
</script>

<style lang="css" scoped>
</style>
