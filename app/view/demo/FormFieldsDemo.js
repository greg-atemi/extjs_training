Ext.define('MsTraining.view.demo.FormFieldsDemo',{
    extend:'Ext.window.Window',
    xtype:'formfieldsdemo',
    title: "My Custom Title",
    controller:'formfieldsdemocontroller',
    height: 600,
    width: 600,
    autoShow: true,
    closable: true,  
    draggable: false,
    modal: true,
    items:[
        {
            xtype:'form',
            reference: 'formdemo',
            defaults:{
                anchor:'98%'
            },
            items:[
                {
                    boxLabel: 'Remember Me',
                    xtype:'checkbox',
                    name: 'rememberMe',
                },
                {
                    xtype:'combobox',
                    fieldLabel: 'Gender',
                    name:'gender',
                    store:{
                        type:'genders'
                    },
                    valueField:'id',
                    displayField:'value',
                    allowBlank: false,

                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Posts',
                    name: 'postId',
                    store: {
                        type: 'posts'
                    },
                    valueField: 'id',
                    displayField: 'title',
                    allowBlank: false,

                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'From',
                    allowBlank:false,
                    name: 'fromDate',
                    format:'Y-m-d',
                    maxValue: new Date()  // limited to the current date or prior
                },
                // {
                //     xtype: 'filefield',
                //     name: 'photo',
                //     fieldLabel: 'Photo',
                //     msgTarget: 'side',
                //     allowBlank: false,
                //     buttonText: 'Select Photo...'
                // },
                {
                    xtype:'htmleditor',
                    name:'body',
                    fieldLabel:'Body',
                }
              
            ]
        }
    ],
    buttons:[
        {
            text:'Save',
            handler:'onSaveClick'
        }
    ]
})