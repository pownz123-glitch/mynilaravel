import { createInertiaApp } from '@inertiajs/react';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const pages = import.meta.glob('./pages/**/*.tsx');

createInertiaApp({
    resolve: async (name) => {
        const path = `./pages/${name}.tsx`;
        const loadPage = pages[path];

        if (!loadPage) {
            throw new Error(`Unknown Inertia page: ${name}`);
        }

        const page = await loadPage();

        return page.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(createElement(App, props));
    },
});
