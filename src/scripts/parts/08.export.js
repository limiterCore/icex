/**
 * Export choice
 */

(function() {
	var $select = $('#export-item-select'),
		$location = $('.js-export-block'),
		activeExportClass = 'form__export-block_active';


	$select.change(function() {
		var $t = $(this),
			id = $t.val(),
			$currentLocation = $('#export-block_' + id);


		$location.removeClass(activeExportClass);
		$currentLocation.addClass(activeExportClass);

		return false;

	});

}());