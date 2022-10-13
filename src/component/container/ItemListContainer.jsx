import React, { useEffect, useState } from "react";
//  import { products } from '../../data/products';
import ItemList from "../ItemList";
import {useParams} from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);

    useEffect(() => {
        (async () => {
            try {
                const q = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : query(collection(db, "products"));

                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
        
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  productosFirebase.push({id: doc.id, ...doc.data()})
                });
        
                setProductos(productosFirebase);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [categoryId]);

    return <ItemList products={productos} />;
};

export default ItemListContainer;