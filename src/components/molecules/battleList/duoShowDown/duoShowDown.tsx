import React  from 'react';
import classNames from 'classnames/bind';
import styles from './duoShowDown.module.scss';
import { BattleListIcon } from "../../../atoms/battleListIcon";
import {duoShowdown, userType} from "../../../../modules/types/battleLog";

const cx = classNames.bind(styles);

interface duoShowDownProps {
    battle:duoShowdown,
    onClickIcon: (tag:string) => void
}

function DuoShowDown(props:duoShowDownProps) {
    const getComponents = (players:userType[]) => {
        return players.map((data, i) => {
            return (
                <BattleListIcon
                    key={i}
                    data={data}
                    onClickIcon={props.onClickIcon}
                />
            );
        });
    };

    const getTeamList = (teams:[userType[]]) => {
        return teams.map((data, i) => {
            return (
                <div className={cx('team-wrap')} key={i}>
                    {getComponents(data)}
                </div>
            );
        });
    };

    return (
        <div className={cx('duo-showdown-wrap')}>
            {getTeamList(props.battle.teams)}
        </div>
    );
}

export default DuoShowDown;
