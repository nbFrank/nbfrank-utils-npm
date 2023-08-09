/*
* @Author: fw168
* @Date: 2023-08-09 14:25:12
* @Last Modified by: fw168
* @Last Modified time: 2023-08-09 14:25:12
*/
import babel from '@rollup/plugin-babel';

export default {
    input: 'index.js',
    output: [
        {
            file: './es/index.js',
            format: 'esm',  // 将软件包保存为 ES 模块文件
            name: 'cssModuleVue'
        },
        {
            file: './dist/index.js',
            format: 'cjs',  // CommonJS，适用于 Node 和 Browserify/Webpack
            name: 'cssModuleVue',
            exports: 'default'
        }
    ],
    watch: {
        // 配置监听处理
        exclude: 'node_modules/**'
    },
    plugins: [
        // 使用插件 @rollup/plugin-babel
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        })
    ]
}
