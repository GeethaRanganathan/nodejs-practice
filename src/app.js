const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRouter');

const app = express();
dotenv.config();

const{PORT, DB_USER,DB_PASSWORD } = process.env;
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.gaxn7be.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURL);

app.use(express.json);
