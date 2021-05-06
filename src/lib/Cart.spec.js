import Cart from './Cart';

describe('Cart', () => {
    let cart;
    let product = {
        title: 'Notebook Acer',
        price: 35388,
    };

    beforeEach(() => {
        cart = new Cart();
    });

    it('should return 0 when getTotal() is executed newly created instance', () => {
        expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price and recive total amount', () => {
        const item = {
            product,
            quantity: 2,
        };

        cart.add(item);

        expect(cart.getTotal()).toEqual(70776);
    });

    it('should ensure no more than one product exist at a time', () => {
        cart.add({
            product,
            quantity: 2,
        });

        cart.add({
            product,
            quantity: 1,
        });

        expect(cart.getTotal()).toEqual(35388);
    });
});