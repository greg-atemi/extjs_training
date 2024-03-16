Ext.define('MsTraining.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    init: function () {
        let grid = this.getView(),
            store = grid.getStore();
        store.load();
    },
    onUserGridCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        let postsStore = Ext.ComponentQuery.query('postgrid')[0].getStore();
        let todosStore = Ext.ComponentQuery.query('todogrid')[0].getStore();
        postsStore.reload({
            params: {
                userId: record.get('_id')
            }
        });
        todosStore.reload({
            params: {
                userId: record.get('_id')
            }
        })
    },
    onShowDetails:function(btn,e,eOpts){
        let userGrid = this.getView();
        let lowerPanel = Ext.ComponentQuery.query('staticdatamanagementtabpanel')[0];
        if(userGrid.getHeight() === 1200){
            userGrid.setHeight(600)
            lowerPanel.setHeight(600)
            btn.setText("Hide Details")
        }else{
            userGrid.setHeight(1200)
            lowerPanel.setHeight(0)
            btn.setText("Show Details")
        }
    },
    onModelBinding:function(btn,e,eOpts){
        Ext.create({
            xtype:'modelbindingform'
        })
    },
    onUserGridCellDblClick:function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
        console.log(record.get('username'));
    },
    onUserGridCellContextMenu: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
        // Function for on right click to create a small grid with options
        // Ext.create('Ext.menu.Menu', {
        //     width: 100,
        //     plain: true,
        //     floating: false,  // usually you want this set to True (default)
        //     renderTo: Ext.getBody(),  // usually rendered by it's containing component
        //     items: [{
        //         text: 'plain item 1'
        //     }, {
        //         text: 'plain item 2'
        //     }, {
        //         text: 'plain item 3'
        //     }]
        // });
    }
})