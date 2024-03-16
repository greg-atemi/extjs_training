Ext.define('MsTraining.store.Users',{
    extend:'Ext.data.Store',
    alias:'store.users',
    model:'MsTraining.model.User',
    sorters: [{
        property: '_id',
        direction: 'ASC'
    }],
    proxy:{
        type:'rest',
        url:'http://localhost:3000/users',
        reader:{
            type:'json',
            rootProperty:'rows',
            totalProperty:'totalCount'
        }
    },
})