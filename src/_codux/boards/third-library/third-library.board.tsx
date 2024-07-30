import { createBoard } from '@wixc3/react-board';
import { ThirdLibrary } from '../../../components/third-library/third-library';

export default createBoard({
    name: 'ThirdLibrary',
    Board: () => <ThirdLibrary />,
    isSnippet: true,
});
