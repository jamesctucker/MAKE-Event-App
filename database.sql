CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username character varying(16) NOT NULL,
    password character varying(1000) NOT NULL,
    name character varying NOT NULL,
    dob date NOT NULL,
    email character varying NOT NULL,
    phone character varying(30),
    hometown character varying NOT NULL,
    gender_id integer NOT NULL REFERENCES genders(id),
    facebook_username character varying,
    employer character varying,
    job_title character varying,
    food_preferences character varying,
    preferred_transportation character varying(48) NOT NULL,
    comments character varying(128),
    auth_id integer DEFAULT 1 REFERENCES auth(id),
    country_id integer REFERENCES countries(id)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX person_pk ON person(id int4_ops);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    event_name character varying NOT NULL,
    event_start_date character varying NOT NULL,
    event_host character varying NOT NULL,
    event_description character varying NOT NULL,
    person_id integer REFERENCES person(id),
    event_city character varying,
    event_country character varying,
    event_end_date character varying,
    event_time character varying
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX events_pk ON events(id int4_ops);

CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    country_name character varying(80) NOT NULL,
    phonecode integer NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX countries_pk ON countries(id int4_ops);

CREATE TABLE genders (
    id SERIAL PRIMARY KEY,
    gender character varying NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX genders_pk ON genders(id int4_ops);

CREATE TABLE registration (
    id SERIAL PRIMARY KEY,
    person_id integer NOT NULL REFERENCES person(id),
    event_id integer NOT NULL REFERENCES events(id)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX registration_pk ON registration(id int4_ops);

CREATE TABLE auth (
    id SERIAL PRIMARY KEY,
    type character varying(16) NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX auth_pk ON auth(id int4_ops);

CREATE TABLE applicant (
    id SERIAL PRIMARY KEY,
    person_id integer NOT NULL REFERENCES person(id),
    yes_or_no boolean NOT NULL,
    yes_or_no2 boolean NOT NULL,
    preferred_transportation character varying NOT NULL,
    comments character varying NOT NULL,
    role_id integer NOT NULL REFERENCES applicant_openings(id)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX applicant_pk ON applicant(id int4_ops);

CREATE TABLE applicant_openings (
    id SERIAL PRIMARY KEY,
    role character varying NOT NULL,
    description character varying NOT NULL,
    requirements character varying NOT NULL,
    event_id integer NOT NULL REFERENCES events(id)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX applicant_openings_pk ON applicant_openings(id int4_ops);

INSERT INTO "public"."countries"("id","country_name","phonecode")
VALUES
(18,E'BANGLADESH',880),
(25,E'BHUTAN',975),
(32,E'BRUNEI',673),
(36,E'CAMBODIA',855),
(44,E'CHINA',86),
(96,E'HONG KONG',852),
(99,E'INDIA',91),
(100,E'INDONESIA',62),
(107,E'JAPAN',81),
(112,E'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF',850),
(113,E'KOREA, REPUBLIC OF',82),
(116,E'LAO PEOPLE\'S DEMOCRATIC REPUBLIC',856),
(125,E'MACAO',853),
(129,E'MALAYSIA',60),
(146,E'MYANMAR',95),
(149,E'NEPAL',977),
(162,E'PAKISTAN',92),
(166,E'PAPUA NEW GUINEA',675),
(169,E'PHILIPPINES',63),
(192,E'SINGAPORE',65),
(200,E'SRI LANKA',94),
(208,E'TAIWAN, PROVINCE OF CHINA',886),
(211,E'THAILAND',66),
(218,E'TURKEY',90),
(219,E'TURKMENISTAN',7370),
(225,E'UNITED KINGDOM',44),
(226,E'UNITED STATES',1),
(232,E'VIET NAM',84),
(233,E'OTHER',0);