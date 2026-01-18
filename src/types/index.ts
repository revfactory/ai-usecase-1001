export type IndustryId =
  | 'automotive_logistics'
  | 'business_services'
  | 'financial_services'
  | 'healthcare_lifesciences'
  | 'hospitality_travel'
  | 'manufacturing'
  | 'media_marketing'
  | 'public_sector'
  | 'retail'
  | 'technology'
  | 'telecommunications';

export type AgentTypeId =
  | 'customer_agent'
  | 'employee_agent'
  | 'creative_agent'
  | 'code_agent'
  | 'data_agent'
  | 'security_agent';

export interface Industry {
  id: IndustryId;
  name: string;
  color: string;
  icon: string;
}

export interface AgentType {
  id: AgentTypeId;
  name: string;
  icon: string;
  description: string;
}

export interface UseCase {
  id: string;
  company: string;
  industry: IndustryId;
  agentType: AgentTypeId;
  summary: string;
  summaryKo?: string;
  summaryEn?: string;
  technologies: string[];
  metrics?: string;
  isNew: boolean;
}

export interface FilterState {
  industries: IndustryId[];
  agentTypes: AgentTypeId[];
  technologies: string[];
  searchQuery: string;
}
