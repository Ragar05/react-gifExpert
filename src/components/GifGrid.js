import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
// , { useState, useEffect }


export const GifGrid = ({ categoria }) => {
    const {data:images, loading} = useFetchGifs(categoria);

    return (
			<>
				<h3 className="card animate__ fadeIn">{categoria}</h3>
				{loading && <p className="card animate__flash">Loading...</p>}
				<div className="card-grid">
					{images.map((img) => (
						<GifGridItem
							key={img.id}
							{...img}
							//{..img} exporta todas las propiedades del parametro img
						/>
					))}
				</div>
			</>
		);
}
