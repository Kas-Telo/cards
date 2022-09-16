import React, {ChangeEvent, useEffect, useState} from 'react'
import style from './SuperDoubleRange.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    rangeGap?: number
    className?: string
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        max, min,
        step,
        value,
        rangeGap,
        className
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const [localMin, setLocalMin] = useState<number>(0)
    const [localMax, setLocalMax] = useState<number>(100)
    const [localValue1, setLocalValue1] = useState<number>(0)
    const [localValue2, setLocalValue2] = useState<number>(100)
    const RANGE_GAP = rangeGap ? rangeGap : localMax * 0.1
    const STEP = step ? step : 1

    const [leftProgressStyle, setLeftProgressStyle] = useState('')
    const [rightProgressStyle, setRightProgressStyle] = useState('')


    useEffect(() => {
        max && setLocalMax(max)
        !value && max && setLocalValue2(max)
    }, [max])
    useEffect(() => {
        min && setLocalMin(min)
        !value && min && setLocalValue1(min)
    }, [min])
    useEffect(() => {
        setLeftProgressStyle(localValue1 >= localMin ? localValue1 / localMax * 100 + '%' : 0 + '%')
        setRightProgressStyle(localValue2 <= localMax ? 100 - (localValue2 / localMax) * 100 + '%' : 0 + '%')
    }, [localValue1, localValue2])
    useEffect(() => {
        !onChangeRange && value && console.error('You need add onChange attribute')
    }, [])
    useEffect(() => {
        if (value) {
            value[0] !== localValue1 && setLocalValue1(value[0])
            value[1] !== localValue2 && setLocalValue2(value[1])
        }
    }, [value])

    const onChangeCallbackInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        const temp = localValue2 - +e.currentTarget.value < RANGE_GAP
        if (temp) {
            let newValue1 = localValue2 - RANGE_GAP
            onChangeRange && value
                ? onChangeRange([newValue1, localValue2])
                : setLocalValue1(newValue1)
        } else {
            if (onChangeRange && value) {
                onChangeRange([+e.currentTarget.value, localValue2])
            } else if (!value) {
                setLocalValue1(+e.currentTarget.value)
            }
        }
    }
    const onChangeCallbackInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        const temp = +e.currentTarget.value - localValue1 < RANGE_GAP
        if (temp) {
            let newValue2 = localValue1 + RANGE_GAP
            onChangeRange && value
                ? onChangeRange([localValue1, newValue2])
                : setLocalValue2(newValue2)
        } else {
            if (onChangeRange && value) {
                onChangeRange([localValue1, +e.currentTarget.value])
            } else if (!value) {
                setLocalValue2(+e.currentTarget.value)
            }
        }
    }

    let container = className ? `${className}  ${style.container}` : style.container
    let sumMinMaxValuesWidth = 0
    let widthContainer = 0
    const containerEl = document.querySelector(`.${container}`)
    if (containerEl) {
        const containerStyle = getComputedStyle(containerEl)
        console.log(Number(containerStyle.getPropertyValue('width').split('px')[0]))
        widthContainer = Number(containerStyle.getPropertyValue('width').split('px')[0])
    }
    const minValueEl = document.querySelector(`.${style.minValue}`)
    if (minValueEl) {
        const minValueStyle = getComputedStyle(minValueEl)
        sumMinMaxValuesWidth += Number(minValueStyle.getPropertyValue('width').split('px')[0]) + 17
    }
    const maxValueEl = document.querySelector(`.${style.maxValue}`)
    if (maxValueEl) {
        const maxValueStyle = getComputedStyle(maxValueEl)
        sumMinMaxValuesWidth += Number(maxValueStyle.getPropertyValue('width').split('px')[0]) + 17
    }
    const root = document.querySelector(':root')
    if(root) {
        console.log(sumMinMaxValuesWidth)
        console.log(widthContainer)
        // @ts-ignore
        root.style.setProperty('--width-slider', `${widthContainer - sumMinMaxValuesWidth}px`)
        // @ts-ignore
        root.style.setProperty('--width-range-input', `${widthContainer - sumMinMaxValuesWidth + 12}px`)
    }
    const styleProgress = {
        left: leftProgressStyle,
        right: rightProgressStyle
    }



    return (
        <div className={container}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <div className={style.minValue} >
                    <span>{localMin}</span>
                </div>
                <div style={{marginRight: '7px', marginLeft: '7px',}}>
                    <div className={style.slider}>
                        <div className={style.progress} style={styleProgress}></div>
                    </div>
                    <div className={style.rangeInput}>
                        <input className={style.rangeMin} type="range"
                               value={value ? value[0] : localValue1}
                               onChange={onChangeCallbackInputMin}
                               min={localMin}
                               max={localMax}
                               step={STEP}
                        />
                        <input className={style.rangeMax} type="range"
                               value={localValue2}
                               onChange={onChangeCallbackInputMax}
                               min={localMin}
                               max={localMax}
                               step={STEP}
                        />
                    </div>
                </div>
                <div className={style.maxValue} >
                    <span>{localMax}</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    top: '-25px',
                    left: '22px',
                    position: "absolute",
                    width: `${widthContainer - sumMinMaxValuesWidth}px`
                }}>
                    <span >{localValue1}</span>
                    <span >{localValue2}</span>
                </div>

            </div>

        </div>
    )
}

export default SuperDoubleRange
