const express = require('express');

const app = express();

const MENU = [
    {
        id: 'm1',
        name: 'Hamburguesa con queso',
        description: 'Deliciosa hamburguesa con queso cheddar',
        price: 10.99
    },
    {
        id: 'm2',
        name: 'Pizza de pepperoni',
        description: 'Pizza con salsa de tomate, queso mozzarella y pepperoni',
        price: 12.99
    },
    {
        id: 'm3',
        name: 'Ensalada César',
        description: 'Ensalada con lechuga romana, parmesano y aderezo César',
        price: 8.99
    }
];

app.get('/api/menu', (req, res, next) => {
    res.send(MENU);
});

app.get('/api/menu/:mid', (req, res, next) => {
    const menuItem = MENU.find(item => item.id === req.params.mid);
    res.send(menuItem);
});

app.listen(2000, () => {
    console.log('Servidor corriendo en el puerto 2000');
});
