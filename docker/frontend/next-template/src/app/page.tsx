'use client'

// import Image from 'next/image'
// import styles from './page.module.css'
import { useEffect, useState } from 'react';

interface Item {
	id: number;
	name: string;
}

  const MyPage: React.FC = () => {
	const [data, setData] = useState<Item[] | null>(null);
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await fetch('/test');
		  const responseData = await response.json();
		  setData(responseData);
		  console.log(responseData);
		} catch (error) {
		  console.error('Erreur lors de la récupération des données du backend', error);
		}
	  };
	fetchData();
	}, []);
  
	return (
	  <div>
		{data ? (
		  <ul>
			{data.map((item) => (
			  <li key={item.id}>{item.name}</li>
			))}
		  </ul>
		) : (
		  <p>Chargement des données...</p>
		)}
	  </div>
	);
  };
  
  export default MyPage;