sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History) {
        "use strict";

        return Controller.extend("flightinfo.controller.FlightList", {
            onInit: function () {
            
            },

            onNavBack: function( ){
                var oHistory = History.getInstance();
                var sPrevHash = oHistory.getPreviousHash();

                if ( sPrevHash !== undefined ) {
                    window.history.go(-1);
                } else {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("CarrierList", true);
                }
            }



        });
    });
