Ext.define("MsTraining.view.demo.CustomWindow",{
    extend: 'Ext.window.Window',
    xtype: 'customwindow',
    title: "My Custom Title",
    height: 200,
    width: 520,
    //autoShow: true,
    closable: true, // enables you to have x on the window 
    maximizable:true,  // []
    // maximized:true
    draggable:false,
    modal:true
},function(){
    // Ext.create("MsTraining.view.demo.CustomWindow");
   var wd = Ext.create({
      xtype: "customwindow",
    });
    wd.show();
})