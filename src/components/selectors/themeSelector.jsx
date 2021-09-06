import React from 'react';
import s from './Selectors.module.css'

const ThemeSelector = (props) => {
    const onThemeSelect = (event) => {
        props.selectTheme(event.target.value)
    }
    return (
        <>
            <label>Categories </label>
            <select className={s.selectField} value={props.selectedTheme} onChange={onThemeSelect}>
                {props.availableThemes.map(el =>
                    <option key={el}
                        value={el}>
                        {el}
                    </option>)}
            </select>
        </>
    )
}
export default ThemeSelector;