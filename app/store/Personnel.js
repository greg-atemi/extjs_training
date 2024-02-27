Ext.define('MsTraining.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MsTraining.model.Personnel',

    data: { items: [
        { name: 'Richard Atemi', email: "atemirichard@gmail.com", phone: "0722545678" },
        { name: 'Richard Atemi', email: "atemirichard@gmail.com", phone: "0722545678" },
        { name: 'Richard Atemi', email: "atemirichard@gmail.com", phone: "0722545678" },
        { name: 'Richard Atemi', email: "atemirichard@gmail.com", phone: "0722545678" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
