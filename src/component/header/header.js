import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLang } from '../../redux/redux';
import "./header.css"
const Header = () => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem("lng", e.target.value);
        // dispatch(setLang(e.target.value))
    };
    return (
        <>
            <div className='headerContainer'>
                <div className='headerContent'>
                    <div className="logo">LOGO</div>
                    <div className="tabs">
                        <span className="1">{t("books")}</span>
                        <span className="2">{t("readingLists")}</span>
                        <span className="3">{t("videos")}</span>
                        <span className="4">{t("readAlouds")}</span>
                        <span className="5">{t("resources")}</span>
                    </div>
                    <div className="language">
                        <select
                            name="language"
                            className="languageSelect"
                            onChange={handleLanguageChange}
                        // value={localStorage.getItem("i18nextLng")}
                        >
                            <option className="lang" value="en">
                                English
                            </option>
                            <option className="lang" value="kn">
                                Kannada
                            </option>
                            <option className="lang" value="hi">
                                Hindi
                            </option>

                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;