import { createBoard } from '@wixc3/react-board';
import { NoamDontBeStupid } from './noam-dont-be-stupid';

export default createBoard({
    name: 'NoamDontBeStupid',
    Board: () => <NoamDontBeStupid />,
    isSnippet: true,
});
