const { queryString, parse } = require('./queryString');

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

describe('Query string to object', () => {
    it('should convet a query string to object', () => {
        const qs = 'name=Allan&profession=Developer';
        expect(parse(qs)).toEqual({
            name: 'Allan',
            profession: 'Developer',
        });
    });

    it('should recieve a single key query string and convert to object', () => {
        const qs = 'name=Allan';
        expect(parse(qs)).toEqual({
            name: 'Allan',
        });
    });

    it('should recieve a string to convert to object and taking care with comma separated', () => {
        const qs = 'name=Allan&abilities=Js,Vue';

        expect(parse(qs)).toEqual({
            name: 'Allan',
            abilities: ['Js', 'Vue'],
        });
    });
});
