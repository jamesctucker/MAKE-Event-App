CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "Events" (
	"id" serial NOT NULL,
	"event_name" varchar NOT NULL,
	"event_date" DATE NOT NULL,
	"event_location" varchar NOT NULL,
	"event_theme" varchar NOT NULL,
	CONSTRAINT Events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Volunteer Openings" (
	"id" serial NOT NULL,
	"role" varchar NOT NULL,
	"description" varchar NOT NULL,
	CONSTRAINT Volunteer_Openings_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Registered Attendees" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"dob" DATE NOT NULL,
	"email" varchar NOT NULL,
	"hometown" varchar NOT NULL,
	"country" varchar NOT NULL,
	"phone" int,
	"gender" varchar NOT NULL,
	"facebook_username" varchar,
	"place_of_employment" varchar,
	"job title" varchar,
	"preferred_transportation" varchar NOT NULL,
	"food_preferences" varchar NOT NULL,
	"volunteering?" varchar,
	CONSTRAINT Registered_Attendees_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Roles to Apply For" (
	"id" serial NOT NULL,
	"role" varchar NOT NULL,
	"description" varchar NOT NULL,
	"requirements" varchar NOT NULL,
	CONSTRAINT Roles_to_Apply_For_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Announcements" (
	"id" serial NOT NULL,
	"anouncement_title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"apply_for" varchar NOT NULL,
	CONSTRAINT Announcements_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Countries" (
	"id" serial NOT NULL,
	"country_name" varchar NOT NULL,
	CONSTRAINT Countries_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Genders" (
	"id" serial NOT NULL,
	"gender" varchar NOT NULL,
	CONSTRAINT Genders_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "Applicants" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"dob" DATE NOT NULL,
	"email" varchar NOT NULL,
	"hometown" varchar NOT NULL,
	"country" varchar NOT NULL,
	"phone" int,
	"gender" varchar NOT NULL,
	"facebook_username" varchar,
	"place_of_employment" varchar,
	"job title" varchar,
	"preferred_transportation" varchar NOT NULL,
	"yes_or_no" BOOLEAN NOT NULL,
	"yes_or_no?" BOOLEAN NOT NULL,
	CONSTRAINT Applicants_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);









