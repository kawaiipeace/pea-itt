-- AlterTable
ALTER TABLE "student_profile" ADD COLUMN     "hours" DECIMAL(65,30) DEFAULT 0;

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
