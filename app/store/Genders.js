Ext.define('MsTraining.store.Genders', {
    extend: 'Ext.data.Store',
    alias: 'store.genders',
    fields: ['id', 'value'],
    data: [
        { id: 'MALE', value: 'Male' },
        { id: 'FEMALE', value: 'Female' },
        { id: 'OTHER', value: 'Other' }
    ]
})