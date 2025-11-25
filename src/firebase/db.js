import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { app } from './config';


export const db = getFirestore(app);


export const getProducts = async () => {
    const products = [];
    

    const querySnapshot = await getDocs(collection(db, "productos")); 

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id }); 
    });

    return products;
};

export const getProductsByCategory = async (category) => {
    const products = [];
    

    const q = query(
        collection(db, "productos"), 
        where("categoria", "==", category)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });

    return products;
};

export const getCategories = async () => {
    const categories = [];

    const querySnapshot = await getDocs(collection(db, "categorias")); 

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name); 
    });
    
    return categories;
};


export const getProductById = async (id) => {
    try {
        const docRef = doc(db, "productos", id);
        
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log(`No se encontró un producto con ID: ${id}`);
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el producto por ID:", error);
        throw error;
    }
};


export const getUniqueCategories = async () => {
    try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        
        const categoriesSet = new Set(); 
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.categoria) {
                categoriesSet.add(data.categoria); 
            }
        });

        return Array.from(categoriesSet);

    } catch (error) {
        console.error("Error al obtener categorías únicas:", error);
        return [];
    }
};