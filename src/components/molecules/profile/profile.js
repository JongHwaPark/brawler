import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('profile-wrap')}>
            <div className={cx('profile-icon')}>IMG</div>
            <div>
                <div>너구리개구리다</div>
                <div>#2LYRJQYGJ</div>
            </div>
        </div>
    );
}

export default Profile;
