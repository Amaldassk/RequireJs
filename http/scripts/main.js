require.config({
    baseUrl: 'scripts'
});

require(['one', 'two'], function (one, two) {
	debugger;
    var html = "<b>Success!</b> My name is: " + one.name + 
        ", I am from: " + two.name +
        ", I am a: " + two.threeName,
        node = document.createElement('div');

    node.innerHTML = html;

    document.getElementsByTagName('body')[0].appendChild(node);
});
