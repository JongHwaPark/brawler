export interface brawlerType {
    "id": number,
    "name": string,
    "power": number,
    "trophies": number
}

export interface userType {
    "tag": string,
    "name": string,
    "brawler": brawlerType
}

export interface takedown {
    mode: "takedown",
    type: string,
    rank: number,
    players: userType[],
    trophyChange?:number
}

export interface soloShowdown {
    mode: "soloShowdown",
    type: string,
    rank: number,
    players: userType[],
    trophyChange?:number
}

export interface duoShowdown {
    mode: "duoShowdown",
    type: string,
    rank: number,
    teams: [userType[]],
    trophyChange?:number
}

export interface oneTeam {
    mode: 'roboRumble' | 'bossFight' | 'bigGame',
    type: string,
    rank: number,
    players: userType[]
    trophyChange?:number
    bigBrawler?:{
        brawler:userType[]
    }
}

export interface twoTeam {
    mode:'gemGrab' | 'brawlBall' | 'presentPlunder' | 'bounty' | 'hotZone' | 'heist' | 'siege' | 'knockout',
    type: string
    result:string
    duration:number
    trophyChange?:number
    starPlayer: userType,
    teams: [userType[], userType[]]
}

export type battleType = takedown | soloShowdown | duoShowdown | oneTeam | twoTeam;

export interface eventType {
    id:number,
    map:string
}

export interface battleLogType {
    battleTime:string,
    event:eventType,
    battle:battleType
}
