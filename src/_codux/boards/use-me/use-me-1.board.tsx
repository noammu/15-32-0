import { createBoard } from '@wixc3/react-board';
import { UseMe } from '../../../components/use-me/use-me';
import { extNumVar } from './use-me.board';

const numVar = 1;
const anotherNumVar = 4;
const strVar = 'aaa';
const jsxVar = <h5>h5</h5>;

const Compy = () => <div>dd</div>;

export default createBoard({
    name: 'UseMe 1',
    Board: () => (
        <UseMe strProp={strVar} compProp={Compy}>
            {jsxVar}
        </UseMe>
    ),
    isSnippet: true,
});
