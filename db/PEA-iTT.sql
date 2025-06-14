CREATE TABLE public."role" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) UNIQUE NOT NULL,
  "description" TEXT
);

CREATE TABLE public."department" (
  "dept_id" SERIAL PRIMARY KEY,
  "dept_name" VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE public."user" (
  "id" SERIAL PRIMARY KEY,
  "role_id" INT NOT NULL,
  "department_id" INT,
  "fname" VARCHAR(255),
  "lname" VARCHAR(255),
  "phone_number" VARCHAR(20),
  "email" VARCHAR(255) UNIQUE,
  "password_hash" VARCHAR(255),
  "created_at" TIMESTAMP DEFAULT 'CURRENT_TIMESTAMP',
  "updated_at" TIMESTAMP DEFAULT 'CURRENT_TIMESTAMP'
);

CREATE TABLE public."mentor_profile" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT UNIQUE NOT NULL
);

CREATE TABLE public."student_profile" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT UNIQUE NOT NULL,
  "student_id" VARCHAR(50) UNIQUE NOT NULL,
  "mentor_id" INT,
  "picture" BYTEA,
  "university" VARCHAR(255),
  "start_date" TIMESTAMP,
  "end_date" TIMESTAMP
);

CREATE TABLE public."check_time" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL,
  "time" TIMESTAMP DEFAULT 'CURRENT_TIMESTAMP',
  "type_check" VARCHAR(30),
  "location" VARCHAR(255),
  "note" TEXT,
  "latitude" DECIMAL(10,7),
  "longitude" DECIMAL(10,7)
);

CREATE TABLE public."leave_request" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL,
  "leave_datetime" TIMESTAMP DEFAULT 'CURRENT_TIMESTAMP',
  "reason" TEXT,
  "file" BYTEA,
  "status" VARCHAR(30) DEFAULT 'pending',
  "approver" INT,
  "approved_at" TIMESTAMP
);

CREATE TABLE public."admin_log" (
  "id" SERIAL PRIMARY KEY,
  "admin_id" INT NOT NULL,
  "action" TEXT,
  "created_at" TIMESTAMP DEFAULT 'CURRENT_TIMESTAMP'
);

COMMENT ON TABLE public."role" IS 'บทบาทของผู้ใช้งานในระบบ';

COMMENT ON TABLE public."department" IS 'แผนกหรือภาควิชาของ mentor และ student';

COMMENT ON TABLE public."user" IS 'เก็บข้อมูลผู้ใช้งาน';

COMMENT ON TABLE public."mentor_profile" IS 'ข้อมูลเพิ่มเติมของ Mentor (สามารถขยายในอนาคตได้)';

COMMENT ON TABLE public."student_profile" IS 'ข้อมูลเพิ่มเติมของ Student';

COMMENT ON TABLE public."check_time" IS 'เก็บข้อมูลการ Check-in Check-out การลงเวลา';

COMMENT ON COLUMN public."check_time"."user_id" IS 'ID ของผู้เข้าระบบ';

COMMENT ON COLUMN public."check_time"."type_check" IS 'Check-in, Check-out';

COMMENT ON TABLE public."leave_request" IS 'เก็บข้อมูลการขอลา';

COMMENT ON COLUMN public."leave_request"."user_id" IS 'ID ของผู้เข้าระบบ';

COMMENT ON TABLE public."admin_log" IS 'บันทึกการทำงานของผู้ดูแลระบบ';

ALTER TABLE public."user" ADD FOREIGN KEY ("role_id") REFERENCES public."role" ("id");

ALTER TABLE public."user" ADD FOREIGN KEY ("department_id") REFERENCES public."department" ("dept_id");

ALTER TABLE public."mentor_profile" ADD FOREIGN KEY ("user_id") REFERENCES public."user" ("id");

ALTER TABLE public."student_profile" ADD FOREIGN KEY ("user_id") REFERENCES public."user" ("id");

ALTER TABLE public."student_profile" ADD FOREIGN KEY ("mentor_id") REFERENCES public."mentor_profile" ("id");

ALTER TABLE public."check_time" ADD FOREIGN KEY ("user_id") REFERENCES public."user" ("id");

ALTER TABLE public."leave_request" ADD FOREIGN KEY ("user_id") REFERENCES public."user" ("id");

ALTER TABLE public."leave_request" ADD FOREIGN KEY ("approver") REFERENCES public."user" ("id");

ALTER TABLE public."admin_log" ADD FOREIGN KEY ("admin_id") REFERENCES public."user" ("id");
