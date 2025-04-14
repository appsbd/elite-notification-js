<template>
  <modal :modal-msg="msg" modal-size="modal-lg" ref="notification_modal" @onSubmit="submitForm($event)"
         @loading-status="loaderStatusChange" @close="$emit('close')">
    <template v-slot:header>
      Add New Notification
    </template>
    <template v-slot:body>
      <div class="row">
        <div class="col-md-12 mt-2">
          <label for="inputNotificationTitle" class="form-label ">Title</label>
          <Field label="Title" type="text" class="form-control " id="inputNotificationTitle"
                 placeholder="Title" name="notificationData" rules="required"/>
          <ErrorMessage name="notificationData" class="apbd-v-error"/>
        </div>
        <div class="col-md-6 mt-2">
          <label for="imageUrl" class="form-label ">Image Url</label>
          <Field class="form-control" type="file" id="imageUrl" name="imageUrl" placeholder="Img Url"/>
<!--          <ErrorMessage name="imageUrl" class="apbd-v-error"/>-->

        </div>
        <div class="col-md-6 mt-2">
          <label for="linkUrl" class="form-label ">link Url</label>
          <Field label="Link Url" type="text" class="form-control" id="linkUrl" placeholder="Link Url"
                 name="linkUrl" rules="required"/>
          <ErrorMessage name="linkUrl" class="apbd-v-error"/>
        </div>
        <div class="col-md-12 mt-2">
          <label for="description" class="form-label">Description</label>
          <div class="form-floating">
            <textarea placeholder="Notification Description" class="form-control p-2 " id="description"
                      name="description" ></textarea>
            <label for="description">Notification Description</label>
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <label for="footerText" class="form-label">Footer Text</label>
          <Field label="Footer Text" type="text" class="form-control" id="footerText"
                 placeholder="Notification By" name="footerText" rules="required"/>
          <ErrorMessage name="footerText" class="apbd-v-error"/>
        </div>
        <div class="col-md-6 mt-2">
          <label for="date" class="form-label">Operation Date</label>
          <Field label="Operation Date" type="text" class="form-control" id="date"
                 placeholder="Operation Date" name="date" rules="required"/>
          <ErrorMessage name="date" class="apbd-v-error"/>
        </div>
        <div class="col-md-6 mt-2">
          <label class="form-label">Type</label>
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="statusRadios" id="sales" value="S" rules="required"
                     label="Type" checked/>
              <label class="form-check-label" for="sales" v-translate>
                Sales
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="statusRadios" id="comment" value="C" rules="required"
                     label="Type"/>
              <label class="form-check-label" for="comment" v-translate>
                Comment
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="statusRadios" id="other" value="O" rules="required"
                     label="Type"/>
              <label class="form-check-label" for="other" v-translate>
                Other
              </label>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-label">Status</div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="status">
          </div>
        </div>
      </div>
      <label class=" mt-2">Notification Style</label>
      <div class="row row-cols-2 row-cols-sm-3 ">
        <div v-for="item in notifications" class="col p-2" role="button">
          <div class="btn-source btn-md">
            <input type="radio" class="btn-check" v-model="notification_style_id" :name="'ntfc_'+item.id"
                   :value="item.id" :id="'ntfc_'+item.id">
            <label :for="'ntfc_'+item.id">
              <img class="d-inline img-fluid h-auto" :src="item.src">
            </label>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <button type="submit" class="btn btn-sm btn-success" data-dismiss="modal">Save</button>
      <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" @click="$emit('close')">Cancel</button>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";
import {Form, Field, ErrorMessage} from 'vee-validate';

export default {
  name: "AddNotificationModal",
  components: {Modal, Field, ErrorMessage, Form},
  data() {
    return {
      notification_style: '',
      notification_style_id: '',
      notifications: [
        {
          id: 1,
          src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/notification-styles/apbd-snf-style1.png"
        },
        {
          id: 2,
          src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/notification-styles/apbd-snf-style2.png"
        },
        {
          id: 3,
          src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/notification-styles/apbd-snf-style3.png"
        },
        {
          id: 4,
          src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/notification-styles/apbd-snf-style4.png"
        },
        {
          id: 5,
          src: "http://localhost/vitepos_dev_adminpanel/wp-content/plugins/elite-notification/images/notification-styles/apbd-snf-style5.png"
        }
      ]
    }
  },
  methods: {
    clickImage() {
      alert('HI');
      console.log(this.notification_style);
    }
  },
}
</script>

<style scoped lang="scss">

</style>