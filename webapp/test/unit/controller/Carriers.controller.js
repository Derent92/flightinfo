/*global QUnit*/

sap.ui.define([
	"flightinfo/controller/Carriers.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Carriers Controller");

	QUnit.test("I should test the Carriers controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
