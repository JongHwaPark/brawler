import React from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './Rank.scss';
const cx = classNames.bind(styles);

function Rank(props) {
    return (
        <div className={cx('rank-wrap')}>
            <Image src={require(`../../static/UI/icon_rank_1.png`)} />
            <div>
                <div className={cx('title')}>Rank</div>
                <div className={cx('content')}>{props.rank}</div>
            </div>
        </div>
    );
}

export default Rank;
