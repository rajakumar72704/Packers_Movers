import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe Secret Key is missing in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function Gateway(req,res) {
  try {
    const product = await stripe.products.create({
      name: "funds",
      description: "payment for charity",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: req.body.amount * 100, // 100 INR
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/payment/lovelyrajakumarsingh@gmail.com/1000",
      cancel_url: "http://localhost:3000/cancel",
      customer_email: "check@gmail.com",
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default Gateway;
