<template>
  <div class="container-fluid p-3">
    <div class="row row-cols-1 g-2">
      <div class="col">
        <div class="card m-2">
          <div class="card-body ">
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary btn-sm" @click="reload">Reload</button>
              <div class="d-flex justify-content-around gap-1">
                <button class="btn btn-info btn-sm" @click="showAddModal=true">
                  <i class="vps vps-plus"></i>
                  Add New
                </button>
                <button class="btn btn-success btn-sm" @click="downloadCSV">
                  <i class="vps vps-download"></i>
                  Download CSV
                </button>
                <button class="btn btn-info btn-sm" @click="expandTable">
                  <i class="vps vps-maximize"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="mt-1">
          <elite-grid
              :is-rounded="false"
              :is-group-separate-head="true"
              action-width="200px"
              :columns="data_column"
              :show-loader="isShowLoader"
              :show-header="false"
              :show-action-column="true"
              :grid-data="this.demoNotification"
              :is-show-row-index-column="true"
              @load-data="eliteGridLoadData"
          >
            <template v-slot:slot-loader>
              <APBDGridLoader msg="Demo Notification Loading ..."/>
            </template>
            <template v-slot:slot-no-record>
              {{ this.$translateGettext('No %{type} found', {type: 'Notification'}) }}
            </template>
            <template v-slot:actionProperty="slotProps">
              <div class="d-flex gap-1 justify-content-center">
                <button class="btn btn-sm btn-theme  " type="button" @click="editNotification(slotProps.rowitem.id)">
                  <i class="vps vps-edit1 me-1"></i> Edit
                </button>
                <button class="btn btn-sm btn-danger " type="button"
                        @click="deleteNotification(slotProps.rowitem.id)"><i class=" vps vps-trash-21 me-1"></i>Delete
                </button>
              </div>
            </template>
          </elite-grid>
        </div>
      </div>
    </div>
  </div>
  <AddNotificationModal v-if="showAddModal" @close="closeModal"/>
</template>

<script>
import EliteGrid from '@appsbd/vue3-elite-grid';
import {EliteColumnModel} from '@appsbd/vue3-elite-grid';
import APBDGridLoader from "@/components/APBDGridLoader";
import AddNotificationModal from "@/modules/notification/AddNotificationModal";

export default {
  name: "AllNotification",
  components: {AddNotificationModal, EliteGrid, APBDGridLoader},
  data() {
    return {
      isShowLoader: false,
      showAddModal: false,
      demoNotification: {
        data: null,
        page: 1,
        total: 1,
        records: 1,
        limit: 10,
        rowdata: [
          {
            name: 'Discount',
            notification_type: 'Comment',
            notification_status: 'Active',
            notification_view: 10,
            notification_click: 0
          }
        ]
      },
      data_column: [
        EliteColumnModel.getColumn({
          name: "name",
          title: "Title",
          width: '300px',
          is_sortable: false,
          align: 'center',
          title_align: 'center'
        }),
        EliteColumnModel.getColumn({
          name: "notification_type",
          title: "Type",
          width: '200px',
          is_sortable: false,
          align: 'center',
          title_align: 'center'
        }),
        EliteColumnModel.getColumn({
          name: "notification_status",
          title: "Status",
          width: '150px',
          is_sortable: false,
          align: 'center',
          title_align: 'center'
        }),
        EliteColumnModel.getColumn({
          name: "notification_view",
          title: "View",
          width: '150px',
          is_sortable: false,
          align: 'center',
          title_align: 'center'
        }),
        EliteColumnModel.getColumn({
          name: "notification_click",
          title: "Click",
          width: '150px',
          is_sortable: false,
          align: 'center',
          title_align: 'center'
        }),

      ],
    }
  },
  methods: {
    getDemoNotification() {
    },
    eliteGridLoadData(gparam) {
      this.demoNotification.limit = gparam.limit;
      this.demoNotification.page = gparam.page;

    },
    deleteNotification(id) {
    },
    editNotification(id) {
    },
    reload() {
    },
    downloadCSV() {
    },
    expandTable() {
    },
    closeModal() {
      this.showAddModal = false;
    }
  }
}
</script>

<style scoped lang="scss">
</style>