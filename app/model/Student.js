Ext.define('MsTraining.model.Student',{
    extend: 'Ext.data.Model',
    fields: ['student', 'subject', {
        name: 'mark',
        type: 'int'
    }]
});
