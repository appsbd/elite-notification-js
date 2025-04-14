<template>

  <div class="ps-3 pe-3 pb-3">
    <div class="card m-3">
      <div class="card-header d-flex justify-content-between align-items-center">
        <div>
          <p class="fw-bold fs-4">Videos</p>
          <span>Total Video(s) : 9</span>
        </div>
        <div>
          <p>Subscribe our channel to get new notification video</p>
          <button class="btn" :class="isSubscribed?'btn-success':'btn-primary'" @click="subscribe()"
                  style="float: right;">
            {{ this.isSubscribed ? 'Subscribed' : 'Subscribe' }}
          </button>
        </div>
      </div>
      <div class="card-body p-3">
        <module-loader class="p-3" msg="Loading Data" v-if="module_loading"/>
        <div v-if="!module_loading" class="row row-cols-lg-3 row-cols-md-2 row-cols-1 mt-3 m-2 mb-0">
          <div class=" col mb-2 p-2 border border-light">
            <iframe class="w-100" height="215" src="https://www.youtube.com/embed/yioPIMdsFKQ"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            <span class="text-center fs-6">Elite Notification - basic installation</span>
          </div>
          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215" src="https://www.youtube.com/embed/-q_rjVVf-vw"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            Add WooCommerce Source in Elite Notificaiton.
          </div>
          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215"  src="https://www.youtube.com/embed/GikLZBYvv50"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            Add WordPress Comment in Elite Notification
          </div>
          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215"  src="https://www.youtube.com/embed/xyrwe9003BU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            Add Easy Digital Download Source in Elite Notification
          </div>
          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215"  src="https://www.youtube.com/embed/_IyqwgSG1Pk"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            Add eLeraning Enroll Source in Elite Notification
          </div>
          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215"  src="https://www.youtube.com/embed/Le75L71KKSA"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            Add GIVE Source in Elite Notification
          </div>

          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215"  src="https://www.youtube.com/embed/YZxOoMEjTwg"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
          </div>
          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215"  src="https://www.youtube.com/embed/ORaoN_f9F6A"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
          </div>
          <div class="col mb-2 p-2 border border-light">
            <iframe class="w-100"  height="215"  src="https://www.youtube.com/embed/bcDMspyKUTo"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

          </div>
        </div>

      </div>

    </div>
  </div>


</template>

<script>
import ModuleLoader from "@/components/ModuleLoader";

export default {
  name: "AllVideos",
  components: {ModuleLoader},
  data() {
    return {
      module_loading: false,
      isSubscribed: false
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    subscribe() {
      if (!this.isSubscribed) {
        this.isSubscribed = true;
        var thisobj = this;
        thisobj.$swal.fire({
          text: this.$gettext("Thanks For Subscribed to our channel"),
          type: "success",
          icon: 'success',
          confirmButtonColor: '#dc3545',
          confirmButtonText: this.$gettext("Ok"),

        });
      } else {
        this.isSubscribed = false;
        var thisobj = this;
        thisobj.$swal.fire({
          text: this.$gettext("See you soon"),
          type: "success",
          icon: 'success',
          confirmButtonColor: '#dc3545',
          confirmButtonText: this.$gettext("Ok"),

        });
      }

    }
  }
}
</script>

<style scoped lang="scss">
.card {
  height: 100% !important;
  --bs-card-cap-padding-y: 0.9rem !important;
  --bs-card-bg: #fff !important;
  --bs-card-cap-bg: #ffffff !important;
}

.vtpos-bg {
  background: var(--apbd-theme-color);
}

.vps {
  &.vps-vt-pos {
    vertical-align: middle;
  }
}

</style>