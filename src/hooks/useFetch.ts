import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = (url: string) => {
    const [fetchData, setFetchData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(url);
                setFetchData(data.data);
                setLoading(false);



            } catch (e: any) {

                if (e.response) {
                    console.log(`Error fetching data from ${url}`);
                } else {
                    console.log('No server connection available');

                }
                ;
            }

        }

getData()
    }, [url])


    return { fetchData, loading }
}