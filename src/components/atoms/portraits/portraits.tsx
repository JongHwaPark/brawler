import React from 'react';
import classNames from 'classnames/bind';
import styles from './portraits.module.scss';
const cx = classNames.bind(styles);

interface PortraitsProps {
    name:string
}
function Portraits(props:PortraitsProps) {
    return (
        <div className={cx('portrait-wrap', `brawler-${props.name}`)}/>
    );
}

export default Portraits;
