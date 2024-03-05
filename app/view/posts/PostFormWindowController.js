Ext.define('MsTraining.view.posts.PostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformcontroller',
    init: function () {

    },
    onClearClick: function (btn, e, eOpts) {
        // get form 
        // reset
    },
    onSaveClick: function (btn, e, eOpts) {
        let window = this.getView();
        // console.log("Window:");
        // console.log(window);
        let references = window.getReferences();
        // console.log("References:");
        // console.log(references);
        let form = references['postform'].getForm();
        // console.log("Form:");
        // console.log(form);
        if(form.isValid()){
            //send ajax request to submit
            form.submit({
                method:'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                success:function(form,action){
                    Ext.Msg.alert('Success', action.result.msg);
                    // add the record to the post store -> post grid
                },
                failure:function(form,action){
                    // handle failures
                    Ext.Msg.alert('Failed', action.result.msg);
                }

            });
        }else{
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }
      

        //get all values
        // submit to json place holder => backend
        // add the items to the grid
    },

})