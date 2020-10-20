import React from 'react';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './battleListIcon.module.scss';
import {Portraits} from "../portraits";
import {getBrawlImageName} from "../../../common/utills";
const cx = classNames.bind(styles);

function BattleListIcon(props) {

    return (
        <div className={cx('content-wrap')}>
            <div className={cx('image-wrap', props.active === props.name && 'active')}>
                <div className={cx('top')}>
                    <div>
                        <Image src={require(`../../../static/UI/icon_trophy_medium.png`)} />
                    </div>
                    <span>{props.trophies}</span>
                </div>
                <div className={cx('bottom')}>
                    <span>Lv</span>
                    <strong>{props.power}</strong>
                </div>
                <Portraits name={getBrawlImageName(props.imageName)}/>
            </div>
            <div className={cx('name')}>{props.name}</div>
        </div>
    );
}

export default BattleListIcon;
