import React from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from "./rank.module.scss";
const cx = classNames.bind(styles);

interface rankProps{
    rank:number
}

function Rank(props:rankProps) {
    const getIconRank = (rank:number):number => {
        if(rank < 5) {
            return 1;
        } else if(5 <= rank && rank < 10) {
            return 2;
        } else if(10 <= rank && rank < 15) {
            return 3;
        } else if(15 <= rank && rank < 20) {
            return 4;
        } else if(20 <= rank && rank < 25) {
            return 5;
        } else if(25 <= rank && rank < 30) {
            return 6;
        } else if(30 <= rank && rank < 35) {
            return 7;
        } else if(35 <= rank && rank < 40) {
            return 8;
        }
        return rank;
    };
    return (
        <div className={cx('rank-wrap')}>
            <Image src={require(`../../../static/UI/icon_rank_${getIconRank(props.rank)}.png`)} />
            <div>
                <div className={cx('title')}>Rank</div>
                <div className={cx('content')}>{props.rank}</div>
            </div>
        </div>
    );
}

export default Rank;
