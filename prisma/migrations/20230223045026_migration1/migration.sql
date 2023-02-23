-- CreateTable
CREATE TABLE "userlogin" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,

    CONSTRAINT "userlogin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usersignupdata" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "usersignupdata_pkey" PRIMARY KEY ("id")
);
