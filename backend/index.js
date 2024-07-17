import express from 'express';
import cors from'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/authRoutes.js';
import setPassportStrategy from './config/passport.js';

import roleRoutes from './routes/roles.js'
import coachRoutes from './routes/coaches.js';
import userRoutes from './routes/users.js';
import playerRoutes from './routes/players.js';
import teamRoutes from './routes/teams.js';
import facilityRoutes from './routes/facilities.js';
import leagueRoutes from './routes/leagues.js';
import matchRoutes from './routes/matches.js';
import matchEventRoutes from './routes/matchEvents.js';
import trainingSessionRoutes from './routes/trainingSessions.js';
import appRoutes from './routes/appRoutes.js'

import bodyParser from 'body-parser';
import predictRoutes from './routes/predictRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

import path from'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const public_folder = path.join(__dirname,'public');
app.use(express.static(public_folder));

import mustache from 'mustache-express';
app.engine('mustache', mustache());
app.set('view engine', 'mustache');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(session({ secret: 'SECRET', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
    
// Set up Passport strategy
setPassportStrategy();


// Routes
app.use('/auth', authRoutes);
app.use('/coaches', coachRoutes);
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/players', playerRoutes);
app.use('/teams', teamRoutes);
app.use('/matches', matchRoutes)
app.use('/matchEvents', matchEventRoutes);
app.use('/leagues', leagueRoutes);
app.use('/trainingSessions', trainingSessionRoutes);
app.use('/facilities', facilityRoutes);
app.use('/predict', predictRoutes);

app.use('/',appRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
