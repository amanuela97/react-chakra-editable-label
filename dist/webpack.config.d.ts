export default config;
declare namespace config {
    let mode: string;
    let devtool: string;
    let entry: string[];
    namespace output {
        export { BUILD_DIR as path };
        export let filename: string;
        export namespace library {
            let name: string;
            let type: string;
        }
    }
    namespace module {
        let rules: {
            test: RegExp;
            include: string;
            use: string[];
            exclude: RegExp;
        }[];
    }
    namespace resolve {
        let alias: {
            '@root': string;
        };
        let extensions: string[];
    }
    let externals: {
        react: string;
        'react-dom': string;
        chakra: string;
    };
    let plugins: any[];
}
declare const BUILD_DIR: string;
