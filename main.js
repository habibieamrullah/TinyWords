const { ipcMain, app, BrowserWindow } = require('electron');
 
function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
		icon: "icon.ico",
        webPreferences: {
            nodeIntegration: true,
			contextIsolation: false,
            enableRemoteModule: true,
        }
    })
 
    win.loadFile('index.html');
    //win.webContents.openDevTools();
	win.removeMenu();
     
}
 
app.whenReady().then(createWindow);
 
app.on('window-all-closed', () => {
    app.quit();
});
 
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
 
ipcMain.on('quitprogram', (evt, arg) => {
    app.quit();
});