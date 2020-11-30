import React from 'react';
const path = require("path");

import ReactDOMServer from 'react-dom/server';
import configureStore from './src/redux/configureStore'
import { Provider } from "react-redux";
import App from './src/App';


import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'


const statsFile = path.resolve(__dirname, './public/loadable-stats.json')
const extractor = new ChunkExtractor({ statsFile })


export default function (intialState) {
    const store = configureStore(intialState);

    const html = ReactDOMServer.renderToString( //can be changed to rendernode stream via library docs
        <ChunkExtractorManager extractor={extractor}>
            <Provider store={store}>
                <App />
            </Provider>
        </ChunkExtractorManager>

    );
    let scriptTags = extractor.getScriptTags();
    const preloadedState = store.getState();//copy for client side
    return { html, preloadedState, scriptTags };
}