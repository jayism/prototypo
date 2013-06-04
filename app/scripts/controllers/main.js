'use strict';


angular.module('prototyp0App')
	.controller('MainCtrl', function ( $scope ) {
		$scope.sliders = {

			s_width: 0,
			s_height: 0,
			s_median: 1,
			s_curve: 0,
			s_arc: 0,
			s_terminal: 0,
			s_symmetry: 0,
			x_height: 465,
			cap_delta: 233,
			cap_height: 233,
			ascender: 0,
			descender: 0,
			crossbar: 1,
			thickness: 80,
			width: 1,
			slant: 0,
			vert_contrast: 1,
			hor_contrast: 1,
			contrast: 1,
			break_path: 0,
			counter: 0,
			inktrap: 0,
			roundness: 0.55,
			baseline: 0
		};

		$scope.glyph = 'H';
	})

	// FIXME: Why do we need this dummy controller to achieve to way binding across views?
	.controller('InterfaceCtrl', function( $scope ) {
		/*$scope.$watch('currentGlyph', function() {
			$scope.$parent.$parent.currentGlyph = $scope.currentGlyph;
		});*/
	});