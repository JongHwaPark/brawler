import React, { useContext } from 'react';
import {Image} from "semantic-ui-react";
import classNames from "classnames/bind";
import styles from "../components/organisms/battleList/battleList.module.scss";
import {SoloShowDown} from "../components/molecules/battleList/soloShowDown";
import {DuoShowDown} from "../components/molecules/battleList/duoShowDown";
import {OneTeam} from "../components/molecules/battleList/oneTeam";
import {TwoTeam} from "../components/molecules/battleList/twoTeam";
import {getBrawlImageName} from '../common/utills';
import {useDispatch, useSelector} from "react-redux";
import {setBattle, setUser} from "../modules/reducers/user";
import StatusContext from "../context/status.context";
const cx = classNames.bind(styles);

function BattlePlayerListContainer(props) {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user.get('user'));
    const { setLoaded } = useContext(StatusContext);

    const handleClickBrawlIcon = (data) => {
        try {
            setLoaded(false);
            dispatch(setUser(data));
            dispatch(setBattle(data));
            setLoaded(true);

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
                    active={user.name}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            case"duoShowdown":
                components = <DuoShowDown
                    battle={props.battle}
                    active={user.name}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            case"gemGrab":
            case"brawlBall":
            case"bounty":
            case"hotZone":
            case"heist":
            case"siege":
                components = <TwoTeam
                    battle={props.battle}
                    active={user.name}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            case"bossFight":
                components = <OneTeam
                    battle={props.battle}
                    active={user.name}
                    onClickIcon={handleClickBrawlIcon}
                />;
                break;
            case"roboRumble":
                components = props.battle.players.map((data, i) => {
                    return (
                        <li onClick={() => handleClickBrawlIcon(data.tag)}>
                            <div className={cx('image-wrap')}>
                                <div className={cx('top')}>
                                    <div>
                                        <Image src={require(`../static/UI/icon_trophy_medium.png`)} />
                                    </div>
                                    <span>{data.brawler.trophies}</span>
                                </div>
                                <div className={cx('bottom')}>
                                    <span>Lv</span>
                                    <strong>{data.brawler.power}</strong>
                                </div>
                                <Image src={require(`../static/Brawler/Portraits/${getBrawlImageName(data.brawler.name)}.png`)} />
                            </div>
                            <div className={cx('name')}>{data.name}</div>
                        </li>
                    );
                });
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
