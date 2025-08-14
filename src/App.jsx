// src/App.jsx
import Page from "./components/Page";
import "./index.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Grilled Chicken",
      description: "Delicious grilled chicken with herbs and spices.",
      price: 120,
      image: "/images/meal-5.jpg"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and basil.",
      price: 80,
      image: "/images/meal-1.jpg"
    },
    {
      id: 3,
      name: "Cheeseburger",
      description: "Juicy beef burger with cheese, lettuce, and tomato.",
      price: 60,
      image: "/images/meal-3.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Page title="Our Dishes" data={products} />
    </div>
  );
}

export default App;
