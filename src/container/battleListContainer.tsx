import React from 'react';
import { useSelector } from 'react-redux';
import { BattleList } from "../components/organisms/battleList";
import {RootState} from '../modules/reducers'
import {battleLogType} from "../modules/types/battleLog"

function BattleListContainer() {
    const { battleLoaded, userLoaded, battleLog } = useSelector((state:RootState) => ({
        battleLoaded: state.user.get('loaded').battle,
        userLoaded: state.user.get('loaded').user,
        battleLog: state.user.get('battle'),
    }));

    const isLoaded = battleLoaded && userLoaded;

    return (
        <>
            {isLoaded && (
                battleLog.map((data:battleLogType, i:number) => {
                    return (
                        <BattleList
                            key={i}
                            data={data}
                        />
                    )
                })
            )
            }

            {!isLoaded && (
                <div>Loading...</div>
            )
            }
        </>
    );
}

export default BattleListContainer;
