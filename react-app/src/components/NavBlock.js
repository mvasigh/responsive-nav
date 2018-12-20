/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from './Icon';

const NavBlock = ({ headline, links }) => {
    const linkList = links.map(link => (
        <li key={link}>
            <a href="#">{link}</a>
        </li>
    ));

    return (
        <div className="nav__block">
            <Icon text="icon" />
            <h2 className="nav__block-headline mt-sm mb-sm">{headline}</h2>
            <hr />
            <ul className="nav__block-link-list mt-sm">{linkList}</ul>
        </div>
    );
};

export default NavBlock;
