
const ipc = require('electron').ipcRenderer;

// --------------------------------------------------
export function saveWorldEntries(obj) {
  return new Promise((resolve) => {
    ipc.once('file-saved', (evt, fileData) => {
      console.log('file-saved', evt);
      resolve(fileData);
    });
    ipc.send('save-file', obj);
  });
}

// --------------------------------------------------
export function loadWorldEntries(filePath) {
  return new Promise((resolve) => {
    ipc.once('file-loaded', (evt, fileData) => {
      console.log('file-loaded', evt);
      resolve(fileData);
    });
    ipc.send('load-file', filePath);
  });
}