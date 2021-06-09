"use strict";

const {
  db,
  models: { User, Recommendation },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "cody",
      email: "cody@mail.com",
      password: "123456",
    }),
    User.create({
      username: "murphy",
      email: "murphy@mail.com",
      password: "123456",
    }),
    User.create({
      username: "arnold",
      email: "arnold@mail.com",
      password: "123456",
    }),
  ]);

  // Creating Recommendations
  const recommendations = await Promise.all([
    Recommendation.create({
      title: "Blue Moon",
      category: "Drink",
      description: "good beer",
      level: "if it's not too much trouble",
      userId: 1,
    }),
    Recommendation.create({
      title: "Pizza",
      category: "Food",
      description: "the oldest classic in the book",
      level: "worth trying",
      userId: 1,
    }),
    Recommendation.create({
      title: "Fast & Furious",
      category: "Movie",
      description: "the true essence of family",
      level: "you MUST try this",
      userId: 2,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    recommendations: {
      blueMoon: recommendations[0],
      pizza: recommendations[1],
      fastAndFurious: recommendations[2],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
