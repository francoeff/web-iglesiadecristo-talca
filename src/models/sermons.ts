export class SermonsFilter {
  static filterByTitle(title: string, value: string) {
    return title.toLowerCase().includes(value.toLowerCase());
  }

  static filterByDescription(description: string, value: string) {
    return description.toLowerCase().includes(value.toLowerCase());
  }

  static filterByTags(tags: string[], value: string) {
    return tags.join('-').toLowerCase().includes(value.toLowerCase());
  }

  static filterFromAstro(sermons: any[], value: string) {
    return sermons.filter(
      (sermon) =>
        this.filterByTitle(sermon.frontmatter.title, value) ||
        this.filterByDescription(sermon.frontmatter.description, value) ||
        this.filterByTags(sermon.frontmatter.tags, value)
    );
  }
}
