import express from 'express';
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
