import moment from 'moment';

export default function PostDate({ dateString }) {
  if (!dateString) return null;

  const parsedDate = moment(dateString, 'YYYY-MM-DD'); // Parse with the specific format

  if (!parsedDate.isValid()) {
    console.error('Invalid date:', dateString);
    return null;
  }

  return (
    <time dateTime={parsedDate.toISOString()}>
      {parsedDate.format('MMM DD, YYYY')} {/* Format as 'MMM DD, YYYY' */}
    </time>
  );
}
