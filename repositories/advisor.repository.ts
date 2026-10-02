import { advisors } from '@/mocks/data/advisors'
import type { Advisor } from '@/types/domain'
export interface AdvisorRepository { list(): Promise<Advisor[]>; getById(id: string): Promise<Advisor | undefined> }
export const mockAdvisorRepository: AdvisorRepository = { async list() { return advisors }, async getById(id) { return advisors.find((advisor) => advisor.id === id) } }
