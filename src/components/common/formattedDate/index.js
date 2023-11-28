import { format, parse, isValid } from 'date-fns';

export default function PostDate({ dateString }) {
  if (!dateString) return null;

  const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());

  if (!isValid(parsedDate)) {
    console.error('Invalid date:', dateString);
    return null;
  }

  return <time dateTime={parsedDate.toISOString()}>{format(parsedDate, 'LLL dd, yyyy')}</time>;
}
