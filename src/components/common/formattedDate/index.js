import moment from 'moment';

export default function PostDate({ dateString, animationName }) {
  if (!dateString) return null;

  const parsedDate = moment(dateString, 'YYYY-MM-DD'); // Parse with the specific format

  if (!parsedDate.isValid()) {
    console.error('Invalid date:', dateString);
    return null;
  }

  return (
    <time className="space-x-1" dateTime={parsedDate.toISOString()}>
      {parsedDate
        .format('MMM DD, YYYY')
        .split(' ')
        .map((time, index) => {
          return (
            <span key={index} className="overflow-hidden inline-block">
              <span className={`inline-block ${animationName} `}>{time}</span>
            </span>
          );
        })}{' '}
      {/* Format as 'MMM DD, YYYY' */}
    </time>
  );
}
