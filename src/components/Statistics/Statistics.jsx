import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

const Statistics = ({good, neutral, bad, total, PositiveFeedback}) => {
    return (
        <div>
            <StatisticsList>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {PositiveFeedback} %</li>
            </StatisticsList>
        </div>
    )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    PositivePercentage: PropTypes.number.isRequired,
}

export default Statistics;