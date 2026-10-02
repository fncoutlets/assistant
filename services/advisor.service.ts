import { mockAdvisorRepository } from '@/repositories/advisor.repository'
export const advisorService = { list: () => mockAdvisorRepository.list(), getById: (id: string) => mockAdvisorRepository.getById(id) }
