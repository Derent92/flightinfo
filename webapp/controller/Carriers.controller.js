sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("flightinfo.controller.Carriers", {
            onInit: function () {
            
            },

            onPress: function( oEvent ) {
                var oItem, oContext;

                oItem = oEvent.getSource();
                oContext = oItem.getBindingContext();

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("FlightList", {CarrierPath: oContext.getPath().slice(1)});

            }


        });
    });
