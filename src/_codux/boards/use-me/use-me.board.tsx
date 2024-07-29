import { createBoard } from '@wixc3/react-board';
import { UseMe } from '../../../components/use-me/use-me';
import styles from './use-me.board.module.scss';

export const extNumVar = 0;

export default createBoard({
    name: 'UseMe',
    Board: () => <UseMe className={styles.asdasd}>{'blibla'}</UseMe>,
    isSnippet: true,
});
