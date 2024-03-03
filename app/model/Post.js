Ext.define('MsTraining.model.Post',{
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields:[
        'id','userId','title','body'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'https://jsonplaceholder.typicode.com/posts',
        reader: {
            type: 'json',
        }
    }
   
})