import classNames from 'classnames';
import styles from './dor-is-hungry.module.scss';

export interface DorIsHungryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const DorIsHungry = ({ className }: DorIsHungryProps) => {
    return <div className={classNames(styles.root, className)}>DorIsHungry</div>;
};
