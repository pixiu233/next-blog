import axios from "axios";
import useSWR, { Arguments } from "swr";

const fetcher = (url:string) => axios.get(url).then((res) => res.data)
export const useFetch=(url: any)=>{
    const { data, error } = useSWR(url, fetcher);
    return {
        data: data,
        isLoading: !data && !error,
        isError: error, 
    }
}