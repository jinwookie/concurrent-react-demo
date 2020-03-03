const getView = (title, assets) => `
<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" as="script" href="${assets['main.js']}" />
    <link rel="preload" as="style" href="${assets['main.css']}" />
    <link rel="stylesheet" type="text/css" href="${assets['main.css']}" />
  </head>
  <body>
    <div id="root"></div>
    <script src="${assets['main.js']}" async></script>
  </body>
</html>
`;

module.exports = getView;
