

export const Feedback = ({ state, onLeaveFeedback }) => {

    const nameOfState = Object.keys(state);

    return (
        <div className="">

            {nameOfState.map((e, index) => (
                <button key={index} name={e} onClick={onLeaveFeedback}>
                    {CapitalizeFirstLetter(e)}
                </button>))
            }

        </div>
    )



}




function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}