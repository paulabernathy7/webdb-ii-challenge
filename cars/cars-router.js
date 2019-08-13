const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.status(200).json(cars);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve cars", error: err.message });
  }
});

router.post("/", async (req, res) => {
  // need more detail in regards to creating POSTs. refer to API projects or add middleware
  const carData = req.body;

  try {
    const cars = await db("cars").insert(carData);
    res.status(201).json(cars);
  } catch (err) {
    res.status(500).json({ message: "could not add car", error: err.message });
  }
});
module.exports = router;
