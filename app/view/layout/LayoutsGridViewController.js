Ext.define('MsTraining.view.posts.LayoutsGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.layoutsgridviewcontroller',
    xtype: 'layoutsgridviewcontroller',

    onCheckoutLayoutClicked:function(btn,e,eOpts){
        console.log("azx")
        Ext.create({
            xtype: "checkoutform",
          });
      },
    onAccordionLayoutClicked:function(btn,e,eOpts){
        console.log("azx")
        Ext.create({
        xtype: "accordionlayout",
        });
    },
})