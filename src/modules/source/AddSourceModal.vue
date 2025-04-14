<template>
  <modal :modal-msg="msg" modal-size="modal-xl" ref="notification_modal" @onSubmit="submitForm($event)"
         @loading-status="loaderStatusChange" @close="$emit('close')">
    <template v-slot:header>
     Add New Source
    </template>
    <template v-slot:body>
      <div class="row">
        <div class="col-md-12 p-3">
          <div class="row row-cols-2 row-cols-md-4 row-cols-lg-7" >
            <div v-for="item in formData"  class="col p-2"  role="button">
              <div class="btn-source btn-md">
                <input type="radio" class="btn-check"  v-model="sourceItem.cat_id" :name="'cat_'+item.id"
                       :value="item.id" :id="'cat_'+item.id" >
                <label :for="'cat_'+item.id">{{item.name}}</label>

              </div>
            </div>

          </div>
          <hr class="">
          <div class="row row-cols-2 row-cols-md-3">
            <div v-if="getSources" class="col p-2" v-for="item in getSources"  role="button">
              <div class="btn-source btn-lg">
                <input type="radio"  class="btn-check"  v-model="sourceItem.source_id" :name="'src_'+item.id"
                       :value="item.id" :id="'src_'+item.id">
                <label :for="'src_'+item.id">{{item.name}}</label>
              </div>
            </div>

          </div>

        </div>
        <div class="col-md-5">
          <label for="title" class="form-label text-dark fw-semibold">Title</label>
          <Field label="title" type="text" class="form-control border-secondary" id="title" placeholder="title"
                 name="title" rules="required"/>
          <ErrorMessage name="title" class="apbd-v-error"/>
        </div>
        <div class="col-md-5">
          <label for="item_count" class="form-label text-dark fw-semibold">Link Item Count</label>
          <Field label="item_count" type="number" class="form-control border-secondary" id="item_count"
                 name="item_count" rules="required"/>
          <ErrorMessage name="item_count" class="apbd-v-error"/>
        </div>
        <div class="col-md-2">
          <div>
            <label class="form-label text-dark fw-semibold" for="status">Status</label>
          </div>

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="status">
          </div>
        </div>
        <div>
          <CustomField :field-inputs="getFields" :custom-props="inputValue"/>
        </div>
<!--        {{getFields}}-->
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
import {mapStores} from "pinia";
import {useSourceStore} from "@/modules/source/SourceStore";
import sourceItem from "@/modules/source/model/SourceItem";
import CustomField from "@/components/CustomField"
export default {
  name: "AddSourceModal",
  components: {Modal, Field, ErrorMessage, Form,CustomField},
  data() {
    return {
      formData:[],
      sourceItem:{
        cat_id:'',
        source_id:'',
        source_field:''
      },
      inputValue:{}
    }
  },
  mounted() {
    this.formData=this.sourceStore.getSource();
    this.sourceItem= new sourceItem();
    this.sourceItem.cat_id=1;

  },
  computed: {
    ...mapStores(useSourceStore),
    getSources() {
      try {
        this.sourceItem.source_id='';
        return this.formData.find((s) => s.id == this.sourceItem.cat_id).sources;
      } catch (e) {
        return [];
      }
    },
    getFields()
    {
      try {
        var temp_src= this.formData.find((s) => s.id == this.sourceItem.cat_id).sources;
        this.sourceItem.source_field =temp_src.find((f)=> f.id == this.sourceItem.source_id).fields;

        return this.sourceItem.source_field;

      }catch(e)
      {
        return [];
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.upper-card {
  background-color: rgb(63 38 105 / 5%);
  padding: 10px;

  .info-box {
    width: 8.5rem;
    height: 3.5rem;
    text-align: center;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: -1px 4px 15px -10px rgb(196 55 5 / 91%);

    &.active {
      background-color: #96bcf2;
      position: relative;
      color: #fff;

      ::after {
        content: "✔";
        position: absolute;
        font-size: 12px;
        right: 2px;
        bottom: 2px;
        color: #fff;
      }
    }


  }

  .upper-box {
    //width: 8.5rem;
  }
}

.custom-border {
  border: 1px solid #ced4da;
}
</style>