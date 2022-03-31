import multer from "multer";

const storageConfig = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (request, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.slice(6)
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const multerMiddleware = multer({
  storage: storageConfig,
  fileFilter: fileFilter,
});

export default multerMiddleware;
