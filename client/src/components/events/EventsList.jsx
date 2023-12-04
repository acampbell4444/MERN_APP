import React from "react";
import { GET_EVENTS } from '../../queries/event'
import { GET_RECIPES } from "../../queries/recipe";
import { useQuery, useMutation } from '@apollo/client';

const EventsList = () => {
    const { loading, error, data } = useQuery(GET_EVENTS);

    const recipeData = useQuery(GET_RECIPES);
    console.log('recipeData', recipeData)

    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            {data.events.map(({ _id, description, date, price }, i) => (
                <div key={i}>
                    <p>description: {description}</p>
                    <p>date: {date}</p>
                    <p>price: {price}</p>
                    <p>id: {_id}</p>
                </div>
            ))}
        </div>
    );
}

export default EventsList;