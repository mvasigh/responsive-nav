/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from './Icon';
import NavBlock from './NavBlock';

const navLists = [
    {
        headline: 'Headline #1',
        links: ['first link', 'second nav link', 'third nav link']
    },
    {
        headline: 'Long Headline',
        links: ['first link', 'second nav link', 'third nav link']
    },
    {
        headline: 'Headline #3',
        links: ['first link', 'second nav link', 'third nav link']
    }
];

const sideLinks = [
    'first nav link',
    'second long link',
    'third link',
    'fourth'
];

const NavMenu = ({ toggleExpanded }) => {
    return (
        <nav className="nav">
            <a
                href="#"
                className="nav__close-button pull-right mr-sm"
                onClick={toggleExpanded}
            >
                &#10005;
            </a>
            <div className="nav__container">
                <div className="nav__container-main">
                    <div className="nav__logo">
                        <Icon large text="company logo" />
                        <h1 className="nav__block-headline mt-sm mb-sm">
                            Website Name
                        </h1>
                        <hr />
                        <p className="nav__block-description mt-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque illo, expedita quod maiores architecto
                            cupiditate deleniti? Optio, fuga possimus.
                        </p>
                    </div>
                    {navLists.map((block, i) => (
                        <NavBlock {...block} key={i} />
                    ))}
                </div>
                <div className="nav__container-side">
                    <h3>More Links</h3>
                    <ul className="nav__side-link-list">
                        {sideLinks.map((link, i) => (
                            <li>
                                <a href="#" key={i}>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
