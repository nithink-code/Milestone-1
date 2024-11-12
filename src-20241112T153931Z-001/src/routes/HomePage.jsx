import FoodCard from "../components/FoodCard";

const foodItems = [
  {
    name: "Chocolate Cake",
    price: 15.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Cake",
  },
  {
    name: "Vanilla Cupcake",
    price: 4.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Cake",
  },
  {
    name: "Strawberry Cheesecake",
    price: 12.49,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Cake",
  },
  {
    name: "Double Chocolate Biscuit",
    price: 3.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Biscuit",
  },
  {
    name: "Oatmeal Raisin Biscuit",
    price: 2.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Biscuit",
  },
  {
    name: "Butter Cookies",
    price: 5.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Biscuit",
  },
  {
    name: "Dark Chocolate Bar",
    price: 7.49,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Chocolate",
  },
  {
    name: "Milk Chocolate Truffle",
    price: 6.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Chocolate",
  },
  {
    name: "White Chocolate Almonds",
    price: 8.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Chocolate",
  },
  {
    name: "Red Velvet Cake",
    price: 13.99,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Fw-199hoU0qcuFHEL9Vf8wHaLH&pid=Api&P=0&h=220",
    foodType: "Cake",
  },
];

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {foodItems.map((item) => {
        return (
          <FoodCard
            key={item.name}
            image={item.image}
            name={item.name}
            price={item.price}
            foodType={item.foodType}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
