Ext.define('MsTraining.view.validations.FormFieldVTypeValidation',{
    extend:'Ext.window.Window',
    xtype:'formfieldvtypevalidation',
    title: "VTypes",
    height: 600,
    width: 600,
    autoShow: true,
    closable: true,
    modal: true,
    items:[
        {
            xtype:'form',
            layout:'form',
            items:[
                {
                    fieldLabel: 'Email Address',
                    xtype:'textfield',
                    name:'email',
                    vtype:'email'
                },
                 {
                    fieldLabel: 'Username',
                    xtype:'textfield',
                    name:'username',
                    vtype:'alpha'
                },
                {
                    fieldLabel: 'Body',
                    xtype: 'textfield',
                    name: 'body',
                    vtype: 'alphanum'
                },
                {
                    fieldLabel: 'Github Link',
                    xtype: 'textfield',
                    name: 'github',
                    vtype: 'url'
                },
                {
                    fieldLabel: 'Check in time',
                    xtype: 'textfield',
                    name: 'checkin',
                    vtype: 'time'
                },
                {
                    fieldLabel: 'Start Date',
                    name: 'startdt',
                    xtype: 'datefield',
                    itemId: 'startdt',
                    vtype: 'daterange',
                    endDateField: 'enddt' // id of the end date field
                }, 
                {
                    fieldLabel: 'End Date',
                    xtype: 'datefield',
                    name: 'enddt',
                    itemId: 'enddt',
                    vtype: 'daterange',
                    startDateField: 'startdt' // id of the start date field
                }
            ]
        }
    ]
})