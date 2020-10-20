import React from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './portraits.scss';
const cx = classNames.bind(styles);

function Portraits(props) {
    return (
        <div className={cx('portrait-wrap', `brawler-${props.name}`)}/>
    );
}

export default Portraits;
