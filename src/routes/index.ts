import { Router } from "express";
const router = Router();

import { createPhoto, deletePhoto, getPhoto, getPhotos } from "../controllers/photo.controllers";

import multer from '../libs/multer'

router.route("/photos")
  .post(multer.single("image") ,createPhoto)
  .get(getPhotos)

router.route("/photos/:id")
  .get(getPhoto)
  .delete(deletePhoto)

export default router;
