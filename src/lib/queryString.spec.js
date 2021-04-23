const {queryString} = require('./queryString');

describe('Object do query string', () => {
    it('should create a query string when a object is received', () => {
        const obj = {
            name: 'Allan',
            profession: 'Developer'
        }
        
        expect(queryString(obj)).toBe(
            'name=Allan&profession=Developer'
        );
    });
});

describe('Query string to object', () => {
    
});