/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MsTraining.Application',

    name: 'MsTraining',

    requires: [
        // This will automatically load all classes in the MsTraining namespace
        // so that application classes do not need to require each other.
        'MsTraining.*'
    ],

    // The name of the initial view to create.
    mainView: 'MsTraining.view.main.Main'
});
