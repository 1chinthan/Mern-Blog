import express from 'express';
import {signup,signin,google} from '../controllers/auth.controller.js'

const sig=express.Router();

sig.post('/signup',signup);
sig.post('/signin',signin);
sig.post('/google',google);
export default sig;