import classNames from 'classnames';
import styles from './sanititititii.module.scss';
import { useState } from 'react';
import { UseMe } from '../use-me/use-me';
import { ReactComponent as TypescriptSvg } from '../../assets/typescript.svg';
import PikachuPng from '../../assets/pikachu.png';

export interface SanititititiiProps {
    className?: string;
}

export const Sanititititii = ({ className }: SanititititiiProps) => {
    const [dor, setDor] = useState(0);
    const raiseNumber = () => {
        setDor((prev) => prev + 3);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <UseMe>
                    <TypescriptSvg />
                    {
                        <div className={styles.grid}>
                            <img src={PikachuPng} alt="" height="100" className={styles.img1} />
                            <h2>ddddddddddddddd</h2>
                        </div>
                    }
                </UseMe>
            </div>
            <div>
                <h1 className={styles.header1}>H1</h1>
            </div>
            <main>
                <strong>
                    <p>This is a strong paragraph - {dor}</p>
                    <h1 className={styles.header2}>ee</h1>
                </strong>
            </main>
            <div>
                <button onClick={raiseNumber}>yoyoyo</button>
            </div>
            <div>
                <textarea />
            </div>
            <span className={styles.span1}>dfgdf gdfgtext</span>
            <p>This is a paragraph.</p>
            <footer>I am a footer!</footer>
            <div>
                <span>text</span>
            </div>
        </div>
    );
};
