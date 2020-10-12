import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function battleLogContainer() {


    return (
        <ul className={cx('list-wrap')}>
            <li className={cx('game-mode')}>
                <div className={cx('sec1')}>
                    <Image src={require("../../static/GameModes/mode-icons/BRAWLBALL.png")} />
                    <div>
                        <div className={cx('mode')}>브롤볼</div>
                        <div className={cx('title')}>뒷마당 월드컵</div>
                    </div>
                </div>
                <hr />
                <div>
                    승리 +8
                </div>
            </li>
            <li className={cx('brawl-info-wrap')}>
                <div className={cx('brawl-info')}>
                    <div className={cx('image-wrap')}>
                        <Image src={require("../../static/BrawlerPortraits/ELPRIMO.png")} />
                    </div>
                    <div>
                        <div>가젯</div>
                        <div>스타파월</div>
                    </div>
                </div>
                <div>엘쁘리모</div>
            </li>
            <li>
                <div>브롤러들</div>
            </li>
        </ul>
    );
}

export default battleLogContainer;
