import { createBoard } from '@wixc3/react-board';
import { CompInCompInComp } from '../../../components/comp-in-comp-in-comp/comp-in-comp-in-comp';

export default createBoard({
    name: 'CompInCompInComp',
    Board: () => <CompInCompInComp />,
    isSnippet: true,
});
