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
  - `src`: Vue components and client libraries
    - [Learn more for structure](https://quasar.dev/quasar-cli-webpack/directory-structure)
  - `src-ssr`: Quasar SSR + NestJS + server libraries
    - `controller`: Nestjs controllers
    - `middleware`: Nestjs and Quasar Middlewares ([Read it first for quasar middleware](https://quasar.dev/quasar-cli-webpack/developing-ssr/ssr-middleware))
    - `service`: Nestjs service and providers
    - `app.module.js`: Nestjs App Module
    - `production-export.ts`: [Read info](https://quasar.dev/quasar-cli-webpack/developing-ssr/ssr-production-export).
  - `test`: E2E test and unit tests
  - `FRONT.md`: `README.md` for Quasar
  - `BACK.md`: `README.md` for Nestjs

## <sub>HOW</sub>2<sub>RUN</sub>

`yarn` recommended!

### Development

`$ yarn dev`

### Build

`$ yarn build`

### Run

`$ yarn start`

## C<sub>AVEATS</sub>

- Nestjs + Quasar with vite is not supported due to [esbuild issue](https://github.com/evanw/esbuild/issues/104).
- Quasar with vite doesn't support Quasar Auto Routing due to [dynamic import issue on rollup](https://github.com/rollup/rollup/issues/4485).
- On development, NestJS will build new Nest server on each request and some caveats. [Learn more on Stack Overflow](https://stackoverflow.com/a/60292894).
  - Quasar is using own development web server instance and it doesn't provide way of customize. customizing server is only for production.

## License

MIT.
