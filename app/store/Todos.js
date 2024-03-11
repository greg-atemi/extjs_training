Ext.define('MsTraining.store.Todos', {
    extend: 'Ext.data.Store',
    alias: 'store.todos',
    model: 'MsTraining.model.Todo',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/todos',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    },

})