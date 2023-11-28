export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }]
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'MM-YYYY' // Set the desired format for display
      },
      initialValue: () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = `${currentDate.getMonth() + 1}`.padStart(2, '0'); // Months are zero-indexed, so add 1

        // Format the date to YYYY-MM
        const formattedDate = `${year}-${month}`;

        return formattedDate;
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    }
  }
};
