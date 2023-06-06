import NotionPage from "../app/components/NotionPage";

import { useFetch } from "@/hooks/useFetch";

export default function NotionDomainPage(props) {

    const { data } = useFetch('/api/user')
    console.log('data: ', data);
    const { data: data2 } = useFetch('/api/test')
    console.log('data2: ', data2);
    return <NotionPage />
}
