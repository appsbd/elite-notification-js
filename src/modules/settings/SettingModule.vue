<template>
  <div class="container-fluid p-3">
    <app-tabs>
      <app-tab title="General Settings">
        <div class="row g-setting">
          <div class="col-md-8 mt-2">
            <label class="form-label">Visibility Control</label>
            <div class="d-flex flex-sm-row flex-column align-items-sm-center gap-2 ">
              <div class="form-check form-switch ">
                <input class="form-check-input" type="checkbox" role="switch" id="phone">
                <label class="ms-2 form-check-label" for="phone">Hide In Mobile</label>
              </div>
              <div class="form-check form-switch">
                <input class=" form-check-input" type="checkbox" role="switch" id="tablet">
                <label class="ms-2 form-check-label" for="tablet">Hide In Tablet</label>
              </div>
            </div>
          </div>
          <div class="col-md-5 mt-2">
            <label for="position" class="form-label"> Position</label>
            <div>
              <Field label="Product Status" id="position" rules="required" class="form-select" name="position">
                <image-radio-input max-img-width="100%" padding="0" icon-size="35px" :options="position_opt"
                                   name="position">

                </image-radio-input>
              </Field>
              <ErrorMessage name="position" class="apbd-v-error"/>
            </div>
          </div>
          <div class="col-md-7 mt-2">
            <label class="form-label">Close Notification</label>
            <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="notification" id="notificationY" value="Y"
                       checked>
                <label class="form-check-label" for="notificationY">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="notification" id="notificationN" value="N">
                <label class="form-check-label" for="notificationN">No</label>
              </div>
            </div>
            <span class="text-warning">If visitor click on a notification, then the notification won't show again in
              the browser</span>
          </div>
          <div class="col-md-5 mt-2">
            <label for="notificationNum" class="form-label">How many notification will show</label>
            <div class="input-group">
              <input type="number" aria-label="First name" id="notificationNum" class="form-control">
              <div class="form-check form-switch form-control" style="margin-bottom: 0px !important">
                <input class="form-check-input" type="checkbox" id="isDummy">
                <label class="ms-2 form-check-label" for="isDummy">Enable Dummy Data</label>
              </div>
            </div>
            <span class="text-warning">Source priority first, then dummy data</span>
          </div>
          <div class="col-md-3 mt-2">
            <label class="form-label" for="newTab">Link Properties</label>
            <div class="form-check form-switch form-control ">
              <input class="form-check-input" type="checkbox" id="newTab">
              <label class="ms-2 form-check-label" for="newTab">Open In New Tab</label>
            </div>
          </div>
          <div class="col-md-2 mt-2">
            <label class="form-label">Show Remove Button?</label>
            <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="removeButton" id="removeY" value="Y" checked>
                <label class="form-check-label" for="removeY">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="removeButton" id="removeN"
                       value="N">
                <label class="form-check-label" for="removeN">No</label>
              </div>
            </div>
          </div>
          <div class="col-md-2 mt-2">
            <label class="form-label form-label">Is Loop?</label>
            <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="isloop" id="loopYes"
                       value="Y" checked>
                <label class="form-check-label" for="loopYes">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="isloop" id="loopNo"
                       value="N">
                <label class="form-check-label" for="loopNo">No</label>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <label class="form-label" for="delayTime">Delay Time</label>
            <input type="range" v-model="delay_time" min="2" max="300" id="delayTime" class="form-range">
            <div class="d-flex align-items-center justify-content-between">
              <span>2 sec</span>
              <span>{{ delay_time }} sec</span>
              <span>300 sec</span>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <label class="form-label" for="intervalTime">Interval Time</label>
            <input type="range" v-model="interval_time" min="2" max="60" id="intervalTime" class="form-range">
            <div class="d-flex align-items-center justify-content-between">
              <span>2 sec</span>
              <span>{{ interval_time }} sec</span>
              <span>60 sec</span>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <label class="form-label" for="displayTime">Display Time</label>
            <input type="range" v-model="display_time" min="1" max="300" id="displayTime" class="form-range">
            <div class="d-flex align-items-center justify-content-between">
              <span>1 sec</span>
              <span>{{ display_time }} sec</span>
              <span>300 sec</span>
            </div>
          </div>
          <div class="col-md-12 mt-2">
            <label for="entrance" class="form-label">Display Animation Entrance</label>
            <div>
              <Field id="entrance" rules="required" class="form-select" name="entrance" label="Entrance Animation">
                <image-radio-input max-img-width="100%" padding="5px" icon-size="35px" :options="entrance_animation"
                                   name="entrance">

                </image-radio-input>
              </Field>
              <ErrorMessage name="entrance" class="apbd-v-error"/>
            </div>
          </div>
          <div class="col-md-12 mt-2">
            <label for="exit" class="form-label">Exit Animation </label>
            <div>
              <Field id="exit" rules="required" class="form-select" name="entrance" label="Exit Animation">
                <image-radio-input max-img-width="100%" padding="5px" icon-size="35px" :options="exit_animation"
                                   name="exit">

                </image-radio-input>
              </Field>
              <ErrorMessage name="exit" class="apbd-v-error"/>
            </div>
          </div>
          <div class="col-md-8 mt-2">
            <div class="card">
              <div class="card-header d-flex justify-content-between">
                <span>Source Setting </span>
                <span class="btn btn-xs btn-primary p-1 ">Update Item From Sources</span>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-5">
                    <label class="form-label">Scheduler Types</label>
                    <div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="notification" id="wp" value="wp"
                               checked>
                        <label class="form-check-label" for="notificationY">WP Scheduler</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="notification" id="cronjob" value="cronjob">
                        <label class="form-check-label" for="notificationN">Cronjob</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <label class="form-label" for="interval">Source Update Interval</label>
                    <div class="input-group">
                      <span class="input-group-text visibility-item">Interval</span>
                      <input type="number" class="form-control" id="interval">
                      <select class="form-control text-center" >
                        <option selected>Minute(s)</option>
                        <option value="1">Hour(s)</option>
                        <option value="2">Day(s)</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Enable Brand</label>
                    <div class="form-check form-switch form-control">
                      <input class=" form-check-input" type="checkbox" role="switch">
                      <label class="ms-2 form-check-label" for="isDummy">Please turn on brand : By AppsBd</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <div class="card">
              <div class="card-header d-flex justify-content-between">
                <span> Scheduler execution log </span>
                <span class="btn btn-xs btn-primary p-1 ">Reload</span>
              </div>
              <div class="card-body">
                <p>Source update by WP Scheduler
                  at April 5, 2023 4:52 am</p>
              </div>
            </div>
          </div>
        </div>
      </app-tab>
      <app-tab title="pro version">
        <p><i class="vps vps-asterisk-2 me-2"></i>Coming Soon....</p>
        <p><i class="vps vps-star-o1 me-2"></i>Thanks for being with us! </p>
      </app-tab>
    </app-tabs>
  </div>
