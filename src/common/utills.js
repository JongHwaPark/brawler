export const getBrawlImageName = (str) => {
    if(str) {
        return str.split(' ').join('-').split('.').join('').toLowerCase();
    }
};
