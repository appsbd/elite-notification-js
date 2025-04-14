import { defineStore } from 'pinia'
export const useSourceStore=defineStore({
    id:'source',
    state:()=>({
       data:[
           {
               id:1,
               name:'Sales',
               sources:[
                   {
                       id:1,
                       name:'ELITE LICENSER',
                       logo:'Elite Logo',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,{
                               id:2,
                               label:'Test text field2',
                               help_text:'Simple Text2',
                               placeholder:'Test2',
                               rules:'required',
                               type:'T',
                           }, {
                               id:3,
                               label:'Test text field3',
                               help_text:'Simple Text3',
                               placeholder:'Test3',
                               rules:'required',
                               type:'T',
                           }
                       ]
                   },
                   {
                       id:2,
                       name:'WOOCOMMERCE',
                       logo:'Woo Logo ',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {   id:2,
                               label:'Test Radio',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },
                           {
                               id:3,
                               label:'Test Radio2',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],

                           },


                       ]
                   },
                   {
                       id:3,
                       name:'ENVATO',
                       logo:'envato Logo ',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:2,
                               label:'Test text field2',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                            id:3,
                            label:'Test number field',
                            help_text:'Testing Number',
                            is_required:'required',
                            type:'N',
                           },

                       ]
                   },
                    {
                       id:4,
                       name:'Easydigitaldownloads',
                       logo:'easy Logo ',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                            id:2,
                            label:'Test number field',
                            help_text:'Testing Number',
                            is_required:'required',
                            type:'N',
                           },
                           {   id:3,
                               label:'Test Radio',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },

                       ]
                   },
                   {
                       id:5,
                       name:'FastSpring',
                       logo:'fast Logo ',
                       fields:[
                           {
                               id:1,
                               label:'Test text field1',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:2,
                               label:'Test text field2',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:3,
                               label:'Test text field3',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:4,
                               label:'Url',
                               help_text:'https://example.com',
                               rules:'required',
                               type:'U',
                           },
                           {
                               id:5,
                               label:'Test text field5',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                            id:6,
                            label:'Test number field',
                            help_text:'Testing Number',
                            is_required:'required',
                            type:'N',
                           },


                       ]
                   },
               ]
           },
           {
               id:2,
               name:'Comment',
               sources:[
                   {
                       id:1,
                       name:'Wordpress',
                       logo:'wp logo',
                       fields:[]
                   }
               ]
           },
           {
               id:3,
               name:'Review',
               sources:[
                   {
                       id:1,
                       name:'Wp Review',
                       logo:'Wp Logo',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:2,
                               label:'Test number field',
                               help_text:'Testing Number',
                               is_required:'required',
                               type:'N',
                           },
                           {   id:3,
                               label:'Test Radio',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },

                       ]
                   },
                   {
                       id:2,
                       name:'ReviewX',
                       logo:'reviewx',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:2,
                               label:'Test number field',
                               help_text:'Testing Number',
                               is_required:'required',
                               type:'N',
                           },
                           {   id:3,
                               label:'Test Radio',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },

                       ]

                   }
               ]
           },
           {
               id:4,
               name:'Download Stats',
               sources:[
                   {
                       id:1,
                       name:'Wordpress',
                       logo:'wp logo',
                       fields:[]
                   }
               ]
           },
           {
               id:5,
               name:'eLearning',
               sources:[
                   {
                       id:1,
                       name:'Tutor LMS',
                       logo:'Tut Logo',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:2,
                               label:'Test number field',
                               help_text:'Testing Number',
                               is_required:'required',
                               type:'N',
                           },
                           {   id:3,
                               label:'Test Radio',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },

                       ]
                   },

               ]
           },
           {
               id:6,
               name:'Donations',
               sources:[
                   {
                       id:1,
                       name:'Give',
                       logo:'give logo',
                       fields:[
                           {
                               id:1,
                               label:'Test text field',
                               help_text:'Simple Text',
                               placeholder:'Test',
                               rules:'required',
                               type:'T',
                           } ,
                           {
                               id:2,
                               label:'Test number field',
                               help_text:'Testing Number',
                               is_required:'required',
                               type:'N',
                           },
                           {   id:3,
                               label:'Test Radio1',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },
                           {   id:4,
                               label:'Test Radio2',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },
                           {   id:5,
                               label:'Test Radio3',
                               rules:'required',
                               type:'R',
                               options:[
                                   {id:1,val:'test',is_selected:'required'},
                                   {id:2,val:'Select',is_selected:'N'},
                                   {id:3,val:'Test 3',is_selected:'N'},
                               ],
                           },

                       ]
                   }
               ]
           }
       ]
    }),
    getters:{},
    actions: {
        getSource()
        {
              return this.data;
        }
    }
})