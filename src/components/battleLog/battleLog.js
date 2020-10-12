import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './battleLog.module.scss';
import StatusContext from '../../context/status.context';
const cx = classNames.bind(styles);

function BattleLog(props) {
    const { isLoaded } = useContext(StatusContext);
    const user = useSelector((store) => store.user.user);
    const battleLog = useSelector((store) => store.user.battle);

    const getImageName = (str) => {
        if(str) {
            return str.split(' ').join('').toUpperCase();
        }
    };

    const getBrawlInfo = (battleData) => {
        let rtnVal;
        switch(battleData.mode){
            case"heist":
            case"brawlBall":
            case'duoShowdown':
                for(const teamData of battleData.teams){
                    for(const player of teamData){
                        if(player.tag === user.tag){
                            rtnVal = player.brawler;
                            break;
                        }
                    }
                }
                break;
            case"bigGame":
            case"soloShowdown":
                for(const player of battleData.players){
                    if(player.tag === user.tag){
                        rtnVal = player.brawler;
                        break;
                    }
                }
                if(!rtnVal && battleData.hasOwnProperty('bigBrawler')){
                    rtnVal = battleData.bigBrawler.brawler;
                }
                break;
            default:
                console.log('디폴트다',battleData.mode);
                rtnVal = 'asd';
                break;
        }
        return rtnVal;
    };

    return (
        <>
            {isLoaded && battleLog && (
                    battleLog.map((data, i) => {
                    const victory = data.battle.result === 'victory';
                    const brawlInfo = getBrawlInfo(data.battle);
                    return (
                        <ul className={cx('list-wrap', victory ? 'victory' : 'lose')}>
                            <li className={cx('game-mode')}>
                                <div className={cx('sec1')}>
                                    <Image src={require(`../../static/GameModes/mode-icons/${data.event.mode}.png`)} />
                                    <div>
                                        <div className={cx('mode')}>{data.event.mode}</div>
                                        <div className={cx('title')}>{data.event.map}</div>
                                    </div>
                                </div>
                                <hr />
                                <ul>
                                    <li>{data.battle.type}</li>
                                    <li>{data.battle.result}</li>
                                    <li>{data.battle.trophyChange}</li>
                                    <li>{data.battle.duration}</li>
                                </ul>
                            </li>
                            <li className={cx('brawl-info-wrap')}>
                                <div className={cx('brawl-info')}>
                                    <div className={cx('image-wrap')}>
                                        <div className={cx('top')}>
                                            <div className={cx('rank-wrap')}>
                                                <Image src={require(`../../static/UI/icon_rank_1.png`)} />
                                                <div>
                                                    <span>Rank</span>
                                                    <span>14</span>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={require(`../../static/UI/icon_trophy_medium.png`)} />
                                                285
                                            </div>
                                        </div>
                                        <div className={cx('bottom')}>
                                            POWER <strong>7</strong>
                                        </div>
                                        {brawlInfo?.name && (
                                            <Image src={require(`../../static/BrawlerPortraits/${getImageName(brawlInfo?.name)}.png`)} />
                                        )}
                                    </div>
                                    <div>
                                        <div>가젯</div>
                                        <div>스타파월</div>
                                    </div>
                                </div>
                                <div>{brawlInfo?.name}</div>
                            </li>
                            <li>
                                <div>브롤러들</div>
                            </li>
                        </ul>
                    )
                })
                )
            }

            {!isLoaded && (
                    <div>Loading...</div>
                )
            }
        </>
    );
}

export default BattleLog;
