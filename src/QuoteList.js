import {useEffect, useState} from "react";
import Quote from "./Quote.js";

    function QuoteList() {

        const [teksti, setTeksti] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {

            async function getQuotes(){

                const response = await fetch("https://dummyjson.com/quotes");
                const data = await response.json();

                setTeksti(data.quotes);
                setLoading(false);
            }
            getQuotes();
            
        }, []);



        const quotes = teksti.map((teksts, indekss) => {

            return( <Quote key={indekss} author={teksts.author} quote={teksts.quote} /> )
        });

        return (
        <>
            {loading ? <p>Uzgaidi.....</p> : quotes}
        </>
        );
    }
export default QuoteList;