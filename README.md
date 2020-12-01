## React server side rendering

To run the applicaton ,
-> npm run dev

##### journey and learnings:
- ssr is for faster first page load and SEO. Because in normal react app , when you visit view source of the page. it will not show the rendered page since it is  in javascript so only throguth process of rendering from server , google can fetch details from the page and do SEO

- customized https://github.com/Rohitkrops/ssr for react server side rendering template

- import Program from "./Program.jsx"; // jsx is not accepted

- import class properties babel plugin and put it in babelrc.json / package.json / webpack config

- babel register used to transform import into require in nodejs . see index.js

- seperated logic from component and put into to service and constants in constants

- tried eslint config in webpack and ran in npm scripts as well

- "dev": "npm run dev:build-server && npm run lint && nodemon ./index.js" for running eslint errors

- when runnning lighthouse performance . it shows poor performance so when seeing the google recommendations i can able to code split using 3rd party lib- loadable server and dynamically imported script tags also.

- also learnt reacttonodestream which also used to increase the performance .

- overall i was able to improve from 9 to 85 in desktop and 73 in mobile.

- desktop and mobile lighthouse report are available in repo.

- learnt why app.use is useful. it is like express telling us to use the assets and make use of this folder to run the application when i was facing 404 error for main.js script file.
- entry of webpack and how it builds during npm scripts and after build ,it runs the code in server to serve.
- trying to connect with devops operation. using travis ci/cd and will use github pages or heroku
