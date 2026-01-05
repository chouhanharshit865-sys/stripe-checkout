import express from "express";
import { webhook, checkout } from "../controllers/stripe.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { asyncHandler } from "../lib/utils.js";

const router = express.Router();

router.post('/create-checkout-session', asyncHandler(checkout));
// router.post(
//   '/webhook',
//   express.raw({ type: 'application/json' }),
//   asyncHandler(webhook)
// );


export default router;