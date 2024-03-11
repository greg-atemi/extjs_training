Ext.define('MsTraining.store.Albums',{
    extend: 'Ext.data.Store',
    alias: 'store.albums',
    model: 'MsTraining.model.Album',
    requires: ['MsTraining.model.Album'],
    sorters: ['id'],
    pageSize:25,
    }
)
