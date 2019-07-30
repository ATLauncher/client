import counter from '../../src/renderer/reducers/counter';
import { CounterTypeKeys } from '../../src/renderer/actions/counter';

describe('reducers', () => {
    describe('counter', () => {
        it('should handle INCREMENT_COUNTER', () => {
            expect(counter(1, { type: CounterTypeKeys.INCREMENT_COUNTER })).toMatchSnapshot();
        });

        it('should handle DECREMENT_COUNTER', () => {
            expect(counter(1, { type: CounterTypeKeys.DECREMENT_COUNTER })).toMatchSnapshot();
        });
    });
});
