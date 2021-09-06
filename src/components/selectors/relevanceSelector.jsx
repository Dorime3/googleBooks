import React from 'react';
import s from './Selectors.module.css'


const RelevanceSelector = (props) => {
    const onRelevanceSelect = (event) => {
        props.selectRelevance(event.target.value)
    }
    return (
        <>
            <label>Sorting by </label>
            <select className={s.selectField} value={props.selectedRelevance} onChange={onRelevanceSelect}>
                {props.availableRelevance.map(el =>
                    <option key={el}
                        value={el}>
                        {el}
                    </option>)}
            </select>
        </>
    )
}
export default RelevanceSelector;