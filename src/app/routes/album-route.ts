import { Request, Response, NextFunction } from 'express';
import { Albums } from '../models/album'; 

export class AlbumRoute {

    public albumRoute(app): void {
      app.route('/api/get-albums').get((req: Request, res: Response, next: NextFunction) => {
        Albums.find((err, albums) => {
          if (err) { return next(err); }
          res.json(albums);
        });
      });
  
      app.route('/api/get-album/:id').get((req: Request, res: Response, next: NextFunction) => {
        Albums.findById(req.params.id, (err, albums) => {
          if (err) { return next(err); }
          res.json(albums);
        });
      });
  
      app.route('/api/add-album').post((req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        Albums.create(req.body, (err, albums) => {
          if (err) { return next(err); }
          res.json(albums);
        });
      });
  
      app.route('/api/update-album/:id').put((req: Request, res: Response, next: NextFunction) => {
        Albums.findByIdAndUpdate(req.params.id, req.body, (err, albums) => {
          if (err) { return next(err); }
          res.json(albums);
        });
      });
  
      app.route('/api/delete-album/:id').delete((req: Request, res: Response, next: NextFunction) => {
        Albums.findByIdAndRemove(req.params.id, req.body, (err, albums) => {
          if (err) { return next(err); }
          res.json(albums);
        });
      });
    }
  }