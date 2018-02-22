/**
 * Add file
 */

(function() {
	var $initial = $('.js-upload-button');

	$initial.click(function () {
		var $t = $(this),
			$parent = $t.closest('.js-drop'),
			$button = $parent.find('.js-upload-input');

		$button.click();
	});

	function handleFileSelect(evt, $t) {
		var file = evt.target.files[0],
			$parent = $t.closest('.js-drop'),
			$after = $parent.find('.js-upload-after'),
			$before = $parent.find('.js-upload-before');

		$before.hide();
		$after.show().text(file.name);

	}

	$('body').on('change', '.js-upload-input', function(e) {
		handleFileSelect(e, $(this));
	});
})();