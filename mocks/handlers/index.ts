import { http, HttpResponse } from 'msw'
import { advisors } from '@/mocks/data/advisors'
export const handlers = [http.get('/api/advisors', () => HttpResponse.json({ data: advisors }))]
