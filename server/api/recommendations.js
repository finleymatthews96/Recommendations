const router = require("express").Router();
const {
  models: { User, Recommendation },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const recommendations = await Recommendation.findAll({
      attributes: ["title", "category", "description", "level"],
    });
    res.json(recommendations);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const recommendation = await Recommendation.create(req.body);
    res.json(recommendation);
  } catch (error) {
    next(error);
  }
});
