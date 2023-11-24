import { blockContent } from './schemas/blockContent';
import { category } from './schemas/category';
import { post } from './schemas/post';
import { author } from './schemas/author';
import { project } from './schemas/project';
import { projectCategory } from './schemas/projectCategory';
import { tags } from './schemas/tags';
import { projectTags } from './schemas/projectTags';

export const schema = {
  types: [post, tags, projectCategory, projectTags, author, category, blockContent, project]
};
