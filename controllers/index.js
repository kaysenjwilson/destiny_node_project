const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getToWeapons = (req, res) => {
    res.send("please type http://localhost:3000/weapons in the url to get to the api")
}

const getAllWeapons = async (req, res) => {
    try {
      const result = await mongodb.getDb().db().collection("weapons").find();
      result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  const getSingleWeapon = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb
        .getDb()
        .db()
        .collection("weapons")
        .find({ _id: userId });
      result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists[0]);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  const createWeapon = async (req, res) => {
    try {
      const student = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        currentCollege: req.body.currentCollege,
      };
      
      const response = await mongodb
        .getDb()
        .db()
        .collection("weapons")
        .insertOne(weapon);
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res
          .status(500)
          .json(
            response.error || "some error occurred while creating the weapon."
          );
        }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  // update one student
  const updateWeapon = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const weapon = {
        weaponName: req.body.weaponName,
        rpm: req.body.rpm,
        weaponType: req.body.weaponType,
        capacity: req.body.capacity,
        rarity: req.body.rarity,
      };
  
      const response = await mongodb
        .getDb()
        .db()
        .collection("students")
        .replaceOne({ _id: userId }, weapon);
      if (response.acknowledged) {
        res.status(204).json(response);
      } else {
        res
          .status(500)
          .json(
            response.error || "Some error occurred while updating the weapon."
          );
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  // delete student
  const deleteWeapon = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const response = await mongodb
        .getDb()
        .db()
        .collection("weapons")
        .deleteOne({ _id: userId }, true);
      console.log(response);
      if (response.acknowledged) {
        res.status(200).send(response);
      } else {
        res
          .status(500)
          .json(
            response.error || "Some error occurred while deleting the weapon."
          );
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports = {
    getToWeapons,
    getAllWeapons,
    getSingleWeapon,
    createWeapon,
    updateWeapon,
    deleteWeapon
};