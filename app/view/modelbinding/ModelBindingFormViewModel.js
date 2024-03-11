Ext.define('MsTraining.view.modelbinding.ModelBindingFormViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.modelbindingformviewmodel',
    data: {
        firstName: null,
        lastName: null
    },
    formulas:{
        name: function (get) {
            let firstName = get('firstName');
            let lastName = get('lastName');
            if (firstName && lastName){
                return firstName + ' ' + lastName
            }else{
                return (firstName || lastName || '')
            }
        }
    }
})