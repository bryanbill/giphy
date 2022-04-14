export interface GiphyModel {
  id: string;
  url: string;
  title: string;
  rating: string;
}

export class Giphy implements GiphyModel {
  id: string;
  url: string;
  title: string;
  rating: string;

  constructor(id: string, url: string, title: string, rating: string) {
    this.id = id;
    this.url = this.formattedUrl(url);
    this.title = title;
    this.rating = rating;

    console.log(this.url);
  }

  formattedUrl(url: string): string {
    if (url.includes('-')) {
      const temp = url.split('-');
      const id = temp[temp.length - 1];
      return `https://giphy.com/embed/${id}`;
    } else {
      const temp = url.split('/');
      const id = temp[temp.length - 1];
      return `https://giphy.com/embed/${id}`;
    }
  }
}
