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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


function getData() {
  console.log('Yay!')
  alert('An error has occured!')
}

function databaseQuery(args, query) {
  // perf fix
  // const pool = require('mysql2');

}

function downloadPipe(url, dest, name) {
  /**
   * @params {string} The url of the origin source.
   * @params {string} The destination folder.
   * @params {string} The branding name.
   */
}

// Event listeners from the IPC Pipeline.

// Attach listener in the main process with the given ID
ipcMain.on('request-mainprocess-action', (event, arg) => {
  // Displays the object sent from the renderer process:
  //{
  //    message: "Hi",
  //    someData: "Let's go"
  //}


    // Download module.

    const fs = require('fs');
    const download = require('download');

    (async () => {
      // await download('https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg', 'dist');
   
      fs.writeFileSync('dist/test.jpg', await download('https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'));
   
      // download('https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg').pipe(fs.createWriteStream('dist/test.jpg'));
    })();

});