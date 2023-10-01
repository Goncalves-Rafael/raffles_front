import { useParams } from "react-router-dom";


export default function RaffleAdmin () {
    const routeParams = useParams();
    return <h1>{routeParams.id}</h1>
}