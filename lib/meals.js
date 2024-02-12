import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('Loading meals failed');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}

// import fs from "node:fs"; //this allows us to work with  the file system

// import sql from "better-sqlite3";
// import slugify from "slugify";
// import xss from "xss";
// const db = sql("meals.db");

// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 5000));

//   // throw new Error('Loading meals failed');
//   return db.prepare("SELECT * FROM meals").all();
// }
// //
// export function getMeal(slug) {
//   return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
// }

// export async function saveMeal(meal) {
//   meal.slug = slugify(meal.title, { lower: true }); // a slug  is  created using the title of the data that is entered by the user
//   meal.instructions = xss(meal.instructions);

//   const extension = meal.image.name.split(".").pop();
//   const fileName = `${slug}.${extension}`;

//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   const bufferedImage = await meal.image.arrayBuffer();
//   // writing to the stream and handling error in the call back fn
//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error("Failed to save Image");
//     }
//   });
//   // In the above we have just written the image to the public/image file

//   meal.image = `/images/${fileName}`;

//   db.prepare(
//     `
//   INSERT INTO meals
//   (title, summary , instructions, creator, creator_email, image, slug)
//   VALUES (
//     @title,
//     @summary,
//     @instructions,
//     @creator,
//     @creator_email,
//     @image,
//     @slug

//   )
//   `
//   ).run(meal);
// }
