import React, {PureComponent} from "react";

import Notes from "./Notes";
import api from "conf/api.json";

// import themeA from "../../asset/css/theme-a.scss";
// import themeB from "../../asset/css/theme-b.scss";

export default class NoteList extends PureComponent {
    state = {
        notes: [{
            id: "1",
            task: "Learn React"
        }, {
            id: "2",
            task: "Do laundry"
        }],
        theme: "theme-a",
        style: null
    };

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: Math.random().toString(36).substring(7),
                task: api.someServiceURL
            }]),
            theme: this.state.theme,
            style: this.state.style
        });

        (async () => {
            const style = await import(`../../asset/css/${this.state.theme}.scss`);
            this.setState({
                nodes: this.state.notes,
                theme: "theme-b",
                style: style.button
            });
        })();
    };

    render() {
        const {notes, style} = this.state;

        // const style = theme === "theme-a" ? themeA : themeB;

        return <div className={style}>
            <button onClick={this.addNote}>+</button>
            <Notes notes={notes}/>
        </div>;

    }
}
