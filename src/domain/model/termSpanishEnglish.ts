export default class TermSpanishEnglish {
  private spanish: string;
  private english: string;

  constructor(spanish: string, english: string) {
    this.spanish = spanish;
    this.english = english;
  }

  getSpanish(): string {
    return this.spanish;
  }

  getEnglish(): string {
    return this.english;
  }

  setSpanish(spanish: string): void {
    this.spanish = spanish;
  }

  setEnglish(english: string): void {
    this.english = english;
  }

  static createTerm(spanish: string, english: string): TermSpanishEnglish {
    return new TermSpanishEnglish(spanish, english);
  }
}