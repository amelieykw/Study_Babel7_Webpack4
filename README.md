# Study_Babel7_Webpack4
Follow a Udemy course to learn Babel 7 and Webpack 4 for 2019


### 13. Using Latest JavaScript Features with Babel 7
- In hello-world-button.js:
change:
```
render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add('hello-world-button');
```

to:
```
buttonCssClass = 'hello-world-button';

render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add(this.buttonCssClass);
```

If we run Webpack now, it will throw error, because ECMAScript don't support class propertis.

- in webpack.config.js:

```
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env'],
                plugins: ['transform-class-properties']
        }
    }
}
```
- cnpm install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev

If we run Webpack now, it will use `babel-loader` for our JavaScript files, and if it happens that our javascript uses newest features that are not in official specification yet, Webpack we'll convert that code to older javascript which is understood by all browsers and NodeJS.

- npm run build

