import React from 'react';
import {Image} from "semantic-ui-react";
import classNames from "classnames/bind";
import styles from "../components/organisms/battleList/battleList.module.scss";
import {SoloShowDown} from "../components/molecules/battleList/soloShowDown";
import {DuoShowDown} from "../components/molecules/battleList/duoShowDown";
import {OneTeam} from "../components/molecules/battleList/oneTeam";
import {TwoTeam} from "../components/molecules/battleList/twoTeam";
import {useDispatch, useSelector} from "react-redux";
import {setBattle, setUser} from "../modules/reducers/user";
import {RootState} from '../modules/reducers'
import {battleType} from '../modules/types/battleLog'

const cx = classNames.bind(styles);

interface BattlePlayerListContainerProps {
    battle:battleType
}

function BattlePlayerListContainer(props:BattlePlayerListContainerProps) {
    const dispatch = useDispatch();
    const user = useSelector((store:RootState) => store.user.get('user'));
    /*
    * interfacce 제대로 하기
    * */
    const handleClickBrawlIcon = (data:string) => {
        try {
            dispatch(setUser(data));
            dispatch(setBattle(data));

        } catch (err){
            console.log(err);
        }
    };

    const getComponents = () => {
        let components;
        switch(props.battle.mode){
            case"soloShowdown":
                components = <SoloShowDown
                    battle={props.battle}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            case"duoShowdown":
                components = <DuoShowDown
                    battle={props.battle}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            case"gemGrab":
            case"brawlBall":
            case"presentPlunder":
            case"bounty":
            case"hotZone":
            case"heist":
            case"siege":
            case"knockout":
                components = <TwoTeam
                    battle={props.battle}
                    active={user.name}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            case"bossFight":
            case"roboRumble":
                components = <OneTeam
                    battle={props.battle}
                    active={user.name}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            default:
                components =
                    <li>
                        <div className={cx('image-wrap')}>
                            <div className={cx('top')}>
                                <div>
                                    <Image src={require(`../static/UI/icon_trophy_medium.png`)} />
                                </div>
                                <span>630</span>
                            </div>
                            <div className={cx('bottom')}>
                                <span>Lv</span>
                                <strong>7</strong>
                            </div>
                            <Image src={require(`../static/Brawler/Portraits/el-primo.png`)} />
                        </div>
                        <div className={cx('name')}>너구리개구리다</div>
                    </li>
                break;
        }
        return components;
    };

    return (
        <>
            {getComponents()}
        </>
    );
}

export default BattlePlayerListContainer;
