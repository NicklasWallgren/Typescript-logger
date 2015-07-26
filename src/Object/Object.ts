Object.prototype.toString = function(): string {
	return JSON.stringify(this);
};