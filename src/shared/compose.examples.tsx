import * as React from 'react';
import {getValue} from '../utils/react/pickFromSyntheticEvent';
import preventDefault from '../utils/react/preventDefault';
import preventPropagation from '../utils/react/preventPropagation';

function InputExample({value,onChange}: any) {
    return (
        <input
            value={value}
            onChange={compose(onChange,getValue,preventPropagation,preventDefault)}
        />
    )
}

function compose<U>(... fns: Function[]) {
    return <E,>(initialValue: any): U =>
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(... fns: Function[]) {
    return <E,>(initialValue: any): U =>
        fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}