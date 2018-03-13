(function() {
	var $tabLink = $('.js-form-tab-link');

	$tabLink.click(function() {
		var $t = $(this),
			tab = $t.data('tab'),
			$parent = $t.closest('.js-form-tab-parent'),
			$allTabs = $parent.find('.js-form-tab'),
			$allTabLinks = $parent.find('.js-form-tab-link'),
			$tab = $parent.find('.js-form-tab_' + tab),
			linkedInput = $t.data('linked-input');

		$allTabs.hide();
		$tab.show();

		$allTabLinks.removeClass('form__tab-link_active');
		$t.addClass('form__tab-link_active');

		// Set value to hidden input
		if (linkedInput && $(linkedInput).length && $t.data('linked-value')) {
			$(linkedInput).val($t.data('linked-value'));
		}

		return false;
	});
})();