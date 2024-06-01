export interface APIResponse<T = any> {
  status: number;
  data: T | null;
  message: string | null;
}
