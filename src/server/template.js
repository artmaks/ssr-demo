const templateFn = (html) => (`
    <!DOCTYPE html>
    <html>
    <head>
        <title>SSR DEMO APP</title>
    </head>
    <body>
        <div id="root">
            ${html}
        </div>
        <script src="/browser.bundle.js"></script>
    </body>
    </html>
`);

module.exports = templateFn;