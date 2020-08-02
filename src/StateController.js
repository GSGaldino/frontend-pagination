class StateController {
	constructor() {
		this._data = new DataController(100).data;
		this._page = 1;
		this._perPage = 5;
		this._totalPage = Math.ceil(this._data.length / this._perPage);
	}

	nextPage(){
		this._page++;
		if(this._page > this._totalPage){
			this._page--;
			return;
		}
		this.renderView();
	}

	prevPage(){
		this._page--;
		if(this._page < 1){
			this._page++;
		}
		this.renderView();
	}

	goToPage(page){
		if (page < 1){
			page = 1;
		}else if(page > this._totalPage){
			page = this._totalPage;
		}
		this._page = page;
		this.renderView();
	}

	renderView(){
		const $ = document.querySelector.bind(document);
		const containerView = $('.numbers div');
		containerView.textContent = this._page;
	}

}
