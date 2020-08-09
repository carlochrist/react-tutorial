import React from "react";
import ContactCard from "./components/ContactCard";

function App5() {
  return (
    <div>
      <ContactCard
        name="Mr. 1"
        imageUrl="http://placekitten.com/300/200"
        phone="123"
        email="xyz"
      />
      <ContactCard
        name="Mr. 2"
        imageUrl="http://placekitten.com/300/200"
        phone="345"
        email="xyz"
      />
      <ContactCard
        name="Mr. 3"
        imageUrl="http://placekitten.com/300/200"
        phone="567"
        email="xyz"
      />
      <ContactCard
        name="Mr. 4"
        imageUrl="http://placekitten.com/300/200"
        phone="789"
        email="xyz"
      />
    </div>
  );
}

export default App5;
