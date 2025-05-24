-- CreateTable
CREATE TABLE "ResultatImprimerie" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "pseudo" TEXT NOT NULL,

    CONSTRAINT "ResultatImprimerie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResultatRouteDeLaSoie" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "pseudo" TEXT NOT NULL,

    CONSTRAINT "ResultatRouteDeLaSoie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResultatCercleDesSavoirs" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "pseudo" TEXT NOT NULL,

    CONSTRAINT "ResultatCercleDesSavoirs_pkey" PRIMARY KEY ("id")
);
