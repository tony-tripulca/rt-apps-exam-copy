import AsyncStorage from '@react-native-async-storage/async-storage';

export interface BookmarksStorage {
  bookmarkedArticles: string[];
}

export const getBookmarksStorage = async (): Promise<BookmarksStorage> => {
  const result = await AsyncStorage.getItem('bookmarks');

  if (result === null || result === undefined) {
    return {
      bookmarkedArticles: [],
    };
  }

  return JSON.parse(result) as BookmarksStorage;
};

export const setBookmarksStorage = async (bookmarks: BookmarksStorage) => {
  await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

export const bookmarkArticle = async (articleId: string) => {
  const bookmarks = await getBookmarksStorage();

  if (bookmarks.bookmarkedArticles.includes(articleId)) {
    return;
  }

  const newBookmarks = {
    ...bookmarks,
    bookmarkedArticles: [...bookmarks.bookmarkedArticles, articleId],
  };

  await setBookmarksStorage(newBookmarks);

  return newBookmarks;
};
export const unbookmarkArticle = async (articleId: string) => {
  const bookmarks = await getBookmarksStorage();
  const newBookmarks = {
    ...bookmarks,
    bookmarkedArticles: bookmarks.bookmarkedArticles.filter((id) => id !== articleId),
  };
  await setBookmarksStorage(newBookmarks);
  return newBookmarks;
};
