import React  from 'react';
import classNames from 'classnames/bind';
import styles from './soloShowDown.module.scss';
import { BattleListIcon } from "../../../atoms/battleListIcon";
import {soloShowdown} from "../../../../modules/types/battleLog";

const cx = classNames.bind(styles);

interface soloShowDownProps {
    battle:soloShowdown,
    onClickIcon:(tag:string)=>void
}
function SoloShowDown(props:soloShowDownProps) {
    const components = props.battle.players.map((data, i) => {
        return (
            <BattleListIcon
                key={i}
                data={data}
                onClickIcon={props.onClickIcon}
            />
        );
    });

    return (
        <div className={cx('solo-showdown-wrap')}>
            {components}
        </div>
    );
}

export default SoloShowDown;
