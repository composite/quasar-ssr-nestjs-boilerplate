import { ssrMiddleware } from 'quasar/wrappers'
import { AppMiddleware } from './app.middleware'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-middlewares
export default ssrMiddleware(async ({ app /*, resolveUrlPath, publicPath, render */ }) => {
  app.use((req, res, next) => {
    const nest = new AppMiddleware(app).use(req, res, next);
    nest.then(() => {
      next();
    }).catch(err => {
      console.log(JSON.stringify(err));
      next();
    });
  });
})
