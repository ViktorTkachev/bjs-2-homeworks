class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix(){
    return this.state = this.state * 3 / 2;
  }

  set state (number) {
    if (number <= 0) {
      this._state = 0
    } else if (number >= 100) {
      this._state = 100
    } else {
      this._state = number;
    }
  }

  get state () {
    return this._state
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor (name) {
    this.name = name;
    this.books = [];
  }

  addBook (book) {
    this.books.push(book);
    let lastBook = this.books.length - 1;
    if (this.books[lastBook].state < 30) {
      this.books.pop(book);
    }
  }

  findBookBy (type, value) {
    for (var i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value){
        return this.books[i];
      } else if (this.books[i][type] !== value && i === this.books.length - 1) {
        return null;
      }
    }
  }

  giveBookByName (bookName) {
    for (var i = 0; i < this.books.length; i++) {

      if (this.books[i].name === bookName){
        let findBook = this.books[i];
        this.books.splice(i,1);
        return findBook;
      }
    }
    return null;
  }

}
