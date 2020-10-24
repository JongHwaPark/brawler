import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import BattleListContainer from '../../../container/battleListContainer';
import StatusContainer from '../../../container/statusConatiner';
import {Button, Tab} from "semantic-ui-react";
const cx = classNames.bind(styles);

function Home() {
    const user = useSelector((store) => store.user.get('user'));
    const battleLog = useSelector((store) => store.user.get('battle'));

    const panes = [
        {
            menuItem: 'Battle',
            render: () => <BattleListContainer user={user} battle={battleLog}/>,
        },
        {
            menuItem: 'Status',
            render: () => <StatusContainer userData={user}/>,
        },
    ];

    return (
        <div className={cx('home-wrap')}>
            <div className={cx('profile-wrap', 'center-wrap')}>
                <div className={cx('profile-icon')}>IMG</div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.tag}</div>
                </div>
            </div>

            <div className={cx('content-wrap', 'center-wrap')}>
                <div className={cx('recent-log-wrap')}>
                    최근 20 게임
                </div>
                <div className={cx('battle-log-wrap')}>
                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                </div>
            </div>
        </div>
    );
}

export default Home;
