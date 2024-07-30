import classNames from 'classnames';
import styles from './everything-same-place.module.scss';

export interface EverythingSamePlaceProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const EverythingSamePlace = ({ className }: EverythingSamePlaceProps) => {
    return <div className={classNames(styles.root, className)}>EverythingSamePlace</div>;
};
