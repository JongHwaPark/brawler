import React  from 'react';
import classNames from 'classnames/bind';
import styles from './oneTeam.module.scss';
import { getBrawlImageName } from '../../../../common/utills';
import { BattleListIcon } from "../../../atoms/battleListIcon";

const cx = classNames.bind(styles);


function OneTeam(props) {
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
