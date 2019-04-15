<template lang="html">
  <div class="">
    <footer class="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 text-center text-md-left text-primary">
            <p class="mb-2 mb-md-0"> {{ company }} &copy; 2018-2020</p>
          </div>
          <div class="col-md-6 text-center text-md-right text-gray-400">
            <p class="mb-0">Design by <a href="http://sapienceweb.com" class="external text-gray-400">{{ company }}</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      company : 'Sapience Infotrain PVT LTD.'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
