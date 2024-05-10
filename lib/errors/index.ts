export const errorHandler = (error: any) => {
  if (error) {
    return Promise.reject(error);
  }
};
