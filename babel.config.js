module.exports = function (api) {
    api.cache(true);

    const presets = [
        '@babel/preset-env',
        [
            "@babel/preset-react",
            {
                targets: {
                    node: 'current',
                },
            }
        ]
    ];
    const plugins = ['transform-class-properties'];

    return {
        presets,
        plugins
    };
}