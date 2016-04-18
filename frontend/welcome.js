'use strict';

export default function (message) {
    if (NODE_ENV === 'development') {
        console.log('Development mode has been enabled');
    }
    console.log(`Welcome ${message}`);
};
