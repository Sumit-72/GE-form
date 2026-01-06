import React from "react";
import Navbar from "./components/navbar";
import Form from "./components/form";

const Page = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar />
      <Form />
    </div>
  );
};

export default Page;
