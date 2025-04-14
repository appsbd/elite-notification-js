import {defineStore} from "pinia";
import {apssbd_admin_url}  from "@/libraries/AppsbdURL";
import axios from "axios";
import AxiosHelper from "@/libraries/AppsbdAxiosHelper";
const module_id="POS_Custom_Field";
export const useCustomFieldStore = defineStore('customField',{
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
                    this.gridData = response.data.data.data;
                    this.types=response.data.data.types;
                    return this.gridData;
                })
                .catch(error => {
                    return null;
                }));
        },
        addField: async function (field_object) {
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
        updateField: async function (field_object) {
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
        deleteField: async function (id) {
            return (await AxiosHelper.post(apssbd_admin_url.get_module_url(module_id, "delete"),{id:id})
                .then(response => {
                    this.disableCache(response.data);
                    return response.data;
                })
                .catch(error => {
                    return null;
                }));
        },
        changeMainBranch: async function (field_object) {
            return (await AxiosHelper.post(apssbd_admin_url.get_module_url(module_id, "main-branch"),field_object)
                .then(response => {
                    this.disableCache(response.data);
                    return response.data;
                })
                .catch(error => {
                    return null;
                }));
        },
        getFieldDetails: async function (field_object) {
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