import PageLayout from '@/components/layouts/pageLayout';
import ContactIndex from '@/components/pages/contact';

export default function Contact() {
  return (
    <PageLayout
      title={'Contact'}
      description={'Here is where you can get in contact with me directly. I am open for work!'}
      keywords={[
        'Contactpage',
        'EmailJS',
        'emailme',
        'judah',
        'sullivan',
        'contactjudah',
        'judahsullivan'
      ]}
      url={'contact'}
    >
      <ContactIndex />
    </PageLayout>
  );
}
