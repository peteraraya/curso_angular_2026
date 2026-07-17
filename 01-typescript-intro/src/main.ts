import './style.css'


import './topics/01-basic-types';
import './topics/02-object-interface';
import './topics/03-functions';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite + TypeScript!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
