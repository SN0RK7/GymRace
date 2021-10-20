const url = require('url').format ({
    protocol: 'file',
    slashes: true,
    pathhmane: require('path').join(__dirname, 'index.html')
});

const electron = require('electron');

const {app, BrowseWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowseWindow({
        width: 500,
        height: 850
    });
    win.loadURL(url);

    win.on('closed', function(){
        win = null;
    });
}

app.on('ready',createWindow);

app.on('window-all-closed', function(){
    app.quit();
});
