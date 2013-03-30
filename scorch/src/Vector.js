SH.Vector = Class.extend({

	init: function(x, y) {
		if (x === undefined) {
			x = 0;
		}
		if (y === undefined) {
			y = 0;
		}
		this.x = x;
		this.y = y;
		return this;
	},

	toString: function(round) {
		if (round) {
			return Math.round(this.x) +', ' + Math.round(this.y);
		}else {
			return this.x +', ' + this.y;
		}
	},

	decrease: function(num) {
		//x
		if (this.x > 0) {
			this.x -= num;
			if (this.x < 0) {
				this.x = 0;
			}
		}else if (this.x < 0) {
			this.x += num;
			if (this.x > 0) {
				this.x = 0;
			}
		}
		//y
		if (this.y > 0) {
			this.y -= num;
			if (this.y < 0) {
				this.y = 0;
			}
		}else if (this.y < 0) {
			this.y += num;
			if (this.y > 0) {
				this.y = 0;
			}
		}
		return this;
	},

	limit: function(max) {
		if (max > 0) {
			if (this.x > max) {
				this.x = max;
			}
			if (this.y > max) {
				this.y = max;
			}
		}else {
			if (this.x < max) {
				this.x = max;
			}
			if (this.y < max) {
				this.y = max;
			}
		}
		return this;
	},
	
	reset: function() {
		this.x = 0;
		this.y = 0;
		return this;
	},
	
	add: function(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	},

	sub: function(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	},

	mult: function(num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	div: function(num) {
		this.x = this.x / num;
		this.y = this.y / num;
		return this;
	},

	mag: function() {
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	},

	normalize: function() {
		var mag = this.mag();
		if (mag !== 0) {
			this.div(this.mag());
		}
		return this;
	},
	
	invert: function() {
		if (this.x < 0) {
			this.x = Math.abs(this.x);
		}else {
			this.x = 0 - Math.abs(this.x);
		}
		if (this.y < 0) {
			this.y = Math.abs(this.y);
		}else {
			this.y = 0 - Math.abs(this.y);
		}
		return this;
	},

	getAngle: function() {
		return Math.atan2(this.x, this.y);
		//radians = PI / 180 * angle;
	},

	rotate: function(angle) {
		var s = Math.sin(angle);
		var c = Math.cos(angle);

		var nx = c * this.x - s * this.y;
		var ny = s * this.x + c * this.y;

		this.x = nx;
		this.y = ny;
	},

	clone: function() {
		return new engine.Vector(this.x, this.y);
	}

});