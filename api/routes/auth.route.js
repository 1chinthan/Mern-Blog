import express from 'express';
import {auth} from '../controllers/auth.controller.js'
const sig=express.Router();

sig.post('/signup',auth);

export default sig;