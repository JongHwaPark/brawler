import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home-wrap')}>
            <div>
                <div className={cx('profile-wrap')}>
                    <div className={cx('profile-icon')}>IMG</div>
                    <div>
                        <div>너구리개구리다</div>
                        <div>#2LYRJQYGJ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
