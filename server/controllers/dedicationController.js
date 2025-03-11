const Dedications = require('../models/DedicationModel'); //DB

//GET ALL DEDICATIONS
exports.getAllDedications = async (req, res, next) => {
  try {
    const dedications = await Dedications.find();
    if (!dedications) {
      return next({
        log: 'There are not records to retreive from the database',
        status: 404, //Not found
        message: { err: 'There are not records to retreive from the database' },
      });
    } else {
      res.locals.dedications = dedications;
      return next();
    }
  } catch (err) {
    return next({
      log: `Try/catch error from getAllDedications trying to retrieve list of dedications from the database: ${err}`,
      status: 500,
      message: {
        err: 'Failed to retreive list of dedications from the database',
      },
    });
  }
};

//POST DEDICATION
exports.createDedication = async (req, res, next) => {
  const { from, recipient, message, songTitle, songArtist, songLink } =
    req.body;

  try {
    if (
      !from ||
      !recipient ||
      !message ||
      !songTitle ||
      !songArtist ||
      !songLink
    ) {
      return next({
        log: 'Express error in createDedication. Any field or some fields are not being received on the request body',
        status: 400, //Bad request
        message: { err: 'Request must contain all fields' },
      });
    } else {
      const newDedication = new Dedications(req.body);
      await newDedication.save();
      res.locals.newDedication = newDedication;
      next();
    }
  } catch (err) {
    return next({
      log: `Try/catch error from createDedication trying to add a new dedication to the database: ${err}`,
      status: 500,
      message: { err: 'Failed to add dedication to the database' },
    });
  }
};
