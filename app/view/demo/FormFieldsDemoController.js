Ext.define('MsTraining.view.demo.FormFieldsDemoController',{
    extend:'Ext.app.ViewController',
    alias:'controller.formfieldsdemocontroller',

    onSaveClick:function(btn,e,eOpts){
        let window = this.getView();
        console.log(window);
        let references = window.getReferences();

        let form = references['formdemo'].getForm();

        if (form.isValid()) {
            //send ajax request to submit
            form.submit({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                success: function (form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                    // add the record tpo the post store -> post grid
                },
                failure: function (form, action) {
                    // handle failures
                    Ext.Msg.alert('Failed', action.result.msg);
                }

            });
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }
    }
})