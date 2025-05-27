import * as esbuild from 'esbuild'
import stylePlugin from 'esbuild-style-plugin'
import svg from 'esbuild-plugin-svg';

let ctx = await esbuild.context({
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: './dist/bundle.js',
    logLevel: 'info',
    loader: {
        '.ts': 'ts',
        '.js': 'jsx'
    },
    plugins: [
        svg(),
        stylePlugin({
            renderOptions: {
                lessOptions: {
                    modifyVars: {
                        'table-header-bg': '#EDF3F7',
                        'table-header-color': '#5c9dd5',
                        'primary-color': '#5c9dd5',
                        'link-color': '#5c9dd5',
                        //  'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                }
            }
        })
    ]
})

await ctx.watch()
