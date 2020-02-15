/* eslint-disable react/require-optimization */
import React from 'react';

import manifest from './manifest';

import './app.css';

class FontChangerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comicSans: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            comicSans: !state.comicSans
        }));
    }

    render() {
        var element = document.getElementsByTagName("body")[0];

        if (this.state.comicSans) {
            element.className = element.className.replace(/\bfont--[^\s]+\b/g, "font--comic-sans");
        } else {
            element.className = element.className.replace(/\bfont--[^\s]+\b/g, "font--open-sans");
        }

        return <button onClick={this.handleClick} className="toggleButton">
            {this.state.comicSans ? 'My eyes are hurt 😭' : 'Make it fun 🥳'}
        </button>;
    }
}

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        registry.registerLeftSidebarHeaderComponent(FontChangerComponent);
    }
}

window.registerPlugin(manifest.id, new Plugin());
