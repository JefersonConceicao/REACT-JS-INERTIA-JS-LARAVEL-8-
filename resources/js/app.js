import React from 'react';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { render } from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const app = document.getElementById('app');

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => {
            const page = import(`./Pages/${name}`).then(module => module.default)
            return page;
        }}
    />,
    app
)

InertiaProgress.init({
    showSpinner:false,
    color: 'red',
})
