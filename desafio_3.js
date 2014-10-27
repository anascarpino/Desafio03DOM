function addListener(node, type, handler) {
		if (node.addEventListener) {
			node.addEventListener(type, handler, false);
		} else if (node.attachEvent) {
			node.attachEvent("on"+type, handler);
		} else {
			node["on"+type] = handler;
		}
	}

function stopProp(e) {
	e = e || event;
	
	e.cancelBubble = true;
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	
	return e;
}

function cancelDefault(e) {
	e = e || event;
	
	e.returnValue = false;
	if (e.preventDefault) {
		e.preventDefault();
	}
	
	return e;
}

addListener(window, "load", function() {
    var i = 1;
	$('#add').click(function(){ 
		$('.thing').after('<div class="new"><button id="color">color</button> <a href="#">remover</a></div>');
		$('#info').text('A piscina contém ' +(++i) +' coisas');
	});
	$('#del').click(function(){
		$('.new').remove();
	});
	$('#color').click(function(){
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$('#color').css("background-color", newColor);
	});
	$('a').click(function(){
		$('#color').css("background-color", "buttonface");
	});
});
