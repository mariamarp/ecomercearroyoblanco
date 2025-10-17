import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  const welcomeMessage = "Bienvenido a Arroyo Blanco — Elige tu vermut favorito 🍷";

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={welcomeMessage} />
    </div>
  );
};

export default App;