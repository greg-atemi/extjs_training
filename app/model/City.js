Ext.define(
    "MsTraining.model.City", // className => <AppName>.<foldername>.<ClassAndFileName>
    {
      extend: "Ext.data.Model",
      fields: [
        "id",
        "name",
        { name: "phone", type: "string" },
        { name: "age", type: "int"},
      ],
    }, // Configuration/ properties
    function () {
      var city = Ext.create("MsTraining.model.City");
      console.log(city);
    }
  );