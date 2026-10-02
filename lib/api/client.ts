export class ApiError extends Error { constructor(message: string, public status = 500) { super(message); this.name = 'ApiError' } }

export const apiClient = {
  async get<T>(path: string): Promise<T> { const response = await fetch(path); if (!response.ok) throw new ApiError('Unable to load this information.', response.status); return response.json() as Promise<T> },
  async post<T>(path: string, body: unknown): Promise<T> { const response = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); if (!response.ok) throw new ApiError('Unable to save this information.', response.status); return response.json() as Promise<T> },
}
