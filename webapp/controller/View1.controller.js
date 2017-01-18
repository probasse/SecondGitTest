sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("QuickStartApplication2.controller.View1", {
		ClickMe: function(){
			sap.m.MessageToast.show("You Clicked Me");
		} // Click Me Test
	});
});