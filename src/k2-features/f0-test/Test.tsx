import React from 'react';
import SuperCheckbox from "../../k1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../k1-main/m1-ui/common/c2-SuperButton/SuperButton";
import SuperSelect from "../../k1-main/m1-ui/common/c5-SuperSelect/SuperSelect";
import SuperInputText from "../../k1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperRadio from "../../k1-main/m1-ui/common/c6-SuperRadio/SuperRadio";
import SuperEditableSpan from "../../k1-main/m1-ui/common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperRange from "../../k1-main/m1-ui/common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "../../k1-main/m1-ui/common/c8-SuperDoubleRange/SuperDoubleRange";

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