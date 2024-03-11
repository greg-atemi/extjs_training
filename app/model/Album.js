Ext.define('MsTraining.model.Album',{
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields:[
        'id','userId','title'
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/albums',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    } 
})
