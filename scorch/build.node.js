//require filesystem module
var fs = require('fs');

//verify that the src directory exists.
if (fs.existsSync('src')) {
	console.log('reading src directory');
	fs.readdir('src', function(err, files) {
		if (err) throw err;
		var i, string = '';
		for(i in files) {
			console.log('including ' + files[i] +'...');
		
			//create a header comment about the original srouce file
			var nameLength = files[i].length;
			var header = '/*';
			for(var y = 0; y < 24-(nameLength/2); y++) header += '-';
			header += ' ' +files[i] + ' ';
			for(var y = 0; y < 24-(nameLength/2); y++) header += '-';
			header += '*/';
			header += "\n\n";
			
			string += header;
			string += fs.readFileSync('src/' + files[i]);
			string += "\n\n\n\n";
		}
		console.log('String built, saving to scorch.js');
		fs.open('scorch.js', 'w+', function(err, fd) {
			if (err) throw err;
			console.log('writing to scorch.js...');
			var bytes = fs.writeSync(fd, string, 0, string.length, null);
			bytes = bytes / 1024;
			console.log('Done. ' + bytes +' Kilobytes written.');
		});
	});
}else {
	console.log('src directory doesn\'t exist, exiting.');
}

