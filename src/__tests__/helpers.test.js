import { capitalize, isValidEmail} from '../helpers';

describe('Helpers', () => {
    // ===== TESTS FRO capitalize =====
    test('capitalize shoud make first letter uppercase', () => {
        const result = capitalize('hello');
        expect(result).toBe('Hello');
    })

    test('capitalize should work with single letter', () => {
        const result = capitalize('a');
        expect(result).toBe('A');
    })

    

});