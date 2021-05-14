// Write your Character component here

import React, { useEffect, useState } from 'react';
import data from '../mocks/handlers';

export default function CharacterList(props) {
    const { chars } = props

    return (
        <div className='list-star-wars-characters-container'>
            {
                chars.map((data) => {
                    return <data key={data.id} data={data} />
                })
            }
        </div>
    )
}