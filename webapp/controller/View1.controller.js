sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("QuickStartApplication2.controller.View1", {
		ClickMe: function(){
			sap.m.MessageBox.alert("You Clicked me");
		}
	});

});