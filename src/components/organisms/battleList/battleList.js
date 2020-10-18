import React, { useContext } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './battleList.module.scss';
import  { Rank }  from '../../atoms/rank';
import BattlePlayerListContainer from "../../../container/battlePlayerListContainer";
const cx = classNames.bind(styles);

function BattleList(props) {
    const getImageName = (str) => {
        if(str) {
            return str.split(' ').join('-').toLowerCase();
        }
    };

    return (
        <>
            <ul className={cx('list-wrap', props.victory ? 'victory' : 'lose')}>
                <li className={cx('game-mode')}>
                    <div className={cx('sec1')}>
                        <div className={cx('image-wrap')}>
                            <Image src={require(`../../../static/GameModes/mode-icons/${props.mode}.png`)} />
                        </div>
                        <div>
                            <div className={cx('mode')}>{props.mode}</div>
                            <div className={cx('title')}>{props.map}</div>
                        </div>
                    </div>
                    <ul>
                        <li>{props.battle.trophyChange}</li>
                        <li>Rank {props.battle.rank}</li>
                    </ul>
                </li>
                <li className={cx('brawl-info-wrap')}>
                    <div className={cx('brawl-profile')}>
                        <div className={cx('image-wrap')}>
                            <div className={cx('top')}>
                                <Rank rank={props.rank}/>
                            </div>
                            <div className={cx('bottom')}>
                                <span>POWER</span>
                                <strong>{props.power}</strong>
                            </div>
                            {props.brawler?.name && (
                                <Image src={require(`../../../static/Brawler/Portraits/${getImageName(props.brawlImage)}.png`)} />
                            )}
                        </div>
                        <div className={cx('brawl-name')}>
                            {props.brawler?.name}
                        </div>
                    </div>
                    <div className={cx('brawl-info')}>
                        <div className={cx('content')}>
                            {
                                props.starPowers.map((data)=>{
                                    return (
                                        <div className={cx('star-power')}>
                                            <div className={cx('circle')}>
                                                <Image src={require(`../../../static/Brawler/StarPowers/${getImageName(data.name)}.png`)} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={cx('content')}>
                            {
                                props.gadgets.map((data)=>{
                                    return (
                                        <div className={cx('gadgets')}>
                                            <div className={cx('circle')}>
                                                <Image src={require(`../../../static/Brawler/Gadgets/${getImageName(data.name)}.png`)} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={cx('brawl-trp')}>
                            <div className={cx('image-wrap')}>
                                <Image src={require(`../../../static/UI/icon_trophy_medium.png`)} />
                            </div>
                            <div>
                                {props.trophies}
                            </div>
                        </div>
                    </div>
                </li>
                <li className={cx('brawler-list-wrap')}>
                    <ul className={cx('brawler-list','solo-showdown')}>
                        <BattlePlayerListContainer
                            battle={props.battle}
                        />
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default BattleList;
