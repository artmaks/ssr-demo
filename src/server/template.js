const templateFn = (html, preloadedState) => (`
    <!DOCTYPE html>
    <html>
    <head>
        <title>SSR DEMO APP</title>
    </head>
    <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
    </script>
    <body>
        <div id="root">
            ${html}
        </div>
        <script src="/browser.bundle.js"></script>
    </body>
    </html>
`);

module.exports = templateFn;