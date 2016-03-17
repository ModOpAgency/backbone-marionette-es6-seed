'use strict';

import expect from 'expect';
import Utility, {getTime} from './../app/scripts/common/utility/Utility';

describe('Utility getTime', () => {
    it('should alter date format', () => {
        const actual = Utility.getDateTime("11/28/201406:30 PM");
        const expected = '11.28.2014 <span>06:30PM</span>';
        expect(actual).toEqual(expected);
    });
});
