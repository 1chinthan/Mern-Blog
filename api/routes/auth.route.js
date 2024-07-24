import express from 'express';
import {signup,signin} from '../controllers/auth.controller.js'

const sig=express.Router();

sig.post('/signup',signup);
sig.post('/signin',signin);
export default sig;