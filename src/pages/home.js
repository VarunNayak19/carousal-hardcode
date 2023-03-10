import React from 'react'
import { useTranslation } from 'react-i18next';
import { novel } from '../data/novelList';
import "./home.css"
const Home = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1> {t("Welcome")}</h1>
            {
                novel.map((e, i) => {
                    return (
                        <div className='collection'>

                            <div className='readingList'>
                                <img src={e[0].url} alt="chso" className='book book1' />
                                <img src={e[1].url} alt="chso" className='book book2' />
                                <img src={e[2].url} alt="chso" className='book book3' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;
