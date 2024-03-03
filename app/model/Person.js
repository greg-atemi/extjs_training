Ext.define("MsTraining.model.Person",
  {
    name: "Unknown",
    requires: ['MsTraining.util.Util','MsTraining.util.Math'],
   
    constructor: function (name) {
      if (name) {
        this.name = name;
      }
    },

    eat: function (foodType) {
      MsTraining.util.Util.logInfo(this.name + " is eating: " + foodType)
      console.log(MsTraining.util.Math.PI);
     
    },
  },
  () => {
    var bob = Ext.create("MsTraining.model.Person", "Bob");
    bob.eat("Salad"); // alert("Bob is eating: Salad");
  }
);