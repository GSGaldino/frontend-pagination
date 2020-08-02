class DataController {
	constructor(lenght){
		this._data = Array.from({ length: lenght })
			.map((_, i) => `Item ${i + 1}`);

		Object.freeze(this);
	}
	get data(){
		return this._data;
	}
}
