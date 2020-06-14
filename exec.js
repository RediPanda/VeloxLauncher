'use strict';

const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

require('v8-compile-cache')
 
const ignoredNode = /node_modules|[/\\]\./;
const ignoredLogs = /logs|[/\\]\./; // all folder resorces => resources

// require('electron-reload')(__dirname, {ignored: [ignoredLogs, ignoredNode] });
 
app.allowRendererProcessReuse = true;

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1300,
    height: 700,
    frame: false,
    resizable: true,
    moveable: true,
    minWidth: 1200,
    minHeight: 600,
    ELECTRON_DISABLE_SECURITY_WARNINGS: false,
    allowRunningInsecureContent: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
