/**
 * Start the SSR server or export your handler for serverless use
 * or export whatever else fits your needs.
 *
 * https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-production-export
 *
 * This file is used ONLY on production.
 */

import { ssrProductionExport } from 'quasar/wrappers';
import {ExpressAdapter} from "@nestjs/platform-express";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

export default ssrProductionExport(async ({ app, port, isReady }) => {
  await isReady();
  const adapter = new ExpressAdapter(app);
  const factory = await NestFactory.create(AppModule, adapter);
  factory.setGlobalPrefix('api');
  return factory.listen(port, () => {
    console.log('Server listening at port ' + port);
  });
});
