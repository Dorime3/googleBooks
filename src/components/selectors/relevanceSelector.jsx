import React from 'react';

const RelevanceSelector = (props) => {
    const onRelevanceSelect = (event) => {
        props.selectRelevance(event.target.value)
    }
    return (
        <div>
            <select value={props.selectedRelevance} onChange={onRelevanceSelect}>
                {props.availableRelevance.map(el =>
                    <option key={el}
                        value={el}>
                        {el}
                    </option>)}
            </select>
        </div>
    )
}
export default RelevanceSelector;