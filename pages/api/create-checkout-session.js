/* eslint-disable import/no-anonymous-default-export */
const strip = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items } = req.body;
  console.log(items);
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: item.amount,
    price_data: {
      currency: "USD",
      unit_amount: item.price * 100,

      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await strip.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "BD", "IN", "PK"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.host}/payment-success`,
    cancel_url: `${process.env.host}/cart`,
    metadata: {
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
