import classNames from 'classnames';
import styles from './real-everything-same-place.module.scss';

export interface RealEverythingSamePlaceProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RealEverythingSamePlace = ({ className }: RealEverythingSamePlaceProps) => {
    return <div className={classNames(styles.root, className)}>RealEverythingSamePlace</div>;
};
