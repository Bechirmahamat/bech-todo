import { useState } from "react";
import Forms from "../components/Forms";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Items from "../components/Items";

const setItemLocalStorage = (item) => {
    localStorage.setItem("list", JSON.stringify(item));
};
const getItemLocalStorage = () => {
    return JSON.parse(localStorage.getItem("list") ?? "[]");
};
function App() {
    const [items, setItems] = useState(getItemLocalStorage);

    const addNewItem = (name) => {
        const newItem = { completed: false, name: name, id: nanoid() };
        const newItems = [...items, newItem];
        setItems(newItems);
        setItemLocalStorage(newItems);
        toast.success("Item added successfully");
    };
    const removeItem = (id) => {
        const newItems = items.filter((item) => item.id != id);
        setItems(newItems);
        setItemLocalStorage(newItems);
        toast.error("Item remove from the list");
    };
    const editItem = (id) => {
        const newItems = items.map((item) => {
            if (item.id == id) {
                const changeItem = { ...item, completed: !item.completed };
                return changeItem;
            }
            return item;
        });
        setItems(newItems);
        setItemLocalStorage(newItems);
    };
    return (
        <main className="main">
            <ToastContainer position="top-center" />
            <Forms addNew={addNewItem} />
            <Items items={items} removeItem={removeItem} editItem={editItem} />
        </main>
    );
}

export default App;
