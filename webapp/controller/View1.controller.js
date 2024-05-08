sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.anjali.dynamicuielements.controller.View1", {
            onInit: function () {

            },
            onSubmit:function(){
               var name = this.getView().byId("idInput").getValue();
              var msg = "Welocme to "+name; 
                this.getView().byId("idText").setText(msg);
                this.getView().byId("idInput").setEnabled(false);
                var align = this.getView().byId("idInputAlign").getValue();
                this.getView().byId("idText").setTextAlign(align);
                this.getView().byId("idEmployeeName").setVisible(false);
                this.getView().byId("idInput").setVisible(false);
                this.getView().byId("idAlignlabel").setVisible(false);
                this.getView().byId("idInputAlign").setVisible(false);
                this.getView().byId("idButton").setVisible(false);
            }
        });
    });
