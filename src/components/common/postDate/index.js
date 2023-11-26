import { format, parseISO } from 'date-fns';

export default function PostDate({ dateString }) {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLL - yyyy')}</time>;
}
