# Quasar + SSR + Nest.js Boilerplate

## <sub>WHATDEPS</sub>2<sub>USING</sub>

- [Quasar](https://quasar.dev)
  - [With Webpack](https://quasar.dev/quasar-cli-webpack/supporting-ts)
  - [With SSR mode](https://quasar.dev/quasar-cli-webpack/developing-ssr/introduction)
  - [Quasar Auto Routing](https://github.com/ldiebold/quasar-app-extension-auto-routing)
- [Nestjs](https://nestjs.com/)
  - [With express adapter](https://docs.nestjs.com/faq/global-prefix)
- [SWC Loader](https://github.com/swc-project/swc-loader) for increase build speed instead of Babel.
  - You can rollback to Babel for maximum compatibility.

All files based on Quasar basic template and Nestjs basic template.

## <sub>WHATSTRUCTURE</sub>4<sub>PROJECT</sub>

- Project
  - `public`: Serve quasar static files.
  - `src`: Vue components and client libraries.
    - [Learn more for structure](https://quasar.dev/quasar-cli-webpack/directory-structure)
  - `src-ssr`: Quasar SSR + NestJS + server libraries.
    - `controller`: Nestjs controllers.
    - `middleware`: Nestjs and Quasar Middlewares([Read it first for quasar middleware](https://quasar.dev/quasar-cli-webpack/developing-ssr/ssr-middleware)).
    - `service`: Nestjs service and providers.
    - `app.module.js`: Nestjs App Module.
    - `standalone.ts`: Standalone `main.ts` of Nestjs for dev server.
    - `production-export.ts`: Nest API Server with Quasar SSR. [Read info](https://quasar.dev/quasar-cli-webpack/developing-ssr/ssr-production-export).
  - `test`: E2E test and unit tests
  - `FRONT.md`: `README.md` for Quasar
  - `BACK.md`: `README.md` for Nestjs

## <sub>FEATURE</sub>4<sub>YOU</sub>

- Quasar SSR for Vue SSR with pros of SSR feature. (SEO, splitting bandwidth, etc.)
- Nest.JS for API Server and enjoy MVC Pattern. the URL prefix is `/api`.
  - NOTE: by edited `src-ssr/middlewares/render.ts`, Quasar will ignore all start with `/api` routes for API server reservation.
- ALL IN ONE FULLSTACK SERVER FOR PRODUCTION!
- Build with SWC instead of Babel(but you can still use babel by editing `quasar.config.js` file).
- Also each Quasar SPA(CSR) and Nest.js development and building are suppored if you want separate frontend and backend.
  - Of course, you can still use SSR also split client and server for scale.

## <sub>HOW</sub>2<sub>RUN</sub>

`yarn` recommended! (`yarn berry` [not supported yet](https://github.com/quasarframework/quasar/issues/7581)!)

### Development

- fullstack: `$ yarn dev`
- SSR only: `$ yarn dev:front`
  - for SPA: `$ yarn dev:spa`
- API only: `$ yarn dev:api`


### Build

- fullstack: `$ yarn build`
- SPA only: `$ yarn build:spa`
- API only: `$ yarn build:api`

### Run

- fullstack: `$ yarn start`
- SPA only: `$ yarn start:spa`
- API only: `$ yarn start:api`

## C<sub>AVEATS</sub>

- Nestjs + Quasar with vite is not supported due to [esbuild issue](https://github.com/evanw/esbuild/issues/104).
- Quasar with vite doesn't support Quasar Auto Routing due to [dynamic import issue on rollup](https://github.com/rollup/rollup/issues/4485).
- On development, Quasar Web Server and NestJS Web Server will run separately. `3001` for quasar, `3002` for nestjs by default port. but you can access API on quasar directly by webpack's proxy feature.
  - Quasar is using own development web server instance and it doesn't provide way of customize. customizing server is only for production.

## License

MIT.
