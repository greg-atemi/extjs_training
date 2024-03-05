Ext.define('MsTraining.view.layouts.BorderLayout', {
    extend: 'Ext.window.Window',
    xtype: 'borderlayout',
    title: "Border Layout",
    height: 600,
    width: 900,
    autoShow: true,
    closable: true,
    modal: true,
    items: [
        {
            xtype: 'panel',
            layout: 'border',
            width: 880,
            height: 580,
            items: [{
                title: 'South Region is resizable',
                region: 'south',     // position for region
                xtype: 'panel',
                height: 100,
                split: true,         // enable resizing
                margin: '0 5 5 5'
            },
                {
                    title: 'North Region is resizable',
                    region: 'north',     // position for region
                    xtype: 'panel',
                    height: 100,
                    split: true,         // enable resizing
                    margin: '0 5 5 5'
                },
                 {
                    title: 'East Region is resizable',
                    region: 'east',     // position for region
                    xtype: 'panel',
                    width: 100,
                    split: true,         // enable resizing
                    margin: '0 5 5 5'
                }, 
            {
                // xtype: 'panel' implied by default
                title: 'West Region is collapsible',
                region: 'west',
                xtype: 'panel',
                margin: '5 0 0 5',
                width: 200,
                collapsible: true,   // make collapsible
                id: 'west-region-container',
                layout: 'fit'
            },
             {
                title: 'Center Region',
                region: 'center',     // center region is required, no width/height specified
                xtype: 'panel',
                layout: 'fit',
                margin: '5 5 0 0'
            }]

        }
    ]
})