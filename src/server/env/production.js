import express from 'express';
import path from 'path';
import StaticRouter from 'server/routes';

const assetPath = path.join.bind(null, __dirname, '../../../build');

export default (app) => {
  app.use(express.static(assetPath()));

  app.get('/*.[a-z0-9]{0,5}', (req, res) => {
    res.sendFile(assetPath(req.url));
  });

  app.get('*', StaticRouter);
};
