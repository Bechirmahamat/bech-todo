import React from "react";
import Item from "./Item";

const Items = ({ removeItem, editItem, items }) => {
    return (
        <div>
            {items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        remove={removeItem}
                        editItem={editItem}
                    />
                );
            })}
        </div>
    );
};

export default Items;
