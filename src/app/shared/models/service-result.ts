export interface ServiceResult<T> {
    response_code: number;
    results: T;
  }