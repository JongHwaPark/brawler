import React  from 'react';
import classNames from 'classnames/bind';
import styles from './twoTeam.module.scss';
import { BattleListIcon } from "../../../atoms/battleListIcon";
import {twoTeam, userType} from "../../../../modules/types/battleLog";
const cx = classNames.bind(styles);

interface twoTeamProps {
    battle:twoTeam,
    active:'',
    onClickIcon: (tag:string) => void
}

function TwoTeam(props:twoTeamProps) {
    const startPlayer = props.battle.starPlayer;
    const getList = (team: userType[]) => {
        return team.map((data, i) => {
            const brawler = data.brawler;
            return (
                <BattleListIcon
                    key={i}
                    data={data}
                    startPlayer={startPlayer.name === data.name && startPlayer.brawler.name === brawler.name}
                    onClickIcon={props.onClickIcon}
                />
            )
        })
    };

    return (
        <div className={cx('gemgrab-wrap')}>
            <div className={cx('team-wrap')}>
                {getList(props.battle.teams[0])}
            </div>
            <div className={cx('versus')}><strong>VS</strong></div>
            <div className={cx('team-wrap')}>
                {getList(props.battle.teams[1])}
            </div>
        </div>
    );
}

export default TwoTeam;
