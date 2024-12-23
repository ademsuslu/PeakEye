-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "userAvatar" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "useeDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);
