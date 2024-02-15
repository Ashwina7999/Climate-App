import React from 'react';
import Parser from 'html-react-parser';

function Rows(props) {
    let api = props.api ? props.api : props;
    return Object.entries(api).map(([key, value]) => makeContent(key, value));
}

function makeContent(key, take) {
    if (take !== '') {
        return (
            <div key={key} id={`${take['id']}`} className={`${take['class']}`}>
                {modeContent(take)}
            </div>
        )
    }
}

function modeContent(val) {
    let content;
    if (typeof (val['content']) === 'object') {
        content = Rows(val['content'])
    }
    else if (typeof (val['content']) === 'string') {
        content = Parser(val['content'])
    }
    return content
}

export default Rows
