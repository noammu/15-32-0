import { createBoard } from '@wixc3/react-board';
import { CompInComp } from '../../../components/comp-in-comp/comp-in-comp';

export default createBoard({
    name: 'CompInComp',
    Board: () => <CompInComp />,
    isSnippet: true,
});
