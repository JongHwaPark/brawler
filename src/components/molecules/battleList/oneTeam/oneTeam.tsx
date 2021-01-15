import React  from 'react';
import classNames from 'classnames/bind';
import styles from './oneTeam.module.scss';
import { BattleListIcon } from "../../../atoms/battleListIcon";
import {oneTeam, userType} from "../../../../modules/types/battleLog";

const cx = classNames.bind(styles);

interface oneTeamProps {
    battle:oneTeam,
    active:'',
    onClickIcon: (tag:string) => void
}

function OneTeam(props:oneTeamProps) {
    const getList = (team:userType[]) => {
        return team.map((data, i) => {
            return (
                <BattleListIcon
                    key={i}
                    data={data}
                    onClickIcon={props.onClickIcon}
                />
            )
        })
    };

    return (
        <div className={cx('oneteam-wrap')}>
            <div className={cx('team-wrap')}>
                {getList(props.battle.players)}
            </div>
        </div>
    );
}

export default OneTeam;
