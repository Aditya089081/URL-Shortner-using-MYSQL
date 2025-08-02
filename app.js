import express from 'express';
// import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import shortnerRoute from './routes/shortnerRoute.js';

const app = express();





dotenv.config({'path':'./Private.env'});
import { fileURLToPath } from 'url'; //learn

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));


app.use("/", shortnerRoute);


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
