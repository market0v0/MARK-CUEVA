import React from 'react'
import { memo } from 'react';
import type { FC } from 'react';
import classes from './Skill.module.css';
import { Frame } from './Frame';
import { Rectangle } from './Rectangle';

interface Content {
    content: string;
}
export default function SideText(Props: Content) {
    return (
        <div>
            <div className={classes.TextSide}>
                <div className={classes.label}>
                    <a className={classes.textBlock}>Hello</a><br/>
                    {Props.content}
                </div>
            </div>
        </div>
    )
}
