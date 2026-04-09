export const hashSlug = (str: string) => // simple hash function to create a slug from category name
  Array.from(str)
    .reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0)
    .toString(36)
    .replace('-', '');