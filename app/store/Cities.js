Ext.define("MsTraining.store.Cities", {
    extend: "Ext.data.Store",
    alias: 'store.cities',
    model: "MsTraining.model.City",
    data: [
      { id: 1, name: "Nairobi", phone: "25478963256", age: 100 },
      { id: 2, name: "Nakuru", phone: "254787169552", age: 2 },
    ],
  });