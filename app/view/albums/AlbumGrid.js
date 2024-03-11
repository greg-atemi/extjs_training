Ext.define('MsTraining.view.albums.AlbumGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    reference: 'albumgrid',
    store: {
        type: 'albums'
    },
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'userId', text: 'UserId', flex: 1 },
        { dataIndex: 'title', text: 'Title', flex: 1 },
    ],

})