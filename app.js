/*

1. Create a band of your choice.
2. Log the newly created band. (Just that band, not all bands)
3. Create another band of your choice.
4. Query all bands, and log them all
5. Create the 3rd band of your choice.
6. Log the newly created 3rd band. (Just that band, not all bands)
7. Rename the first band
8. Log the first band with the updated name. 
9. Remove the second band you created.
10. Query all bands, and log them all
11. Try to create a band with bad input parameters to make sure it throws errors.
12. Try to remove a band that does not exist to make sure it throws errors.
13. Try to rename a band that does not exist to make sure it throws errors.
14. Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors.
15. Try getting a band by ID that does not exist to make sure it throws errors.

*/
import * as bands from "./data/bands.js"
import {dbConnection, closeConnection} from './config/mongoConnection.js'


// lets drop the database each time this is run
const db = await dbConnection();
await db.dropDatabase();

  // try {
    // 1. Create a band of your choice.
    const band1 = await bands.create(
      "Blackpink",
      ["Rock", "kPop"],
      "http://www.blackpink.com",
      "YG Entertainment",
      ["Jennie Kim", "Lalisa Manobal", "Jisoo kim", "Rose"],
      2016
    );
    // 2. Log the newly created band. (Just that band, not all bands)
    console.log(band1);

    // 3. Create another band of your choice.
    const band2 = await bands.create(
      "Chase Atlantic",
      ["Alternative", "Indie"],
      "http://www.chaseatlantic.com",
      "Warner Bros",
      ["Mitchel Cave", "Clinton Cave", "Christian Anthony"],
      2011
    );

    // 4. Query all bands, and log them all
    const allBands = await bands.getAll();
    console.log(allBands);

    // 5. Create the 3rd band of your choice.
    const band3 = await bands.create(
      "Arctic Monkey",
      ["Rock", "Indie"],
      "http://www.arcticmonkey.com",
      "Warner Bros",
      ["Alex Turner", "Matt Helders", "Jamie Cook", "Nick O'Malley"],
      2002
    );

    // 6. Log the newly created 3rd band. (Just that band, not all bands)
    console.log(band3);

    // 7. Rename the first band
    await bands.rename(band1._id, "Blackpink is the Revolution");

    // 8. Log the first band with the updated name.
    console.log(await bands.get(band1._id));

    // 9. Remove the second band you created.
    console.log(await bands.remove(band2._id));

    // 10. Query all bands, and log them all
    console.log(await bands.getAll());

    // 11. Try to create a band with bad input parameters to make sure it throws errors.
    try {
      await bands.create(
        "Bad Band",
        "not an array",
        "not a url",
        "not a record company",
        "not an array of members",
        "not a number"
      );
    } catch (error) {
      console.error(error.message);
    }

    // 12. Try to remove a band that does not exist to make sure it throws errors.
    try {
      await bands.remove("invalid id");
    } catch (error) {
      console.error(error.message);
    }

    // 13. Try to rename a band that does not exist to make sure it throws errors.
    try {
      await bands.rename("invalid id", "new name");
    } catch (error) {
      console.error(error.message);
    }

    // 14. Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors.
    try {
      await bands.rename(band3._id, 12345);
    } catch (error) {
      console.error(error.message);
    }

    // 15. Try getting a band by ID that does not exist to make sure it throws errors.
    try {
      await bands.get("invalid id");
    } catch (error) {
      console.error(error.message);
    }

  await closeConnection();
  console.log("Done");


