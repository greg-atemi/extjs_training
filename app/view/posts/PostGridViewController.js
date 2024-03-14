Ext.define('MsTraining.view.posts.PostGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',
    mixins: ['MsTraining.mixin.GridMixin'],

    onAddPostClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        Ext.create({
            xtype: "postformwindow",
        });
    }, 
    onFormFieldsClicked: function (btn, e, eOpts) {
        Ext.create({
            xtype: "formfieldsdemo",
        });
    }, 
    onVTypesClicked:function(btn, e, eOpts){
        Ext.create({
            xtype: "formfieldvtypevalidation",
        });
    },
    onCheckoutLayoutClicked:function(btn,e,eOpts){
        console.log("Test Function")
        Ext.create({
            xtype: "checkoutform",
        });
    },
    onAccordionLayoutClicked:function(btn,e,eOpts){
        console.log("Test Function")
        Ext.create({
            xtype: "accordionlayout",
        });
    },
    onDeleteClicked:function(btn, e, eOpts){
        let me=this;
        let record = this.getSelectedRecordByXType('postgrid');
        let grid = me.getView()
        if (record){
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the post with id ${recordId}`, function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: `http://localhost:3000/posts/${recordId}`,
                        method: 'DELETE',
                        success: function (response, opts) {
                            var obj = Ext.decode(response.responseText);
                            me.showToast("Operation successful")
                            grid.getStore().reload()
                        },
                        failure: function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                        }
                    });
                }else{
                    Ext.Msg.alert('Cancellation', 'Alright. Thank you!!!');
                }
            });   
        }
    }
})