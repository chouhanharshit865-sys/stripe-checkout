import Order from "../models/order.model.js";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';
import Stripe from "stripe";


dotenv.config()



const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkout = async (req, res) => {
    const { totalAmount } = req.body;

    try {
    const order = await Order.create(req.body);
      
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],

        mode: 'payment',
      metadata: {
  orderId: order._id.toString()
},


      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Products',
            },
            unit_amount: Math.round(totalAmount*100), // $20.00
          },
          quantity: 1,
        },
      ],

      success_url:
        'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/failed',
    });
        
        // console.log(session)

        await Order.findByIdAndUpdate(order._id, {transactionId:session.id})

    res.json({ url: session.url });
    } catch (err) {
        console.log(err)
    res.status(500).json({ error: err.message });
  }
};


export const webhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body, // RAW body required
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    // ✅ PAYMENT SUCCESS
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      await Order.findOneAndUpdate(
        { transactionId: session.id }, 
        {
          status: 'success',
        //   transactionId: session.payment_intent || session.id,
        }
      );

      console.log('✅ Payment successful:', session.id);
    }

    // ❌ PAYMENT FAILED
    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object;

      await Order.findOneAndUpdate(
        { transactionId: paymentIntent.id },
        { status: 'failed' }
      );

      console.log('❌ Payment failed:', paymentIntent.id);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook handling error:', error);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
};


// export const webhook = async(req, res) => {
//   const sig = req.headers['stripe-signature'];

//   const event = stripe.webhooks.constructEvent(
//     req.body,
//     sig,
//     process.env.STRIPE_WEBHOOK_SECRET
//   );

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object;

//     // Mark order as paid in MongoDB
//     console.log('Payment confirmed:', session.id);
//   }

//   res.json({ received: true });
// };