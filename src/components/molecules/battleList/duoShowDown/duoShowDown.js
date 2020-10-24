import React  from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './duoShowDown.module.scss';
import { getBrawlImageName } from '../../../../common/utills';
import  { Portraits } from "../../../atoms/portraits";
import { BattleListIcon } from "../../../atoms/battleListIcon";

const cx = classNames.bind(styles);


function DuoShowDown(props) {
    const getComponents = (players) => {
        return players.map((data, i) => {
            const brawler = data.brawler;
            return (
                <BattleListIcon
                    key={i}
                    tag={data.tag}
                    active={props.active}
                    trophies={brawler.trophies}
                    power={brawler.power}
                    imageName={getBrawlImageName(brawler.name)}
                    name={data.name}
                    onClickIcon={props.onClickIcon}
                />
            );
        });
    };

    const getTeamList = (teams) => {
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
