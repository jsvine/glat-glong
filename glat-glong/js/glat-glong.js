(function () {
	var old_map = document.getElementById("map");
	var container = old_map || document.body;

	var dot = document.createElement("div");
	var dotStyles = [
		[ "position", "absolute" ],
		[ "top", "50%" ],
		[ "left", "50%" ],
		[ "overflow", "visible" ]
	];

	var dotInner = document.createElement("div");
	var dotInnerStyles = [
		[ "height", "8px" ],
		[ "width", "8px" ],
		[ "margin", "-5px 0 0 -5px" ],
		[ "backgroundColor", "red" ],
		[ "border", "2px solid white" ],
		[ "borderRadius", "999px" ],
		[ "cursor", "pointer" ]
	];

	[ [ dot, dotStyles ], [ dotInner, dotInnerStyles ] ].forEach(function (g) {
		g[1].forEach(function (s) {
			g[0].style[s[0]] = s[1];
		});
	});

	dotInner.setAttribute("title", "Click for coordinates.");

	var get_old_ll = function () {
		var link = document.getElementById("link");	
		var href = link.getAttribute("href");
		return href.match(/&ll=(-?[\d\.]+),(-?[\d\.]+)/).slice(1);
	};

	var get_new_ll = function (url) {
		var data = url.split("data=")[1].split("=")[0];
		var matches = data.match(/-?\d+\.\d\d+/g);	
		return matches.slice(0, 2).reverse();	
	};

	dot.onclick = function () {
		var centerer = old_map ? get_old_ll : get_new_ll;
		var center = centerer(window.location.href);
		var str = center.join(", ");
		alert(str);
	};

	dot.appendChild(dotInner);
	container.appendChild(dot);

}).call(this);
