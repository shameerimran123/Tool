// Local Shop E-commerce Website with SEO, AdSense, Cart System
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  { id: 1, name: "Product A", price: 500, image: "/product-a.jpg" },
  { id: 2, name: "Product B", price: 700, image: "/product-b.jpg" },
  { id: 3, name: "Product C", price: 1200, image: "/product-c.jpg" },
];

export default function LocalShop() {
  const [cart, setCart] = useState([]);
  const [location, setLocation] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    if (!signedIn) return alert("Please sign in first");
    if (!location) return alert("Please enter your delivery location");
    const orderDetails = {
      customer: { name, phone },
      location,
      cart,
    };
    console.log("ORDER NOTIFICATION:", orderDetails);
    alert("Order received! We will contact you to confirm.");
    setCart([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Local Shop</h1>

      {/* AdSense Ad Slot */}
      <div className="my-4">
        {/* Replace ca-pub-XXXX with your actual AdSense Publisher ID */}
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </div>

      {!signedIn ? (
        <div className="mb-6">
          <h2 className="text-xl mb-2">Sign In to Buy</h2>
          <Input placeholder="Your Name" onChange={(e) => setName(e.target.value)} className="mb-2" />
          <Input placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} className="mb-2" />
          <Button onClick={() => setSignedIn(true)}>Sign In</Button>
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl mb-2">Welcome, {name}!</h2>
          <Input placeholder="Enter delivery location" onChange={(e) => setLocation(e.target.value)} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-700">PKR {product.price}</p>
              <Button className="mt-2" onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Cart</h2>
          {cart.map((item, idx) => (
            <p key={idx} className="mb-1">{item.name} - PKR {item.price}</p>
          ))}
          <Button className="mt-4" onClick={handleCheckout}>Checkout</Button>
        </div>
      )}
    </div>
  );
}
