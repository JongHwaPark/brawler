export const getBrawlImageName = (id:number) => {
    let name;
    switch(id){
        case 16000000:
            name = 'shelly';
            break;
        case 16000001:
            name = 'colt';
            break;
        case 16000002:
            name = 'bull';
            break;
        case 16000003:
            name = 'brock';
            break;
        case 16000004:
            name = 'rico';
            break;
        case 16000006:
            name = 'barley';
            break;
        case 16000007:
            name = 'jessie';
            break;
        case 16000008:
            name = 'nita';
            break;
        case 16000009:
            name = 'dynamike';
            break;
        case 16000010:
            name = 'el-primo';
            break;
        case 16000011:
            name = 'mortis';
            break;
        case 16000013:
            name = 'poco';
            break;
        case 16000014:
            name = 'bo';
            break;
        case 16000015:
            name = 'piper';
            break;
        case 16000016:
            name = 'pam';
            break;
        case 16000017:
            name = 'tara';
            break;
        case 16000018:
            name = 'darryl';
            break;
        case 16000019:
            name = 'penny';
            break;
        case 16000020:
            name = 'frank';
            break;
        case 16000022:
            name = 'tick';
            break;
        case 16000024:
            name = 'rosa';
            break;
        case 16000025:
            name = 'carl';
            break;
        case 16000026:
            name = 'bibi';
            break;
        case 16000027:
            name = '8-bit';
            break;
        case 16000029:
            name = 'bea';
            break;
        case 16000030:
            name = 'emz';
            break;
        case 16000031:
            name = 'mr-p';
            break;
        case 16000034:
            name = 'jacky';
            break;
        case 16000036:
            name = 'nani';
            break;
        case 16000037:
            name = 'sprout';
            break;
        case 16000038:
            name = 'surge';
            break;
        case 16000039:
            name = 'colette';
            break;
        default:
            name = 'undefined';
            break;
    }
    return name
};


const getImageName = (str:string) => {
    if(str) {
        return str.split(' ').join('-').split('.').join('').toLowerCase();
    }
};
const objList:any = {};
export const getSkillsName = (data:any) => {
    let name = undefined;
    objList[data.id] = data.name;
    switch(data.id){
        case 23000077:
        case 23000086:
        case 23000138:
        case 23000140:
        case 23000245:
        case 23000256:
        case 23000258:
        case 23000260:
        case 23000264:
        case 23000273:
        case 23000285:
        case 23000292:
        case 23000294:
            name = getImageName(data.name);
            break;
    }
    return name;
};
