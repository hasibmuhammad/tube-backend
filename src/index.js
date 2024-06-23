import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: ".env" });

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is listening at port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("DB Connection Error: ", error);
    throw error;
  });
