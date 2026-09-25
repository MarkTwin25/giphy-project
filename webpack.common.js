import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: resolve(import.meta.dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
        new Dotenv({
            path: './.env', // Ruta a tu archivo .env (por defecto busca .env en la raíz)
            safe: false, // Carga '.env.example' para verificar variables si lo requieres
            systemvars: true, // Permite también leer variables del sistema operativo
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
};
