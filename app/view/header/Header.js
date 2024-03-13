Ext.define('MsTraining.view.header.Header', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'appheader', 
    ui: 'footer', 
    items: [{
        xtype: 'component', 
        bind: { 
            html: '{appHeaderIcon}'
        }
    },
    {
        xtype: 'component',
        componentCls: 'app-header-title', 
        bind: { 
            html: '{appName}'
        }
    },
    {
        xtype: 'tbfill'
    },
   
   
    {
        xtype: 'button', 
        itemId: 'logout', 
        text: 'Logout',
        reference: 'logout', 
        iconCls: 'fa fa-sign-out fa-lg buttonIcon', 
        listeners: {
            click: 'onLogout' 
        }
    }]

})