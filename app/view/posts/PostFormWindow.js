Ext.define('MsTraining.view.posts.PostFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    controller:'postformcontroller',
    title: "Add Post",
    height: 360,
    width: 360,
    autoShow: true,
    closable: true,
    modal: true,
    items: [{
        xtype: 'form',
        reference: 'postform',
        itemId:'postform',
        jsonSubmit:true,
        bodyPadding: 24,
        modelValidation: true,
        items: [
            {
                allowBlank: true,
                readOnly:true,
                xtype: 'textfield',
                reference: 'postId',
                fieldLabel: 'Post ID',
                name: '_id',
                emptyText: 'Post id'
            },
            {
                allowBlank: false,
                xtype: 'textfield',
                fieldLabel: 'User ID',
                name: 'userId',
                emptyText: 'user id'
            },
            {
                allowBlank: false,
                xtype: 'textfield',
                fieldLabel: 'Title',
                name: 'title',
                emptyText: 'title'
            },
            {
                allowBlank: false,
                xtype: 'textareafield',
                fieldLabel: 'Body',
                name: 'body',
                emptyText: 'body'
            },
        ],

    }],
    buttons: [
        {
            text: 'Clear',
            handler: 'onClearClick'
        },
        {
            text: 'Save',
            handler: 'onSaveClick'
        },
    ]
})