'use strict';

import expect from 'expect';
import Utility, {setLangSource} from './../app/scripts/common/utility/Utility.js';

describe('Utility setLngSource', () => {
    it('should return the default', () =>  {
        const actual = Utility.setLangSource(null);
        const expected = 'scripts/json/people.json';
        expect(actual).toEqual(expected);
    });

    it('should return the lang', () =>  {
        const actual = Utility.setLangSource('fr-CA');
        const expected = 'scripts/json/fr-CA/lang.json';
        expect(actual).toEqual(expected);
    });
});
