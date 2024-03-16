Ext.define('MsTraining.view.department.DepartmentGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'departmentgrid',
    reference:'departmentgrid',
    title: 'Departments',
    width: '50%',
    height: '100%',
    store: 'store.department',
    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Seniority', dataIndex: 'seniority', flex: 1 }
    ],
    features: [{ftype:'grouping'}],
    renderTo: Ext.getBody()
});