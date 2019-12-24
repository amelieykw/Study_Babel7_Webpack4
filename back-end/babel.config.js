module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: 'current',
                }
            }
        ]
    ];
    const plugins = ['transform-class-properties'];

    return {
        presets,
        plugins
    };
}