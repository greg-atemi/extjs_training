Ext.define('MsTraining.view.students.StudentsGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'studentsgrid',
    reference:'studentsgrid',
    // controller: 'usergridcontroller',
    title: 'Students',
    width: '50%',
    height: '100%',
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: 'Subject: {name}',
        showSummaryRow: true
    }],
    store: {
        model: 'MsTraining.model.Student',
        groupField: 'subject',
        data: [{
            student: 'Richard Odera',
            subject: 'Mathematics',
            mark: 84
        },{
            student: 'Richard Odera',
            subject: 'Chemistry',
            mark: 84
        },{
            student: 'Richard Odera',
            subject: 'Physics',
            mark: 84
        },
        {
            student: 'Greg Opati',
            subject: 'Mathematics',
            mark: 84
        },{
            student: 'Greg Opati',
            subject: 'Chemistry',
            mark: 84
        },{
            student: 'Greg Opati',
            subject: 'Physics',
            mark: 84
        },
        {
            student: 'Pavel Onyino',
            subject: 'Mathematics',
            mark: 84
        },{
            student: 'Pavel Onyino',
            subject: 'Chemistry',
            mark: 84
        },{
            student: 'Pavel Onyino',
            subject: 'Physics',
            mark: 84
        },]
    },
    columns: [{
        dataIndex: 'student',
        text: 'Name',
        width: '50%',
        summaryType: 'count',
        summaryRenderer: function(value){
            return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
        }
    }, {
        dataIndex: 'mark',
        text: 'Mark',
        width: '50%',
        summaryType: 'average',
        summaryRenderer: function(value){
            return Ext.String.format('{0} average{1}', value);
        }
    }]
});