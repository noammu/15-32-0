import classNames from 'classnames';
import styles from './comp-in-comp-in-comp.module.scss';
import { DorIsHungry } from '../../dor-is-hungry/dor-is-hungry';
import { NoamDontBeStupid } from '../noam-dont-be-stupid/noam-dont-be-stupid';
import { ThirdLibrary } from '../third-library/third-library';

export interface CompInCompInCompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CompInCompInComp = ({ className }: CompInCompInCompProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            CompInCompInComp
            <DorIsHungry />
            <ThirdLibrary />
            <NoamDontBeStupid />
        </div>
    );
};
