import PageLayout from '@/components/layouts/pageLayout';

export default function NotFound() {
  return (
    <PageLayout
      title="Not Found"
      description={
        'The Page your looking for isnt found but you return to Home by pushing the button'
      }
    >
      <div className="min-h-screen w-full">
        NotFound
      </div>
    </PageLayout>
  );
}
