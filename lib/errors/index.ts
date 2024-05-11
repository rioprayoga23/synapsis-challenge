import toast from "react-hot-toast";

export const errorHandler = (error: any) => {
  if (error) {
    const _error = error?.response?.data?.[0];
    toast.error(`${_error?.field} ${_error?.message}`);

    return Promise.reject(error);
  }
};
