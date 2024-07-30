import { createBoard } from '@wixc3/react-board';
import { EverythingSamePlace } from './everything-same-place';

export default createBoard({
    name: 'EverythingSamePlace',
    Board: () => <EverythingSamePlace />,
    isSnippet: true,
});
