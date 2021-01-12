export interface WordCount {
  word: string;
  count: number;
}

export interface WordCountStyles extends WordCount {
  fontSize: number;
  opacity: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface WordStats extends WordCountStyles {
  center: Point;
}
