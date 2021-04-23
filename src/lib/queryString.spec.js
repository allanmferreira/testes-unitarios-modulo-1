const { queryString } = require('./queryString');

describe('Object do query string', () => {
    it('should create a query string when a object is received', () => {
        const obj = {
            name: 'Allan',
            profession: 'Developer',
        };
        expect(queryString(obj)).toBe('name=Allan&profession=Developer');
    });

    it('should create a valid query string even when a array is passed as a value', () => {
        const obj = {
            name: 'Allan',
            abilities: ['Vue', 'CSS', 'JS'],
        };
        expect(queryString(obj)).toBe('name=Allan&abilities=Vue,CSS,JS');
    });

    it('should throw a error when an object is passed as a value', () => {
        const obj = {
            name: 'Allan',
            abilities: {
                first: 'Vue',
                second: 'CSS',
                third: 'JS',
            },
        };
        expect(() => {
            queryString(obj);
        }).toThrowError();
    });
});

describe('Query string to object', () => {});
