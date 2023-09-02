import { useEffect, useState } from "react";
import { listBooks } from "./fetch/books.js";

function Home() {
    const [books, setBooks] = useState ([])

    const fetchBooks = async () => {

        const response = await listBooks();
        console.log(response,"<<<<<");
        
        setBooks (response);
    }


    useEffect(() =>{
        fetchBooks();
    },[])

    return(
        <>
            {JSON.stringify(books)}
            <h1>HOMEPAGE</h1>
        </>
    )

}

export default Home;