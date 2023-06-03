import css from './Feedback-style.module.css';
import PropTypes from 'prop-types';

export const Feedback = ({ state, onLeaveFeedback }) => {

    const nameOfState = Object.keys(state);

    return (
        <div className={css.buttonThumb}>

            {nameOfState.map((e, index) => (
                <button className={css.button} key={index} name={e} onClick={onLeaveFeedback}>
                    {CapitalizeFirstLetter(e)}
                </button>))
            }

        </div>
    )



}

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func,
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
};


function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}