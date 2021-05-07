import React  from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import BattleListContainer from '../../../container/battleListContainer';
import StatusContainer from '../../../container/statusConatiner';
import {Tab} from "semantic-ui-react";
import {RootState} from "../../../modules/reducers";

const cx = classNames.bind(styles);

function Home() {
    const user = useSelector((store:RootState) => store.user.get('user'));

    const panes = [
        {
            menuItem: 'Battle',
            render: () => <BattleListContainer />,
        },
        {
            menuItem: 'Status',
            render: () => <StatusContainer />,
        },
    ];

    return (
        <div className={cx('home-wrap')}>
            <div className={cx('profile-wrap', 'center-wrap')}>
                <div className={cx('profile-icon')}>IMG / {process.env.REACT_APP_TEST}</div>
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
