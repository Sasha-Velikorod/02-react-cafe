import css from './VoteOptions.module.css'
import { VoteType } from '../../types/votes'

interface VoteOptionsProps {
    onVote: (value: VoteType) => void;
    onReset: () => void;
    canReset: number;

}

export default function VoteOptions({onVote, onReset, canReset }: VoteOptionsProps) {
    return (   <div className={css.container}>
  <button className={css.button} onClick={() => onVote('good')}>Good</button>
  <button className={css.button} onClick={() => onVote('neutral')}>Neutral</button>
  <button className={css.button} onClick={() => onVote('bad')}>Bad</button>
        { canReset > 0 && <button className={`${css.button} ${css.reset}`} onClick={ onReset}>Reset</button>}
</div>)
  

}