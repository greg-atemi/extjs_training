Ext.define('MsTraining.view.posts.LayoutsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'layoutsgrid',
    controller: 'layoutsgridviewcontroller',  
    tbar: [{
        text: 'Accordion Layout',
        listeners: {
            click: 'onAccordionLayoutClicked'
        }
    },
    {
        text: 'Checkout Layout',
        listeners: {
            click: 'onCheckoutLayoutClicked'
        }
    }],   
    scrollable: true,
    height: 1200
})