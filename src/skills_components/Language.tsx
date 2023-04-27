import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Skill.module.css';

interface Props {
  className?: string;
  languages: string;
  description: string;
  frameworks: string;
}

/* @figmaId 267:6 */
export const Language: FC<Props> = memo(function Language(props) {
  const { className, languages, description, frameworks } = props;

  return (
    <>
    <div className={classes.Skills}>
        <div className={classes.languageName}>{languages}</div>  
        <div className={classes.description}>{description}</div>    
        <div className={classes.framework}>({frameworks})</div>
    </div>
    </>
  );
});
