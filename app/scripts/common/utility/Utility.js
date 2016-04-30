'use strict';

export default {

    isSmallOnly() {
        return Modernizr.mq('only screen and (max-width: 640px)');
    },

    isMediumUp() {
        return Modernizr.mq('only screen and (min-width: 641px)');
    },

    isMediumOnly() {
        return Modernizr.mq('only screen and (min-width: 641px) and (max-width: 1023)');
    },

    isLargeUp() {
        return Modernizr.mq('only screen and (min-width: 1024)');
    },

    setLangSource(lang) {
        if (lang !== null) {
            //would need to add scripts/ to the below call
            //and called like this in the url /?lang=fr-fr
            //console.log('called lang');
            return 'scripts/json/' + lang + "/lang.json";
        } else {
            //console.log('called other');
            return 'scripts/json/people.json';
        }
    },

    getDateTime(currDateTimeValue) {
        var currDate = "",
            currTime = "",
            currDateValueMinusTime = "",
            // the chars injected into the span
            lengthToBeRemoved = 5,
            meridiem = "";

        currDateTimeValue = currDateTimeValue.trim().replace(/ /g, '');

        // set meridiem to the last to chars in the time stamp
        meridiem = currDateTimeValue.substring(currDateTimeValue.length - 2, currDateTimeValue.length);

        // does the meridem exist? if so account for it
        if (meridiem === 'AM' || meridiem === 'PM') {
            lengthToBeRemoved = 7;
        }

        // scoop up the time of day
        currTime = currDateTimeValue.substring((currDateTimeValue.length - lengthToBeRemoved), currDateTimeValue.length);

        // add . in place of /
        currDateValueMinusTime = currDateTimeValue.replace(currTime, '').replace(/\//g, '.');

        // Add a space for for time that do not currently have a timestamp available
        currTime = currTime.replace(/(\s)AM/, 'AM');
        currTime = currTime.replace(/(\s)PM/, 'PM');

        return (currDateValueMinusTime + ' <span>' + currTime + '</span>');
    }
}
