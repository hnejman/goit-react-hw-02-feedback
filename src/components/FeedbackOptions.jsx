export const FeedbackOptions = ({options}) => {
	
	return (
     <div>
		<button onClick={options}>
          Good
        </button>
        <button onClick={options}>
          Neutral
        </button>
        <button onClick={options}>
          Bad
        </button>
	 </div>

    );
}
