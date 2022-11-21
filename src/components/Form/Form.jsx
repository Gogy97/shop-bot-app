import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../hooks/useTelegram";
const Form = () => {
    const [country,setCountry] = useState()
    const [street,setStreet] = useState()
    const [subject,seSubject] = useState('physical')
    const {tg} = useTelegram()

    useEffect( ()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
        },[])
    useEffect( ()=>{
        if(!street||!country){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    },[street,country])

    const onChangeCountry = (e) =>{
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) =>{
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }
    return (
        <div className={'form'}>
            <h3>Введите ваше имя</h3>
             <input
                 className={'input'}
                 type='text'
                 placeholder = {'Страна'}
                 value={country}
                 onChange={onChangeCountry}
             />
            <input
                className={'input'}
                type='text'
                placeholder = {'Улица'}
                value={street}
                onChange={onChangeStreet}
            />

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ.лицо</option>
                <option value={'legal'}>Юр.лицо</option>
            </select>

        </div>
    );
};

export default Form;