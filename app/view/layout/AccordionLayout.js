Ext.define('MsTraining.view.layouts.AccordionLayout', {
    extend: 'Ext.window.Window',
    xtype: 'accordionlayout',
    title: "Accordion Layout",
    height: 600,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items: [
        {
            xtype: 'panel',
            defaults: {
                // applied to each contained panel
                bodyStyle: 'padding:15px'
            },
            layout: {
                // layout-specific configs go here
                type: 'accordion',
                titleCollapse: false,
                animate: true,
                activeOnTop: true
            },
            items: [{
                title: 'Panel 1',
                items:[
                    {
                        xtype:'button',
                        text:'Add'
                    },
                    {
                        xtype: 'button',
                        text: 'Subtract'
                    },
                    {
                        xtype: 'button',
                        text: 'Multiply'
                    }
                ]
            }, {
                title: 'Panel 2',
                html: 'Panel two content!'
            }, {
                title: 'Panel 3',
                html: 'Panel three content!'
            }],
        }
    ]
})