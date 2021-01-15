import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../modules/reducers";

function StatusContainer() {
    const user = useSelector((store:RootState) => store.user.get('user'));

    return (
        <>
            <div>
                <ul>
                    <li>Exp Level : {user.expLevel}</li>
                    <li>Exp Points : {user.expPoints}</li>
                    <li>Highest trophies : {user.highestTrophies}</li>
                    <li>Trophies : {user.trophies}</li>
                    <li>Power Play Points : {user.powerPlayPoints}</li>
                    <li>Highest Power Play Points : {user.highestPowerPlayPoints}</li>
                    <li>3vs3 Victories : {user['3vs3Victories']}</li>
                    <li>Solo Victories : {user.soloVictories}</li>
                    <li>Duo Victories : {user.duoVictories}</li>
                    <li>Club : {user.club.name}</li>
                </ul>
            </div>
        </>
    );
}

export default StatusContainer;
