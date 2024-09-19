export class PublicationsFilter {
  static filterByTitle(title: string, value: string) {
    return title.toLowerCase().includes(value.toLowerCase());
  }

  static filterByDescription(description: string, value: string) {
    return description.toLowerCase().includes(value.toLowerCase());
  }

  static filterByTags(tags: string[], value: string) {
    return tags.join('-').toLowerCase().includes(value.toLowerCase());
  }

  static filterFromAstro(publications: any[], value: string) {
    return publications.filter(
      (publication) =>
        this.filterByTitle(publication.frontmatter.title, value) ||
        this.filterByDescription(publication.frontmatter.description, value) ||
        this.filterByTags(publication.frontmatter.tags, value)
    );
  }
}
