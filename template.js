export default function (data, title = "") {
    if (data) {
        return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="public/favicon.ico" />
                    <link rel="stylesheet" href="public/App.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                    name="description"
                    content="Web site created using create-react-app"
                    />
                    <link rel="apple-touch-icon" href="public/logo192.png" />
                    <link rel="manifest" href="public/manifest.json" />
                    <title>${title}React App</title>
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root">${data.html}</div>
                    <script>
                    window.__STATE__ = ${JSON.stringify(data.preloadedState)};//TODO
                    </script>
                    ${data.scriptTags}
                </body>
                </html>
                `
    }
}