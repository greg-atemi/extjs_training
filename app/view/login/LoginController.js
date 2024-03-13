Ext.define('MsTraining.view.login.LoginController', {
    extend:'Ext.app.ViewController',
    alias:'controller.login',
    onLoginClick: function () {
        // http://localhost:8080/api/authenticate
        // Content - Type: application / json
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("MsAppLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('app-main' );

    }
})