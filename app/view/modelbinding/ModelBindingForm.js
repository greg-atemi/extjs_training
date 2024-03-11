Ext.define('MsTraining.view.modelbinding.ModelBindingForm', {
    extend: 'Ext.window.Window',
    xtype: 'modelbindingform',
    controller: 'modelbindingformcontroller',
    height: 600,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    layout: 'fit',
    viewModel: {
        type: 'modelbindingformviewmodel'
    },
    items: [
        {
            xtype: 'form',
            layout: 'form',
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'First Name',
                bind: '{firstName}' // uses "test" ViewModel from parent
            },
            {
                fieldLabel: 'Last Name',
                bind: '{lastName}'
            },
            {
                fieldLabel: 'Full Name',
                readOnly: true,
                bind: '{name}'
            },
            {
                xtype: 'checkbox',
                boxLabel: 'Is Admin',
                reference: 'isAdmin'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Admin Key',
                bind: {
                    disabled: '{!isAdmin.checked}'
                }
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Selected State',
                bind: '{states.value}'
            },
            {
                xtype: 'combobox',
                reference: 'states',
                publishes: 'value',
                fieldLabel: 'Select State',
                displayField: 'state',
               
                store: {
                    type: 'states'
                },
                minChars: 0,
                queryMode: 'local',
                typeAhead: true,
                valueField:'abbr',
                
                listeners:{
                    select:'onStateSelected',
                    change:'onStateSelectionChange'
                }
            },
            
            ]
        }
    ]

})