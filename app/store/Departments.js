Ext.define('MsTraining.store.Departments', {
    xtype: 'departmentstore',
    alias: 'store.department',
    model: 'MsTraining.model.Department',
    groupField: 'department',
    data: [
        { name: 'Michael Scott', seniority: 7, department: 'Management' },
        { name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
        { name: 'Jim Halpert', seniority: 3, department: 'Sales' },
        { name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
        { name: 'Angela Martin', seniority: 5, department: 'Accounting' }
    ]
});