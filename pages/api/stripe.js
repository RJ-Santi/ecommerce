import Stripe from 'stripe';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



export default async function handler(req, res) {
  if (req.method === 'POST') {
    // ERROR RETURNING UNDEFINED - DEBUG
    console.log(req.body.cartItems);

    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {shipping_rate: 'shr_1Lqo0GGJHyLvG04ZYOIsWIIV'},
                {shipping_rate: 'shr_1Lqo2vGJHyLvG04Z3fWj9BrB'},
            ],
            line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
            ],
            line_items: req.body.cartItems.map((item) => {
              const img = item.image[0].asset._ref
              const newImage = img.replace('image-', 'https://cdn.sanity.io/images/ysgdvo8d/production/').replace('-webp', '.webp')

              console.log('IMAGE', newImage)
            }),
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
            automatic_tax: {enabled: true},
        }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}