import React, { useState } from 'react'

export default function Search(props) {

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(input);
    }

    const textEntered = (e) => {
        setInput(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={textEntered} />
            <button type='submit'>Search</button>
        </form>
    )
}
