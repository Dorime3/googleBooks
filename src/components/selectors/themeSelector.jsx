import React from 'react';

const ThemeSelector = (props) => {
    const onThemeSelect = (event) => {
        props.selectTheme(event.target.value)
    }
    return (
        <div>
            <select value={props.selectedTheme} onChange={onThemeSelect}>
                {props.availableThemes.map(el =>
                    <option key={el}
                        value={el}>
                        {el}
                    </option>)}
            </select>
        </div>
    )
}
export default ThemeSelector;