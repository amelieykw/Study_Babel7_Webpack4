# Study_Babel7_Webpack4
Follow a Udemy course to learn Babel 7 and Webpack 4 for 2019


### 13. Using Latest JavaScript Features with Babel 7
- In **hello-world-button.js**:
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

- in **webpack.config.js**:

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
- ``cnpm install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev``

If we run Webpack now, it will use `babel-loader` for our JavaScript files, and if it happens that our javascript uses newest features that are not in official specification yet, Webpack we'll convert that code to older javascript which is understood by all browsers and NodeJS.

- ``npm run build``

### 14. What is Webpack Plugin?

- Plugins are additional JavaScript libraries that do everything that loaders cannot do.

- Plugins can also modify how the bundles themselves are created. 
    - For example, uglifyJSPlugin takes the bundle.js and minimizes the contents to decrease the bundle size.

Webpack itself is built on the same plugin system that we can use in our Webpack configuration.
```
plugins: [
    new PluginName()
]
```

### 15. How to minify our JS bundle?
#### Q: Why do we need to minify JS bundle?

A: If we make our JS app smaller, it can be loaded faster and it consumes less internet traffic.

- in **webpack.config.js**:
```
const TerserPlugin = require('terser-webpack-plugin');
...
plugins: [
    new TerserPlugin()
]
```

- ``cnpm install terser-webpack-plugin --save-dev``
    - make sure install all plugins with ``--save-dev`` option, to indicate that they are used as **development dependencies**.
        - Webpack plugin is a development dependency because we need it only during the build process.
    - if we use ``--save`` option without ``-dev``, it will be considered as **production dependencies**.
        - Production dependencies are required when we publish our project to production servers.



### 16. How to extract our CSS into a seperate bundle with mini-css-extract-plugin?
Nowadays, our css and js are all in one bundle.js file. Somedays, this bundle.js file will become very big, and if it's big, it can be loaded very slowly.

So we have to extract css part from this bundle.js and have two bundles instead of one. This will allow us to load several files in parallel making overall experience even better.

- in **webpack.config.js**:
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
...
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
...
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]           
```

- ``cnpm install mini-css-extract-plugin --save-dev``
- ``npm run build``
- in ``index.html``:
```
<link rel="stylesheet" href="./dist/styles.css">
```

# When using Babel 7 targets.node
targets.node -- must use --> "node": "current"

### 17. Extract CSS into a seperate bundle?
**MiniCssExtractPlugin** extracts all our styles from the application and puts them inside a single css file under the dist folder.

- create Heading component
- in ``index.js``:
```
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render();
```
- after ``npm run build`` to bundle, you can find the content of heading.css in ``dist/style.css``


### 18. Browser Caching
#### Problem: Reload of same CSS and JS files each time on loading
every time your browser loads a website, it downloads all the assets required by this Website.

Each browser is different, but all of them need css and js files. 

Each time the user reloads the page, their browser downloads all those files from the Internet. This may become an issue, expecially when the user loads your website on mobile devices with slow internet connection. Each time they go to a new page they need to wait several minutes until the page is ready. 

#### Solution: Browser Cache
If the file didn't change between the page reloads, your browser can save it in a specific place, called browser cache.

When you open this page again browser won't donwload this file again. It will take this file from cache.

This technique helps to save lots of time and traffic.

##### Browser Cache Issue:
What if you fixed a bug on your website and your js file has been changed? If the browser always takes this file from cache, your customer will never get this new version.

##### Solution of Browser Cache Issue:
1. create a new file with the new name each time you make a change.
    - Browsers remember files by name.
    - If the name changes, browsers will download the new version.
    - we don't need to change the filename manually every time we change our code. This can be done automatically.
    - in ``webpack.config.js``:
    ```
    output: {
        filename: 'bundle.[contenthash].js',
    ...
    new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
    ```

### 19. How to Clean Dist Folder Before generating new bundles?
Each time you run the build process CleanWebpackPlugin will clean the output.path folder.

- in ``webpack.config.js``:
```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

...

    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CleanWebpackPlugin()
...
```
- ``cnpm install clean-webpack-plugin --save-dev``
- ``npm run build``
    - CleanWebpackPlugin will remove previous generated bundle-cached files.



### 20. Production mode VS Development mode
3 kinds of mode:
1. ``none``
2. ``production``
3. ``environment``

#### Compare these 3 kinds:
1. Firstly, in ``webpack.config.js``, change ``none`` to ``production``:
```
...
mode: 'production'
...
```

2. Secondly, in ``index.js``,
```
if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}

// in order to test production mode
// this will show error in browser
helloWorldButton.methodNotExist() 
```

3. Thirdly, in browser developer tools:
    - You can see ``Production mode``
    - and an error
        - since all our js files are bundled in one bundle.js file, we just see that this error comes somewhere from bundle.js
        - if we click the error and want to see where this error comes from, it'll show the bundled js file which is very hard to figure out

4. Then, in ``webpack.config.js``, change ``none`` to ``development``:
```
...
mode: 'development'
...
```
5. in browser developer tools:
    - You can see ``Development mode``
    - and an error and its location in code