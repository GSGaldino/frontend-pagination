class ButtonsController{
	constructor() {
		const $ = document.querySelector.bind(document);

		this._firstButton = $('.first');
		this._prevButton = $('.prev');
		this._nextButton = $('.next');
		this._lastButton = $('.last');
		this._state = new StateController();
	}

	render() {
		this._firstButton.addEventListener("click", () => {
			this._state.goToPage(1);
			console.log(this._state._page);
		});

		this._prevButton.addEventListener("click", () => {
			this._state.prevPage();
			console.log(this._state._page);
		});

		this._nextButton.addEventListener("click", () => {
			this._state.nextPage();
			console.log(this._state._page);
		});

		this._lastButton.addEventListener("click", () => {
			this._state.goToPage(this._state._totalPage);
			console.log(this._state._page);
		})
	}
}