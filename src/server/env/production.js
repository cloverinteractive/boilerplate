import express from 'express';
import path from 'path';

const assetPath = path.join.bind(null, __dirname, '../../../build');

module.exports = (app) => {
  app.use(express.static(assetPath()));

  app.get('/*.[a-z0-9]{0,5}', (req, res) => {
    res.sendFile(assetPath(req.url));
  });
};
