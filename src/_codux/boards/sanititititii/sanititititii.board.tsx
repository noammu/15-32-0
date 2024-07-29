import { createBoard } from '@wixc3/react-board';
import { Sanititititii } from '../../../components/sanititititii/sanititititii';

export default createBoard({
    name: 'Sanititititii',
    Board: () => <Sanititititii />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 900,
    },
});
