// const Dedications = require('../models/DedicationModel'); //DB
import Dedications from '../models/DedicationModel.js';
//GET ALL DEDICATIONS
const getAllDedications = async (req, res, next) => {
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
const createDedication = async (req, res, next) => {
  const { songTitle, songArtist, songLink, message, from, recipient } = req.body;

  try {
    if (!songTitle || !songArtist || !songLink || !message || !recipient) {
      return next({
        log: 'Express error in createDedication. Missing required fields in request body',
        status: 400, //Bad request
        message: { err: 'Missing required fields' },
      });
    } else {
      const newDedication = new Dedications({
        song: {
          title: songTitle,
          artist: songArtist,
          link: songLink,
        },
        message: message,
        sender_name: from, 
        recipient_name: recipient,
      });
      await newDedication.save();
      res.locals.newDedication = newDedication;
      next();
    }
  } catch (err) {
    return next({
      log: `Try/catch error from createDedication: ${err}`,
      status: 500,
      message: { err: 'Failed to create dedication.' },
    });
  }
};

export default { getAllDedications, createDedication };
