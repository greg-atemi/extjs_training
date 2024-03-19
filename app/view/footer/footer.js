Ext.define('MsTraining.view.footer.Footer', {
    extend: 'Ext.container.Container',
    xtype: 'appfooter',
    cls: 'app-footer',
    height: 30,
    layout: 'center',
    items: [
        {
            xtype: 'component',
            componentCls: 'app-footer-title',
            bind: {
                html: '{footer}'
            }
        }
    ]
});