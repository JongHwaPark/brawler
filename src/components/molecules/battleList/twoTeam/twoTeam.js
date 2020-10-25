import React  from 'react';
import classNames from 'classnames/bind';
import styles from './twoTeam.module.scss';
import { getBrawlImageName } from '../../../../common/utills';
import { BattleListIcon } from "../../../atoms/battleListIcon";
import {SoloShowDown} from "../soloShowDown";

const cx = classNames.bind(styles);


function TwoTeam(props) {
    const startPlayer = props.battle.starPlayer;
    const getList = (team) => {
        return team.map((data, i) => {
            const brawler = data.brawler;
            return (
                <BattleListIcon
                    key={i}
                    tag={data.tag}
                    trophies={brawler.trophies}
                    power={brawler.power}
                    imageName={getBrawlImageName(brawler.name)}
                    name={data.name}
                    active={props.active}
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