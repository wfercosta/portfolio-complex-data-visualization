const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:4000');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }
}

app.on('ready', createWindow);
