import React, {useState, useContext, useReducer} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import {
    Input,
    Label,
    Button,
} from 'semantic-ui-react';
import {setUser, setBattle} from "../../../modules/reducers/user";
import StatusContext from '../../../context/status.context';
const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const { setLoaded } = useContext(StatusContext);
    const [tagData, setTag] = useState('2LYRJQYGJ');

    const handleClickSearchBtn = async (data) => {
        try {
            dispatch(setUser(tagData));
            dispatch(setBattle(tagData));
            setLoaded(true);

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
