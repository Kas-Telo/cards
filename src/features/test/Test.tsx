import React from 'react';
import SuperCheckbox from "../../common/SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../common/SuperComponents/SuperButton/SuperButton";
import SuperSelect from "../../common/SuperComponents/SuperSelect/SuperSelect";
import SuperInputText from "../../common/SuperComponents/SuperInputText/SuperInputText";
import SuperRadio from "../../common/SuperComponents/SuperRadio/SuperRadio";
import SuperEditableSpan from "../../common/SuperComponents/SuperEditableSpan/SuperEditableSpan";
import SuperRange from "../../common/SuperComponents/SuperRange/SuperRange";
import SuperDoubleRange from "../../common/SuperComponents/SuperDoubleRange/SuperDoubleRange";

export const Test = () => {
    return (
        <div>
            <div><SuperCheckbox/></div>
            <div><SuperInputText/></div>
            <div><SuperButton>Button</SuperButton></div>
            <div><SuperSelect options={['none']}/></div>
            <div><SuperRadio options={['test']}/></div>
            <div><SuperEditableSpan value={'enter text'}/></div>
            <div><SuperRange/></div>
            <div style={{marginTop: '30px'}}>
                <SuperDoubleRange/>
            </div>
        </div>
    );
};