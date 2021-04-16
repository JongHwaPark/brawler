import React from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './battleList.module.scss';
import { Rank }  from '../../atoms/rank';
import BattlePlayerListContainer from "../../../container/battlePlayerListContainer";
import { getBrawlImageName, getSkillsName } from '../../../common/utills';
import {Portraits} from "../../atoms/portraits";
import { useGetBrawler, useGetVictory } from "../../../common/useGetBrawler";
import {useSelector} from "react-redux";
import {battleLogType} from "../../../modules/types/battleLog"
import {brawlersType, startPowerType, gadgetType} from "../../../modules/types/user"
import {RootState} from '../../../modules/reducers'
const cx = classNames.bind(styles);

interface battleListProps {
    key:number
    data:battleLogType
}

function BattleList(props:battleListProps) {
    const eventData = props.data.event;
    const battleData = props.data.battle;
    const user = useSelector((store:RootState) => store.user.get('user'));
    const brawlInfo = useGetBrawler(battleData, user);
    const brawlInfoInUserData = user.brawlers.find((brawler:brawlersType) => brawler.id === brawlInfo.id);

    const isVictory = useGetVictory(battleData);
    return (
        <>
            <ul className={cx('list-wrap', isVictory ? 'victory' : 'defeat')}>
                <li className={cx('game-mode')}>
                    <div className={cx('sec1')}>
                        <div className={cx('image-wrap')}>
                            <Image src={require(`../../../static/GameModes/mode-icons/${battleData.mode}.png`)}/>
                        </div>
                        <div>
                            <div className={cx('mode')}>{battleData.mode}</div>
                            <div className={cx('title')}>{eventData.map}</div>
                        </div>
                    </div>
                    <ul className={cx('sec2')}>
                        {"rank" in battleData && battleData.rank && (
                            <li className={cx('rank', isVictory ? 'victory' : 'lose')}>
                                <strong>{battleData.rank}</strong> / {battleData.mode === 'soloShowdown' ? '10' : '5'}
                            </li>
                        ) }
                        { battleData.trophyChange && (<li>{battleData.trophyChange} ({ brawlInfo.trophies + battleData.trophyChange})</li>)}
                        <li>{battleData.type}</li>
                    </ul>
                </li>
                <li className={cx('brawl-info-wrap')}>
                    <div className={cx('brawl-profile')}>
                        <div className={cx('image-wrap')}>
                            <div className={cx('top')}>
                                <Rank rank={brawlInfoInUserData.rank}/>
                            </div>
                            <div className={cx('bottom')}>
                                <span>POWER</span>
                                <strong>{brawlInfo.power}</strong>
                            </div>
                            <Portraits name={getBrawlImageName(brawlInfo.id)}/>
                        </div>
                        <div className={cx('brawl-name')}>
                            {brawlInfo.name}
                        </div>
                    </div>
                    <div className={cx('brawl-info')}>
                        <div className={cx('content')}>
                            {
                                brawlInfoInUserData.starPowers.map((data:startPowerType, i:number)=>{
                                    return (
                                        <div key={i} className={cx('star-power')}>
                                            <div className={cx('circle')}>
                                                <Image src={require(`../../../static/Brawler/StarPowers/${getSkillsName(data)}.png`)} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={cx('content')}>
                            {
                                brawlInfoInUserData.gadgets.map((data:gadgetType, i:number)=>{
                                    return (
                                        <div key={i} className={cx('gadgets')}>
                                            <div className={cx('circle')}>
                                                <Image src={require(`../../../static/Brawler/Gadgets/${getSkillsName(data)}.png`)} />
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
                                {brawlInfo.trophies}
                            </div>
                        </div>
                    </div>
                </li>
                <li className={cx('brawler-list-wrap')}>
                    <div className={cx('brawler-list','solo-showdown')}>
                        <BattlePlayerListContainer
                            battle={battleData}
                        />
                    </div>
                </li>
            </ul>
        </>
    );
}

BattleList.defaultProps = {
    mode:'defaultMode'
};

export default BattleList;
