/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comanjali/dynamic_uielements/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
