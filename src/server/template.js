const templateFn = (html, preloadedState) => (`
    <!DOCTYPE html>
    <html>
    <head>
        <title>SSR DEMO APP</title>
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
`);

module.exports = templateFn;