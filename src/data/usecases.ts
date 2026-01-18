import { UseCase } from '@/types';

export const usecases: UseCase[] = [
  // ================================================================================
  // 자동차 및 물류 (Automotive & Logistics)
  // ================================================================================

  // 고객 에이전트
  { id: 'auto-cust-1', company: 'Continental', industry: 'automotive_logistics', agentType: 'customer_agent', summary: 'Google Cloud의 대화형 AI 기술을 Smart Cockpit HPC에 통합하여 차량 내 음성 명령 솔루션 개발', technologies: ['Google Cloud AI', '대화형 AI'], isNew: false },
  { id: 'auto-cust-2', company: 'General Motors OnStar', industry: 'automotive_logistics', agentType: 'customer_agent', summary: 'Google Cloud의 대화형 AI 기술로 화자의 의도를 더 잘 인식하는 가상 비서 구현', technologies: ['Google Cloud AI', '대화형 AI'], isNew: false },
  { id: 'auto-cust-3', company: 'LUXGEN', industry: 'automotive_logistics', agentType: 'customer_agent', summary: 'Vertex AI를 사용하여 LINE 계정에서 고객 질문에 답하는 AI 에이전트 구동', technologies: ['Vertex AI'], metrics: '고객 서비스 업무량 30% 감소', isNew: true },
  { id: 'auto-cust-4', company: 'Mercedes-Benz', industry: 'automotive_logistics', agentType: 'customer_agent', summary: 'Vertex AI를 통한 Gemini로 MBUX 가상 비서를 구동하여 운전자와 자연스러운 대화 가능', technologies: ['Vertex AI', 'Gemini'], isNew: false },
  { id: 'auto-cust-5', company: 'Mercedes-Benz', industry: 'automotive_logistics', agentType: 'customer_agent', summary: '생성형 AI 기반 스마트 판매 비서로 온라인 스토어프론트에 전자상거래 기능 주입', technologies: ['생성형 AI'], isNew: false },
  { id: 'auto-cust-6', company: 'PODS', industry: 'automotive_logistics', agentType: 'customer_agent', summary: 'Gemini를 사용한 세계에서 가장 똑똑한 빌보드 - 29시간 만에 299개 동네에서 6,000개 이상의 고유한 헤드라인 생성', technologies: ['Gemini'], metrics: '29시간 내 6,000개 헤드라인', isNew: false },
  { id: 'auto-cust-7', company: 'UPS Capital', industry: 'automotive_logistics', agentType: 'customer_agent', summary: 'DeliveryDefense Address Confidence로 머신러닝과 UPS 데이터를 사용하여 성공적인 배송 가능성 신뢰도 점수 제공', technologies: ['머신러닝'], isNew: false },
  { id: 'auto-cust-8', company: 'Volkswagen of America', industry: 'automotive_logistics', agentType: 'customer_agent', summary: 'myVW 앱에 가상 비서를 구축하여 Gemini 멀티모달 기능으로 대시보드 표시등 정보 제공', technologies: ['Gemini', '멀티모달 AI'], isNew: false },

  // 직원 에이전트
  { id: 'auto-emp-1', company: '704 Apps', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'Gemini로 차량 탑승자 간 대화의 감정적 온도를 측정하여 위험한 상황 예측', technologies: ['Gemini'], isNew: false },
  { id: 'auto-emp-2', company: 'Geotab', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'Gemini가 포함된 Google Workspace로 연구, 문서 요약, 상태 보고, 법률 문서 검토 수행', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'auto-emp-3', company: 'Oxa', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 캠페인 템플릿 구축, 소셜 게시물 작성, 직무 설명서 작성', technologies: ['Gemini', 'Google Workspace'], isNew: false },
  { id: 'auto-emp-4', company: 'Rivian', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'Google Workspace와 Gemini로 직원들의 즉각적인 연구 및 학습 가속화 지원', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'auto-emp-5', company: 'Rivian', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'NotebookLM으로 자주 묻는 질문에 대한 답변을 중앙화하고 공유하는 지식 베이스 구축', technologies: ['NotebookLM'], isNew: true },
  { id: 'auto-emp-6', company: 'Routematic', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'Compute Engine과 GKE로 8개월 만에 전체 인프라를 Google Cloud로 마이그레이션', technologies: ['Compute Engine', 'GKE'], metrics: '제품 출시 주기 몇 주에서 며칠로 단축', isNew: true },
  { id: 'auto-emp-7', company: 'Toyota', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'Google Cloud AI 인프라로 공장 작업자들이 ML 모델을 개발하고 배포할 수 있는 AI 플랫폼 구현', technologies: ['Google Cloud AI', 'ML'], metrics: '연간 10,000인시 이상 절감', isNew: false },
  { id: 'auto-emp-8', company: 'Uber', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'AI 에이전트로 고객 서비스 담당자의 커뮤니케이션 요약 및 이전 상호작용 컨텍스트 표시', technologies: ['AI 에이전트'], isNew: false },
  { id: 'auto-emp-9', company: 'Uber', industry: 'automotive_logistics', agentType: 'employee_agent', summary: 'Gemini가 포함된 Google Workspace로 반복적인 작업 시간 절약 및 개발자 집중도 향상', technologies: ['Google Workspace', 'Gemini'], isNew: false },

  // 코드 에이전트
  { id: 'auto-code-1', company: 'Ampere (Renault Group)', industry: 'automotive_logistics', agentType: 'code_agent', summary: '회사의 코드 베이스, 표준 및 규칙을 이해하는 Gemini Code Assist 엔터프라이즈 버전 사용', technologies: ['Gemini Code Assist'], isNew: false },

  // 데이터 에이전트
  { id: 'auto-data-1', company: 'BMW Group', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Vertex AI를 사용하여 산업 계획 프로세스와 공급망을 최적화하는 SORDI.ai 디지털 트윈 개발', technologies: ['Vertex AI', '디지털 트윈'], isNew: false },
  { id: 'auto-data-2', company: 'Dematic', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Vertex AI와 Gemini 멀티모달 기능으로 전자상거래 및 옴니채널 소매업체를 위한 엔드투엔드 풀필먼트 솔루션 구축', technologies: ['Vertex AI', 'Gemini'], isNew: false },
  { id: 'auto-data-3', company: 'Domina', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Vertex AI와 Gemini로 패키지 반품 예측 및 배송 유효성 검사 자동화', technologies: ['Vertex AI', 'Gemini'], metrics: '실시간 데이터 접근성 80% 향상, 배송 효과 15% 향상', isNew: true },
  { id: 'auto-data-4', company: 'Geotab', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'BigQuery와 Vertex AI로 460만 대 차량에서 하루 수십억 데이터 포인트 분석', technologies: ['BigQuery', 'Vertex AI'], isNew: false },
  { id: 'auto-data-5', company: 'Kinaxis', industry: 'automotive_logistics', agentType: 'data_agent', summary: '시나리오 모델링, 계획, 운영 관리 및 자동화를 포함한 물류 활용 사례를 해결하는 데이터 기반 공급망 솔루션', technologies: ['Google Cloud'], isNew: false },
  { id: 'auto-data-6', company: 'Moglix', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Vertex AI로 생성형 AI 벤더 발견 배포하여 소싱 팀 효율성 향상', technologies: ['Vertex AI'], metrics: '소싱 팀 효율성 4배 향상', isNew: true },
  { id: 'auto-data-7', company: 'Nuro', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'AlloyDB의 벡터 검색으로 자율주행 차량이 도로에서 마주치는 객체를 정확하게 분류', technologies: ['AlloyDB', '벡터 검색'], isNew: false },
  { id: 'auto-data-8', company: 'Picterra', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'GKE로 초고해상도에서도 전체 국가의 지형을 빠르게 모델링하는 지리공간 AI 플랫폼', technologies: ['GKE'], isNew: false },
  { id: 'auto-data-9', company: 'Prewave', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Google Cloud AI 서비스로 엔드투엔드 리스크 모니터링 및 ESG 리스크 감지 제공', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'auto-data-10', company: 'TruckHouse', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Gemini in Sheets로 재고 추적 가속화', technologies: ['Gemini', 'Google Sheets'], isNew: false },
  { id: 'auto-data-11', company: 'tulanā', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Cloud Run으로 최적화 워크로드 확장, Gemini를 지능형 ETL 프로세스에 사용', technologies: ['Cloud Run', 'Gemini', 'Cloud SQL', 'BigQuery'], isNew: true },
  { id: 'auto-data-12', company: 'UPS', industry: 'automotive_logistics', agentType: 'data_agent', summary: '전체 배포 네트워크의 디지털 트윈 구축으로 패키지 위치 실시간 확인', technologies: ['디지털 트윈'], isNew: false },
  { id: 'auto-data-13', company: 'Woven (Toyota)', industry: 'automotive_logistics', agentType: 'data_agent', summary: 'Google Cloud AI Hypercomputer에서 수천 개의 ML 워크로드를 지원하여 자율주행 구현', technologies: ['AI Hypercomputer', 'ML'], metrics: '총 소유 비용 50% 절감', isNew: false },

  // 보안 에이전트
  { id: 'auto-sec-1', company: 'Mitsubishi Motors', industry: 'automotive_logistics', agentType: 'security_agent', summary: 'Google Security Operations로 글로벌 운영을 사이버 공격으로부터 보호', technologies: ['Google Security Operations', 'SIEM', 'SOAR'], isNew: true },

  // ================================================================================
  // 비즈니스 및 전문 서비스 (Business & Professional Services)
  // ================================================================================

  // 고객 에이전트
  { id: 'biz-cust-1', company: 'Accenture', industry: 'business_services', agentType: 'customer_agent', summary: '가상 비서를 통한 편리한 셀프 서비스 옵션을 제공하여 대형 소매업체의 고객 지원 혁신', technologies: ['가상 비서', 'AI'], isNew: false },
  { id: 'biz-cust-2', company: 'atmira', industry: 'business_services', agentType: 'customer_agent', summary: 'GKE와 Oracle on Google Cloud로 월 약 1억 1,400만 건의 요청을 관리하는 AI 기반 채권 추심 플랫폼 SIREC 구동', technologies: ['GKE', 'Oracle on Google Cloud'], metrics: '회수율 30-40% 향상, 결제 전환율 45% 증가, 운영 비용 54% 절감', isNew: true },
  { id: 'biz-cust-3', company: 'Capgemini', industry: 'business_services', agentType: 'customer_agent', summary: 'Google Cloud로 소매업체가 전자상거래 경험을 최적화하는 AI 에이전트 구축', technologies: ['Google Cloud'], isNew: false },
  { id: 'biz-cust-4', company: 'Deloitte', industry: 'business_services', agentType: 'customer_agent', summary: 'Google Cloud로 구축된 Care Finder 에이전트로 보험 적용 의료 제공자를 1분 이내에 찾음', technologies: ['Google Cloud', 'Agent Fleet'], metrics: '평균 통화 시간 5~8분에서 1분으로 단축', isNew: false },
  { id: 'biz-cust-5', company: 'Ferret.ai', industry: 'business_services', agentType: 'customer_agent', summary: 'AI를 사용하여 사용자의 개인 및 전문 네트워크에 있는 사람들의 배경에 대한 인사이트 제공', technologies: ['AI'], isNew: false },
  { id: 'biz-cust-6', company: 'Humanizadas', industry: 'business_services', agentType: 'customer_agent', summary: 'GKE, Cloud Run, Gemini 모델로 여러 국가에 실시간 ESG 지표 및 지속 가능성 인텔리전스 제공', technologies: ['GKE', 'Cloud Run', 'Vertex AI', 'Gemini', 'Dialogflow'], isNew: true },
  { id: 'biz-cust-7', company: 'Intuit', industry: 'business_services', agentType: 'customer_agent', summary: 'Doc AI와 Gemini 모델로 TurboTax 세금 신고서 자동 작성 기능 확장', technologies: ['Doc AI', 'Gemini'], isNew: false },
  { id: 'biz-cust-8', company: 'NoBroker', industry: 'business_services', agentType: 'customer_agent', summary: 'Gemini 및 L4 GPU로 구동되는 ConvoZen AI로 여러 인도 언어로 고객 지원 자동화', technologies: ['Gemini', 'L4 GPU'], metrics: '하루 10,000시간 녹음 처리, 연간 10억 달러 절약 예상', isNew: true },
  { id: 'biz-cust-9', company: 'Stax AI', industry: 'business_services', agentType: 'customer_agent', summary: 'MongoDB Atlas와 Vertex AI로 수동 프로세스를 자동화하고 대량의 신탁 회계 데이터 변환', technologies: ['MongoDB Atlas', 'Vertex AI'], isNew: false },
  { id: 'biz-cust-10', company: 'Sutherland', industry: 'business_services', agentType: 'customer_agent', summary: '실시간으로 제안된 응답을 자동으로 표시하고 인사이트를 자동화하여 고객 대면 팀 강화', technologies: ['AI'], isNew: false },
  { id: 'biz-cust-11', company: 'Wagestream', industry: 'business_services', agentType: 'customer_agent', summary: 'Gemini 모델로 결제일, 잔액 등에 대한 내부 고객 문의의 80% 이상 처리', technologies: ['Gemini'], metrics: '내부 문의 80% 이상 처리', isNew: false },
  { id: 'biz-cust-12', company: 'WealthAPI', industry: 'business_services', agentType: 'customer_agent', summary: 'Gemini와 DataStax Astra DB로 대규모로 개인화된 가이던스를 위한 차세대 금융 인사이트 제공', technologies: ['Gemini', 'DataStax Astra DB'], isNew: false },

  // 직원 에이전트
  { id: 'biz-emp-1', company: 'Allegis Group', industry: 'business_services', agentType: 'employee_agent', summary: 'AI 모델로 후보자 프로필 업데이트, 직무 설명서 생성, 채용 담당자-후보자 상호작용 분석 자동화', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'biz-emp-2', company: 'Altumatim', industry: 'business_services', agentType: 'employee_agent', summary: 'Vertex AI의 Gemini로 eDiscovery를 위해 수백만 개의 문서 분석, 프로세스를 몇 달에서 몇 시간으로 단축', technologies: ['Vertex AI', 'Gemini'], metrics: '정확도 90% 이상', isNew: true },
  { id: 'biz-emp-3', company: 'Anara', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Cloud 인프라, AI Studio, Cloud Functions로 과학 문서를 찾고 이해하는 생성형 AI 연구 비서', technologies: ['Google Cloud', 'AI Studio', 'Cloud Functions'], isNew: true },
  { id: 'biz-emp-4', company: 'BCG', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Cloud로 보험 어드바이저의 효과와 영향을 향상시키는 영업 최적화 도구 제공', technologies: ['Google Cloud'], isNew: false },
  { id: 'biz-emp-5', company: 'Beyond', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini가 포함된 Google Workspace로 프로젝트 킥오프 시간을 몇 달에서 몇 주로, RFI 응답 시간을 며칠에서 몇 분으로 단축', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'biz-emp-6', company: 'Cintas', industry: 'business_services', agentType: 'employee_agent', summary: 'Vertex AI Search로 고객 서비스 및 영업 팀이 핵심 정보를 쉽게 찾을 수 있는 내부 지식 센터 개발', technologies: ['Vertex AI Search'], isNew: false },
  { id: 'biz-emp-7', company: 'Croud', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 심층 연구, 데이터 분석, 연구, 계획, 전략 및 메모 작성 작업 수행', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'biz-emp-8', company: 'Dun & Bradstreet', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini로 이메일 생성 도구를 구축하여 맞춤화된 개인화된 커뮤니케이션 작성', technologies: ['Gemini'], isNew: false },
  { id: 'biz-emp-9', company: 'Cognizant', industry: 'business_services', agentType: 'employee_agent', summary: 'Vertex AI와 Gemini로 법무 팀이 계약서 초안 작성, 리스크 점수 할당, 권장 사항 제공하는 AI 에이전트', technologies: ['Vertex AI', 'Gemini'], isNew: false },
  { id: 'biz-emp-10', company: 'Finnit', industry: 'business_services', agentType: 'employee_agent', summary: '기업 재무 팀을 위한 AI 자동화 솔루션으로 회계 절차 시간 90% 단축', technologies: ['Google Cloud AI'], metrics: '회계 절차 시간 90% 단축', isNew: false },
  { id: 'biz-emp-11', company: 'Flashpoint', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Workspace로 효율성과 생산성 향상, 직원 만족도 증가', technologies: ['Google Workspace'], isNew: false },
  { id: 'biz-emp-12', company: 'Fluna', industry: 'business_services', agentType: 'employee_agent', summary: 'Vertex AI, Document AI, Gemini 1.5 Pro로 법적 계약서의 분석 및 초안 작성 자동화', technologies: ['Vertex AI', 'Document AI', 'Gemini 1.5 Pro'], metrics: '데이터 추출 정확도 92%', isNew: true },
  { id: 'biz-emp-13', company: 'Freshfields', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini로 법적 검토 및 실사를 향상시키는 Dynamic Due Diligence 도구 구동', technologies: ['Gemini'], isNew: true },
  { id: 'biz-emp-14', company: 'Freshfields', industry: 'business_services', agentType: 'employee_agent', summary: 'NotebookLM으로 대량의 정보를 빠르게 합성하고 새로운 인사이트 발견', technologies: ['NotebookLM'], isNew: true },
  { id: 'biz-emp-15', company: 'Gelato', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini 모델로 긴 부동산 문서에서 핵심 정보 추출 및 판매 콘텐츠 생성', technologies: ['Gemini'], metrics: '출력 정확도 95%→99.9%, 콘텐츠 생성 시간 4시간→10초', isNew: true },
  { id: 'biz-emp-16', company: 'Harvey', industry: 'business_services', agentType: 'employee_agent', summary: 'Vertex AI의 Gemini 2.5 Pro로 복잡한 문서 검토를 자동화하는 법률 AI', technologies: ['Vertex AI', 'Gemini 2.5 Pro'], isNew: true },
  { id: 'biz-emp-17', company: 'Inspira', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini, Vertex AI, BigQuery로 법률 문서 검색, 분석 및 초안 작성 자동화', technologies: ['Gemini', 'Vertex AI', 'BigQuery'], metrics: '워크플로 시간 80% 단축', isNew: true },
  { id: 'biz-emp-18', company: 'Instalily', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini 2.5와 Vertex AI로 영업, 서비스 및 운영을 혁신하는 InstaWorkers', technologies: ['Gemini 2.5', 'Vertex AI'], metrics: '진단 시간 15분→10초, 서비스 비용 98% 절감', isNew: true },
  { id: 'biz-emp-19', company: 'Joe the Architect', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini in Gmail로 긴 이메일 체인을 따라잡아 고객 니즈 추적', technologies: ['Gemini', 'Gmail'], isNew: false },
  { id: 'biz-emp-20', company: 'KPMG', industry: 'business_services', agentType: 'employee_agent', summary: 'KPMG Law 법무법인에 Google AI 구축 및 Agentspace로 직장 운영 향상', technologies: ['Google AI', 'Agentspace'], isNew: false },
  { id: 'biz-emp-21', company: 'L+R', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 성과와 정밀도 향상, 워크플로 간소화', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'biz-emp-22', company: 'Markups.ai', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini 2.5 Pro로 며칠 걸리던 법적 검토를 몇 초 만에 자동화하는 AI 계약 협상 에이전트', technologies: ['Gemini 2.5 Pro'], isNew: true },
  { id: 'biz-emp-23', company: 'MAS', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini의 도움말 쓰기 및 메모 작성 기능으로 창의적인 워크플로에서 더 빠르게 반복', technologies: ['Gemini'], isNew: true },
  { id: 'biz-emp-24', company: 'MERGE', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini로 회의 요약 및 실행 항목 생성, Google Docs에서 실시간 협업', technologies: ['Gemini', 'Google Docs'], metrics: '처리 시간 33% 향상', isNew: true },
  { id: 'biz-emp-25', company: 'Monks', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Gemini로 개인화된 광고 캠페인 구축', technologies: ['Gemini'], metrics: '클릭률 80% 향상, 구매당 비용 31% 향상, 투자 시간 50% 절감, 비용 97% 절감', isNew: false },
  { id: 'biz-emp-26', company: 'ObraJobs', industry: 'business_services', agentType: 'employee_agent', summary: 'Vertex AI로 후보자 매칭 및 개인화된 채용 추천 구동', technologies: ['Vertex AI', 'Cloud Storage', 'Cloud Run', 'Firestore'], isNew: true },
  { id: 'biz-emp-27', company: 'Own Your Brand', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 등록 관리 혁신 및 개인화된 이메일 빠르게 작성', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'biz-emp-28', company: 'Provenbase', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Cloud AI로 혁신적인 인재를 위한 Deep Search 기능 구동', technologies: ['Google Cloud AI'], isNew: true },
  { id: 'biz-emp-29', company: 'Randstad', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini for Workspace로 업무 문화 혁신, 병가 일수 두 자릿수 감소', technologies: ['Gemini', 'Google Workspace'], isNew: false },
  { id: 'biz-emp-30', company: 'Sonata Design', industry: 'business_services', agentType: 'employee_agent', summary: 'NotebookLM으로 제품 사양 및 기술 세부 정보의 중앙 집중식 데이터베이스 생성', technologies: ['NotebookLM'], isNew: true },
  { id: 'biz-emp-31', company: 'Square Management', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 고객 요구에 가장 적합한 컨설턴트 식별 및 업무 방법 최적화', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'biz-emp-32', company: 'Story', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Cloud의 web3 서비스 및 인프라와 협력하여 플랫폼 개발자에게 새로운 기능 제공', technologies: ['Google Cloud', 'web3'], isNew: true },
  { id: 'biz-emp-33', company: 'Sulamérica', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Workspace에서 Gemini로 1,250명 직원에게 운영 효율성, 보안 및 생산성 향상', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'biz-emp-34', company: 'Transcom', industry: 'business_services', agentType: 'employee_agent', summary: 'NotebookLM으로 고객 연구 및 입찰 프로세스 단순화', technologies: ['NotebookLM'], isNew: true },
  { id: 'biz-emp-35', company: 'Transcom', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 에이전트 교육 속도 향상 및 창의적 솔루션 발견', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'biz-emp-36', company: 'Upwork', industry: 'business_services', agentType: 'employee_agent', summary: 'Vertex AI Text to Speech API로 더 빠르고 정확한 인재 매칭 및 채용 효율성 제공', technologies: ['Vertex AI Text to Speech'], isNew: true },
  { id: 'biz-emp-37', company: 'Wotter', industry: 'business_services', agentType: 'employee_agent', summary: 'Gemini 기반 스마트 어시스턴트로 직원 감정에 대한 실시간 인사이트 제공', technologies: ['Gemini', 'Google Cloud'], isNew: true },
  { id: 'biz-emp-38', company: 'Zoi', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 실시간 번역 제공 및 글로벌 팀 간 원활한 커뮤니케이션', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'biz-emp-39', company: 'UKG', industry: 'business_services', agentType: 'employee_agent', summary: 'Google Cloud로 구축된 UKG Bryte AI로 HR 관리자와 인력 관리자가 회사 정책 등 정보 요청', technologies: ['Google Cloud'], isNew: false },

  // 크리에이티브 에이전트
  { id: 'biz-cre-1', company: 'AdVon Commerce', industry: 'business_services', agentType: 'creative_agent', summary: 'Gemini와 Veo로 93,673개 제품 카탈로그를 한 달 이내에 처리하고 라이프스타일 비디오 생성', technologies: ['Gemini', 'Veo'], metrics: '검색 순위 30% 증가, 일일 매출 67% 증가, 60일 만에 1,700만 달러 수익', isNew: true },
  { id: 'biz-cre-2', company: 'Agoda', industry: 'business_services', agentType: 'creative_agent', summary: 'Vertex AI에서 Imagen과 Veo로 여행 목적지의 고유한 이미지 및 비디오 생성 테스트', technologies: ['Vertex AI', 'Imagen', 'Veo'], isNew: false },
  { id: 'biz-cre-3', company: 'Comeen', industry: 'business_services', agentType: 'creative_agent', summary: 'Gemini AI로 한 번의 클릭으로 40개 언어로 직장 비디오의 다국어 자막 생성', technologies: ['Gemini AI'], isNew: true },
  { id: 'biz-cre-4', company: 'Dentsu Digital', industry: 'business_services', agentType: 'creative_agent', summary: 'Vertex AI와 PaLM 2로 광고 생성, 고객 서비스 챗봇, 영업 지원 ∞AI 서비스 구축', technologies: ['Vertex AI', 'PaLM 2'], metrics: '2년 걸릴 시스템을 6개월 만에 출시', isNew: true },
  { id: 'biz-cre-5', company: 'Hotmob', industry: 'business_services', agentType: 'creative_agent', summary: 'Vertex AI의 Gemini 모델로 개인화된 마케팅 텍스트와 이미지 생성하는 Caterpillar AI 구동', technologies: ['Vertex AI', 'Gemini'], metrics: '생산성 33% 향상, 관리 업무량 50% 감소', isNew: true },
  { id: 'biz-cre-6', company: 'MAS', industry: 'business_services', agentType: 'creative_agent', summary: 'Gemini를 창의적 가속기 및 아이디어 생성기로 사용하여 아이디어를 다듬고 컨셉 구현', technologies: ['Gemini'], isNew: true },
  { id: 'biz-cre-7', company: 'MERGE', industry: 'business_services', agentType: 'creative_agent', summary: 'Google Workspace에 통합된 Gemini로 AI 기반 템플릿 생성', technologies: ['Google Workspace', 'Gemini'], metrics: '89% 지속적 사용률, 처리 시간 33% 향상', isNew: true },
  { id: 'biz-cre-8', company: 'Monday.com', industry: 'business_services', agentType: 'creative_agent', summary: 'Veo를 활용하여 교육 비디오, 소셜 콘텐츠 및 내부 커뮤니케이션 훨씬 짧은 시간 내에 제작', technologies: ['Veo'], isNew: true },
  { id: 'biz-cre-9', company: 'Quom', industry: 'business_services', agentType: 'creative_agent', summary: 'AI 기반 대화형 에이전트로 사용자 및 고객 지원 최적화 및 개인화', technologies: ['AI'], isNew: false },
  { id: 'biz-cre-10', company: 'Salesrun', industry: 'business_services', agentType: 'creative_agent', summary: 'Google Cloud 생성형 AI로 구매 습관 분석하여 소매 고객의 현금 흐름 최적화', technologies: ['Google Cloud 생성형 AI'], isNew: false },
  { id: 'biz-cre-11', company: 'Thoughtworks', industry: 'business_services', agentType: 'creative_agent', summary: 'Gemini가 포함된 Google Workspace로 내부 및 외부 커뮤니케이션 개선', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'biz-cre-12', company: 'WITHIN', industry: 'business_services', agentType: 'creative_agent', summary: 'Google Workspace의 Gemini로 확장 가능한 크리에이티브 프로덕션, 빠른 아이디어 발상 및 효율적인 데이터 분석', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'biz-cre-13', company: 'Yazi', industry: 'business_services', agentType: 'creative_agent', summary: 'Gemini가 포함된 Google Workspace로 마케팅 노력 가속화 및 더 빠르게 제품 출시', technologies: ['Google Workspace', 'Gemini'], isNew: false },

  // 코드 에이전트
  { id: 'biz-code-1', company: 'Capgemini', industry: 'business_services', agentType: 'code_agent', summary: 'Code Assist로 소프트웨어 엔지니어링 생산성, 품질, 보안 및 개발자 경험 개선', technologies: ['Code Assist'], isNew: false },
  { id: 'biz-code-2', company: 'TCS', industry: 'business_services', agentType: 'code_agent', summary: 'Google Cloud에서 기업 지식으로 맥락화된 페르소나 기반 AI 에이전트 구축 지원', technologies: ['Google Cloud'], isNew: false },

  // 데이터 에이전트
  { id: 'biz-data-1', company: 'Colombian Security Council', industry: 'business_services', agentType: 'data_agent', summary: '생성형 AI 기반 챗봇으로 데이터 분석과 화학 비상 관리 프로세스 개선', technologies: ['생성형 AI'], isNew: false },
  { id: 'biz-data-2', company: 'Contraktor', industry: 'business_services', agentType: 'data_agent', summary: 'AI로 계약서 분석 및 검토 시간 최대 75% 단축', technologies: ['AI'], metrics: '분석 및 검토 시간 75% 단축', isNew: false },
  { id: 'biz-data-3', company: 'Croud', industry: 'business_services', agentType: 'data_agent', summary: '맞춤 Gems로 이메일 감정 분석, 복잡한 데이터 분석, 코딩 지원 수행', technologies: ['Gemini', 'Gems'], metrics: '특정 작업에서 4~5배 생산성 향상', isNew: true },
  { id: 'biz-data-4', company: 'Galaxies', industry: 'business_services', agentType: 'data_agent', summary: 'BigQuery, Vertex AI, Cloud Storage로 합성 페르소나를 만들어 48시간 내에 수백 개 프로필로 캠페인 테스트', technologies: ['BigQuery', 'Vertex AI', 'Cloud Storage'], metrics: '직접 연구 비용 85% 절감', isNew: true },
  { id: 'biz-data-5', company: 'Gamuda Berhad', industry: 'business_services', agentType: 'data_agent', summary: 'Gemini 모델과 RAG 프레임워크로 건설 프로젝트 중 더 빠른 정보와 인사이트 제공하는 Bot Unify 개발', technologies: ['Gemini', 'RAG'], isNew: false },
  { id: 'biz-data-6', company: 'Gazelle', industry: 'business_services', agentType: 'data_agent', summary: 'Gemini 모델로 긴 부동산 문서에서 핵심 정보 추출 및 판매 콘텐츠 생성', technologies: ['Gemini'], metrics: '출력 정확도 95%→99.9%, 콘텐츠 생성 시간 4시간→10초', isNew: true },
  { id: 'biz-data-7', company: 'Habi', industry: 'business_services', agentType: 'data_agent', summary: '물리적 및 디지털 문서의 관리 및 검증을 간소화하고 자동화하는 AI 솔루션 구현', technologies: ['AI'], isNew: false },
  { id: 'biz-data-8', company: 'HCLTech', industry: 'business_services', agentType: 'data_agent', summary: 'Vertex AI, Cortex Framework, Manufacturing Data Engine으로 제조 품질 AI 에이전트 출시', technologies: ['Vertex AI', 'Cortex Framework', 'Manufacturing Data Engine'], isNew: false },
  { id: 'biz-data-9', company: 'IPRally', industry: 'business_services', agentType: 'data_agent', summary: '1억 2천만 개 이상의 글로벌 특허 문서에 자연어 처리를 사용하는 맞춤형 ML 플랫폼 구축', technologies: ['자연어 처리', 'ML'], isNew: false },
  { id: 'biz-data-10', company: 'Ipsos', industry: 'business_services', agentType: 'data_agent', summary: 'Gemini 1.5 Pro 및 Flash 모델과 Google Search 그라운딩으로 시장 연구원용 데이터 분석 도구 구축', technologies: ['Gemini 1.5 Pro', 'Gemini 1.5 Flash', 'Google Search'], isNew: false },
  { id: 'biz-data-11', company: 'Juganu', industry: 'business_services', agentType: 'data_agent', summary: 'Google Cloud와 협력하여 매장 자동화 및 디지털 트윈 개발', technologies: ['Google Cloud', '디지털 트윈'], isNew: false },
  { id: 'biz-data-12', company: 'Leads.io', industry: 'business_services', agentType: 'data_agent', summary: 'Vertex AI와 Gemini로 수천 개의 개인화된 마케팅 캠페인 관리 및 리드 자격 심사 자동화', technologies: ['Vertex AI', 'Gemini'], metrics: '신규 인수 기업 데이터 통합 시간 몇 달→며칠', isNew: true },
  { id: 'biz-data-13', company: 'Nowports', industry: 'business_services', agentType: 'data_agent', summary: 'AI로 핵심 운영 정보 분석하여 시장 행동 예측 및 공급망 최적화', technologies: ['AI'], isNew: false },
  { id: 'biz-data-14', company: 'Persol Career', industry: 'business_services', agentType: 'data_agent', summary: 'BigQuery, Cloud Run, Cloud Functions로 70개 이상의 HR 시스템에서 데이터 통합하는 플랫폼 구축', technologies: ['BigQuery', 'Cloud Run', 'Cloud Functions', 'Looker'], metrics: '데이터 수집 시간 몇 주→며칠', isNew: true },
  { id: 'biz-data-15', company: 'Populix', industry: 'business_services', agentType: 'data_agent', summary: 'Google Cloud로 마이그레이션하고 Gemini와 Vertex AI로 설문 조사 생성 및 분석 자동화하는 AI 연구 보조원 구축', technologies: ['Gemini', 'Vertex AI', 'Google Cloud'], metrics: '연구 배포 시간 50% 이상 단축, QA 시간 40% 단축', isNew: true },
  { id: 'biz-data-16', company: 'Precis Digital', industry: 'business_services', agentType: 'data_agent', summary: 'BigQuery와 Cloud Run에서 Alvie 데이터 플랫폼 구축하여 매일 수십만 개 작업 실행, Gemini로 300밀리초 만에 양식 데이터 자동 채움', technologies: ['BigQuery', 'Cloud Run', 'Gemini'], isNew: true },
  { id: 'biz-data-17', company: 'Servicios Orienta', industry: 'business_services', agentType: 'data_agent', summary: 'AI 기반 솔루션으로 대량의 데이터 분석, 결과 해석, 고객 경험 향상 권장 사항 제공', technologies: ['AI'], isNew: false },
  { id: 'biz-data-18', company: 'Sojern', industry: 'business_services', agentType: 'data_agent', summary: 'Vertex AI와 Gemini로 AI 기반 잠재 고객 타겟팅 시스템 구축하여 매일 5억 개 이상 예측 생성', technologies: ['Vertex AI', 'Gemini'], metrics: '잠재 고객 생성 시간 2주→2일 미만, 획득당 비용 20~50% 향상', isNew: true },
  { id: 'biz-data-19', company: 'Wisesight', industry: 'business_services', agentType: 'data_agent', summary: 'Google Cloud의 Gemini로 대량의 소셜 보이스 데이터 분석 및 지능적인 인사이트 제공', technologies: ['Gemini', 'Google Cloud'], metrics: '연구, 인사이트 및 콘텐츠 생성 시간 2일→30분', isNew: true },
  { id: 'biz-data-20', company: 'WITHIN', industry: 'business_services', agentType: 'data_agent', summary: 'NotebookLM으로 퍼스트파티 데이터 기반 인사이트 생성 및 맞춤 Gems로 브랜드 일관성 보장', technologies: ['NotebookLM', 'Gems'], isNew: true },
  { id: 'biz-data-21', company: 'Workday', industry: 'business_services', agentType: 'data_agent', summary: 'Vertex AI Search and Conversation에서 자연어 처리로 데이터 인사이트 접근성 향상', technologies: ['Vertex AI Search', 'Vertex AI Conversation'], isNew: false },
  { id: 'biz-data-22', company: 'XEBO.ai', industry: 'business_services', agentType: 'data_agent', summary: 'Gemini를 플랫폼에 통합하여 대량의 고객 설문 데이터 분석 및 실행 가능한 인사이트 도출', technologies: ['Gemini'], metrics: '전체 생산성 20% 향상, 운영 작업 시간 30% 단축', isNew: true },
  { id: 'biz-data-23', company: 'Zenpli', industry: 'business_services', agentType: 'data_agent', summary: 'Vertex AI의 멀티모달 기능으로 계약서 온보딩 프로세스 90% 빨라지고 비용 50% 절감', technologies: ['Vertex AI', '멀티모달 AI'], metrics: '온보딩 90% 빨라짐, 비용 50% 절감', isNew: false },
  { id: 'biz-data-24', company: 'Zoi', industry: 'business_services', agentType: 'data_agent', summary: 'Gemini로 AI 기반 검색과 문서 생성의 AI 지원으로 데이터 사일로 해체', technologies: ['Gemini'], isNew: true },

  // ================================================================================
  // 금융 서비스 (Financial Services)
  // ================================================================================

  // 고객 에이전트
  { id: 'fin-cust-1', company: 'Albo', industry: 'financial_services', agentType: 'customer_agent', summary: 'Gemini 모델로 24/7 금융 조언, 고객 온보딩 및 지원을 제공하는 Albot AI 챗봇 구동', technologies: ['Gemini'], isNew: true },
  { id: 'fin-cust-2', company: 'Apex Fintech Solutions', industry: 'financial_services', agentType: 'customer_agent', summary: 'BigQuery, Looker, GKE로 금융 인사이트 접근성 향상 및 AI 기반 혁신 기반 마련', technologies: ['BigQuery', 'Looker', 'GKE'], isNew: false },
  { id: 'fin-cust-3', company: 'Banco Covalto', industry: 'financial_services', agentType: 'customer_agent', summary: '생성형 AI로 프로세스 간소화하고 고객 경험 향상', technologies: ['생성형 AI'], metrics: '신용 승인 응답 시간 90% 이상 단축', isNew: false },
  { id: 'fin-cust-4', company: 'Banco Macro', industry: 'financial_services', agentType: 'customer_agent', summary: 'BigQuery, Vertex AI, Gemini로 고객 서비스용 대화형 AI 어시스턴트 구동', technologies: ['BigQuery', 'Vertex AI', 'Gemini'], isNew: true },
  { id: 'fin-cust-5', company: 'Bud Financial', industry: 'financial_services', agentType: 'customer_agent', summary: 'Gemini 모델로 구동되는 Financial LLM으로 개인화된 답변 및 은행 업무 자동화', technologies: ['Gemini'], isNew: false },
  { id: 'fin-cust-6', company: 'Commerzbank', industry: 'financial_services', agentType: 'customer_agent', summary: 'Customer Engagement Suite의 Gemini로 챗봇 Bene를 향상시켜 200만 건 이상 채팅 처리, 70% 문의 해결', technologies: ['Customer Engagement Suite', 'Gemini'], metrics: '200만 건 채팅, 70% 해결률', isNew: true },
  { id: 'fin-cust-7', company: 'Contabilizei', industry: 'financial_services', agentType: 'customer_agent', summary: 'Vertex AI로 구동되는 The Concierge로 고객 서비스 개선', technologies: ['Vertex AI', 'Vertex AI Search', 'Model Garden'], isNew: false },
  { id: 'fin-cust-8', company: 'Definity', industry: 'financial_services', agentType: 'customer_agent', summary: 'Google AI로 통화 요약, 발신자 인증 자동화, 고객 감정 분석 및 실시간 권장 제공', technologies: ['Google Cloud AI'], metrics: '통화 처리 시간 20% 감소, 생산성 15% 향상', isNew: true },
  { id: 'fin-cust-9', company: 'Discover Financial', industry: 'financial_services', agentType: 'customer_agent', summary: '생성형 AI로 구동되는 Discover Virtual Assistant로 고객 직접 지원 및 서비스 상담원에게 추가 정보 제공', technologies: ['생성형 AI'], isNew: false },
  { id: 'fin-cust-10', company: 'Figure', industry: 'financial_services', agentType: 'customer_agent', summary: 'Gemini 멀티모달 모델로 대출 경험을 간소화하는 AI 기반 챗봇 생성', technologies: ['Gemini', '멀티모달 AI'], isNew: false },
  { id: 'fin-cust-11', company: 'Fundwell', industry: 'financial_services', agentType: 'customer_agent', summary: 'Google Cloud AI로 재무 건전성 분석하여 기업을 이상적인 자금 조달 솔루션과 매칭', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'fin-cust-12', company: 'ING Bank', industry: 'financial_services', agentType: 'customer_agent', summary: '생성형 AI 챗봇으로 직원이 셀프 서비스 기능을 향상시키고 고객 쿼리 답변 품질 개선', technologies: ['생성형 AI'], isNew: false },
  { id: 'fin-cust-13', company: 'Loft', industry: 'financial_services', agentType: 'customer_agent', summary: 'BigQuery와 Gemini 2.0 Flash로 WhatsApp 통해 주당 900건의 모기지 시뮬레이션 가능', technologies: ['BigQuery', 'Gemini 2.0 Flash'], metrics: '비용 40% 절감, 고객 지원 티켓 15% 감소', isNew: true },
  { id: 'fin-cust-14', company: 'OneUnited Bank', industry: 'financial_services', agentType: 'customer_agent', summary: 'Contact Center AI와 Dialogflow로 고객 지원 워크플로 자동화', technologies: ['Contact Center AI', 'Dialogflow'], metrics: '통화 해결 시간 6분→4분, 상담원 온보딩 4~6주→1~2주', isNew: true },
  { id: 'fin-cust-15', company: 'Safe Rate', industry: 'financial_services', agentType: 'customer_agent', summary: 'Gemini 모델로 AI 모기지 에이전트 생성하여 30초 이내에 개인화된 견적 제공', technologies: ['Gemini'], metrics: '30초 이내 개인화된 견적', isNew: false },
  { id: 'fin-cust-16', company: 'Scotiabank', industry: 'financial_services', agentType: 'customer_agent', summary: 'Gemini와 Vertex AI로 개인화된 예측 가능한 은행 경험과 수상 경력 챗봇 구동', technologies: ['Gemini', 'Vertex AI'], isNew: false },
  { id: 'fin-cust-17', company: 'SEB', industry: 'financial_services', agentType: 'customer_agent', summary: 'Google Cloud로 자산 관리 부문 AI 에이전트 개발, 통화 요약 및 제안 응답 생성', technologies: ['Google Cloud'], metrics: '효율성 15% 향상', isNew: false },
  { id: 'fin-cust-18', company: 'United Wholesale Mortgage', industry: 'financial_services', agentType: 'customer_agent', summary: 'Vertex AI, Gemini, BigQuery로 모기지 경험 혁신', technologies: ['Vertex AI', 'Gemini', 'BigQuery'], metrics: '9개월 만에 언더라이터 생산성 두 배 이상', isNew: false },
  { id: 'fin-cust-19', company: 'Wayfair', industry: 'financial_services', agentType: 'customer_agent', summary: '제품 카탈로그 강화 자동화로 제품 속성 5배 더 빠르게 업데이트', technologies: ['AI'], metrics: '제품 속성 업데이트 5배 빠름', isNew: false },

  // 직원 에이전트 (금융)
  { id: 'fin-emp-1', company: 'ATB Financial', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini가 포함된 Google Workspace로 5,000명 이상 팀원에게 일상 작업 자동화 및 효과적 협업', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'fin-emp-2', company: 'Banco BV', industry: 'financial_services', agentType: 'employee_agent', summary: 'Agentspace로 여러 중요 시스템에서 연구, 지원 및 운영을 위해 생성형 AI 기술 사용', technologies: ['Agentspace'], isNew: false },
  { id: 'fin-emp-3', company: 'Banco Rendimento', industry: 'financial_services', agentType: 'employee_agent', summary: 'Vertex AI로 WhatsApp을 통해 국제 송금을 보낼 수 있는 24/7 서비스 생성', technologies: ['Vertex AI'], isNew: false },
  { id: 'fin-emp-4', company: 'Banestes', industry: 'financial_services', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 대차대조표 검토 단순화하여 신용 분석 가속화', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'fin-emp-5', company: 'Bank of New York Mellon', industry: 'financial_services', agentType: 'employee_agent', summary: '직원이 관련 정보와 질문에 대한 답변을 찾는 데 도움이 되는 가상 비서 구축', technologies: ['가상 비서'], isNew: false },
  { id: 'fin-emp-6', company: 'BBVA', industry: 'financial_services', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 요약, 초안 작성, 정보 찾기 및 전문 문서 생성', technologies: ['Google Workspace', 'Gemini'], metrics: '직원 주당 약 3시간 절약', isNew: true },
  { id: 'fin-emp-7', company: 'BBVA', industry: 'financial_services', agentType: 'employee_agent', summary: 'NotebookLM으로 연구 작업, 오디오 개요 생성 및 보고서 작성', technologies: ['NotebookLM'], isNew: true },
  { id: 'fin-emp-8', company: 'Chiba Bank', industry: 'financial_services', agentType: 'employee_agent', summary: 'Google Cloud Advanced Solutions Lab과 파트너십으로 직원 AI/ML 교육 및 Gemini Pro 기반 챗봇 프로토타입 구축', technologies: ['Gemini Pro'], isNew: true },
  { id: 'fin-emp-9', company: 'Citi', industry: 'financial_services', agentType: 'employee_agent', summary: 'Vertex AI로 개발자 툴킷, 문서 처리, 고객 서비스 팀 권한 부여 기능 제공', technologies: ['Vertex AI'], isNew: false },
  { id: 'fin-emp-10', company: 'Commerzbank', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini 1.5 Pro로 고객 통화 문서화 자동화하여 재무 어드바이저가 고객 관계에 집중', technologies: ['Gemini 1.5 Pro'], isNew: false },
  { id: 'fin-emp-11', company: 'DBS', industry: 'financial_services', agentType: 'employee_agent', summary: 'Customer Engagement Suite로 고객 통화 처리 시간 20% 단축', technologies: ['Customer Engagement Suite'], metrics: '통화 처리 시간 20% 단축', isNew: false },
  { id: 'fin-emp-12', company: 'Deutsche Bank', industry: 'financial_services', agentType: 'employee_agent', summary: 'AI 기반 연구 도구 DB Lumina로 재무 분석가가 연구 보고서와 노트를 몇 분 만에 생성', technologies: ['AI'], isNew: false },
  { id: 'fin-emp-13', company: 'Discover Financial', industry: 'financial_services', agentType: 'employee_agent', summary: '10,000명의 컨택 센터 담당자가 상세한 정책 및 절차 전반에 걸쳐 정보 검색 및 종합', technologies: ['AI'], isNew: false },
  { id: 'fin-emp-14', company: 'Equifax', industry: 'financial_services', agentType: 'employee_agent', summary: 'Google Meet의 Gemini 노트 작성 기능으로 통화에서 녹취록, 요약 및 실행 항목 생성', technologies: ['Google Meet', 'Gemini'], metrics: '참가자 97%가 생산성 이점 경험', isNew: true },
  { id: 'fin-emp-15', company: 'Equifax', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini로 헬프 데스크 담당자가 서비스 개선 방법 결정을 위해 데이터 분석', technologies: ['Gemini'], metrics: '90%가 작업 품질과 양 증가, 하루 1시간 이상 절약', isNew: true },
  { id: 'fin-emp-16', company: 'FinQuery', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 브레인스토밍, 이메일 20% 더 빠른 초안 작성, 프로젝트 계획 관리', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'fin-emp-17', company: 'Five Sigma', industry: 'financial_services', agentType: 'employee_agent', summary: 'AI 엔진으로 인간 클레임 처리자가 복잡한 의사 결정 및 공감적 고객 서비스에 집중', technologies: ['AI'], metrics: '오류 80% 감소, 생산성 25% 증가, 사이클 처리 시간 10% 단축', isNew: false },
  { id: 'fin-emp-18', company: 'Generali', industry: 'financial_services', agentType: 'employee_agent', summary: 'Vertex AI로 영업 담당자가 자연어 쿼리를 통해 정책 정보에 즉시 액세스', technologies: ['Vertex AI'], isNew: false },
  { id: 'fin-emp-19', company: 'Hang Seng Bank', industry: 'financial_services', agentType: 'employee_agent', summary: 'Vertex AI로 컨택 센터 담당자가 AI 기반 검색으로 수백만 문서에서 정보 검색', technologies: ['Vertex AI'], isNew: true },
  { id: 'fin-emp-20', company: 'HDFC ERGO', industry: 'financial_services', agentType: 'employee_agent', summary: 'Vertex AI로 보험 에이전트에게 컨텍스트에 민감한 넛지 제공하여 고객 온보딩 경험 촉진', technologies: ['Vertex AI'], isNew: false },
  { id: 'fin-emp-21', company: 'HDFC ERGO', industry: 'financial_services', agentType: 'employee_agent', summary: 'BigQuery에서 Vertex AI로 고급 데이터 인사이트를 실행하여 고도로 개인화된 제안 추진', technologies: ['Vertex AI', 'BigQuery'], isNew: false },
  { id: 'fin-emp-22', company: 'Hiscox', industry: 'financial_services', agentType: 'employee_agent', summary: 'BigQuery와 Vertex AI로 AI 강화 리드 언더라이팅 모델 생성, 견적 자동화', technologies: ['BigQuery', 'Vertex AI'], metrics: '복잡한 리스크 견적 3일→몇 분', isNew: false },
  { id: 'fin-emp-23', company: 'Loadsure', industry: 'financial_services', agentType: 'employee_agent', summary: 'Document AI와 Gemini AI로 보험 클레임 처리 자동화 및 데이터 추출/분류', technologies: ['Document AI', 'Gemini'], isNew: false },
  { id: 'fin-emp-24', company: 'Macquarie Bank', industry: 'financial_services', agentType: 'employee_agent', summary: 'Google Cloud AI로 효율적인 사기 보호 및 디지털 셀프 서비스 기능 지원', technologies: ['Google Cloud AI'], metrics: '셀프 서비스 안내 38% 증가, 오탐 경고 40% 감소', isNew: false },
  { id: 'fin-emp-25', company: 'Multimodal', industry: 'financial_services', agentType: 'employee_agent', summary: '멀티모달 AI 에이전트로 복잡한 금융 서비스 워크플로 자동화', technologies: ['Vertex AI', '멀티모달 AI'], isNew: false },
  { id: 'fin-emp-26', company: 'OSTTRA', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini로 제안서 작성 및 인터뷰 질문 생성 등 작업 자동화', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'fin-emp-27', company: 'Pinnacol Assurance', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini로 고객 인터뷰용 질문 작성 및 보험 클레임 분석 가속화', technologies: ['Gemini'], metrics: '직원 96%가 시간 절약 보고', isNew: false },
  { id: 'fin-emp-28', company: 'Plutos ONE', industry: 'financial_services', agentType: 'employee_agent', summary: 'Google Cloud로 마이그레이션하여 규제 준수 요구 사항 충족', technologies: ['Google Cloud'], metrics: '감사 준비 시간 40% 감소, 보안 사고 대응 시간 50% 이상 단축, 운영 비용 25% 절감', isNew: true },
  { id: 'fin-emp-29', company: 'Qualia Clear', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini 2.5 Flash & Pro 및 Google Agent Development Kit로 수동 타이틀 및 에스크로 워크플로 자동화', technologies: ['Gemini 2.5 Flash', 'Gemini 2.5 Pro', 'Agent Development Kit'], isNew: true },
  { id: 'fin-emp-30', company: 'Questrade Financial Group', industry: 'financial_services', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 프레젠테이션 노트 생성, 아이디어 브레인스토밍, 연구 수행, 문서 요약', technologies: ['Google Workspace', 'Gemini'], metrics: '블로그 게시물 작성 2일→몇 시간', isNew: true },
  { id: 'fin-emp-31', company: 'Questrade Financial Group', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini로 Google Drive 파일에서 정보 종합, NotebookLM으로 보고서 오디오 버전 생성', technologies: ['Gemini', 'NotebookLM'], isNew: true },
  { id: 'fin-emp-32', company: 'Rogo', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini 2.5 Flash와 Vertex AI로 슬라이드 덱 구축, 회사 프로필 생성, 투자 메모 초안 작성 자동화', technologies: ['Gemini 2.5 Flash', 'Vertex AI'], metrics: '환각률 34.1%→3.9%', isNew: true },
  { id: 'fin-emp-33', company: 'ROSHN Group', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini 1.5 Pro와 Flash로 내부 데이터 소스에서 인사이트 생성하는 RoshnAI 내부 어시스턴트 구축', technologies: ['Gemini 1.5 Pro', 'Gemini 1.5 Flash'], isNew: false },
  { id: 'fin-emp-34', company: 'Seguros Bolivar', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini로 파트너 회사와 보험 상품 설계 시 협업 간소화', technologies: ['Google Workspace', 'Gemini'], metrics: '비용 20~30% 절감', isNew: true },
  { id: 'fin-emp-35', company: 'Stacks', industry: 'financial_services', agentType: 'employee_agent', summary: 'Vertex AI, Gemini, GKE Autopilot, Cloud SQL, Cloud Spanner로 월간 재무 마감 작업 자동화 플랫폼 구축', technologies: ['Vertex AI', 'Gemini', 'GKE Autopilot', 'Cloud SQL', 'Cloud Spanner', 'Gemini Code Assist'], isNew: true },
  { id: 'fin-emp-36', company: 'Stream', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini 모델로 급여일, 잔액 등에 대한 내부 고객 문의의 80% 이상 처리', technologies: ['Gemini'], metrics: '내부 문의 80% 이상 처리', isNew: true },
  { id: 'fin-emp-37', company: 'Symphony', industry: 'financial_services', agentType: 'employee_agent', summary: 'Vertex AI로 금융 및 거래 팀이 여러 자산 클래스에서 협업 지원', technologies: ['Vertex AI'], isNew: false },
  { id: 'fin-emp-38', company: 'Tributei', industry: 'financial_services', agentType: 'employee_agent', summary: 'ML 리소스로 세금 평가 및 관리 작업 단순화', technologies: ['ML'], metrics: '성능 400% 향상, 19,000개 회사 지원, 1,500만 BRL 세금 과다 청구 발견', isNew: false },
  { id: 'fin-emp-39', company: 'Trumble Insurance Agency', industry: 'financial_services', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 효율성, 생산성 및 창의성 향상', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'fin-emp-40', company: 'wealth.com', industry: 'financial_services', agentType: 'employee_agent', summary: 'AI 기반 Ester 채팅 에이전트로 복잡한 계획 문서에서 정보 추출', technologies: ['AI'], isNew: false },
  { id: 'fin-emp-41', company: 'Wells Fargo', industry: 'financial_services', agentType: 'employee_agent', summary: 'Agentspace로 내부 운영 간소화, 의사 결정 시간 단축, 고객 서비스 혁신', technologies: ['Agentspace'], isNew: false },
  { id: 'fin-emp-42', company: 'Wells Fargo', industry: 'financial_services', agentType: 'employee_agent', summary: 'Apigee API Management로 작업별 재사용 가능한 API 구축하여 생성형 AI 채택 확장', technologies: ['Apigee', 'RAG'], metrics: '쿼리 해결 워크플로 약 20% 감소', isNew: true },
  { id: 'fin-emp-43', company: 'Worldline', industry: 'financial_services', agentType: 'employee_agent', summary: 'Security Command Center와 Cloud Identity로 북미 결제 플랫폼 인프라를 Google Cloud로 마이그레이션', technologies: ['Security Command Center', 'Cloud Identity'], metrics: '개발 주기 분기별→지속적 배포', isNew: true },

  // 크리에이티브 에이전트 (금융)
  { id: 'fin-cre-1', company: 'ATB Financial', industry: 'financial_services', agentType: 'creative_agent', summary: 'Gemini로 마케팅 팀이 주제 전문가 없이 새로운 캠페인 브레인스토밍', technologies: ['Gemini'], metrics: '프로젝트 타임라인 최대 2주 단축, 40%가 매일 사용, 주당 약 2시간 절약', isNew: true },
  { id: 'fin-cre-2', company: 'Chiba Bank', industry: 'financial_services', agentType: 'creative_agent', summary: 'Google Cloud Advanced Solutions Lab과 파트너십으로 텍스트 및 이미지 프롬프트에서 광고 크리에이티브 콘텐츠 생성 AI 시스템 프로토타입 개발', technologies: ['Google Cloud AI'], isNew: true },
  { id: 'fin-cre-3', company: 'eToro', industry: 'financial_services', agentType: 'creative_agent', summary: 'Veo로 획기적인 마케팅 접근 방식 개척, 글로벌 시장 전반에 문화별 비디오 콘텐츠 신속 생성', technologies: ['Veo'], isNew: true },

  // 코드 에이전트 (금융)
  { id: 'fin-code-1', company: 'CME Group', industry: 'financial_services', agentType: 'code_agent', summary: 'Gemini Code Assist로 대부분의 개발자가 월 최소 10.5시간 생산성 향상', technologies: ['Gemini Code Assist'], metrics: '월 최소 10.5시간 생산성 향상', isNew: false },
  { id: 'fin-code-2', company: 'Commerzbank', industry: 'financial_services', agentType: 'code_agent', summary: 'Code Assist의 강력한 보안 및 규정 준수 기능으로 개발자 효율성 향상', technologies: ['Code Assist'], isNew: false },
  { id: 'fin-code-3', company: 'Questrade Financial Group', industry: 'financial_services', agentType: 'code_agent', summary: 'AppSheet와 Gemini로 기술 경험이 적은 사용자도 지능형 애플리케이션 생성', technologies: ['AppSheet', 'Gemini'], isNew: true },
  { id: 'fin-code-4', company: 'Regnology', industry: 'financial_services', agentType: 'code_agent', summary: 'Gemini 1.5 Pro로 Ticket-to-Code Writer 도구 구축하여 버그 티켓을 실행 가능한 코드로 자동 변환', technologies: ['Gemini 1.5 Pro'], isNew: false },
  { id: 'fin-code-5', company: 'ROSHN Group', industry: 'financial_services', agentType: 'code_agent', summary: 'Gemini Code Assist와 Cloud Assist로 부동산 쇼핑 웹사이트 개발 생산성 향상', technologies: ['Gemini Code Assist', 'Cloud Assist'], metrics: '45,000명 신규 사용자, 9,400건 디지털 구매', isNew: false },

  // 보안 에이전트 (금융)
  { id: 'fin-sec-1', company: 'Airwallex', industry: 'financial_services', agentType: 'security_agent', summary: 'Vertex AI, GKE, GitLab으로 실시간 사기 탐지 및 관리', technologies: ['Vertex AI', 'GKE', 'GitLab'], isNew: false },
  { id: 'fin-sec-2', company: 'Apex Fintech Services', industry: 'financial_services', agentType: 'security_agent', summary: 'Gemini in Security로 복잡한 위협 탐지 작성을 몇 시간에서 몇 초로 가속화', technologies: ['Gemini in Security'], isNew: false },
  { id: 'fin-sec-3', company: 'BBVA', industry: 'financial_services', agentType: 'security_agent', summary: 'Google SecOps의 AI로 더 높은 정확도, 속도 및 규모로 보안 위협 탐지, 조사 및 대응', technologies: ['Google SecOps'], isNew: false },
  { id: 'fin-sec-4', company: 'Bradesco', industry: 'financial_services', agentType: 'security_agent', summary: 'Google Cloud AI로 의심스러운 활동 탐지 및 자금 세탁에 더 효과적으로 대응', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'fin-sec-5', company: 'Charles Schwab', industry: 'financial_services', agentType: 'security_agent', summary: '자체 인텔리전스를 AI 기반 Google SecOps에 통합하여 분석가가 작업 우선순위 지정 및 위협 대응', technologies: ['Google SecOps'], isNew: false },
  { id: 'fin-sec-6', company: 'Cloudwalk', industry: 'financial_services', agentType: 'security_agent', summary: 'Google Cloud 인프라와 AI 서비스로 사기 방지 및 신용 분석 모델 구축', technologies: ['Google Cloud AI'], metrics: '2023년 2,230만 달러 수익, 상업 기반 200% 성장', isNew: false },
  { id: 'fin-sec-7', company: 'Credem', industry: 'financial_services', agentType: 'security_agent', summary: 'AI로 온라인 사용자 보안 강화, 맞춤 제품 제공, 소프트웨어 오작동 예측', technologies: ['AI'], isNew: false },
  { id: 'fin-sec-8', company: 'Dun & Bradstreet', industry: 'financial_services', agentType: 'security_agent', summary: 'Security Command Center로 AI 보안 위협 모니터링을 다른 클라우드 보안 발견 사항과 중앙화', technologies: ['Security Command Center'], isNew: false },
  { id: 'fin-sec-9', company: 'Fiserv', industry: 'financial_services', agentType: 'security_agent', summary: 'Gemini in Security Operations 플랫폼으로 위협 요약, 답변 찾기, 보안 이벤트 더 빠르게 탐지/검증/대응', technologies: ['Gemini in Security'], isNew: false },
  { id: 'fin-sec-10', company: 'Resistant AI', industry: 'financial_services', agentType: 'security_agent', summary: 'Google Cloud로 금융 서비스 문서 및 워크플로의 사기 방지 AI 기반 솔루션 구축', technologies: ['Google Cloud'], isNew: false },
  { id: 'fin-sec-11', company: 'Upsure', industry: 'financial_services', agentType: 'security_agent', summary: 'GKE, Vertex AI, Gemini로 자금 세탁 방지 규정 준수 및 리드 스코어링을 위한 통합 데이터 레이크 생성', technologies: ['GKE', 'Vertex AI', 'Gemini'], metrics: '매일 100만 명 이상 사용자 지원, 99.9% 가동 시간', isNew: true },

  // ================================================================================
  // 헬스케어 및 생명과학 (Healthcare & Life Sciences)
  // ================================================================================

  // 고객 에이전트
  { id: 'health-cust-1', company: 'Bennie Health', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Vertex AI로 혁신적인 직원 건강 복리후생 플랫폼 구동', technologies: ['Vertex AI'], isNew: false },
  { id: 'health-cust-2', company: 'CitiusTech', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Vertex AI로 환자를 올바른 전문가와 효율적으로 연결하고 워크플로 자동화', technologies: ['Google Cloud', 'Vertex AI'], isNew: true },
  { id: 'health-cust-3', company: 'Clivi', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Google Cloud 기반 생성형 AI 플랫폼으로 환자의 개인화되고 지속적인 모니터링', technologies: ['Google Cloud', '생성형 AI'], isNew: false },
  { id: 'health-cust-4', company: 'Family Vision Care', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Gmail의 Gemini로 환자 이메일에서 의학 용어를 쉽게 설명', technologies: ['Gemini', 'Gmail'], isNew: false },
  { id: 'health-cust-5', company: 'Fitterfly', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Gemini Flash와 Vertex AI로 식사 로깅 시간 80% 감소, 지원 쿼리 90% 자동화', technologies: ['Gemini Flash', 'Vertex AI'], metrics: '식사 로깅 시간 80% 감소, 지원 쿼리 90% 자동화', isNew: true },
  { id: 'health-cust-6', company: 'Freenome', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'AI로 암 등 생명을 위협하는 질병을 초기에 감지하는 진단 테스트 개발', technologies: ['AI'], isNew: false },
  { id: 'health-cust-7', company: 'Genial Care', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Vertex AI로 자폐 스펙트럼 장애 아동 케어의 세션 기록 품질 개선', technologies: ['Vertex AI'], isNew: false },
  { id: 'health-cust-8', company: 'Manipal Hospitals', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Vertex AI와 Gemini로 환자가 처방전 보고, 약 주문, 배송 준비하는 ePharmacy 앱 구동', technologies: ['Vertex AI', 'Gemini'], metrics: '평균 주문 시간 15분→5분 미만, 정확도 99%', isNew: true },
  { id: 'health-cust-9', company: 'Moody Month', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Cloud Run, Gemini 2.5 Pro, BigQuery로 개인화된 호르몬 예측 제공 AI 플랫폼 구축', technologies: ['Cloud Run', 'Gemini 2.5 Pro', 'BigQuery'], metrics: '월 100,000명 사용자에게 1,000파운드로 서비스', isNew: true },
  { id: 'health-cust-10', company: 'Orby', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'AI와 신경 기술을 결합하여 환자 재활 지원 디지털 두뇌 생성', technologies: ['Google Cloud', 'Gemini'], isNew: false },
  { id: 'health-cust-11', company: 'Pear Health Labs', industry: 'healthcare_lifesciences', agentType: 'customer_agent', summary: 'Vertex AI Voice Generation, BigQuery Vector Search로 만성 질환 예방용 개인화된 개입 개발', technologies: ['Vertex AI Voice Generation', 'BigQuery Vector Search', 'Gemini Code Assist'], isNew: true },

  // 직원 에이전트
  { id: 'health-emp-1', company: 'American Addiction Centers', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 직원 온보딩 3일→12시간 단축', technologies: ['Google Workspace', 'Gemini'], metrics: '온보딩 3일→12시간', isNew: false },
  { id: 'health-emp-2', company: 'Asepha', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: '수동 작업을 자동화하는 완전 자율 AI 약사 구축', technologies: ['AI'], isNew: false },
  { id: 'health-emp-3', company: 'Bayer', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: '데이터 분석, 지능형 검색 및 문서 생성으로 방사선 전문의를 지원하는 방사선 플랫폼 구축', technologies: ['AI'], isNew: false },
  { id: 'health-emp-4', company: 'BenchSci', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: '생성형 AI 솔루션으로 과학자들이 생물학 연구에서 복잡한 연결 이해 및 신약 개발 가속화', technologies: ['생성형 AI'], isNew: false },
  { id: 'health-emp-5', company: 'Better Habits', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini가 포함된 Google Workspace로 커뮤니케이션 계획 개발 시간 단축', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'health-emp-6', company: 'Certify OS', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: '의료 제공자의 자격 인증, 라이선스 및 모니터링 자동화', technologies: ['AI'], isNew: false },
  { id: 'health-emp-7', company: 'Click Therapeutics', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 복잡한 운영 데이터를 실행 가능한 인사이트로 변환', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'health-emp-8', company: 'Cost Plus Drugs', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 Gmail AI 기능만으로 주당 평균 5시간 절약', technologies: ['Google Workspace', 'Gemini'], metrics: '주당 5시간 절약', isNew: false },
  { id: 'health-emp-9', company: 'Covered California', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Document AI로 보험 적용 신청 시 문서화 및 검증 프로세스 일부 자동화', technologies: ['Document AI'], isNew: false },
  { id: 'health-emp-10', company: 'CoVet', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini, Cloud Functions로 수의사 팀이 행정 업무 자동화하고 매일 몇 시간 절약', technologies: ['Gemini', 'Cloud Functions'], isNew: true },
  { id: 'health-emp-11', company: 'Cradle', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud 생성형 AI 기술과 TPU로 신약 발견, 식품 생산, 화학 제조를 위한 단백질 설계', technologies: ['Google Cloud', 'TPU'], isNew: false },
  { id: 'health-emp-12', company: 'CytoReason', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'AI로 인체 질병을 조직별, 세포별로 매핑하는 컴퓨팅 질병 모델 생성', technologies: ['AI'], metrics: '쿼리 시간 2분→10초', isNew: false },
  { id: 'health-emp-13', company: 'Dasa', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'AI로 의사가 검사 결과에서 관련 발견을 더 빨리 감지하도록 지원', technologies: ['AI'], isNew: false },
  { id: 'health-emp-14', company: 'DaVita', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'AI 모델로 의료 기록 분석, 환자 인사이트 발견, 오류 감소', technologies: ['AI'], isNew: false },
  { id: 'health-emp-15', company: 'Digital Diagnostics', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud 보안 인프라로 당뇨 망막병증용 AI 기반 진단 도구 LumineticsCore 확대', technologies: ['Google Cloud'], isNew: true },
  { id: 'health-emp-16', company: 'Elanco', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Elanco.ai 플랫폼에서 Gemini로 2,500개 이상의 비구조화된 정책 및 절차 문서에서 정보 정렬/요약/비교', technologies: ['Gemini'], metrics: '대규모 사이트에서 최대 130만 달러 생산성 영향', isNew: true },
  { id: 'health-emp-17', company: 'Fingerpaint', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'NotebookLM으로 약물 효능 주장에 대한 실시간 품질 보증 및 팩트 체킹 수행', technologies: ['NotebookLM'], isNew: true },
  { id: 'health-emp-18', company: 'Hackensack Meridian Health', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: '대규모 환자 데이터 세트 분석하여 패턴과 트렌드 식별하는 임상 의사 결정 도구 개발', technologies: ['AI'], isNew: false },
  { id: 'health-emp-19', company: 'HCA Healthcare', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'AI 돌봄 제공자 어시스턴트 Cati로 교대 시 돌봄 연속성 보장 및 임상 문서 워크플로 개선', technologies: ['생성형 AI'], isNew: false },
  { id: 'health-emp-20', company: 'Hemominas', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'AI 챗봇으로 기증자 검색 및 예약 간소화, 연간 50만 명 생명 구할 잠재력', technologies: ['AI'], isNew: false },
  { id: 'health-emp-21', company: 'Highmark Health', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud Healthcare Data Engine으로 구동되는 AI 인텔리전스 시스템 구축', technologies: ['Healthcare Data Engine', 'AI'], isNew: false },
  { id: 'health-emp-22', company: 'Infinitus', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini 멀티모달 기능으로 구동되는 AI 에이전트가 다른 솔루션보다 5배 이상 더 많은 대화 완료', technologies: ['Gemini', '멀티모달 AI'], isNew: true },
  { id: 'health-emp-23', company: 'iSono Health', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud AI로 구동되는 Virtual Sonographer 3D 초음파 플랫폼 개발', technologies: ['Google Cloud AI'], isNew: true },
  { id: 'health-emp-24', company: 'Kyoto University Hospital', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Vertex AI의 Gemini와 MedLM으로 임상 의뢰서 및 퇴원 요약서 자동화하는 CocktailAI 개발', technologies: ['Vertex AI', 'Gemini', 'MedLM'], isNew: true },
  { id: 'health-emp-25', company: 'Manipal Hospitals', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gen AI로 간호사 인계 문서 자동화, 포괄적인 보고서 생성', technologies: ['생성형 AI'], metrics: '인계 시간 90분→20분', isNew: true },
  { id: 'health-emp-26', company: 'PwC', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud AI 에이전트 기술로 종양 클리닉이 행정 업무 간소화', technologies: ['Google Cloud'], isNew: false },
  { id: 'health-emp-27', company: 'Sami Saúde', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 반복 작업 자동화, 돌봄 제공자 권한 부여, 케어 접근 가속화', technologies: ['Google Workspace', 'Gemini'], metrics: '생산성 13% 증가, AI 생성 환자 요약 100%', isNew: false },
  { id: 'health-emp-28', company: "Seattle Children's Hospital", industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Pathway Assistance 솔루션으로 소아과 의사가 수천 페이지의 임상 지침 즉시 검색', technologies: ['AI'], isNew: false },
  { id: 'health-emp-29', company: "Seattle Children's", industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'HIPAA 준수 Gemini in Google Workspace로 회의 메모, 이메일 초안, 티켓 생성 속도 향상', technologies: ['Gemini', 'Google Workspace'], isNew: true },
  { id: 'health-emp-30', company: 'SIGNAL IDUNA', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'AI 지식 어시스턴트 Co SI로 건강 보험 문의 빠르고 정확하게 해결', technologies: ['Google Cloud'], metrics: '정보 검색 30% 빨라짐, 에스컬레이션 27%→3%', isNew: true },
  { id: 'health-emp-31', company: 'Straloo', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini로 무릎과 허리 통증 환자에게 적절한 치료 처방 지원하는 디지털 재활 플랫폼', technologies: ['Gemini'], isNew: false },
  { id: 'health-emp-32', company: 'Tali.ai', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Vertex와 Gemini 모델로 환자 상담 중 임상 메모 작성 자동화 및 핵심 인사이트 추출', technologies: ['Vertex AI', 'Gemini'], isNew: true },
  { id: 'health-emp-33', company: 'Think Research', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud 인프라와 분석 도구로 더 효율적인 환자 케어 및 건강 결과 개선', technologies: ['Google Cloud'], isNew: true },
  { id: 'health-emp-34', company: 'Ubie', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud를 통해 Gemini 모델로 의사 보조 도구 구동', technologies: ['Gemini', 'Google Cloud'], isNew: false },
  { id: 'health-emp-35', company: 'Ufonia', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud AI 스택과 자체 임상 증거로 환자와의 일상적인 임상 상담 자동화', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'health-emp-36', company: 'Virbac', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 조달용 공급업체 견적 비교 및 법적 조항 초안 작성', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'health-emp-37', company: 'Virbac', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Gemini 모델로 국제 협업 간소화하고 일상 작업 자동화하는 HR 챗봇 파일럿', technologies: ['Gemini'], isNew: true },
  { id: 'health-emp-38', company: 'WellSky', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud 헬스케어 및 Vertex AI 기능 통합하여 근무 시간 외 문서 작성 시간 단축', technologies: ['Google Cloud', 'Vertex AI'], isNew: false },
  { id: 'health-emp-39', company: 'Wipro', industry: 'healthcare_lifesciences', agentType: 'employee_agent', summary: 'Google Cloud AI 에이전트 기술로 국가 헬스케어 제공업체의 계약 개발 및 조정 지원', technologies: ['Google Cloud'], isNew: false },

  // 코드 에이전트
  { id: 'health-code-1', company: 'Babylon Health', industry: 'healthcare_lifesciences', agentType: 'code_agent', summary: 'TPU로 구동되는 AI 기반 앱으로 전 세계 환자에게 원격 의료 서비스 제공', technologies: ['TPU', 'AI'], isNew: false },
  { id: 'health-code-2', company: 'Lifebit', industry: 'healthcare_lifesciences', agentType: 'code_agent', summary: '데이터 프라이버시 침해 없이 환자 데이터에 대해 수십억 개의 분석을 실행하는 분산 플랫폼 구축', technologies: ['Google Cloud'], metrics: '1분 이내에 수억 줄 코드 실행', isNew: false },
  { id: 'health-code-3', company: 'Medidata', industry: 'healthcare_lifesciences', agentType: 'code_agent', summary: 'AI로 업계 최대의 임상 시험 데이터 레이크에서 통계 모델 훈련하여 신약 개발 가속화', technologies: ['AI'], metrics: '등록률 20% 향상, 환자 유지율 10% 향상', isNew: false },

  // 데이터 에이전트
  { id: 'health-data-1', company: 'Apollo Hospitals', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: '의료 데이터 엔진 구현하여 임상 데이터 분석 변환, 인사이트 및 데이터 상호운용성 향상', technologies: ['Healthcare Data Engine'], isNew: false },
  { id: 'health-data-2', company: 'Arla Foods Ingredients', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'BigQuery, Looker, Vertex AI, Gemini로 복잡한 규제 데이터 관리 자동화', technologies: ['BigQuery', 'Looker', 'Vertex AI', 'Gemini'], isNew: true },
  { id: 'health-data-3', company: 'Asahi Kasei Pharma', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Google Cloud 코드로 4,000개 이상의 의료 전문가 슬라이드에서 참조 이미지 검색/제안 AI 시스템 구축', technologies: ['Google Cloud'], isNew: true },
  { id: 'health-data-4', company: 'Bayer', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Vertex AI 및 BigQuery로 연구, 수확량 예측 및 농장 운영에서 농부 성공 향상', technologies: ['Vertex AI', 'BigQuery'], isNew: false },
  { id: 'health-data-5', company: 'Discover Dollar', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Gemini Pro와 Vertex AI로 영어 질문을 실시간 SQL 쿼리로 변환하는 Ask Discover 챗봇', technologies: ['Gemini Pro', 'Vertex AI'], isNew: false },
  { id: 'health-data-6', company: 'Flagship Pioneering', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Google Cloud와 파트너십으로 AI 기반 기초 모델과 통합 데이터 플랫폼 개발하여 과학적 발견 가속화', technologies: ['Google Cloud'], isNew: true },
  { id: 'health-data-7', company: 'GN Hearing', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'AI 에이전트로 광범위한 음향 매개변수 및 연구 데이터 탐색하여 보청기 제품 설계 인사이트 발견', technologies: ['AI'], isNew: false },
  { id: 'health-data-8', company: 'Indegene', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Gemini가 포함된 Vertex AI로 비구조화된 과학 및 규제 문서의 복잡한 분석을 몇 주에서 몇 시간으로', technologies: ['Vertex AI', 'Gemini'], metrics: '연구 및 콘텐츠 생성 작업 85% 이상 가속화', isNew: true },
  { id: 'health-data-9', company: 'Iqvia', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Healthcare Data Engine으로 종단 환자 수준 데이터 처리', technologies: ['Healthcare Data Engine'], isNew: false },
  { id: 'health-data-10', company: 'Merck', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Gemini와 Vertex AI로 연구 노트북, 전자상거래 플랫폼, 내부 프로세스 전반에 지능형 애플리케이션 구동', technologies: ['Gemini', 'Vertex AI'], isNew: true },
  { id: 'health-data-11', company: 'Norstella', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Google Cloud와 Gemini 모델로 전 세계 약물 파이프라인, 의료 전문가, 환자 데이터에 자연어 인터페이스 제공', technologies: ['Google Cloud', 'Gemini'], isNew: true },
  { id: 'health-data-12', company: 'Providence', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Healthcare Data Engine, BigQuery, Vertex AI로 데이터 신속 통합 및 의사결정 가속화', technologies: ['Healthcare Data Engine', 'BigQuery', 'Vertex AI'], metrics: '데이터 쿼리 시간 몇 시간→몇 분', isNew: true },
  { id: 'health-data-13', company: 'Sanofi', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'LLM 기반 도구로 임상 시험 프로토콜, 규제 문서, 연구 논문의 검색 및 콘텐츠 생성 자동화', technologies: ['LLM'], isNew: false },
  { id: 'health-data-14', company: 'SOPHiA Genetics', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'Google Cloud 최적화된 인프라로 수십억 개의 게놈 데이터 포인트 분석하는 SOPHiA DDM 플랫폼 개발', technologies: ['Google Cloud'], metrics: '85개국 700개 이상 기관에서 100만 개 이상 게놈 프로필 처리', isNew: true },
  { id: 'health-data-15', company: 'Taipei Medical University', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: 'BigQuery와 Looker로 6개 부속 병원의 전자 건강 기록 통합하여 AI 기반 연구 가속화', technologies: ['BigQuery', 'Looker'], metrics: '연간 6,300시간 절약', isNew: true },
  { id: 'health-data-16', company: 'Tempus', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: '환자 데이터 분석하여 개인화된 치료 계획 개발, 정밀 의학 혁신', technologies: ['AI'], metrics: '50페타바이트 이상 데이터, 1억 개 이상 임상 노트 수집', isNew: false },
  { id: 'health-data-17', company: 'Verily', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: '4TB 이상의 연구 데이터를 BigQuery로 마이그레이션', technologies: ['BigQuery'], metrics: '데이터 분석 10배 빠름, 비용 80% 저렴', isNew: false },
  { id: 'health-data-18', company: 'Viome Life Sciences', industry: 'healthcare_lifesciences', agentType: 'data_agent', summary: '고급 AI와 mRNA 기술로 BigQuery에서 8.4페타바이트의 다중 오믹스 데이터 처리', technologies: ['BigQuery', 'AI'], isNew: true },

  // 보안 에이전트
  { id: 'health-sec-1', company: 'CVS Health', industry: 'healthcare_lifesciences', agentType: 'security_agent', summary: 'AI로 대부분의 보안 운영 자동화하고 보안 분석가 효과적으로 교육', technologies: ['AI'], isNew: false },
  { id: 'health-sec-2', company: 'Reata Pharmaceuticals', industry: 'healthcare_lifesciences', agentType: 'security_agent', summary: '영지식 아키텍처로 Vertex AI 사용하여 민감한 정보 없이 복잡한 계산 처리', technologies: ['Vertex AI'], isNew: false },

  // ================================================================================
  // 호스피탈리티 및 여행 (Hospitality & Travel)
  // ================================================================================

  // 고객 에이전트
  { id: 'hosp-cust-1', company: 'Air New Zealand', industry: 'hospitality_travel', agentType: 'customer_agent', summary: 'Vertex AI Agent Builder로 구축된 AI 어시스턴트 Liv로 고객 응답 시간을 며칠에서 몇 분으로 단축', technologies: ['Vertex AI Agent Builder'], metrics: '고객 대기 시간 95% 감소', isNew: true },
  { id: 'hosp-cust-2', company: 'Buser', industry: 'hospitality_travel', agentType: 'customer_agent', summary: 'Vertex AI로 고객 서비스 혁신, 챗봇 의도 정확도 99%, 응답 시간 5초 미만', technologies: ['Vertex AI'], metrics: '의도 정확도 99%, 응답 시간 5초 미만', isNew: false },
  { id: 'hosp-cust-3', company: 'KONE', industry: 'hospitality_travel', agentType: 'customer_agent', summary: 'Contact Center AI로 3개월 만에 전 세계 70개 지역에서 300% 더 빠른 후속 조치, 90% 더 빠른 상담원 온보딩', technologies: ['Contact Center AI'], metrics: '300% 더 빠른 후속 조치, 90% 더 빠른 상담원 온보딩', isNew: false },
  { id: 'hosp-cust-4', company: 'Magalu', industry: 'hospitality_travel', agentType: 'customer_agent', summary: '앱에 가상 비서 Lu 내장, Gemini 기반 챗봇으로 고객 문의 첫 응답 시간 46% 단축', technologies: ['Gemini'], metrics: '첫 응답 시간 46% 단축', isNew: false },
  { id: 'hosp-cust-5', company: 'Marriott International', industry: 'hospitality_travel', agentType: 'customer_agent', summary: 'Gemini가 포함된 Vertex AI로 수천 개 호텔에 생성형 AI 도입, 직원에게 즉각적인 답변 및 게스트에게 개인화된 추천', technologies: ['Vertex AI', 'Gemini'], isNew: true },
  { id: 'hosp-cust-6', company: 'Royal Resorts', industry: 'hospitality_travel', agentType: 'customer_agent', summary: '다국어 AI 어시스턴트 Ana로 멕시코와 다른 곳에서 더 원활한 커뮤니케이션', technologies: ['AI'], isNew: false },
  { id: 'hosp-cust-7', company: 'Travelport', industry: 'hospitality_travel', agentType: 'customer_agent', summary: '생성형 AI 어시스턴트로 여행사가 자연어 검색으로 최고의 여행 옵션 찾기', technologies: ['생성형 AI'], isNew: false },

  // 직원 에이전트
  { id: 'hosp-emp-1', company: 'AccorInvest', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 29개국 800개 이상 호텔에서 방대한 정보 합성 및 전략적 의사 결정 지원', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'hosp-emp-2', company: 'AFAR', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini 및 Vids로 연구 및 편집 작업 강화, 글로벌 리모트 팀 비동기 작업', technologies: ['Google Workspace', 'Gemini', 'Vids'], isNew: true },
  { id: 'hosp-emp-3', company: 'Discover Hong Kong', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'Vertex AI 위에 AI 여행 동반자 구축하여 여행자에게 맞춤형 추천 제공', technologies: ['Vertex AI'], isNew: false },
  { id: 'hosp-emp-4', company: 'Globant', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'Google Cloud AI 에이전트 기술로 주요 호텔 체인이 다국어 컨시어지 에이전트로 게스트 만족도 향상', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'hosp-emp-5', company: 'KONE', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini를 70,000명 이상 직원에게 배포, 작업 지침 번역, 영업 제안 연구 등', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'hosp-emp-6', company: 'KONE', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'NotebookLM으로 마케팅 팀이 캠페인용 핵심 인사이트 종합 및 제품 문서에서 주요 정보 추출', technologies: ['NotebookLM'], isNew: true },
  { id: 'hosp-emp-7', company: 'Magnolia Group', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'Gemini가 포함된 Google Workspace로 일일 비즈니스 운영, 크리에이티브 프로젝트, 전략 계획에 AI 도입', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'hosp-emp-8', company: 'SiteMinder', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'AI 기반 어시스턴트 Little Hotelier로 소규모 호텔 운영자에게 원클릭 게시, 자동화된 이메일, 예약 시스템 제공', technologies: ['AI'], isNew: false },
  { id: 'hosp-emp-9', company: 'Virgin Voyages', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'AI 에이전틱 시스템 Jennifer로 선원 지원, 내부 문서 검색, 마케팅 캠페인 생성', technologies: ['AI'], isNew: true },
  { id: 'hosp-emp-10', company: 'IHG Hotels & Resorts', industry: 'hospitality_travel', agentType: 'employee_agent', summary: 'Agentspace와 함께 내부 지식 베이스 상호작용하여 인사이트 신속 수집', technologies: ['Agentspace'], isNew: false },

  // 크리에이티브 에이전트
  { id: 'hosp-cre-1', company: 'Expedia', industry: 'hospitality_travel', agentType: 'creative_agent', summary: 'Veo로 여행 예약을 동기 부여하는 고품질 비디오 콘텐츠 생성 테스트', technologies: ['Veo'], isNew: true },
  { id: 'hosp-cre-2', company: 'KONE', industry: 'hospitality_travel', agentType: 'creative_agent', summary: 'NotebookLM으로 마케팅 팀이 캠페인용 핵심 인사이트 종합', technologies: ['NotebookLM'], isNew: true },
  { id: 'hosp-cre-3', company: 'Virgin Voyages', industry: 'hospitality_travel', agentType: 'creative_agent', summary: 'Veo의 텍스트-투-비디오 기능으로 한 번에 수천 개의 초개인화된 광고와 이메일 생성', technologies: ['Veo'], isNew: false },

  // 데이터 에이전트
  { id: 'hosp-data-1', company: 'AccorInvest', industry: 'hospitality_travel', agentType: 'data_agent', summary: 'BigQuery와 Looker로 29개국 854개 호텔의 리노베이션, 브랜드 성과, 고객 리뷰 등에 대한 BI 플랫폼 구축', technologies: ['BigQuery', 'Looker'], isNew: false },
  { id: 'hosp-data-2', company: 'All Nippon Airways', industry: 'hospitality_travel', agentType: 'data_agent', summary: 'AI로 공항 운영 스케줄링 및 비용 개선에서 미식 경험까지 데이터 기반 의사 결정 가속화', technologies: ['AI'], isNew: false },
  { id: 'hosp-data-3', company: 'MakeMyTrip', industry: 'hospitality_travel', agentType: 'data_agent', summary: 'BigQuery에서 Gemini Pro 튜닝으로 예약 데이터 포함한 사용자 특정 컨텍스트와 함께 여행 가이드 생성', technologies: ['BigQuery', 'Gemini Pro'], metrics: '5,000개 이상 목적지 개인화 콘텐츠, 고객 지원 비용 20% 감소', isNew: true },
  { id: 'hosp-data-4', company: 'SG Amenity', industry: 'hospitality_travel', agentType: 'data_agent', summary: 'Gemini 모델이 포함된 Vertex AI로 고객에게 세계적 수준의 고객 설계 지원', technologies: ['Vertex AI', 'Gemini'], isNew: true },
  { id: 'hosp-data-5', company: 'Traveloka', industry: 'hospitality_travel', agentType: 'data_agent', summary: 'BigQuery, GKE, Vertex AI, Looker, Google Workspace로 혁신적인 여행 제품 생성 및 제공', technologies: ['BigQuery', 'GKE', 'Vertex AI', 'Looker', 'Google Workspace'], isNew: false },
  { id: 'hosp-data-6', company: 'Wyndham Hotels & Resorts', industry: 'hospitality_travel', agentType: 'data_agent', summary: 'AI 기반 인사이트로 데이터 수집 및 분석 자동화하여 호텔 소유주에게 더 나은 권장 사항 제공', technologies: ['AI'], isNew: false },

  // ================================================================================
  // 제조업 (Manufacturing)
  // ================================================================================

  // 고객 에이전트
  { id: 'mfg-cust-1', company: 'Whirlpool', industry: 'manufacturing', agentType: 'customer_agent', summary: 'AI 기반 경험으로 가전제품 음성 상호작용 강화 및 부품 고장 예측, 고객 지원 자동화', technologies: ['AI'], isNew: false },

  // 직원 에이전트
  { id: 'mfg-emp-1', company: 'Cintas', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 약 2시간 걸리던 작업을 15분 이내로 단축', technologies: ['Google Workspace', 'Gemini'], metrics: '작업 시간 2시간→15분', isNew: false },
  { id: 'mfg-emp-2', company: 'Dentsu', industry: 'manufacturing', agentType: 'employee_agent', summary: 'AI 기반 도구로 창의적 생산성 향상, 비즈니스 리더 인텔리전스 분석 단순화, 운영 간소화', technologies: ['AI'], isNew: false },
  { id: 'mfg-emp-3', company: 'FANUC', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Vertex AI로 실시간 밀링 오류 감지하여 기계 생산 주기 최대 40% 최적화', technologies: ['Vertex AI'], metrics: '생산 주기 최대 40% 최적화', isNew: false },
  { id: 'mfg-emp-4', company: 'Golden State Foods', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Google Cloud AI 솔루션으로 효율적인 데이터 분석, 향상된 공급망 운영 및 통합 환경 제공', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'mfg-emp-5', company: 'Honeywell', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Vertex AI로 LLM 배포하여 석유 회수 및 공항 터미널 운영 등 프로세스 개선', technologies: ['Vertex AI', 'LLM'], isNew: false },
  { id: 'mfg-emp-6', company: 'Leggett & Platt', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Gemini for Workspace로 이메일 따라잡기 30% 더 적은 시간 사용, 데이터 분석 자동화, 메시지 번역', technologies: ['Google Workspace', 'Gemini'], metrics: '이메일 처리 시간 30% 절감', isNew: false },
  { id: 'mfg-emp-7', company: 'Lexmark', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Gemini for Google Workspace와 Agentspace로 수명 주기 비용 계산, 서비스 부품 요약 및 문서 분석', technologies: ['Google Workspace', 'Gemini', 'Agentspace'], isNew: false },
  { id: 'mfg-emp-8', company: 'Siemens Energy', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Google Cloud AI 기반 번역으로 9개 이상 언어의 글로벌 직장 내 커뮤니케이션 간소화', technologies: ['Google Cloud AI'], metrics: '플랫폼 채택률 매달 30% 증가', isNew: false },
  { id: 'mfg-emp-9', company: 'Stanley Black & Decker', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Gemini 및 Vertex AI로 엔지니어링 검토 5일→몇 시간, 번역 비용 50% 절감, DEWALT 도구 부품 검색 도우미 개발', technologies: ['Gemini', 'Vertex AI'], metrics: '엔지니어링 검토 5일→몇 시간, 번역 비용 50% 절감', isNew: true },
  { id: 'mfg-emp-10', company: 'Tiger Analytics', industry: 'manufacturing', agentType: 'employee_agent', summary: '엔지니어링 문서의 RFQ 생성 및 검증 자동화 AI 도구 구축', technologies: ['AI'], metrics: 'RFQ 프로세스에서 90% 시간 절감', isNew: true },
  { id: 'mfg-emp-11', company: 'Unilever', industry: 'manufacturing', agentType: 'employee_agent', summary: 'Google Cloud 지속 가능성 솔루션으로 환경 발자국 감소, AI로 데이터 품질 개선', technologies: ['Google Cloud'], isNew: false },
  { id: 'mfg-emp-12', company: 'Wipro', industry: 'manufacturing', agentType: 'employee_agent', summary: 'NotebookLM으로 문서, 제품 정보, 영업 교육 자료 합성', technologies: ['NotebookLM'], metrics: '교육 세션 준비 50% 이상 시간 절감', isNew: true },

  // 코드 에이전트
  { id: 'mfg-code-1', company: 'Applied Materials', industry: 'manufacturing', agentType: 'code_agent', summary: 'Google Cloud와 파트너십으로 반도체 제조 환경에서 지능형 칩 제작 프로세스 가속화', technologies: ['Google Cloud'], isNew: false },
  { id: 'mfg-code-2', company: 'Arcadis', industry: 'manufacturing', agentType: 'code_agent', summary: 'Gemini Code Assist로 빌딩, 인프라, 수자원 프로젝트를 개선하는 Arcadis Gen 플랫폼 개발', technologies: ['Gemini Code Assist'], isNew: false },
  { id: 'mfg-code-3', company: 'Wipro', industry: 'manufacturing', agentType: 'code_agent', summary: 'Gemini Code Assist로 일상적인 코딩 작업 자동화하고 소프트웨어 개발 팀 생산성 향상', technologies: ['Gemini Code Assist'], metrics: '코딩 효율성 30% 향상', isNew: true },

  // 데이터 에이전트
  { id: 'mfg-data-1', company: 'Asahi Kasei', industry: 'manufacturing', agentType: 'data_agent', summary: 'Google Cloud로 과학 문헌, 내부 보고서에서 화합물 속성 데이터 추출하여 2차 배터리 양극 재료 개발', technologies: ['Google Cloud', 'LLM', 'Vertex AI'], metrics: '기존 방법보다 6배 빠른 데이터 추출', isNew: true },
  { id: 'mfg-data-2', company: 'Carrier', industry: 'manufacturing', agentType: 'data_agent', summary: 'Google Cloud와 협력하여 건물 내 거주자 편안함 최적화에 생성형 AI 사용', technologies: ['Google Cloud', '생성형 AI'], isNew: false },
  { id: 'mfg-data-3', company: 'Crown Cork & Seal', industry: 'manufacturing', agentType: 'data_agent', summary: 'Vertex AI와 Gemini로 150개 이상 사이트에서 계획되지 않은 다운타임 모니터링/해결하는 에이전틱 워크플로 구축', technologies: ['Vertex AI', 'Gemini'], isNew: true },
  { id: 'mfg-data-4', company: 'Daikin', industry: 'manufacturing', agentType: 'data_agent', summary: 'Google Cloud와 협력하여 Gemini 모델과 AI 기반 분석을 HVAC 서비스에 통합', technologies: ['Google Cloud', 'Gemini'], isNew: false },
  { id: 'mfg-data-5', company: 'Dow', industry: 'manufacturing', agentType: 'data_agent', summary: 'BigQuery와 Gemini로 제조 분석가가 자연어로 데이터 쿼리하는 AI 지원 시스템 구축', technologies: ['BigQuery', 'Gemini'], metrics: '계획되지 않은 다운타임 10% 이상 감소 목표', isNew: true },
  { id: 'mfg-data-6', company: 'Henkel', industry: 'manufacturing', agentType: 'data_agent', summary: 'Agentspace 테스트하여 시장 조사, 경쟁사 분석, 고객 커뮤니케이션 등 직원 생산성 향상', technologies: ['Agentspace'], isNew: false },
  { id: 'mfg-data-7', company: 'Hologic', industry: 'manufacturing', agentType: 'data_agent', summary: 'Vertex AI와 Agentspace로 유방암 사망률 감소, 정밀 수술 지원 및 여성 건강 성과 개선', technologies: ['Vertex AI', 'Agentspace'], isNew: false },
  { id: 'mfg-data-8', company: 'Kyocera', industry: 'manufacturing', agentType: 'data_agent', summary: 'Google Cloud와 협력하여 기계 진동 감지, 반도체 회로 설계 생성, 영업/마케팅 데이터에서 자연어 인사이트 제공', technologies: ['Google Cloud'], isNew: false },
  { id: 'mfg-data-9', company: 'Nokia', industry: 'manufacturing', agentType: 'data_agent', summary: 'Google Cloud와 협력하여 Nokia MX Industrial Edge 공동 개발, 산업 4.0 무선 네트워크에 첨단 기술 제공', technologies: ['Google Cloud'], isNew: false },
  { id: 'mfg-data-10', company: 'POSCO', industry: 'manufacturing', agentType: 'data_agent', summary: 'Gemini 1.5 모델로 냉각 공정 열 해석 지원 AI 어시스턴트 생성', technologies: ['Gemini 1.5'], metrics: '데이터 분석 효율성 10배 향상, 신규 엔지니어 온보딩 50% 단축', isNew: true },
  { id: 'mfg-data-11', company: 'Siemens Energy', industry: 'manufacturing', agentType: 'data_agent', summary: 'BigQuery, Vertex AI로 모든 비즈니스 라인에서 고급 분석, AI, ML 모델 확장', technologies: ['BigQuery', 'Vertex AI'], isNew: false },

  // 보안 에이전트
  { id: 'mfg-sec-1', company: 'Sysco', industry: 'manufacturing', agentType: 'security_agent', summary: 'Google Security Operations로 향상된 탐지 기능으로 전 세계 직원에게 사이버 리스크 영향 감소', technologies: ['Google Security Operations'], isNew: false },

  // ================================================================================
  // 미디어 및 마케팅 (Media & Marketing)
  // ================================================================================

  // 고객 에이전트
  { id: 'media-cust-1', company: 'Canva', industry: 'media_marketing', agentType: 'customer_agent', summary: '생성형 AI 기능이 장착된 비주얼 커뮤니케이션 플랫폼으로 몇 초 만에 고품질 이미지와 자산 생성', technologies: ['생성형 AI'], isNew: false },
  { id: 'media-cust-2', company: 'Figma', industry: 'media_marketing', agentType: 'customer_agent', summary: 'Vertex AI의 Imagen으로 디자이너가 실제 자산 만들기 전에 프로젝트 빠르게 모델링', technologies: ['Vertex AI', 'Imagen'], isNew: false },
  { id: 'media-cust-3', company: 'GoTo', industry: 'media_marketing', agentType: 'customer_agent', summary: '직관적이고 공감적인 인도네시아어 가상 AI 비서 Dira 생성', technologies: ['AI'], isNew: true },
  { id: 'media-cust-4', company: 'Mercari', industry: 'media_marketing', agentType: 'customer_agent', summary: 'Gemini 기반 대화형 AI로 직원 업무량 20% 감소, 500% ROI 예상', technologies: ['Gemini'], metrics: '직원 업무량 20% 감소, 500% ROI 예상', isNew: false },
  { id: 'media-cust-5', company: 'News Corp', industry: 'media_marketing', agentType: 'customer_agent', summary: 'AI로 콘텐츠 개인화 및 구독 관리 개선', technologies: ['AI'], isNew: false },
  { id: 'media-cust-6', company: 'Priceline', industry: 'media_marketing', agentType: 'customer_agent', summary: '음성 및 대화형 AI 에이전트 Penny로 여행자 여행 조사 및 예약 지원', technologies: ['AI'], isNew: false },
  { id: 'media-cust-7', company: 'Trulia', industry: 'media_marketing', agentType: 'customer_agent', summary: 'AI 기반 챗봇 Trulia Discoveries AI로 주택 구매자가 예산과 라이프스타일에 맞는 주택 찾기', technologies: ['AI'], isNew: false },
  { id: 'media-cust-8', company: 'Univision', industry: 'media_marketing', agentType: 'customer_agent', summary: '더 유창한 고객 상호작용을 위해 생성형 AI 스트리밍 챗봇 출시', technologies: ['생성형 AI'], isNew: false },
  { id: 'media-cust-9', company: 'Vox Media', industry: 'media_marketing', agentType: 'customer_agent', summary: 'Perplexity AI 검색 스타트업과 파트너십으로 강력한 AI 활용하여 청중 경험 향상', technologies: ['AI'], isNew: false },
  { id: 'media-cust-10', company: 'Yahoo', industry: 'media_marketing', agentType: 'customer_agent', summary: 'AI 기반 챗봇으로 고객이 정보를 쉽게 액세스하여 고객 서비스 및 마케팅 향상', technologies: ['AI'], isNew: false },
  { id: 'media-cust-11', company: 'ZoomInfo', industry: 'media_marketing', agentType: 'customer_agent', summary: 'Google Workspace의 Gemini로 이메일 기반 커뮤니케이션 및 추천 워크플로 간소화', technologies: ['Google Workspace', 'Gemini'], metrics: '회의 후속 조치 및 준비에서 최대 30분 절약', isNew: true },

  // 직원 에이전트
  { id: 'media-emp-1', company: 'AssemblyAI', industry: 'media_marketing', agentType: 'employee_agent', summary: 'Vertex AI로 오디오 및 음성 데이터를 전사하고 이해하는 AI 모델 구축', technologies: ['Vertex AI'], isNew: false },
  { id: 'media-emp-2', company: 'Best Buy', industry: 'media_marketing', agentType: 'employee_agent', summary: 'BigQuery와 Gemini 모델로 고객이 더 효과적으로 소통하고 더 빠른 해결책 제공하는 생성형 AI 도구 개발', technologies: ['BigQuery', 'Gemini'], isNew: false },
  { id: 'media-emp-3', company: 'Blavity', industry: 'media_marketing', agentType: 'employee_agent', summary: 'NotebookLM으로 회의 녹음 전사, 주요 하이라이트 추출, 명확한 요약 및 실행 항목 생성', technologies: ['NotebookLM'], metrics: '검토 시간 몇 시간→몇 분', isNew: true },
  { id: 'media-emp-4', company: 'Cimpress', industry: 'media_marketing', agentType: 'employee_agent', summary: 'Gemini 모델로 컨택 센터 상담원 효율성 향상', technologies: ['Gemini'], metrics: '3년간 3배의 교육 비용 절감, 고객 문의 30% 처리', isNew: false },
  { id: 'media-emp-5', company: 'MLB', industry: 'media_marketing', agentType: 'employee_agent', summary: 'BigQuery와 Gemini 1.5 Flash가 포함된 Vertex AI로 새로운 야구 통계 생성', technologies: ['BigQuery', 'Vertex AI', 'Gemini 1.5 Flash'], isNew: false },
  { id: 'media-emp-6', company: 'Publicis Groupe', industry: 'media_marketing', agentType: 'employee_agent', summary: 'Nvidia와 함께 Google Cloud에서 CoreAI 구동하여 고객이 자체 지능형 에이전트 구축/배포', technologies: ['Google Cloud', 'Gemini'], isNew: false },
  { id: 'media-emp-7', company: 'Reprise', industry: 'media_marketing', agentType: 'employee_agent', summary: 'Gemini로 데이터 분석 프레젠테이션 및 창의적 콘텐츠 브레인스토밍 지원', technologies: ['Gemini'], isNew: true },
  { id: 'media-emp-8', company: 'Roblox', industry: 'media_marketing', agentType: 'employee_agent', summary: 'Vertex AI로 구동되는 도구로 수백만 명의 게임 개발자가 거의 즉시 3D 객체와 아바타 생성', technologies: ['Vertex AI'], isNew: false },
  { id: 'media-emp-9', company: 'SAP', industry: 'media_marketing', agentType: 'employee_agent', summary: 'Joule AI 어시스턴트에서 Gemini로 SAP Cloud Platform 통해 비즈니스 인텔리전스 사용 사례 제공', technologies: ['Gemini'], isNew: false },
  { id: 'media-emp-10', company: 'Warner Bros. Discovery', industry: 'media_marketing', agentType: 'employee_agent', summary: 'Gemini가 포함된 Google Workspace를 전사적으로 배포하여 스튜디오 협업 및 생산성 향상', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'media-emp-11', company: 'WPP', industry: 'media_marketing', agentType: 'employee_agent', summary: 'WPP Open을 구축하여 매일 100,000명 이상 직원이 Gemini 모델 사용', technologies: ['Gemini'], metrics: 'Gemini 도구 사용 5개월간 두 배 이상 증가', isNew: false },

  // 크리에이티브 에이전트
  { id: 'media-cre-1', company: 'AI: Artificial Imperfection', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Veo로 아시아 중심 캐릭터가 등장하는 광고 콘텐츠 제작, 리드 타임 수개월→몇 주', technologies: ['Veo'], metrics: '리드 타임 수개월→몇 주', isNew: true },
  { id: 'media-cre-2', company: 'Cinemeta', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Veo로 에이전시와 브랜드가 몇 초 만에 제작 가능한 비디오 생성', technologies: ['Veo'], metrics: '프로덕션 비용 90%, 처리 시간 95% 절감', isNew: true },
  { id: 'media-cre-3', company: 'Getty Images', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Imagen으로 생성된 콘텐츠에 대해 라이선스 확장하여 상업적 배포용 고품질 시각적 콘텐츠 생성', technologies: ['Imagen'], isNew: false },
  { id: 'media-cre-4', company: 'Interactive Entertainment Group', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Google 생성형 AI와 영화 제작 기술 결합하여 자동차 및 가정용 스크린을 위한 주문형 라이브 엔터테인먼트 제작', technologies: ['Google Cloud', '생성형 AI'], isNew: false },
  { id: 'media-cre-5', company: 'IPG', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Veo 2 테스트하여 창의적 개발 및 제작 프로세스의 새로운 효율성 발견', technologies: ['Veo 2'], isNew: false },
  { id: 'media-cre-6', company: 'Jellypod', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Gemini 2.5 Pro로 클릭 한 번으로 몇 분 만에 매일 개인화된 팟캐스트 생성', technologies: ['Gemini 2.5 Pro'], isNew: true },
  { id: 'media-cre-7', company: 'Krafton', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Vertex AI로 표정 등 시각적 자산이나 마스코트/NPC 생성 시간을 몇 주/몇 달→몇 분으로 단축', technologies: ['Vertex AI'], metrics: '생성 시간 몇 주/몇 달→몇 분', isNew: false },
  { id: 'media-cre-8', company: 'Mondelez', industry: 'media_marketing', agentType: 'creative_agent', summary: '모든 창의적 인재가 AI 사용하여 대규모로 혁신적이고 개인화된 콘텐츠 제공하는 AI 기반 콘텐츠 엔진 구축', technologies: ['AI'], isNew: false },
  { id: 'media-cre-9', company: 'Shutterstock', industry: 'media_marketing', agentType: 'creative_agent', summary: 'Imagen으로 생성된 콘텐츠에 대해 기여 라이브러리 라이선스 확장', technologies: ['Imagen'], isNew: false },

  // 데이터 에이전트
  { id: 'media-data-1', company: 'AARRR Labs', industry: 'media_marketing', agentType: 'data_agent', summary: 'Gemini 모델이 포함된 Vertex AI로 Instagram Reels 자동 전사', technologies: ['Vertex AI', 'Gemini'], metrics: '전사 정확도 10% 향상, 처리 6배 빠름', isNew: true },
  { id: 'media-data-2', company: 'BILD', industry: 'media_marketing', agentType: 'data_agent', summary: '온프레미스 데이터 스토리지를 BigQuery로 마이그레이션하여 디지털 미디어 회사로 전환', technologies: ['BigQuery'], isNew: true },
  { id: 'media-data-3', company: 'Clapper', industry: 'media_marketing', agentType: 'data_agent', summary: 'Gemini로 매월 70만 건 이상의 비디오와 이미지를 정책 위반 및 불법 활동에 대해 검토', technologies: ['Gemini'], metrics: '수동 검토 노력 40% 감소', isNew: true },
  { id: 'media-data-4', company: 'ContentFly', industry: 'media_marketing', agentType: 'data_agent', summary: 'Vertex AI로 AI 기반 스크립트 작성, 편집 및 오디오 향상 지원', technologies: ['Vertex AI'], metrics: '프로덕션 시간 20% 단축', isNew: false },
  { id: 'media-data-5', company: 'Duolingo', industry: 'media_marketing', agentType: 'data_agent', summary: 'BigQuery와 Gemini가 포함된 Vertex AI로 1억 2,500만 명 이상의 활성 사용자에게 서비스', technologies: ['BigQuery', 'Vertex AI', 'Gemini'], isNew: true },
  { id: 'media-data-6', company: 'Electronic Arts', industry: 'media_marketing', agentType: 'data_agent', summary: 'AI로 게임 요구 사항 예측, 게임 엔진/네트워크 인프라/도구 최적화, 고품질 서비스 제공', technologies: ['AI'], isNew: false },
  { id: 'media-data-7', company: 'Globo', industry: 'media_marketing', agentType: 'data_agent', summary: 'Google Cloud AI 기반 번역, 전사, 음성 복제로 원본 포르투갈어 콘텐츠를 30일→4일 만에 제공', technologies: ['Google Cloud AI'], metrics: '콘텐츠 제공 30일→4일', isNew: false },
  { id: 'media-data-8', company: 'KG Inictel', industry: 'media_marketing', agentType: 'data_agent', summary: 'BigQuery와 Looker로 여러 OTT 플랫폼에서 콘텐츠 성과 데이터 통합하는 통합 대시보드 생성', technologies: ['BigQuery', 'Looker'], metrics: '데이터 액세스 시간 몇 시간→몇 초, 연구 프로세스 며칠→몇 시간', isNew: true },
  { id: 'media-data-9', company: 'Kiyo', industry: 'media_marketing', agentType: 'data_agent', summary: 'Vertex AI로 AI 기반 제품 빌드/테스트/배포', technologies: ['Vertex AI'], metrics: 'AI 기반 에셋 분석 서비스 4주 만에 제공, 개발 리드 타임 8배 단축', isNew: true },
  { id: 'media-data-10', company: 'Musimap', industry: 'media_marketing', agentType: 'data_agent', summary: 'Vertex AI 위에 감정 인식 추천 엔진 구축', technologies: ['Vertex AI'], metrics: '개발 프로세스 몇 달→몇 일', isNew: true },
  { id: 'media-data-11', company: 'NewsCorp', industry: 'media_marketing', agentType: 'data_agent', summary: 'Gemini 모델이 포함된 Vertex AI로 저널리즘 스토리 작성, 편집, 요약 등을 돕는 AI 기반 플랫폼 구축', technologies: ['Vertex AI', 'Gemini'], isNew: true },
  { id: 'media-data-12', company: 'Paramount', industry: 'media_marketing', agentType: 'data_agent', summary: '생성형 AI로 라이선싱 비즈니스 향상', technologies: ['생성형 AI'], isNew: false },

  // 보안 에이전트
  { id: 'media-sec-1', company: 'Fox Corporation', industry: 'media_marketing', agentType: 'security_agent', summary: 'Google Cloud AI 기반 요약과 비용 효율적인 데이터 스토리지 결합하여 VirusTotal에서 Mandiant까지 통합 보안 솔루션 사용', technologies: ['Google Cloud', 'VirusTotal', 'Mandiant'], isNew: false },

  // ================================================================================
  // 공공 부문 (Public Sector)
  // ================================================================================

  // 고객 에이전트
  { id: 'pub-cust-1', company: 'Ada County', industry: 'public_sector', agentType: 'customer_agent', summary: 'Vertex AI로 구동되는 가상 어시스턴트로 거주자가 24/7 정보 액세스', technologies: ['Vertex AI'], isNew: false },
  { id: 'pub-cust-2', company: 'San Mateo County', industry: 'public_sector', agentType: 'customer_agent', summary: 'Vertex AI로 영어 및 스페인어로 24/7 지원 제공하는 AI 챗봇 구축', technologies: ['Vertex AI'], isNew: false },

  // 직원 에이전트
  { id: 'pub-emp-1', company: 'US Air Force', industry: 'public_sector', agentType: 'employee_agent', summary: 'Anthropic Claude를 Vertex AI에서 사용하여 AI 기반 임무 계획 시스템 테스트', technologies: ['Vertex AI', 'Claude'], isNew: false },
  { id: 'pub-emp-2', company: 'USPTO', industry: 'public_sector', agentType: 'employee_agent', summary: 'Google AI 인프라와 기술로 전 세계적으로 더 스마트하고 빠른 특허 및 상표 검색 추진', technologies: ['Google Cloud AI'], isNew: false },

  // 코드 에이전트
  { id: 'pub-code-1', company: 'GitGuardian', industry: 'public_sector', agentType: 'code_agent', summary: 'Gemini 2.0 Flash 및 Vertex AI Agent Development Kit로 사고 분류 자동화하는 AI 에이전트 구축', technologies: ['Gemini 2.0 Flash', 'Vertex AI Agent Development Kit'], isNew: true },

  // 데이터 에이전트
  { id: 'pub-data-1', company: 'Defense Health Agency', industry: 'public_sector', agentType: 'data_agent', summary: 'Google Cloud와 Deloitte로 DEIDS 클라우드 데이터 분석 시스템 개발하여 군인과 의료 종사자의 데이터 기반 결정 지원', technologies: ['Google Cloud'], isNew: false },
  { id: 'pub-data-2', company: 'FAA', industry: 'public_sector', agentType: 'data_agent', summary: '미국 국가 공역의 공항 및 관제탑 작업자를 위한 지연 예측 도구 구축', technologies: ['AI'], isNew: false },
  { id: 'pub-data-3', company: 'Illinois DOT', industry: 'public_sector', agentType: 'data_agent', summary: 'Google Cloud와 협력하여 24/7 멀티채널 지원 고객 서비스 챗봇과 차량 관련 문서 분석 직원 어시스턴트 구축', technologies: ['Google Cloud'], isNew: false },
  { id: 'pub-data-4', company: 'Mayo Clinic', industry: 'public_sector', agentType: 'data_agent', summary: 'Vertex AI 및 BigQuery로 특허 포트폴리오 구성 시스템 구축하여 지적 재산 라이선스 및 가치 발견 용이화', technologies: ['Vertex AI', 'BigQuery'], isNew: true },
  { id: 'pub-data-5', company: 'NOAA', industry: 'public_sector', agentType: 'data_agent', summary: 'Google Cloud와 협력하여 AI를 해양 과학, 날씨, 기후 데이터 발전에 적용', technologies: ['Google Cloud'], isNew: false },
  { id: 'pub-data-6', company: 'UK Ministry of Defence', industry: 'public_sector', agentType: 'data_agent', summary: 'Google Cloud와 파트너십으로 Gemini의 긴 컨텍스트 기능 통해 복잡한 의료 연구를 몇 시간→몇 분으로 분석', technologies: ['Google Cloud', 'Gemini'], metrics: '복잡한 의료 연구 분석 몇 시간→몇 분', isNew: true },
  { id: 'pub-data-7', company: 'Singapore EDB', industry: 'public_sector', agentType: 'data_agent', summary: 'BigQuery와 생성형 AI로 저비용으로 더 빠르게 실행 가능한 인사이트 도출하는 데이터 플랫폼 구축', technologies: ['BigQuery', '생성형 AI'], isNew: false },

  // 보안 에이전트
  { id: 'pub-sec-1', company: 'Idaho National Laboratory', industry: 'public_sector', agentType: 'security_agent', summary: 'Google Cloud 보안 제품군으로 세계에서 가장 진보된 핵 에너지 연구를 사이버 리스크로부터 보호', technologies: ['Google Cloud Security'], isNew: false },

  // ================================================================================
  // 소매 (Retail)
  // ================================================================================

  // 고객 에이전트
  { id: 'retail-cust-1', company: 'ALDO Group', industry: 'retail', agentType: 'customer_agent', summary: 'Google Cloud Customer Engagement Suite로 매장 내 가용성 확인하고 고객 쿼리 50% 이상 해결하는 챗봇 구동', technologies: ['Customer Engagement Suite'], metrics: '고객 쿼리 50% 이상 해결', isNew: true },
  { id: 'retail-cust-2', company: 'Ashley', industry: 'retail', agentType: 'customer_agent', summary: 'Vertex AI Search로 디지털 속성 전반에 더 관련성 높은 검색 결과 제공', technologies: ['Vertex AI Search'], isNew: false },
  { id: 'retail-cust-3', company: 'Grupo Éxito', industry: 'retail', agentType: 'customer_agent', summary: 'Google Cloud Conversational AI로 WhatsApp, 앱, 전화로 고객에게 응답하는 가상 비서 Sofía 구축', technologies: ['Google Cloud Conversational AI'], isNew: false },
  { id: 'retail-cust-4', company: 'JB Hi-Fi', industry: 'retail', agentType: 'customer_agent', summary: 'Gemini 기반 고객 비서 Jibby로 매일 300만 회 이상의 고객 상호작용 지원', technologies: ['Gemini'], metrics: '매일 300만 회 이상 고객 상호작용', isNew: false },
  { id: 'retail-cust-5', company: 'LOTTE E-commerce', industry: 'retail', agentType: 'customer_agent', summary: 'Imagen과 Gemini로 멀티모달 검색에서 제품 설명 개선까지 온라인 쇼핑 경험 구동', technologies: ['Imagen', 'Gemini'], isNew: false },
  { id: 'retail-cust-6', company: 'LVMH', industry: 'retail', agentType: 'customer_agent', summary: 'Google Cloud Customer Engagement Suite로 그룹 전체 브랜드에서 옴니채널 고객 경험 대규모 개인화', technologies: ['Customer Engagement Suite'], isNew: true },
  { id: 'retail-cust-7', company: 'Ulta Beauty', industry: 'retail', agentType: 'customer_agent', summary: '챗봇 기능에 Gemini 추가하여 상담원 핸들링 시간 3배 단축', technologies: ['Gemini'], metrics: '상담원 핸들링 시간 3배 단축', isNew: false },
  { id: 'retail-cust-8', company: 'Warby Parker', industry: 'retail', agentType: 'customer_agent', summary: 'Vertex AI와 BigQuery로 구축된 실험적인 새로운 쇼핑 기능 파일럿', technologies: ['Vertex AI', 'BigQuery'], isNew: true },
  { id: 'retail-cust-9', company: 'Waitrose', industry: 'retail', agentType: 'customer_agent', summary: 'Google Cloud와 파트너십으로 AI 지원 쇼핑 기능 개발', technologies: ['Google Cloud'], isNew: false },

  // 직원 에이전트
  { id: 'retail-emp-1', company: 'Ahold Delhaize', industry: 'retail', agentType: 'employee_agent', summary: 'Gemini 통합 AI 어시스턴트로 2,000개 이상 미국 매장에서 직원에게 제품 정보 빠른 액세스 제공', technologies: ['Gemini'], isNew: false },
  { id: 'retail-emp-2', company: 'GANNI', industry: 'retail', agentType: 'employee_agent', summary: 'Gemini for Google Workspace로 프로젝트 실행 시간 단축, 회의 녹취록 전사, 아이디어 브레인스토밍', technologies: ['Google Workspace', 'Gemini'], isNew: false },
  { id: 'retail-emp-3', company: 'The Very Group', industry: 'retail', agentType: 'employee_agent', summary: 'AI 어시스턴트로 사이트 성능, 상품화, SEO 관련 데이터 활용하여 마케팅 팀 생산성 향상', technologies: ['AI'], isNew: false },
  { id: 'retail-emp-4', company: 'Woolworths', industry: 'retail', agentType: 'employee_agent', summary: 'Gemini in Gmail의 Help me write로 150,000명 팀원이 프로젝트 업데이트 등 커뮤니케이션 초안 빠르게 작성', technologies: ['Gemini', 'Gmail'], isNew: true },
  { id: 'retail-emp-5', company: 'Woolworths', industry: 'retail', agentType: 'employee_agent', summary: 'Google Meet의 Gemini로 회의 자동 녹음, 전사, 요약하여 주요 실행 항목 빠르게 확인', technologies: ['Google Meet', 'Gemini'], isNew: true },

  // 크리에이티브 에이전트
  { id: 'retail-cre-1', company: 'Ipiranga', industry: 'retail', agentType: 'creative_agent', summary: '고객을 위한 30초 이내 개인화된 영화 예고편으로 비디오 콘텐츠 더 빠르게 반복', technologies: ['AI'], isNew: false },
  { id: 'retail-cre-2', company: 'KNITWEL', industry: 'retail', agentType: 'creative_agent', summary: 'Gemini와 Imagen 3로 섬유 및 패턴 설계 시간을 며칠→몇 분으로 단축', technologies: ['Gemini', 'Imagen 3'], metrics: '설계 시간 며칠→몇 분', isNew: true },
  { id: 'retail-cre-3', company: 'Target Corporation', industry: 'retail', agentType: 'creative_agent', summary: 'AI 지원 브랜드 이미지 생성 도구로 소셜 미디어 콘텐츠, 마케팅, 광고에 빠르게 반복', technologies: ['AI'], isNew: false },

  // 코드 에이전트
  { id: 'retail-code-1', company: 'IKEA', industry: 'retail', agentType: 'code_agent', summary: 'BigQuery, Vertex AI, Firebase로 고객이 집에 맞는 가구를 시각화하고 탐색하는 AI 도구 구축', technologies: ['BigQuery', 'Vertex AI', 'Firebase'], isNew: false },
  { id: 'retail-code-2', company: 'Leroy Merlin', industry: 'retail', agentType: 'code_agent', summary: 'Vertex AI로 코드 변경 사항 요약하여 개발자가 프로젝트 더 빠르게 이해하는 Pull Request Analyzer 개발', technologies: ['Vertex AI'], isNew: false },
  { id: 'retail-code-3', company: "L'Oreal", industry: 'retail', agentType: 'code_agent', summary: 'LangChain과 Cloud Run으로 텍스트-투-텍스트 및 텍스트-투-이미지 생성 기능 제공하는 AI 에이전트 개발', technologies: ['LangChain', 'Cloud Run'], isNew: false },
  { id: 'retail-code-4', company: 'Wayfair', industry: 'retail', agentType: 'code_agent', summary: 'Code Assist 파일럿으로 개발자 환경 설정 55% 빠름, 코드 성능 48% 향상', technologies: ['Code Assist'], metrics: '환경 설정 55% 빠름, 코드 성능 48% 향상, 60%가 만족스러운 작업 집중', isNew: false },

  // 데이터 에이전트
  { id: 'retail-data-1', company: 'Backcountry', industry: 'retail', agentType: 'data_agent', summary: 'BigQuery와 Looker로 모든 데이터 분석하여 일일 보고서와 인사이트 제공', technologies: ['BigQuery', 'Looker'], isNew: false },
  { id: 'retail-data-2', company: 'Coop', industry: 'retail', agentType: 'data_agent', summary: 'Vertex AI Forecast로 제품 수요 예측하고 유통 센터 재고 수준 최적화', technologies: ['Vertex AI Forecast'], metrics: '예측 정확도 43% 향상', isNew: false },
  { id: 'retail-data-3', company: 'Estee Lauder Companies', industry: 'retail', agentType: 'data_agent', summary: 'BigQuery로 데이터를 효율적으로 분석하고 운영 효율성 개선', technologies: ['BigQuery'], isNew: false },
  { id: 'retail-data-4', company: 'FIFCO', industry: 'retail', agentType: 'data_agent', summary: 'Vertex AI로 압수된 해양 조개껍데기를 생태계별로 분류하고 원래 서식지로 반환', technologies: ['Vertex AI'], metrics: '36,000개 조개껍데기 90% 이상 정확도로 분류, 450kg 이상 반환', isNew: true },

  // 보안 에이전트
  { id: 'retail-sec-1', company: 'Dunelm', industry: 'retail', agentType: 'security_agent', summary: 'Google Security Operations로 포괄적인 리스크 프로필 생성하고 보안 운영 현대화', technologies: ['Google Security Operations'], isNew: false },
  { id: 'retail-sec-2', company: 'Etsy', industry: 'retail', agentType: 'security_agent', summary: 'AI 기반 Google Security Operations로 로그 관리 및 수집 단순화, 탐지 생성/검토 가속화', technologies: ['Google Security Operations'], isNew: false },
  { id: 'retail-sec-3', company: 'Grupo Boticário', industry: 'retail', agentType: 'security_agent', summary: '실시간 보안 모델로 사기 방지 및 문제 탐지/대응', technologies: ['AI'], isNew: false },
  { id: 'retail-sec-4', company: 'Pernambucanas', industry: 'retail', agentType: 'security_agent', summary: 'Google Cloud OCR 기술로 사기 탐지 개선', technologies: ['Google Cloud OCR'], metrics: '수동 문서 평가 80% 감소', isNew: false },
  { id: 'retail-sec-5', company: 'Wyze Labs', industry: 'retail', agentType: 'security_agent', summary: 'Google 비전 AI 도구로 보안 카메라 시스템에 새로운 AI 기반 이상 감지 기능 출시', technologies: ['Google Vision AI'], isNew: true },

  // ================================================================================
  // 기술 (Technology)
  // ================================================================================

  // 고객 에이전트
  { id: 'tech-cust-1', company: 'Abstrakt', industry: 'technology', agentType: 'customer_agent', summary: 'Vertex AI로 통화 전사하고 실시간으로 감정 평가하여 컨택 센터 고객 경험 향상', technologies: ['Vertex AI'], isNew: false },
  { id: 'tech-cust-2', company: 'ADT', industry: 'technology', agentType: 'customer_agent', summary: '수백만 고객이 홈 보안 선택, 주문, 설정하는 데 도움이 되는 고객 에이전트 구축', technologies: ['AI'], isNew: false },
  { id: 'tech-cust-3', company: 'AMD', industry: 'technology', agentType: 'customer_agent', summary: 'Vertex AI 기반 챗봇으로 SAP 시스템에서 실시간 정보 액세스하여 고객 질문에 빠르게 답변', technologies: ['Vertex AI'], isNew: true },
  { id: 'tech-cust-4', company: 'Character.ai', industry: 'technology', agentType: 'customer_agent', summary: 'Google Cloud AI 서비스 전체 스택으로 매일 테라바이트의 대화를 중단 없이 관리하는 사실적인 대화형 채팅 플랫폼 구축', technologies: ['Google Cloud AI'], isNew: false },

  // 직원 에이전트
  { id: 'tech-emp-1', company: '2bots', industry: 'technology', agentType: 'employee_agent', summary: 'Google Cloud AI 솔루션으로 기업이 고객과 상호작용하는 방식을 변화시키는 챗봇 및 가상 에이전트 제공', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'tech-emp-2', company: 'AMD', industry: 'technology', agentType: 'employee_agent', summary: 'Vertex AI와 Cortex Framework로 현금 흐름 예측 가속화하는 재무 챗봇 구축', technologies: ['Vertex AI', 'Cortex Framework'], isNew: true },
  { id: 'tech-emp-3', company: 'AMD', industry: 'technology', agentType: 'employee_agent', summary: '자연어 처리로 SAP 시스템 정보에 액세스하는 HR 팀용 생성형 AI 챗봇 개발', technologies: ['생성형 AI'], isNew: true },
  { id: 'tech-emp-4', company: 'Box', industry: 'technology', agentType: 'employee_agent', summary: 'Vertex AI 통합하여 딥 러닝 기반 멀웨어 탐지, 비정상적 활동 경보, 자동 콘텐츠 분류 기능 구축', technologies: ['Vertex AI'], isNew: false },
  { id: 'tech-emp-5', company: 'Glean', industry: 'technology', agentType: 'employee_agent', summary: 'Vertex AI와 BigQuery 기반으로 모든 직장 애플리케이션에서 강력하고 통합된 기업 검색 제공', technologies: ['Vertex AI', 'BigQuery'], isNew: false },
  { id: 'tech-emp-6', company: 'Salesforce', industry: 'technology', agentType: 'employee_agent', summary: 'Google Cloud와 협력하여 Agent2Agent(A2A) 개방형 프로토콜로 두 플랫폼에서 작동하는 AI 에이전트 생성', technologies: ['Google Cloud', 'A2A'], isNew: false },
  { id: 'tech-emp-7', company: 'SAP', industry: 'technology', agentType: 'employee_agent', summary: 'SAP Business Technology Platform에서 Vertex AI와 Gemini로 비즈니스 사용자가 자연어로 데이터에서 실행 가능한 인사이트 획득', technologies: ['Vertex AI', 'Gemini'], isNew: false },

  // 크리에이티브 에이전트
  { id: 'tech-cre-1', company: 'Bewe', industry: 'technology', agentType: 'creative_agent', summary: 'Google Cloud 생성형 AI로 중소기업이 고객 관리와 충성도 개선하는 어시스턴트 생성', technologies: ['Google Cloud', '생성형 AI'], isNew: false },
  { id: 'tech-cre-2', company: 'Bosch Digital', industry: 'technology', agentType: 'creative_agent', summary: 'Gemini 모델로 다양한 시장과 인구 통계를 위해 마케팅 콘텐츠 현지화', technologies: ['Gemini'], isNew: false },
  { id: 'tech-cre-3', company: 'Jasper', industry: 'technology', agentType: 'creative_agent', summary: 'Google AI 인프라에서 AI 모델 제품군 훈련하여 온브랜드, 데이터 최적화 자산 더 빠르게 대규모로 제공', technologies: ['Google Cloud AI'], isNew: false },
  { id: 'tech-cre-4', company: 'Typeface', industry: 'technology', agentType: 'creative_agent', summary: '생성형 AI로 브랜드가 대규모로 고객을 참여시키는 매력적인 콘텐츠 생성', technologies: ['생성형 AI'], isNew: false },

  // 코드 에이전트
  { id: 'tech-code-1', company: 'Ai2', industry: 'technology', agentType: 'code_agent', summary: '전체 오픈 AI 모델 포트폴리오를 Vertex AI Model Garden에서 액세스 가능', technologies: ['Vertex AI Model Garden'], isNew: false },
  { id: 'tech-code-2', company: 'Anyscale', industry: 'technology', agentType: 'code_agent', summary: 'Ray 컴퓨팅 엔진으로 Google Cloud GPU와 TPU 사용하여 복잡한 워크로드 확장', technologies: ['Google Cloud', 'GPU', 'TPU'], isNew: false },
  { id: 'tech-code-3', company: 'Anysphere', industry: 'technology', agentType: 'code_agent', summary: 'AI 기반 코드 에디터 Cursor에 Vertex AI의 Gemini와 Claude로 자율 에이전트 및 코드베이스 인식 채팅 통합', technologies: ['Vertex AI', 'Gemini', 'Claude'], isNew: false },
  { id: 'tech-code-4', company: 'Arize AI', industry: 'technology', agentType: 'code_agent', summary: 'Google Cloud와 파트너십으로 조직이 생성형 AI 애플리케이션 개발, 평가, 관찰하도록 지원', technologies: ['Google Cloud', 'Vertex AI', 'GKE'], isNew: false },
  { id: 'tech-code-5', company: 'Meta', industry: 'technology', agentType: 'code_agent', summary: 'Google Cloud와 파트너십으로 Vertex AI에서 Llama 모델 제공', technologies: ['Vertex AI', 'Llama'], isNew: false },
  { id: 'tech-code-6', company: 'Replit', industry: 'technology', agentType: 'code_agent', summary: 'Vertex AI의 Claude 3.5 Sonnet으로 Replit Agent 구동하여 자연어 프롬프트를 작동하는 애플리케이션으로 변환', technologies: ['Vertex AI', 'Claude', 'Cloud Run'], metrics: '100,000개 이상 애플리케이션 배포', isNew: false },
  { id: 'tech-code-7', company: 'Writer', industry: 'technology', agentType: 'code_agent', summary: 'Google Cloud와 NVIDIA로 최대 700억 개 매개변수의 맞춤형 AI 모델용 17개 이상 LLM 구축/훈련', technologies: ['Google Cloud', 'NVIDIA'], isNew: false },

  // 데이터 에이전트
  { id: 'tech-data-1', company: '180 Seguros', industry: 'technology', agentType: 'data_agent', summary: 'Google Cloud AI와 BigQuery로 직원용 데이터 관리 플랫폼 구동', technologies: ['Google Cloud AI', 'BigQuery'], metrics: '쿼리 시간 3배 빠름', isNew: false },
  { id: 'tech-data-2', company: 'Anthropic', industry: 'technology', agentType: 'data_agent', summary: 'Google Cloud와 파트너십으로 Claude 3.5 Sonnet 및 Haiku를 Vertex AI Model Garden에서 제공', technologies: ['Vertex AI Model Garden'], isNew: false },
  { id: 'tech-data-3', company: 'Cohesity', industry: 'technology', agentType: 'data_agent', summary: 'Agentspace와 통합하여 직원에게 더 나은 의사 결정을 위한 더 큰 데이터 발견 제공', technologies: ['Agentspace'], isNew: false },
  { id: 'tech-data-4', company: 'Hugging Face', industry: 'technology', agentType: 'data_agent', summary: 'Google과 오픈 사이언스, 오픈 소스, 클라우드 및 하드웨어 전반에서 협력', technologies: ['Google Cloud'], isNew: false },
  { id: 'tech-data-5', company: 'Mistral AI', industry: 'technology', agentType: 'data_agent', summary: 'Google Cloud와 파트너십으로 Codestral 및 Mistral Large 24.11을 Vertex AI에서 제공', technologies: ['Vertex AI'], isNew: false },
  { id: 'tech-data-6', company: 'Oracle', industry: 'technology', agentType: 'data_agent', summary: 'OCI에서 실행되는 Oracle Database 서비스를 BigQuery, Gemini, Vertex AI와 통합', technologies: ['BigQuery', 'Gemini', 'Vertex AI'], isNew: false },

  // 보안 에이전트
  { id: 'tech-sec-1', company: 'Ajax Systems', industry: 'technology', agentType: 'security_agent', summary: 'Gemini로 Drive 문서에 보안 수준별로 자동 태그 지정', technologies: ['Gemini'], metrics: '한 달 만에 모든 문서의 50%에 태그, 매달 1.5배씩 증가', isNew: true },
  { id: 'tech-sec-2', company: 'Wiz', industry: 'technology', agentType: 'security_agent', summary: 'Vertex AI 통합으로 보안 팀이 AI 모델 실행 관련 보안 리스크 모니터링/관리', technologies: ['Vertex AI'], isNew: false },

  // ================================================================================
  // 통신 (Telecommunications)
  // ================================================================================

  // 고객 에이전트
  { id: 'telco-cust-1', company: 'Banglalink', industry: 'telecommunications', agentType: 'customer_agent', summary: 'Gemini 기반 챗봇 REN으로 영어, 벵골어, Banglish로 고객 서비스 처리', technologies: ['Gemini'], metrics: '고객 상호작용 95% 자율 관리, 4%만 인간 개입 필요', isNew: true },
  { id: 'telco-cust-2', company: 'Bell Canada', industry: 'telecommunications', agentType: 'customer_agent', summary: 'AI 기반 에이전트와 Agent Assist로 맞춤형 컨택 센터 솔루션 구축', technologies: ['AI'], metrics: '고객 운영 전반에서 2,000만 달러 비용 절감', isNew: false },
  { id: 'telco-cust-3', company: 'Nomad eSIM', industry: 'telecommunications', agentType: 'customer_agent', summary: 'Google Workspace의 Gemini로 고객 지원 에이전트가 문제 티켓에 더 효율적으로 응답', technologies: ['Google Workspace', 'Gemini'], isNew: true },
  { id: 'telco-cust-4', company: 'Telecom Italia', industry: 'telecommunications', agentType: 'customer_agent', summary: 'Google 기반 음성 에이전트로 많은 고객 전화에 응답하여 효율성 20% 향상', technologies: ['Google Cloud'], metrics: '효율성 20% 향상', isNew: false },

  // 직원 에이전트
  { id: 'telco-emp-1', company: 'Nomad eSIM', industry: 'telecommunications', agentType: 'employee_agent', summary: 'Gemini 모델로 표준 절차 및 문서의 초기 초안 빠르게 준비하여 영업 속도 가속화', technologies: ['Gemini'], metrics: '영업 마감률 15% 향상, SOP 초안 작성 시간 10% 절약', isNew: true },
  { id: 'telco-emp-2', company: 'TELUS', industry: 'telecommunications', agentType: 'employee_agent', summary: 'Vertex AI에 Fuel iX 플랫폼 구축하여 57,000명 이상 팀원에게 40개 이상 AI 모델 액세스 제공', technologies: ['Vertex AI', 'Claude', 'Gemini'], metrics: '9,000만 달러 이상 이점, 500,000시간 이상 시간 절약, 코드 배포 30% 빠름', isNew: true },
  { id: 'telco-emp-3', company: 'TIM Brasil', industry: 'telecommunications', agentType: 'employee_agent', summary: 'Google Cloud 생성형 AI로 고객 서비스 통화 오디오 전사 후 분류, 요약, 자격 부여', technologies: ['Google Cloud', '생성형 AI'], isNew: false },
  { id: 'telco-emp-4', company: 'Verizon', industry: 'telecommunications', agentType: 'employee_agent', summary: 'AI 기반 기업 검색으로 네트워크 운영 및 고객 경험 팀이 답변 더 빠르게 획득', technologies: ['AI'], isNew: false },
  { id: 'telco-emp-5', company: 'Verizon', industry: 'telecommunications', agentType: 'employee_agent', summary: 'Google Workspace의 Gemini로 이메일 및 긴 문서 작성/다듬기/요약하고 실행 항목 식별', technologies: ['Google Workspace', 'Gemini'], metrics: '82%가 일상 업무에 긍정적 영향, 74%가 시간 절약', isNew: true },
  { id: 'telco-emp-6', company: 'Vodafone', industry: 'telecommunications', agentType: 'employee_agent', summary: 'Vertex AI로 800개 이상 통신 사업자와의 10,000개 이상 계약에서 특정 상업 조건 검색/이해', technologies: ['Vertex AI'], isNew: false },
  { id: 'telco-emp-7', company: 'Vodafone', industry: 'telecommunications', agentType: 'employee_agent', summary: 'Quantexa와 협력하여 Google Cloud와 Decision Intelligence 플랫폼에 구축된 360도 고객 뷰 제공', technologies: ['Google Cloud', 'Quantexa'], isNew: false },

  // 코드 에이전트
  { id: 'telco-code-1', company: 'Nokia', industry: 'telecommunications', agentType: 'code_agent', summary: 'Vertex AI와 Gemini 1.5 Pro로 개발자가 풍부한 AI 기능으로 5G 애플리케이션 더 빠르게 생성하는 Network as Code 플랫폼 향상', technologies: ['Vertex AI', 'Gemini 1.5 Pro'], isNew: false },

  // 데이터 에이전트
  { id: 'telco-data-1', company: 'BT Group', industry: 'telecommunications', agentType: 'data_agent', summary: 'AI로 향상된 고객 경험과 보안을 위한 데이터 민주화 제공', technologies: ['AI'], isNew: false },
  { id: 'telco-data-2', company: 'Cox 2M', industry: 'telecommunications', agentType: 'data_agent', summary: 'Gemini와 ThoughtSpot를 사용한 자연어 채팅과 생성형 AI로 비기술 사용자의 인사이트 도출 시간 88% 단축', technologies: ['Gemini', 'ThoughtSpot'], metrics: '인사이트 도출 시간 88% 단축', isNew: false },
  { id: 'telco-data-3', company: 'Orange', industry: 'telecommunications', agentType: 'data_agent', summary: 'Google Distributed Cloud에서 AI로 네트워크 성능 개선 및 초반응성 번역 기능 제공', technologies: ['Google Distributed Cloud'], isNew: false },

  // 보안 에이전트
  { id: 'telco-sec-1', company: 'Vertiv', industry: 'telecommunications', agentType: 'security_agent', summary: 'AI 기반 Google Security Operations 플랫폼으로 3배의 사이버 이벤트 탐지, 조사 50% 더 빠르게 종료', technologies: ['Google Security Operations'], metrics: '사이버 이벤트 탐지 3배, 조사 50% 빠름', isNew: false },
  { id: 'telco-sec-2', company: 'Vodafone', industry: 'telecommunications', agentType: 'security_agent', summary: 'Vertex AI와 오픈 소스 도구로 50,000명 이상 내부 고객에게 서비스하는 AI 보안 거버넌스 레이어 구축', technologies: ['Vertex AI', 'Google Cloud'], isNew: false },
];

// 통계 계산 함수들
export const getUseCasesByIndustry = (industryId: string) =>
  usecases.filter((uc) => uc.industry === industryId);

export const getUseCasesByAgentType = (agentTypeId: string) =>
  usecases.filter((uc) => uc.agentType === agentTypeId);

export const getUseCasesByIndustryAndAgent = (industryId: string, agentTypeId: string) =>
  usecases.filter((uc) => uc.industry === industryId && uc.agentType === agentTypeId);

export const getNewUseCases = () => usecases.filter((uc) => uc.isNew);

export const getAllTechnologies = () => {
  const techSet = new Set<string>();
  usecases.forEach((uc) => uc.technologies.forEach((t) => techSet.add(t)));
  return Array.from(techSet).sort();
};

export const getIndustryStats = () => {
  const stats: Record<string, number> = {};
  usecases.forEach((uc) => {
    stats[uc.industry] = (stats[uc.industry] || 0) + 1;
  });
  return stats;
};

export const getAgentTypeStats = () => {
  const stats: Record<string, number> = {};
  usecases.forEach((uc) => {
    stats[uc.agentType] = (stats[uc.agentType] || 0) + 1;
  });
  return stats;
};

export const getMatrixStats = () => {
  const matrix: Record<string, Record<string, number>> = {};
  usecases.forEach((uc) => {
    if (!matrix[uc.industry]) matrix[uc.industry] = {};
    matrix[uc.industry][uc.agentType] = (matrix[uc.industry][uc.agentType] || 0) + 1;
  });
  return matrix;
};
