import express from 'express';
import path from 'path';

export default (app) => {
  app.use(express.static(path.join(__dirname, '../../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
  });
};
