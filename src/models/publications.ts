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

export class PublicationsOrderBy {
  static dateDesc(a: any, b: any) {
    return new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime();
  }

  static dateAsc(a: any, b: any) {
    return new Date(a.frontmatter.pubDate).getTime() - new Date(b.frontmatter.pubDate).getTime();
  }

  static titleDesc(a: any, b: any) {
    return b.frontmatter.title.localeCompare(a.frontmatter.title);
  }

  static titleAsc(a: any, b: any) {
    return a.frontmatter.title.localeCompare(b.frontmatter.title);
  }

  static sort(publications: any[], orderBy: OrderBy) {
    switch (orderBy) {
      case 'date-desc':
        return publications.sort(this.dateDesc);
      case 'date-asc':
        return publications.sort(this.dateAsc);
      case 'title-desc':
        return publications.sort(this.titleDesc);
      case 'title-asc':
        return publications.sort(this.titleAsc);
      default:
        return publications;
    }
  }
}

export type OrderBy = 'date-desc' | 'date-asc' | 'title-desc' | 'title-asc';