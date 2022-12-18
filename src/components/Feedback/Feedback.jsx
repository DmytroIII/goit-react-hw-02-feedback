import PropTypes from 'prop-types';
import { FeedbackList, FeedbackBtn } from './Feedback.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {    
    return (
        <div>
            <FeedbackList>
            {options.map(item => {
                return (
                        <FeedbackBtn
                            key={item}
                            type="button"
                            onClick={() => {onLeaveFeedback(item)}}
                        >
                            {item}
                        </FeedbackBtn>
                    );
            })}
            </FeedbackList>            
        </div>
    )
}

FeedbackOptions.prototype = {
    // options: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(PropTypes.string,).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}


export default FeedbackOptions;