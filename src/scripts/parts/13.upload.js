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

	var isAdvancedUpload = function() {
		var div = document.createElement('div');
		return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
	}();

	if (isAdvancedUpload) {

		var $drop = $('.js-drop');

		$drop.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
			e.preventDefault();
			e.stopPropagation();
		})
			.on('dragover dragenter', function() {
				$drop.addClass('drop_drag-over');
			})
			.on('dragend drop', function() {
				$drop.removeClass('drop_drag-over');
			})
			.on('drop', function(e) {
				var $t = $(this),
					file = e.originalEvent.dataTransfer.files[0],
					$parent = $t.closest('.js-drop'),
					$after = $parent.find('.js-upload-after'),
					$before = $parent.find('.js-upload-before');

				$before.hide();
				$after.show().text(file.name);
			});

	}
})();