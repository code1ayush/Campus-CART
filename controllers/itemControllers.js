import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../error/index.js";
import Thing from "../models/Thing.js";
import path from "path";

const sellThing = async (req, res) => {
  const { name, price, desc, contact, image } = req.body;

  console.log(image);

  if (!name || !price || !desc || !contact || !image) {
    throw new BadRequestError("please provide all values");
  }

  const thing = new Thing({ image, name, price, desc, contact });
  const savedthing = await thing.save();
  res.status(StatusCodes.CREATED).json(savedthing);
};

export { sellThing };
