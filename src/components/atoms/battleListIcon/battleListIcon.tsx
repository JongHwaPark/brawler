import React from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './battleListIcon.module.scss';
import {Portraits} from "../portraits";
import {getBrawlImageName} from "../../../common/utills";
import {useSelector} from "react-redux";
import {userType} from "../../../modules/types/battleLog";
import {RootState} from "../../../modules/reducers";
const cx = classNames.bind(styles);

interface BattleListIconProps {
    key:number
    data:userType
    onClickIcon: (tag: string)=>void
    startPlayer?:boolean
}

function BattleListIcon(props:BattleListIconProps) {
    const player = props.data;
    const brawler = player.brawler;
    const user = useSelector((store:RootState) => store.user.get('user'));

    return (
        <div className={cx('content-wrap', props.startPlayer && 'star-player')} onClick={ () => {props.onClickIcon(player.tag)}}>
            <div className={cx('image-wrap', user.name === player.name && 'active')}>
                <div className={cx('top')}>
                    <div>
                        <Image src={require(`../../../static/UI/icon_trophy_medium.png`)} />
                    </div>
                    <span>{brawler.trophies}</span>
                </div>
                <div className={cx('bottom')}>
                    <span>Lv</span>
                    <strong>{brawler.power}</strong>
                </div>
                <Portraits name={getBrawlImageName(brawler.id)}/>
            </div>
            <div className={cx('name')}>{player.name}</div>
        </div>
    );
}

export default BattleListIcon;
