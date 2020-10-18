import React, { useContext } from 'react';
import {Image} from "semantic-ui-react";

import classNames from "classnames/bind";
import styles from "../components/organisms/battleList/battleList.module.scss";
import {SoloShowDown} from "../components/molecules/battleList/soloShowDown";

const cx = classNames.bind(styles);

const getImageName = (str) => {
    if(str) {
        return str.split(' ').join('').toUpperCase();
    }
};


function BattlePlayerListContainer(props) {

    const getComponents = () => {
        let components;
        switch(props.battle.mode){
            case"soloShowdown":
                components = <SoloShowDown
                    battle={props.battle}
                />;
                break;
            case"roboRumble":
                components = props.battle.players.map((data, i) => {
                    return (
                        <li>
                            <div className={cx('image-wrap')}>
                                <div className={cx('top')}>
                                    <div>
                                        <Image src={require(`../static/UI/icon_trophy_medium.png`)} />
                                    </div>
                                    <span>{data.brawler.trophies}</span>
                                </div>
                                <div className={cx('bottom')}>
                                    <span>Lv</span>
                                    <strong>{data.brawler.power}</strong>
                                </div>
                                <Image src={require(`../static/Brawler/Portraits/${getImageName(data.brawler.name)}.png`)} />
                            </div>
                            <div className={cx('name')}>{data.name}</div>
                        </li>
                    );
                });
                break;
            default:
                components =
                    <li>
                        <div className={cx('image-wrap')}>
                            <div className={cx('top')}>
                                <div>
                                    <Image src={require(`../static/UI/icon_trophy_medium.png`)} />
                                </div>
                                <span>630</span>
                            </div>
                            <div className={cx('bottom')}>
                                <span>Lv</span>
                                <strong>7</strong>
                            </div>
                            <Image src={require(`../static/Brawler/Portraits/ELPRIMO.png`)} />
                        </div>
                        <div className={cx('name')}>너구리개구리다</div>
                    </li>
                break;
        }
        return components;
    };

    return (
        <>
            {getComponents()}
        </>
    );
}

export default BattlePlayerListContainer;
