import webpack from "webpack";

import {webpackConfig} from "./webpack.builder.conf";

export function configureDevServer(config) {
    webpackConfig.output.filename = "js/[name].[hash:8].js";    // HMR requires non-chunkhash

    const rewrites = [];
    Object.keys(config.pages).forEach(pageName => {
        rewrites.push({from: new RegExp(`\/${pageName}`), to: `/${pageName}.html`});
    });

    webpackConfig.devServer = {
        historyApiFallback: {rewrites: rewrites},
        hot: true,
        inline: true,
        compress: true,
        stats: "minimal",
        overlay: {
            warnings: true,
            errors: true
        }
    };

    webpackConfig.plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}
