<template>

  <div class="ps-3 pe-3 pb-3" >
    <div class="card m-3">
      <div class="card-header">
        <p class="mb-0 text-center fw-semibold">
          <translate>Sale Notification Statistics</translate>
        </p>
      </div>
      <div class="card-body p-3" >
        <module-loader class="p-3" msg="Loading Data" v-if="module_loading"/>
        <div v-if="!module_loading" class="row mt-3 m-2 mb-0">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-4 col mb-2">
                <div class="total_activity">
                  <div class="d-flex align-items-center" v-translate >
                    <span class="fw-semibold me-2 fs-3">31</span>
                    <span class=" vps vps-eye fw-semibold  fs-3"></span>
                  </div>
                  <h5><span class="counter">Total Views</span> </h5>
                </div>
              </div>
              <div class="col-md-4 col mb-2">
                <div class="total_activity total-orders ">
                  <div class="d-flex align-items-center" v-translate >
                    <span class="fw-semibold me-2 fs-3">0</span>
                    <span class=" vps vps-check-circle fw-semibold  fs-3"></span>
                  </div>
                  <h5><span class="counter">Total Clicks</span> </h5>
                </div>
              </div>
              <div class="col-md-4 col mb-2">
                <div class="total_activity by-cash ">
                  <div class="d-flex align-items-center" v-translate >
                    <span class="fw-semibold me-2 fs-3">0.00%</span>
                    <span class=" vps vps-eye fw-semibold  fs-3"></span>
                  </div>
                  <h5><span class="counter">Click Through Rate</span> </h5>
                </div>
              </div>
              <div class="col-md-4 col mb-2">
                <div class="total_activity total-source">
                  <div class="d-flex align-items-center" v-translate >
                    <span class="fw-semibold me-2 fs-3">1</span>
                    <span class=" vps vps-certificate  fs-3"></span>
                  </div>
                  <h5><span class="counter">Number Of Source</span> </h5>
                </div>
              </div>
              <div class="col-md-4 col mb-2">
                <div class="total_activity total-notification ">
                  <div class="d-flex align-items-center" v-translate >
                    <span class="fw-semibold me-2 fs-3">0</span>
                    <span class="vps vps-bell  fs-3"></span>
                  </div>
                  <h5><span class="counter">Number Of Notifications</span> </h5>
                </div>
              </div>
              <div class="col-md-4 col mb-2">
                <div class="total_activity total-view ">
                  <div class="d-flex align-items-center" v-translate >
                    <span class="fw-semibold me-2 fs-3">1</span>
                    <span class="vps vps-bell  fs-3"></span>
                  </div>

                  <h5><span class="counter">Notification Views</span> </h5>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script>
import ModuleLoader from "@/components/ModuleLoader";
export default {
  name: "dashboard",
  components: {ModuleLoader},
  data() {
    return {
      module_loading: false,
    }
  },
  computed: {
  },
 mounted() {

  },

  methods:{
  }

}
</script>

<style scoped lang="scss">
 .card{
   height: 100% !important;
   --bs-card-cap-padding-y: 0.9rem !important;
   --bs-card-bg: #fff !important;
   --bs-card-cap-bg: #ffffff !important;
 }
  .vtpos-bg{
    background: var(--apbd-theme-color);
  }
  .vps {
    &.vps-vt-pos {
      vertical-align: middle;
    }
  }

</style>