import {defineStore} from "pinia";
import {apssbd_admin_url}  from "@/libraries/AppsbdURL";
import axios from "axios";
import AxiosHelper from "@/libraries/AppsbdAxiosHelper";
const module_id="POS_Message";
export const useMessageStore = defineStore('message',{
    state:()=>({
        loadkey:null,
        gridData:null,
        types:null,
        resData:{}
    }),
    getters:{
        /*getCountries(){
            return
        }  */
    },
    actions: {
        disableCache:async function (response) {
            if(response.status) {
                this.loadkey = null;
            }
        },
        getData: async function (params) {
            let uniqueId=AxiosHelper.crc32(params);
            if(this.loadkey && uniqueId==this.loadkey){
                return this.gridData;
            }
            return (await AxiosHelper
                .post(apssbd_admin_url.get_module_url(module_id, "data"), params)
                .then(response => {
                    this.loadkey = uniqueId;
                    this.gridData = response.data;
                    return this.gridData;
                })
                .catch(error => {
                    return null;
                }));
        },
        add: async function (field_object) {
            return (await AxiosHelper.post(apssbd_admin_url.get_module_url(module_id, "add"),field_object)
                .then(response => {
                    // this.firstLoaded = true;
                    //  this.gridData = response.data;
                    this.disableCache(response.data);
                    return response.data;
                })
                .catch(error => {
                    return null;
                }));
        },
        update: async function (field_object) {
            return (await AxiosHelper.post(apssbd_admin_url.get_module_url(module_id, "edit"),field_object)
                .then(response => {
                    // this.firstLoaded = true;
                    //  this.gridData = response.data;
                    this.disableCache(response.data);
                    return response.data;
                })
                .catch(error => {
                    return null;
                }));
        },
        delete: async function (id) {
            return (await AxiosHelper.post(apssbd_admin_url.get_module_url(module_id, "delete"),{id:id})
                .then(response => {
                    this.disableCache(response.data);
                    return response.data;
                })
                .catch(error => {
                    return null;
                }));
        },
        changeStatus: async function (id) {
            return (await AxiosHelper.post(apssbd_admin_url.get_module_url(module_id, "change-status"),{id:id})
                .then(response => {
                    this.disableCache(response.data);
                    return response.data;
                })
                .catch(error => {
                    return null;
                }));
        },
        getDetails: async function (field_object) {
            return (await AxiosHelper.post(apssbd_admin_url.get_module_url(module_id, "details"),field_object)
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    return null;
                }));
        },


    }

})