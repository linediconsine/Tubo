import { pipe } from '../../src/tubo';

describe('pipe', () => {

    const getName = (person : any) : string => person.name;
    const toUppercase = (s : string) : string => s.toUpperCase();
    const get6Characters = (s: string):  string => s.substring(0, 6);
    const reverse = (s : string): string => s.split('').reverse().join('');
    const addRevese = (person : any) : object => { 
        person.reverse = reverse(person.name)
        return person
    };
    const functionWithError = (param : any) => {  
        throw new Error()
    }

    it('Pipe - object -> string', async () => {
        
        const actual = pipe(
            getName,
            toUppercase,
            get6Characters,
            reverse
          )({ name: 'Buckethead' });

        const expected = 'TEKCUB';
        expect(actual).toEqual(expected);
    });

    it('Pipe - object', async () => {
        const actual = pipe(
            addRevese
          )({ name: 'Buckethead' });

        const expected = {"name": "Buckethead", "reverse": "daehtekcuB"};
        expect(actual).toEqual(expected);
    });
 

    it('Pipe - object', async () => {
        const actual = pipe(
            addRevese
          )({ name: 'Buckethead' });

        const expected = {"name": "Buckethead", "reverse": "daehtekcuB"};
        expect(actual).toEqual(expected);
    });

    it('Pipe - to Throw Error', async () => {
        
        const actual = pipe(
            getName,
            toUppercase,
            functionWithError,
            reverse
          );
        
        expect(() => actual( 83 )).toThrow(Error)
    })
});
