Ext.define('MsTraining.view.layouts.CheckoutForm', {
    extend: 'Ext.window.Window',
    xtype: 'checkoutform',
    title: "Checkout Form",
    height: 640,
    width: 900,
    autoShow: true,
    closable: true,
    modal: true,
    layout: 'fit',
    bodyPadding: 24,
    scrollable: true,
    items: [
        {
            xtype: 'form',
            layout: 'auto',
            items: [
                {
                    xtype: 'form',
                    layout: 'hbox',
                    items: [
                        {
                            margin: '5 5 5 5',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Contact Information1',
                                    layout: 'anchor',
                                    defaults: {
                                        anchor: '100%'
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            labelWidth: 100,
                                            layout: 'hbox',
                                            fieldLabel: 'Name',
                                            items: [{
                                                xtype: 'textfield',
                                                emptyText: 'First',
                                                flex: 1
                                            },
                                            {
                                                xtype: 'splitter'
                                            },
                                            {
                                                xtype: 'textfield',
                                                emptyText: 'Last',
                                                flex: 1
                                            },]
                                        },
                                        {
                                            xtype: 'container',
                                            items: [
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Email Address',
                                                name: 'email',
                                                flex: 1,
                                                vtype: 'email',
                                                allowBlank: false
                                            }, 
                                            {
                                                fieldLabel: 'Phone Number',
                                                xtype: 'textfield',
                                                name: 'phone',
                                                labelWidth: 100,
                                                flex: 2,
                                                emptyText: 'xxx-xxx-xxxx',
                                                maskRe: /[\d\-]/,
                                                regex: /^\d{3}-\d{3}-\d{4}$/,
                                                regexText: 'Must be in the format xxx-xxx-xxxx'
                                            }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Mailing Address',
                            layout: 'anchor',
                            defaults: {
                                anchor: '100%'
                            },
                            items: [
                                {
                                    fieldLabel: 'Street Address',
                                    xtype: 'textfield',
                                    name: 'mailingStreet',
                                    reference: 'mailingStreet',
                                    allowBlank: false,
                                },
                                {
                                    layout: 'auto',
                                    xtype: 'container',
                                    items: [{
                                        xtype: 'textfield',
                                        fieldLabel: 'City',
                                        name: 'mailingCity',
                                        reference: 'mailingCity',
                                        flex: 1,
                                        allowBlank: false,

                                    }, {
                                        xtype: 'combobox',
                                        fieldLabel: 'State',
                                        name: 'mailingState',
                                        reference: 'mailingState',
                                        forceSelection: true,
                                        flex: 1,
                                        enforceMaxLength: true,
                                        valueField: 'abbr',
                                        displayField: 'abbr',
                                        typeAhead: true,
                                        queryMode: 'local',
                                        allowBlank: false,

                                        listConfig: {
                                            minWidth: null
                                        },
                                        store: {
                                            type: ''
                                        },

                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: 'Postal Code',
                                        name: 'mailingPostalCode',
                                        reference: 'mailingPostalCode',
                                        flex:1,
                                        allowBlank: false,
                                        maxLength: 10,
                                        enforceMaxLength: true,
                                        maskRe: /[\d\-]/,
                                        regex: /^\d{5}(\-\d{4})?$/,
                                        regexText: 'Must be in the format xxxxx or xxxxx-xxxx',

                                        
                                    }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Order details',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            labelWidth: 100,
                            layout: 'hbox',
                            fieldLabel: 'Order ID',
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 0.75
                                },
                                {
                                    xtype: 'splitter'
                                },
                                {
                                    fieldLabel: 'Order Date',
                                    xtype: 'textfield',
                                    flex: 1
                                },
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            labelWidth: 100,
                            layout: 'hbox',
                            fieldLabel: 'Total',
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 0.75
                                },
                                {
                                    xtype: 'splitter'
                                },
                                {
                                    fieldLabel: 'Tax',
                                    xtype: 'textfield',
                                    flex: 1
                                },
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            labelWidth: 100,
                            layout: 'hbox',
                            fieldLabel: 'Grand Total',
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
)