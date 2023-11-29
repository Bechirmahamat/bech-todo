import React, { useState } from "react";

const Item = ({ item, remove, editItem }) => {
    const { id, name, completed } = item;
    return (
        <div className="item">
            <div className="item-iner">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={completed ? true : false}
                    onChange={() => editItem(id)}
                />
                <label htmlFor="" className={completed ? "line" : ""}>
                    {name}
                </label>
            </div>
            <div className="btn-container">
                <button className="btn-success">Edit</button>
                <button className="btn-danger" onClick={() => remove(id)}>
                    delete
                </button>
            </div>
        </div>
    );
};

export default Item;
