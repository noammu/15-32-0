import classNames from 'classnames';
import styles from './comp-in-comp.module.scss';
import { CompInCompInComp } from '../comp-in-comp-in-comp/comp-in-comp-in-comp';
import { NoamDontBeStupid } from '../noam-dont-be-stupid/noam-dont-be-stupid';

export interface CompInCompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CompInComp = ({ className }: CompInCompProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <CompInCompInComp />
            CompInComp
            <NoamDontBeStupid />
        </div>
    );
};
