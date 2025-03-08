import "dotenv/config";
import app from "./app.js";

app.listen(process.env.PORT ?? 3000, () =>
  console.log(`Server is up and running on port ${3000}!`)
);
