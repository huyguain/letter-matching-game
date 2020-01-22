import React, { useContext, useEffect, useState } from 'react'
import './TimeRemain.css'
import { Icon, Modal } from 'antd';
import { CardsContext } from '../../store/context';

const { confirm } = Modal;

const TimeRemain = props => {
    const { state, dispatch } = useContext(CardsContext);
    const { level } = state;
    const [timeLeft, setTimeLeft] = useState(iniTimeLeft());

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {
            handleTimeLeft();
            return;
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            dispatch({type: 'SET_TAKE_TIME'});
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    const handleTimeLeft = _ => {
        dispatch({ type: 'SET_REMAINNING', payload: false });
        dispatch({ type: 'RESET_CARDS', payload: +level === 3 ? 18 : 8 });
        dispatch({ type: 'SET_LOSE'});
        showConfirmLost();
    }

    function showConfirmLost() {
        confirm({
            title: 'Oops!!!',
            content: 'You just ran out of time. Better luck next time.',
            cancelText: 'Too hard? Try different level',
            okText: 'Try again',
            onOk() {
                dispatch({ type: 'SET_REMAINNING', payload: true });
            },
            onCancel() {
                dispatch({ type: 'SET_LEVEL', payload: '0' });
            },
        });
    }

    function iniTimeLeft() {
        if (+level === 1) return 120;
        if (+level === 2) return 60;
        if (+level === 3) return 120;
        return 0;
    }

    return (
        <div className="TimeRemain ant-row">
            <Icon type="clock-circle" /> Time remainning: {timeLeft}
        </div>
    )
}

export default TimeRemain;
