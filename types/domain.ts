export type AdvisorCategory = 'financial' | 'nutrition' | 'career' | 'travel' | 'home' | 'learning'
export type MessageRole = 'user' | 'advisor' | 'system'
export type MessageStatus = 'sending' | 'sent' | 'error'
export type ActivityType = 'check-in' | 'recommendation' | 'milestone' | 'conversation'

export type Advisor = {
  id: string
  slug: string
  name: string
  role: string
  category: AdvisorCategory
  description: string
  character: string
  capabilities: string[]
  visual: { initials: string; accent: string }
  isAvailable: boolean
}

export type User = {
  id: string
  name: string
  email: string
  avatar?: string
  selectedAdvisorId?: string
  improvementAreas: string[]
  goals: string[]
}

export type Conversation = { id: string; advisorId: string; title: string; createdAt: string; updatedAt: string }
export type Message = { id: string; conversationId: string; role: MessageRole; content: string; createdAt: string; status: MessageStatus }
export type Activity = { id: string; type: ActivityType; title: string; description: string; advisorId?: string; createdAt: string }
export type HomeRecommendation = { id: string; advisorId: string; type: string; title: string; description: string; actionLabel: string; actionHref: string }
export type Goal = { id: string; title: string; area: AdvisorCategory; progress: number; target?: string }

export type ApiResponse<T> = { data: T; error?: never } | { data?: never; error: { message: string; code?: string } }
