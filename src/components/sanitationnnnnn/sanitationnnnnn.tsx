import classNames from 'classnames';
import styles from './sanitationnnnnn.module.scss';
import EspeonPng from '../../assets/espeon.png';

export interface SanitationnnnnnProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sanitationnnnnn = ({ className }: SanitationnnnnnProps) => {
    return (
        <div className={styles.div1}>
            <img src={EspeonPng} alt="" className={styles.img1} />
            <header>
                <button>Button</button>
            </header>
            <div className={classNames(styles.root, className)}>
                <h1 className={styles.header1}>Heading 1</h1>
            </div>
            <div>
                <canvas className={styles.canvas1} />
            </div>
            <div className={styles.grid}>
                <h2>Replace content</h2>
            </div>
        </div>
    );
};
