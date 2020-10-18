import React, { useContext } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './soloShowDown.module.scss';
const cx = classNames.bind(styles);

function SoloShowDown(props) {
    const getImageName = (str) => {
        if(str) {
            console.log(str);
            return str.split(' ').join('-').split('.').join('').toLowerCase();
        }
    };
    const components = props.battle.players.map((data, i) => {
        return (
            <li>
                <div className={cx('image-wrap')}>
                    <div className={cx('top')}>
                        <div>
                            <Image src={require(`../../../../static/UI/icon_trophy_medium.png`)} />
                        </div>
                        <span>{data.brawler.trophies}</span>
                    </div>
                    <div className={cx('bottom')}>
                        <span>Lv</span>
                        <strong>{data.brawler.power}</strong>
                    </div>
                    <div className={cx('portrait-wrap', `brawler-${getImageName(data.brawler.name)}`)}/>
                </div>
                <div className={cx('name')}>{data.name}</div>
            </li>
        );
    });

    return (
        <>
            {components}
        </>
    );
}

export default SoloShowDown;
