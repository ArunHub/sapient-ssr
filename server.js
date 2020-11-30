import path from 'path';
import https from 'https';

import express from 'express';
import template from "./template";
import render from "./render"

const PORT = process.env.PORT || 3006;
const app = express();

// app.use('assets', express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname)));

app.get('/', (req, response) => {

    const initialData = {
        json: ""
    }

    const options = new URL('https://api.spaceXdata.com/v3/launches?limit=20');

    const request = https.request(options, (res) => {
        let body = "";
        res.on('data', (d) => {
            body = body + d;
        });
        res.on('end', () => {
            initialData.json = JSON.parse(body);
            const data = render(initialData);
            const staticFile = template(data, 'Server rendering');
            response.send(staticFile);
        })
    });

    request.on('error', (e) => {
        console.error(e);
    });

    request.end();


})

app.listen(PORT, () => console.log("Listening at " + PORT));