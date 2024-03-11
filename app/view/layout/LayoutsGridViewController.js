Ext.define('MsTraining.view.posts.PostGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.layoutsgridviewcontroller',
    xtype: 'layoutsgridviewcontroller',

    onCheckoutLayoutClicked:function(btn,e,eOpts){
        Ext.create({
            xtype: "checkoutform",
          });
      },
    onAccordionLayoutClicked:function(btn,e,eOpts){
    Ext.create({
        xtype: "accordionlayout",
        });
    },
})