import { battleType, brawlerType } from '../modules/types/battleLog'
import { userType } from '../modules/types/user'

export const useGetVictory = (battleData:battleType) => {
    switch(battleData.mode){
        case'soloShowdown':
            return battleData.rank <= 5;
        case'duoShowdown':
            return battleData.rank <= 3;
        case'bossFight':
        case'bounty':
        case'brawlBall':
        case'presentPlunder':
        case'heist':
        case'hotZone':
        case'siege':
        case'gemGrab':
        case'bigGame':
        case'roboRumble':
            return "result" in battleData ? battleData.result === 'victory' : false;
        default:
            return true;
    }
};

export const useGetBrawler = (battleData:battleType, user:userType):brawlerType => {
    let rtnVal = {
        "id": 0,
        "name": '',
        "power": 0,
        "trophies": 0
    };
    switch(battleData.mode){
        case"heist":
        case"brawlBall":
        case'duoShowdown':
        case'siege':
        case'gemGrab':
        case'bounty':
        case'hotZone':
        case'presentPlunder':
            for(const teamData of battleData.teams){
                for(const player of teamData){
                    if(player.tag === user.tag){
                        rtnVal = player.brawler;
                        break;
                    }
                }
            }
            break;
        case"bossFight":
        case"soloShowdown":
        case'roboRumble':
            for(const player of battleData.players){
                if(player.tag === user.tag){
                    rtnVal = player.brawler;
                    break;
                }
            }
            break;
/*
        case'bigGame':
            console.log('베틀데이타 ',battleData);
            rtnVal = battleData.bigBrawler?.brawler[0];
            break;
*/
        default:
            console.log('디폴트다',battleData);
    }
    return rtnVal;
};
