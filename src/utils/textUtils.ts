import { memoize } from 'lodash/fp';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  WORD_MAX_FONT_SIZE_REM,
  WORD_MAX_OPACITY,
  WORD_MIN_FONT_SIZE_REM,
  WORD_MIN_OPACITY,
} from '../constants/words';

import {
  Point,
  WordCount,
  WordCountStyles,
  WordStats,
} from '../types/wordCount';

function splitBySpace(text: string) {
  return text.split(' ');
}

type Word = string;
type Count = number;

function convertAllWordsToTitleCase(words: Word[]) {
  // title case is when first char of a word is uppercase
  return words.map((word) => {
    const firstChar = word.charAt(0).toUpperCase();
    const restOfTheString = word.slice(1);
    return firstChar + restOfTheString;
  });
}

function countWordsInArray(words: Word[]): Record<Word, Count> {
  const wordCountMap: Record<Word, Count> = {};
  words.forEach((word) => {
    if (!wordCountMap[word]) {
      wordCountMap[word] = 0;
    }
    wordCountMap[word] += 1;
  });
  return wordCountMap;
}

function getWordCountParis(wordCountMap: Record<Word, Count>) {
  return Object.entries(wordCountMap).map(([key, value]) => ({
    word: key,
    count: value,
  }));
}

function sortWordCountsInDesc(wordCounts: WordCount[]) {
  wordCounts.sort((a, b) => b.count - a.count);
}

function getFontSizeForWords(wordCounts: WordCount[]): WordCountStyles[] {
  const numberOfWords = wordCounts.length;
  const fontSizeShrinkPercent =
    (WORD_MAX_FONT_SIZE_REM - WORD_MIN_FONT_SIZE_REM) / numberOfWords;
  const opacityShrinkPercent =
    (WORD_MAX_OPACITY - WORD_MIN_OPACITY) / numberOfWords;
  return wordCounts.map((wordCount, index) => {
    const fontSize = WORD_MAX_FONT_SIZE_REM - fontSizeShrinkPercent * index;
    const opacity = WORD_MAX_OPACITY - opacityShrinkPercent * index;
    return { ...wordCount, fontSize, opacity };
  });
}

function sortWordsInCenteredOrder(words: WordCountStyles[]) {
  const sortedWords: WordCountStyles[] = new Array(words.length);
  let leftIndex = Math.floor(words.length / 2);
  let rightIndex = Math.ceil((words.length + 1) / 2);
  let index = 0;
  while (leftIndex >= 0 || rightIndex < words.length) {
    if (leftIndex >= 0) {
      sortedWords[leftIndex] = words[index];
      leftIndex -= 1;
      index += 1;
    }
    if (rightIndex < words.length) {
      sortedWords[rightIndex] = words[index];
      rightIndex += 1;
      index += 1;
    }
  }
  return sortedWords;
}

enum Direction {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}

function processFromTop(wordsStats: WordStats[], word: WordCountStyles) {
  if (wordsStats.length === 0) {
    wordsStats.push({ ...word, center: { x: 0, y: 0 } });
  }
}

const CENTER: Point = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 };

function processWordPosition(wordStyles: WordCountStyles[]) {
  let nextDirection = Direction.TOP;
  const wordsWithPos: WordStats[] = [];
  for (const word of wordStyles) {
    switch (nextDirection) {
      case Direction.TOP:
        processFromTop(wordsWithPos, word);
    }
  }
}

function processWordCountAndStyles(text: string) {
  const words = splitBySpace(text);
  const titleCaseWords = convertAllWordsToTitleCase(words);
  const wordCountMap = countWordsInArray(titleCaseWords);
  const wordCounts = getWordCountParis(wordCountMap);
  sortWordCountsInDesc(wordCounts);
  const wordStyles = getFontSizeForWords(wordCounts);
  return wordStyles;
}

const memoizedProcessWordCountAndStyles = memoize(processWordCountAndStyles);
export { memoizedProcessWordCountAndStyles as processWordCountAndStyles };

const memoizedSortWordsInCenteredOrder = memoize(sortWordsInCenteredOrder);
export { memoizedSortWordsInCenteredOrder as sortWordsInCenteredOrder };
