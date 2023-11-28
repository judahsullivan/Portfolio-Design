import { format, parseISO } from 'date-fns';

export default function FormattedDate({ dateString }) {
  if (!dateString) return null;

  const date = parseISO(dateString);
  const formattedDate = format(date, 'LLL dd, yyyy'); // Adjust format string here

  return <time dateTime={dateString}>{formattedDate}</time>;
}
