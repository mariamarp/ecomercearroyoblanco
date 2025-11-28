import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import { Button, Form } from 'react-bootstrap';
import { db } from '../firebase/db'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 


const CheckoutForm = ({ onCancel }) => { 
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    const [orderId, setOrderId] = useState(null); 
    
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e) => { 
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.target;
        const buyer = {
            email: form.email.value,
            name: form.name.value,
            phone: form.phone.value,
        };
        
        const newOrder = {
            buyer,
            items: cart.map(item => ({ 
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                quantity: item.quantity
            })),
            total: Number(getTotalPrice()),
            date: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), newOrder);
            setOrderId(docRef.id);
            clearCart(); 
            
        } catch (error) {
            console.error("Error al generar la orden:", error);
            alert("Hubo un error al procesar tu compra.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    if (orderId) {
        return (
            <div className='mt-5 text-center p-4 border rounded' style={{ maxWidth: '600px', margin: '50px auto' }}>
                <p className='fw-bold fs-4' style={{ color: '#4CAF50' }}>🎉 ¡Compra Exitosa!</p>
                <p>Tu orden ha sido generada correctamente.</p>
                <p className='fw-bold fs-5'>ID de tu Orden: {orderId}</p>
                <Button onClick={() => navigate('/')} variant="primary" className='mt-3'>
                    Volver al Catálogo
                </Button>
            </div>
        );
    }
    
    return (
        <div className='d-flex justify-content-center'>
            <Form className='mt-5 border p-3 rounded w-50' onSubmit={handleSubmit}> 
                <p className='fw-bold'>Se requiere completar formulario</p>
                
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Email" required/> 
                <Form.Text className="text-muted"> Tu mail no se va a compartir</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" placeholder="Nombre" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Numero de telefono</Form.Label>
                <Form.Control type="tel" name="phone" placeholder="123456789" required/>
            </Form.Group>

            <Button variant="dark" type="submit" className='w-100' disabled={isSubmitting}>
                {isSubmitting ? 'Procesando...' : 'Finalizar compra'}
            </Button>
            
            <Button variant="outline-dark" onClick={onCancel} className='w-100 mt-2'>
                Cancelar
            </Button>
            </Form>
        </div>
    );
}

export default CheckoutForm;