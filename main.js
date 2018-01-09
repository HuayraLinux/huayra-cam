const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
	win = new BrowserWindow({
		fullscreen: true,
		title: 'Huayra-CAM'
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.setMenu(null);

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);
app.on('activate', () => {
	if (win === null) createWindow();
});
