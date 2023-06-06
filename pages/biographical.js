import NotionPage from "../app/components/NotionPage";

import { useFetch } from "@/hooks/useFetch";

export default function NotionDomainPage(props) {

    const { data } = useFetch('/api/user')
    console.log('data: ', data);
    return <NotionPage />
}
