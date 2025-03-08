import ENV from "./config/env.js";
import app from "./app.js";

app.listen(ENV.PORT ?? 3000, () =>
  console.log(`Server is up and running on port ${3000}!`)
);
