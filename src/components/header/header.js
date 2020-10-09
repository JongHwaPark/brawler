import React, {useState} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import {
    Input,
    Label,
    Button,
} from 'semantic-ui-react';
import {setUser, setBattle} from "../../reducers/user";
const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const [tagData, setTag] = useState('2LYRJQYGJ');

    const getUserData = () => {
        try{
            return axios.get(`http://127.0.0.1:8000/player/%23${tagData}`);
        } catch (err){
            throw err;
        }
    };

    const getBattleLog = () => {
        try{
            return axios.get(`http://127.0.0.1:8000/battle/%23${tagData}`);
        } catch (err){
            throw err;
        }
    };

    const handleClickSearchBtn = async (data) => {
        try {
            const data = await axios.all([getUserData(), getBattleLog()]);
            console.log(data);
            dispatch(setUser(data[0].data));
            dispatch(setBattle(data[1].data));
        } catch (err){
            console.log(err);
        }
    };

    return (
        <header className={cx('header-wrap')}>
            <div>
                <a className={cx('logo')}>LOGO</a>
                <ul className={cx('header-nav')}>
                    <li>
                        <Input labelPosition='right' action={{ icon: 'search' }} placeholder='Search...'>
                            <Label basic>#</Label>
                            <input value={tagData}  onChange={({ target: { value } }) => setTag(value)} />
                            <Button type='submit' onClick={()=>handleClickSearchBtn()}>Search</Button>
                        </Input>
                    </li>
                    <li>Home</li>
                    <li>Sign in</li>
                    <li>Sign up</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
