import { PrismaClient as PostgresPrismaClient } from '@prisma/client';
import Database from 'better-sqlite3';
import path from 'path';

// SQLite 데이터베이스 연결
const sqliteDb = new Database(path.join(process.cwd(), 'prisma/dev.db.backup'));

// PostgreSQL (Supabase) 클라이언트
const postgres = new PostgresPrismaClient();

async function migrate() {
  console.log('=== SQLite -> Supabase 마이그레이션 시작 ===\n');

  try {
    // 1. Industries 마이그레이션
    console.log('1. Industries 마이그레이션...');
    const industries = sqliteDb.prepare('SELECT * FROM industries').all() as any[];
    for (const industry of industries) {
      await postgres.industry.upsert({
        where: { id: industry.id },
        update: { name: industry.name, color: industry.color, icon: industry.icon },
        create: { id: industry.id, name: industry.name, color: industry.color, icon: industry.icon },
      });
    }
    console.log(`   ${industries.length}개 완료`);

    // 2. Agent Types 마이그레이션
    console.log('2. Agent Types 마이그레이션...');
    const agentTypes = sqliteDb.prepare('SELECT * FROM agent_types').all() as any[];
    for (const agent of agentTypes) {
      await postgres.agentType.upsert({
        where: { id: agent.id },
        update: { name: agent.name, icon: agent.icon, description: agent.description },
        create: { id: agent.id, name: agent.name, icon: agent.icon, description: agent.description },
      });
    }
    console.log(`   ${agentTypes.length}개 완료`);

    // 3. Technologies 마이그레이션
    console.log('3. Technologies 마이그레이션...');
    const technologies = sqliteDb.prepare('SELECT * FROM technologies').all() as any[];
    for (const tech of technologies) {
      await postgres.technology.upsert({
        where: { id: tech.id },
        update: { name: tech.name },
        create: { id: tech.id, name: tech.name },
      });
    }
    console.log(`   ${technologies.length}개 완료`);

    // 4. Use Cases 마이그레이션
    console.log('4. Use Cases 마이그레이션...');
    const useCases = sqliteDb.prepare('SELECT * FROM usecases').all() as any[];
    let useCaseCount = 0;
    for (const uc of useCases) {
      await postgres.useCase.upsert({
        where: { id: uc.id },
        update: {
          company: uc.company,
          industryId: uc.industryId,
          agentTypeId: uc.agentTypeId,
          summary: uc.summary,
          summaryKo: uc.summaryKo,
          summaryEn: uc.summaryEn,
          metrics: uc.metrics,
          isNew: uc.isNew === 1,
        },
        create: {
          id: uc.id,
          company: uc.company,
          industryId: uc.industryId,
          agentTypeId: uc.agentTypeId,
          summary: uc.summary,
          summaryKo: uc.summaryKo,
          summaryEn: uc.summaryEn,
          metrics: uc.metrics,
          isNew: uc.isNew === 1,
        },
      });
      useCaseCount++;
      if (useCaseCount % 100 === 0) {
        console.log(`   진행: ${useCaseCount}/${useCases.length}`);
      }
    }
    console.log(`   ${useCases.length}개 완료`);

    // 5. UseCase-Technology 관계 마이그레이션
    console.log('5. UseCase-Technology 관계 마이그레이션...');
    const ucTechs = sqliteDb.prepare('SELECT * FROM usecase_technologies').all() as any[];
    let techRelCount = 0;
    for (const rel of ucTechs) {
      try {
        await postgres.useCaseTechnology.upsert({
          where: {
            useCaseId_technologyId: {
              useCaseId: rel.useCaseId,
              technologyId: rel.technologyId,
            },
          },
          update: {},
          create: {
            useCaseId: rel.useCaseId,
            technologyId: rel.technologyId,
          },
        });
        techRelCount++;
      } catch (e) {
        // 중복 무시
      }
      if (techRelCount % 500 === 0) {
        console.log(`   진행: ${techRelCount}/${ucTechs.length}`);
      }
    }
    console.log(`   ${techRelCount}개 완료`);

    // 최종 검증
    console.log('\n=== 마이그레이션 검증 ===');
    const pgIndustries = await postgres.industry.count();
    const pgAgents = await postgres.agentType.count();
    const pgTechs = await postgres.technology.count();
    const pgUseCases = await postgres.useCase.count();
    const pgRelations = await postgres.useCaseTechnology.count();

    console.log(`Industries: ${pgIndustries}`);
    console.log(`Agent Types: ${pgAgents}`);
    console.log(`Technologies: ${pgTechs}`);
    console.log(`Use Cases: ${pgUseCases}`);
    console.log(`UseCase-Technology Relations: ${pgRelations}`);

    console.log('\n=== 마이그레이션 완료! ===');

  } catch (error) {
    console.error('마이그레이션 오류:', error);
    throw error;
  } finally {
    sqliteDb.close();
    await postgres.$disconnect();
  }
}

migrate();
