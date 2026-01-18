-- CreateTable
CREATE TABLE "industries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "agent_types" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "technologies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "usecase_technologies" (
    "useCaseId" TEXT NOT NULL,
    "technologyId" INTEGER NOT NULL,

    PRIMARY KEY ("useCaseId", "technologyId"),
    CONSTRAINT "usecase_technologies_useCaseId_fkey" FOREIGN KEY ("useCaseId") REFERENCES "usecases" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "usecase_technologies_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "usecases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company" TEXT NOT NULL,
    "industryId" TEXT NOT NULL,
    "agentTypeId" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "metrics" TEXT,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "usecases_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "industries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "usecases_agentTypeId_fkey" FOREIGN KEY ("agentTypeId") REFERENCES "agent_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "technologies_name_key" ON "technologies"("name");

-- CreateIndex
CREATE INDEX "usecases_industryId_idx" ON "usecases"("industryId");

-- CreateIndex
CREATE INDEX "usecases_agentTypeId_idx" ON "usecases"("agentTypeId");

-- CreateIndex
CREATE INDEX "usecases_isNew_idx" ON "usecases"("isNew");
