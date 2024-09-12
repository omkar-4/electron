const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");
const { updateElectronApp } = require("update-electron-app");
updateElectronApp({ forceDev: true });

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
};
app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();
});
