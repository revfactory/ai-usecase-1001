import { Industry, AgentType } from '@/types';

export const industries: Industry[] = [
  { id: 'automotive_logistics', name: '자동차 및 물류', color: '#FF6B6B', icon: '🚗' },
  { id: 'business_services', name: '비즈니스 서비스', color: '#4ECDC4', icon: '💼' },
  { id: 'financial_services', name: '금융 서비스', color: '#45B7D1', icon: '🏦' },
  { id: 'healthcare_lifesciences', name: '헬스케어', color: '#96CEB4', icon: '🏥' },
  { id: 'hospitality_travel', name: '호스피탈리티', color: '#FFEAA7', icon: '✈️' },
  { id: 'manufacturing', name: '제조', color: '#DDA0DD', icon: '🏭' },
  { id: 'media_marketing', name: '미디어/마케팅', color: '#FFB6C1', icon: '📺' },
  { id: 'public_sector', name: '공공 부문', color: '#98D8C8', icon: '🏛️' },
  { id: 'retail', name: '소매', color: '#F7DC6F', icon: '🛒' },
  { id: 'technology', name: '기술', color: '#BB8FCE', icon: '💻' },
  { id: 'telecommunications', name: '통신', color: '#85C1E9', icon: '📡' },
];

export const agentTypes: AgentType[] = [
  {
    id: 'customer_agent',
    name: '고객 에이전트',
    icon: '👤',
    description: '고객 서비스, 챗봇, 가상 비서 등 고객 대면 AI',
  },
  {
    id: 'employee_agent',
    name: '직원 에이전트',
    icon: '💼',
    description: '직원 생산성 향상, 내부 도구, 업무 자동화',
  },
  {
    id: 'creative_agent',
    name: '크리에이티브',
    icon: '🎨',
    description: '콘텐츠 생성, 디자인, 마케팅 자료 제작',
  },
  {
    id: 'code_agent',
    name: '코드 에이전트',
    icon: '💻',
    description: '코드 생성, 리뷰, 개발 도구 지원',
  },
  {
    id: 'data_agent',
    name: '데이터 에이전트',
    icon: '📊',
    description: '데이터 분석, 인사이트 추출, 예측',
  },
  {
    id: 'security_agent',
    name: '보안 에이전트',
    icon: '🛡️',
    description: '보안 모니터링, 위협 탐지, 규정 준수',
  },
];

export const getIndustryById = (id: string): Industry | undefined =>
  industries.find((i) => i.id === id);

export const getAgentTypeById = (id: string): AgentType | undefined =>
  agentTypes.find((a) => a.id === id);
