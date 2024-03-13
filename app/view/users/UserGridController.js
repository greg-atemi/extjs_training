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
        if(userGrid.getHeight() === 800){
            userGrid.setHeight(400)
            lowerPanel.setHeight(400)
            btn.setText("Hide Details")
        }else{
            userGrid.setHeight(800)
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
       
    }
})