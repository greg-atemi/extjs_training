Ext.define('MsTraining.view.fmviews.StaticDataManagementTabPanel',{
    extend:'Ext.tab.Panel',
    xtype:'staticdatamanagementtabpanel',
    height:0,
    items: [{
        title: 'Posts',
        items: [
           {
                xtype:'postgrid'
           }
        ]
    }, {
        title: 'Todos',
        items: [
            {
                xtype: 'todogrid'
            }
        ]
    }, {
        title: 'Albums',
        items: [
            {
                xtype: 'albumgrid'
            }
        ]
    }
]
})