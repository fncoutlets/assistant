import type { Activity, Conversation, Goal, HomeRecommendation, User } from '@/types/domain'
import { advisors } from './advisors'

export { advisors }
export const currentUser: User = { id: 'user-1', name: 'Alex Morgan', email: 'alex@example.com', selectedAdvisorId: 'advisor-maya', improvementAreas: ['financial', 'learning', 'home'], goals: ['Build a calmer monthly money routine', 'Make space for creative learning'] }
export const goals: Goal[] = [
  { id: 'goal-1', title: 'Build a calmer monthly money routine', area: 'financial', progress: 68, target: 'Review every Sunday' },
  { id: 'goal-2', title: 'Make space for creative learning', area: 'learning', progress: 34, target: 'Two sessions a week' },
]
export const recommendations: HomeRecommendation[] = [
  { id: 'rec-1', advisorId: 'advisor-maya', type: 'A small next step', title: 'Give your Sunday money check-in a home', description: 'A 15-minute ritual can turn your plan into something you trust.', actionLabel: 'Talk with Maya', actionHref: '/advisors/advisor-maya' },
  { id: 'rec-2', advisorId: 'advisor-sam', type: 'Worth exploring', title: 'Pick one idea to follow this week', description: 'You do not need a perfect curriculum. Start with one curious question.', actionLabel: 'Explore with Sam', actionHref: '/advisors/advisor-sam' },
]
export const conversations: Conversation[] = [{ id: 'conversation-1', advisorId: 'advisor-maya', title: 'Making my monthly plan feel lighter', createdAt: '2026-09-28T08:00:00Z', updatedAt: '2026-10-01T16:30:00Z' }]
export const activity: Activity[] = [{ id: 'activity-1', type: 'check-in', title: 'You checked in with Maya', description: 'You made a little more room for clarity this week.', advisorId: 'advisor-maya', createdAt: '2026-10-01T16:30:00Z' }]
