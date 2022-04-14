interface GiphyModel {
  id: string;
  url: string;
  title: string;
  rating: string;
}

class Giphy implements GiphyModel {
  id: string;
  url: string;
  title: string;
  rating: string;

  constructor(id: string, url: string, title: string, rating: string) {
    this.id = id;
    this.url = url;
    this.title = title;
    this.rating = rating;
  }
}
