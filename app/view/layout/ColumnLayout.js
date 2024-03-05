Ext.define('MsTraining.view.layouts.ColumnLayout', {
    extend: 'Ext.window.Window',
    xtype: 'columnlayout',
    title: "Column Layout",
    height: 600,
    width: 900,
    autoShow: true,
    closable: true,
    modal: true,
    items: [
        {
            xtype: 'panel',
            layout: 'column',
            items: [{
                title: 'Posts',
                columnWidth: 0.33,
                items:[
                    {
                        xtype: 'form',
                        reference: 'postform',
                        itemId: 'postform',
                        jsonSubmit: true,
                        bodyPadding: 10,
                        modelValidation: true,
                        layout: 'anchor',
                        items: [
                            {
                                allowBlank: true,
                                readOnly: true,
                                anchor: '100%',
                                xtype: 'textfield',
                                reference: 'postId',
                                fieldLabel: 'Post ID',
                                name: 'id',
                                emptyText: 'Post id'
                            },
                            {
                                allowBlank: false,
                                xtype: 'textfield',
                                anchor: '100%',
                                fieldLabel: 'User ID',
                                name: 'userId',
                                emptyText: 'user id'
                            },
                            {
                                allowBlank: false,
                                xtype: 'textfield',
                                fieldLabel: 'Title',
                                anchor: '100%',
                                name: 'title',
                                emptyText: 'title'
                            },
                            {
                                allowBlank: false,
                                xtype: 'textareafield',
                                fieldLabel: 'Body',
                                name: 'body',
                                anchor: '100%',
                                emptyText: 'body'
                            },
                        ],

                    }
                ]
            },
            {
                title: 'Todos',
                columnWidth: 0.33,
                items: [
                    {
                        xtype: 'form',
                        reference: 'todoform',
                        itemId: 'todoform',
                        jsonSubmit: true,
                        bodyPadding: 10,
                        modelValidation: true,
                        layout: 'anchor',
                        items: [
                            {
                                allowBlank: true,
                                readOnly: true,
                                anchor: '100%',
                                xtype: 'textfield',
                                reference: 'todoId',
                                fieldLabel: 'Todo ID',
                                name: 'id',
                                emptyText: 'Todo id'
                            },
                            
                            {
                                allowBlank: false,
                                xtype: 'textfield',
                                fieldLabel: 'Title',
                                anchor: '100%',
                                name: 'title',
                                emptyText: 'title'
                            },
                            
                        ],

                    }
                ]
            },
            {
                title: 'Users',
                columnWidth: 0.33,
                items: [
                    {
                        xtype: 'form',
                        reference: 'userform',
                        itemId: 'userform',
                        jsonSubmit: true,
                        bodyPadding: 10,
                        modelValidation: true,
                        layout: 'anchor',
                        items: [
                          
                            {
                                allowBlank: false,
                                xtype: 'textfield',
                                anchor: '100%',
                                fieldLabel: 'User ID',
                                name: 'userId',
                                emptyText: 'user id'
                            },
                            {
                                allowBlank: false,
                                xtype: 'textfield',
                                fieldLabel: 'Name',
                                anchor: '100%',
                                name: 'name',
                                emptyText: 'name'
                            },
                          
                        ],

                    }
                ]
            }]
        }
    ]
})