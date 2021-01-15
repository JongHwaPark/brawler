interface clubType {
    name:string
}

export interface startPowerType {
    id:number
    name:string
}

export interface gadgetType {
    id:number
    name:string
}

export interface brawlersType {
    id:number
    name:string
    power:number
    rank:number
    trophies:number
    highestTrophies:number
    starPowers:startPowerType[]
    gadget:gadgetType[]
}

export interface userType {
    tag:string
    name:string
    icon:{
        id:string
    }
    trophies:number
    highestTrophies:number
    powerPlayPoints:number
    highestPowerPlayPoints:number
    expLevel:number
    expPoints:number
    isQualifiedFromChampionshipChallenge:boolean
    '3vs3Victories':number
    soloVictories:number
    duoVictories:number
    bestRoboRumbleTime:number
    bestTimeAsBigBrawler:number
    club:clubType,
    brawlers:brawlersType[]
}

