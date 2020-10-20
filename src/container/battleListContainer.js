import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StatusContext from "../context/status.context";
import { BattleList } from "../components/organisms/battleList";
import {getBrawlImageName} from '../common/utills';

function BattleListContainer(props) {
    const { isLoaded } = useContext(StatusContext);
    const user = useSelector((store) => store.user.user);
    const battleLog = useSelector((store) => store.user.battle);

    const getBrawlerInBattleLog = (battleData) => {
        let rtnVal;
        switch(battleData.mode){
            case"heist":
            case"brawlBall":
            case'duoShowdown':
            case'siege':
            case'gemGrab':
            case'bounty':
            case'hotZone':
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
            case'roboRumble':
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

    const getBrawlerById = (id) => {
        return user.brawlers.find((brawler) => brawler.id === id);
    };

    const getVictory = (data) => {
        switch(data.mode){
            case'soloShowdown':
                return data.rank <= 5;
            case'duoShowdown':
                return data.rank <= 4;
            default:
                return true;

        }
    };

    return (
        <>
            {isLoaded && battleLog && (
                battleLog.map((data, i) => {
                    const brawlInfo = getBrawlerInBattleLog(data.battle);
                    const brawler = getBrawlerById(brawlInfo.id);
                    const victory = getVictory(data.battle);
                    return (
                        <BattleList
                            key={i}
                            mode={data.event.mode}
                            map={data.event.map}
                            battle={data.battle}
                            victory={victory}
                            brawler={brawlInfo}
                            gadgets={brawler.gadgets}
                            starPowers={brawler.starPowers}
                            trophies={brawler.trophies}
                            rank={brawler.rank}
                            power={brawler.power}
                            brawlImage={getBrawlImageName(brawlInfo?.name)}
                        />
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

export default BattleListContainer;
