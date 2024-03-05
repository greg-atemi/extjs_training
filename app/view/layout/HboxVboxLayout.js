Ext.define('MsTraining.view.layouts.HBoxVBoxLayout', {
    extend: 'Ext.window.Window',
    xtype: 'hboxvboxlayout',
    title: "HBox VBox Layout",
    height: 600,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items: [
        {
            xtype: 'panel',
            layout:'hbox',
            items:[
                {
                    xtype:'textfield',
                    fieldLabel:'First Name'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Second Name'
                }
            ]
            
        },
        
        {
            xtype: 'panel',
            layout: 'vbox',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'First Name'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Second Name'
                }
            ]

        }
    ]
})