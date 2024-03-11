Ext.define('MsTraining.view.users.UserGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'usergrid',
    reference:'usergrid',
    controller: 'usergridcontroller',
    title: 'Users',
    store: {
        type: 'users'
    },
    height: 520,
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    selModel: {
        selType: 'cellmodel',
    },
    columns: [
            {xtype: 'rownumberer'},
        {
            dataIndex: '_id',
            text: 'ID'
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex: 2,
            editor: 'textfield'
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex: 3,
            renderer: function (value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            },
            editor: {
                xtype: 'textfield',
                completeOnEnter: false,
                allowBlank: false
            }
        },
        {
            dataIndex: 'city',
            text: 'City',
            flex: 2
        }
    ],
    tbar: [
        {
            text: 'Add User'
        },
        {
            text: 'Model Binding',
            handler: 'onModelBinding'
        },
        // '->',
        {
            xtype: 'tbfill'
        },
        {
            text: 'Show Details',
            handler: 'onShowDetails',
            bind: {
                disabled: '{!usergrid.selection}'
            }
        }
    ],
   
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    listeners: {
        cellclick: 'onUserGridCellClick',
        celldblclick:'onUserGridCellDblClick',
        cellcontextmenu:'onUserGridCellContextMenu'
    }

})