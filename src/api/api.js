import axios from "axios";
const brawlToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJkMjliMTZmLTFiNTMtNDIwZS05ZjA3LWM1OTc2YWQzNjFlZiIsImlhdCI6MTYwODg3ODk0NCwic3ViIjoiZGV2ZWxvcGVyL2Q1YzBjMjllLThhNWEtYTI3Ny05ZDcwLTdkNDFmMzE4ZjNmZiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTgwLjIzMS4xOS44MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ZN31BZZTTdepFCffhUT6uhclX_sb8OCvhwbAXUTnnHn0VvZ5HNdszOxiKEveLLEiNuYIbpx6tpn_J08WPAJU_w';

const getPlayers = async (tag) => {
    try{
        let response = await axios(`/v1/players/${tag}`, {
            headers: {
                Accept: "application/json; charset=utf-8",
                Authorization: `Bearer ${brawlToken}`,
            }
        });
        console.log('player success');
        return response
    } catch(err){
        console.log('/********************** PLAYER ERROR *********************/');
        throw err;
        // console.log(err);
    }
};

export {
    getPlayers
}