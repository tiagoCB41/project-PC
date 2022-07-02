const { app, BrowserWindow } = require('electron');

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    })
    janela.loadFile('./pagina inicial/paginaInicial.html')
}
app.whenReady().then(criarJanela)