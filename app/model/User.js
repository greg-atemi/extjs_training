Ext.define('MsTraining.model.User', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [
        '_id', 
        'name',
        'username',
        'email',
        'street',
        'suite',
        'city',
        'zipcode',
    ],
})