import React, { useState } from "react";

const Forms = ({ addNew }) => {
    const [item, SetItem] = useState("");

    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addNew(value);
        setValue("");
    };
    return (
        <div className="">
            <h1 className="text-center">
                Bech <span className="text-primary">ToDo </span> App
            </h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Example:Eggs"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <button
                    className="btn btn-primary"
                    disabled={value == "" ? true : false}
                >
                    add Item
                </button>
            </form>
        </div>
    );
};

export default Forms;
