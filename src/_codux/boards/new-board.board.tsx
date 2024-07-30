import { createBoard } from '@wixc3/react-board';

function Wrapper() {
    return (
        <div>
            <div>Text from div</div>
            <h1>Simple Text</h1>
            <div></div>
        </div>
    );
}

export default createBoard({
    name: 'New Board',
    Board: Wrapper,
    isSnippet: true,
});
