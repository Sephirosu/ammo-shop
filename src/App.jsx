import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import AmmoFull from "./components/AmmoFull";

function App() {
  const [ammoData, setAmmoData] = useState([]);
  const [previewAmmo, setPreviewAmmo] = useState(null);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/ammo.json");
        const result = await response.json();
        setAmmoData(result);

        const randomPreview = Math.floor(Math.random() * result.length);
        setPreviewAmmo(result[randomPreview]);
      } catch (error) {
        console.error("Error 404", error);
      }
    };

    fetchData(search);
  }, [search]);

  const addHandlerPreview = (ammo) => {
    setPreviewAmmo(ammo);
    if (window.innerWidth < 992) {
      setShowModal(true);
    }
  };

  const addAmmoHandler = () => {
    if (previewAmmo) {
      const existAmmo = cart.find((item) => item.id === previewAmmo.id);
      if (existAmmo) {
        const updatedCart = cart.map((item) =>
          item.id === previewAmmo.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        const updatedCart = [...cart, { ...previewAmmo, quantity: 1 }];
        setCart(updatedCart);
      }
    }
  };

  const removeHandler = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );

    const updatedRemovedCart = updatedCart.filter((item) => item.quantity > 0);
    setCart(updatedRemovedCart);
  };

  const removeAll = () => {
    setCart([]);
  };

  const handleCloseModal = () => setShowModal(false);

  const filteredAmmoData = ammoData.filter((ammo) =>
    ammo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <AmmoFull
        previewAmmo={previewAmmo}
        cart={cart}
        showModal={showModal}
        addHandlerPreview={addHandlerPreview}
        addAmmoHandler={addAmmoHandler}
        removeHandler={removeHandler}
        removeAll={removeAll}
        handleCloseModal={handleCloseModal}
        filteredAmmoData={filteredAmmoData}
      ></AmmoFull>
    </div>
  );
}

export default App;
