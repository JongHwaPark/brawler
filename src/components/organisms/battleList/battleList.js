import React, { useContext } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './battleList.module.scss';
import  { Rank }  from '../../atoms/rank';
import BattlePlayerListContainer from "../../../container/battlePlayerListContainer";
import { getBrawlImageName } from '../../../common/utills';
import {Portraits} from "../../atoms/portraits";
const cx = classNames.bind(styles);

function BattleList(props) {

    return (
        <>
            <ul className={cx('list-wrap', props.victory ? 'victory' : 'defeat')}>
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
                    <ul className={cx('sec2')}>
                        { props.battle.rank && (
                            <li className={cx('rank', props.victory ? 'victory' : 'lose')}>
                                <strong>{props.battle.rank}</strong> / {props.mode === 'soloShowdown' ? '10' : '5'}
                            </li>
                        ) }
                        { props.battle.trophyChange && (<li>{props.battle.trophyChange} ({ props.brawler.trophies + props.battle.trophyChange})</li>)}
                        <li>{props.battle.type}</li>
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
                                <Portraits name={getBrawlImageName(props.brawlImage)}/>
                            )}
                        </div>
                        <div className={cx('brawl-name')}>
                            {props.brawler?.name}
                        </div>
                    </div>
                    <div className={cx('brawl-info')}>
                        <div className={cx('content')}>
                            {
                                props.starPowers.map((data, i)=>{
                                    return (
                                        <div key={i} className={cx('star-power')}>
                                            <div className={cx('circle')}>
                                                <Image src={require(`../../../static/Brawler/StarPowers/${getBrawlImageName(data.name)}.png`)} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={cx('content')}>
                            {
                                props.gadgets.map((data, i)=>{
                                    return (
                                        <div key={i} className={cx('gadgets')}>
                                            <div className={cx('circle')}>
                                                <Image src={require(`../../../static/Brawler/Gadgets/${getBrawlImageName(data.name)}.png`)} />
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
                    <div className={cx('brawler-list','solo-showdown')}>
                        <BattlePlayerListContainer
                            user={props.user}
                            battle={props.battle}
                        />
                    </div>
                </li>
            </ul>
        </>
    );
}

const propsAreEqual = (prevProps, nextProps) => {
    return nextProps.battle === prevProps.battle;
};
export default React.memo(BattleList, propsAreEqual);
