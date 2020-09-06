const path = require('path'); //trabaja con las rutas de las carpetas, es multiplataformas
const HtmlWebpackPlugin  = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',//archivo js principal o de entrada donde inicia nuestra aplicacion
    output: {
        path: path.join(__dirname, '/dist'), //directorio de salida, tiene que ser una ruta absoluta, dirname se encarga de rastrear la carpeta desde la raiz del sistema operativo
                //path.join une el directorio raiz con la carpeta en donde queremos que vaya el archivo de salida
        filename: 'bundle.js' //bundle es el nombre del archivo de salida
    },
    devServer: { //este module para crearnos un servidor de desarrollo, para que compile nuestro codigo nuevamente con cada cambio
        port:5000 //aqui especificamos el puerto
    },
    resolve:{
        extensions:['.js', 'jsx'] //estensiones posibles para la compilacion
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/, //si encuentras un archivo que termine en js o jsx tomalo  conviertelo
                use: ['babel-loader'], 
                exclude: /node_modules/ // excluye la carpeta de node_modules en la transformacion
            }
            //Babel es un transpilador de codigo de javascript. Toma el còdigo moderno de javascript y lo convierte a codigo js que puedan entenderlo/interpretarlo los navedores actuales
//create-react-app lo utiliza por defecto
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //nos permite manipular el html para que lo lleve a dist y  enlace a bundle.js a el
            template: './src/index.html' //aqui le decimos donde esta nuestro archivo html 
        })
    ]
}



