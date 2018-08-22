module.exports = function(paths) {
    return {
        module:{
            rules:[
                {
                    test: /\.js?$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: "babel-loader",
                            options:{
                                presets:["env", "es2015", "react", "stage-2"]
                            }
                        }
                    ]
                }
            ]
        }
    }
};