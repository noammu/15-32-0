import { createBoard } from '@wixc3/react-board';
import { DorIsHungry } from '../../../dor-is-hungry/dor-is-hungry';

export default createBoard({
    name: 'DorIsHungry',
    Board: () => <DorIsHungry />,
    isSnippet: true,
});
