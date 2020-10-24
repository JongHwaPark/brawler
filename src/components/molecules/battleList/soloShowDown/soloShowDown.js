import React  from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './soloShowDown.module.scss';
import { getBrawlImageName } from '../../../../common/utills';
import  { Portraits } from "../../../atoms/portraits";
import { BattleListIcon } from "../../../atoms/battleListIcon";

const cx = classNames.bind(styles);


function SoloShowDown(props) {
    const components = props.battle.players.map((data, i) => {
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

    return (
        <div className={cx('solo-showdown-wrap')}>
            {components}
        </div>
    );
}

export default SoloShowDown;