</template>

<script>
import {mapStores} from 'pinia'
import {useSettingsStore} from "@/stores/settings";
import AppTabs from "@/components/AppTab/AppTabs";
import AppTab from "@/components/AppTab/AppTab";
import ImageRadioInput from "@/components/ImageRadioInput";
import {Field, ErrorMessage, Form} from "vee-validate";

export default {
  name: "SettingModule",
  components: {ImageRadioInput, AppTab, AppTabs, Field},
  data() {
    return {
      isGeneralSetting: true,
      position: '',
      display_time: 1,
      interval_time: 2,
      delay_time: 2,
      animation: '',
      position_opt: [
        {
          label: "Left Top",
          val: "lt",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/positions/lt.png"
        },
        {
          label: "Left Bottom",
          val: "lb",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/positions/lb.png"
        },
        {
          label: "Right Top",
          val: "rt",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/positions/rt.png"
        },
        {
          label: "Right Bottom",
          val: "rb",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/positions/rb.png"
        },
      ],
      entrance_animation: [
        {
          label: "None",
          val: "n",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "BounceIn",
          val: "bi",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "BounceInRight",
          val: "bir",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeIn",
          val: "fi",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeInleft",
          val: "fil",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeInRight",
          val: "flr",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FlipInX",
          val: "flx",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FlipInY",
          val: "fly",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeInUp",
          val: "fiu",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "ZoomIn",
          val: "zi",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "SlideInDown",
          val: "sid",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "SlideInUp",
          val: "siu",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        }
      ],
      exit_animation: [
        {
          label: "None",
          val: "n",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "BounceOut",
          val: "bi",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "BounceOutRight",
          val: "bir",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeOut",
          val: "fi",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeOutleft",
          val: "fil",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeOutRight",
          val: "flr",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FlipOutX",
          val: "flx",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FlipOutY",
          val: "fly",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "FadeOutUp",
          val: "fiu",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "ZoomOut",
          val: "zi",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "SlideOutDown",
          val: "sid",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        },
        {
          label: "SlideOutUp",
          val: "siu",
          img_src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/apbd-snf-animation.png"
        }
      ]

    }
  },
  computed: {
    ...mapStores(useSettingsStore),
  },
  methods: {
    selectSetting() {
      this.isGeneralSetting = !this.isGeneralSetting;
    }
  }
}
</script>

<style lang="scss">
.g-setting{
  >div{
    margin-top: .5rem;
  }
}
</style>