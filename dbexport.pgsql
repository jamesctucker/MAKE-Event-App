--
-- PostgreSQL database dump
--

-- Dumped from database version 11.1
-- Dumped by pg_dump version 11.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: applicant; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.applicant (
    id integer NOT NULL,
    person_id integer NOT NULL,
    yes_or_no boolean NOT NULL,
    yes_or_no2 boolean NOT NULL,
    preferred_transportation character varying NOT NULL,
    comments character varying NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE public.applicant OWNER TO jamestucker;

--
-- Name: applicant_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.applicant_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.applicant_id_seq OWNER TO jamestucker;

--
-- Name: applicant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.applicant_id_seq OWNED BY public.applicant.id;


--
-- Name: applicant_openings; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.applicant_openings (
    id integer NOT NULL,
    role character varying NOT NULL,
    description character varying NOT NULL,
    requirements character varying NOT NULL,
    event_id integer NOT NULL
);


ALTER TABLE public.applicant_openings OWNER TO jamestucker;

--
-- Name: applicant_openings_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.applicant_openings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.applicant_openings_id_seq OWNER TO jamestucker;

--
-- Name: applicant_openings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.applicant_openings_id_seq OWNED BY public.applicant_openings.id;


--
-- Name: auth; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.auth (
    id integer NOT NULL,
    type character varying(16) NOT NULL
);


ALTER TABLE public.auth OWNER TO jamestucker;

--
-- Name: auth_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.auth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_id_seq OWNER TO jamestucker;

--
-- Name: auth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.auth_id_seq OWNED BY public.auth.id;


--
-- Name: countries; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    country_name character varying(80) NOT NULL,
    phonecode integer NOT NULL
);


ALTER TABLE public.countries OWNER TO jamestucker;

--
-- Name: countries_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_id_seq OWNER TO jamestucker;

--
-- Name: countries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;


--
-- Name: country_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.country_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.country_seq OWNER TO jamestucker;

--
-- Name: events; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.events (
    id integer NOT NULL,
    event_name character varying NOT NULL,
    event_start_date character varying NOT NULL,
    event_host character varying NOT NULL,
    event_description character varying NOT NULL,
    person_id integer,
    event_city character varying,
    event_country character varying,
    event_end_date character varying,
    event_time character varying
);


ALTER TABLE public.events OWNER TO jamestucker;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO jamestucker;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: genders; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.genders (
    id integer NOT NULL,
    gender character varying NOT NULL
);


ALTER TABLE public.genders OWNER TO jamestucker;

--
-- Name: genders_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.genders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genders_id_seq OWNER TO jamestucker;

--
-- Name: genders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.genders_id_seq OWNED BY public.genders.id;


--
-- Name: person; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.person (
    id integer NOT NULL,
    username character varying(16) NOT NULL,
    password character varying(1000) NOT NULL,
    name character varying NOT NULL,
    dob date NOT NULL,
    email character varying NOT NULL,
    phone character varying(30),
    hometown character varying NOT NULL,
    gender_id integer NOT NULL,
    facebook_username character varying,
    employer character varying,
    job_title character varying,
    food_preferences character varying,
    preferred_transportation character varying(48) NOT NULL,
    comments character varying(128),
    auth_id integer DEFAULT 1,
    country_id integer
);


ALTER TABLE public.person OWNER TO jamestucker;

--
-- Name: person_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_id_seq OWNER TO jamestucker;

--
-- Name: person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.person_id_seq OWNED BY public.person.id;


--
-- Name: registration; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.registration (
    id integer NOT NULL,
    person_id integer NOT NULL,
    event_id integer NOT NULL
);


ALTER TABLE public.registration OWNER TO jamestucker;

--
-- Name: registration_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.registration_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.registration_id_seq OWNER TO jamestucker;

--
-- Name: registration_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.registration_id_seq OWNED BY public.registration.id;


--
-- Name: volunteer; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.volunteer (
    id integer NOT NULL,
    person_id integer NOT NULL,
    preferred_transportation character varying NOT NULL,
    comments character varying NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE public.volunteer OWNER TO jamestucker;

--
-- Name: volunteer_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.volunteer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.volunteer_id_seq OWNER TO jamestucker;

--
-- Name: volunteer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.volunteer_id_seq OWNED BY public.volunteer.id;


--
-- Name: volunteer_openings; Type: TABLE; Schema: public; Owner: jamestucker
--

CREATE TABLE public.volunteer_openings (
    id integer NOT NULL,
    role character varying NOT NULL,
    description character varying NOT NULL,
    event_id integer NOT NULL
);


ALTER TABLE public.volunteer_openings OWNER TO jamestucker;

--
-- Name: volunteer_openings_id_seq; Type: SEQUENCE; Schema: public; Owner: jamestucker
--

CREATE SEQUENCE public.volunteer_openings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.volunteer_openings_id_seq OWNER TO jamestucker;

--
-- Name: volunteer_openings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jamestucker
--

ALTER SEQUENCE public.volunteer_openings_id_seq OWNED BY public.volunteer_openings.id;


--
-- Name: applicant id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.applicant ALTER COLUMN id SET DEFAULT nextval('public.applicant_id_seq'::regclass);


--
-- Name: applicant_openings id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.applicant_openings ALTER COLUMN id SET DEFAULT nextval('public.applicant_openings_id_seq'::regclass);


--
-- Name: auth id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.auth ALTER COLUMN id SET DEFAULT nextval('public.auth_id_seq'::regclass);


--
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.genders ALTER COLUMN id SET DEFAULT nextval('public.genders_id_seq'::regclass);


--
-- Name: person id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.person ALTER COLUMN id SET DEFAULT nextval('public.person_id_seq'::regclass);


--
-- Name: registration id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.registration ALTER COLUMN id SET DEFAULT nextval('public.registration_id_seq'::regclass);


--
-- Name: volunteer id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.volunteer ALTER COLUMN id SET DEFAULT nextval('public.volunteer_id_seq'::regclass);


--
-- Name: volunteer_openings id; Type: DEFAULT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.volunteer_openings ALTER COLUMN id SET DEFAULT nextval('public.volunteer_openings_id_seq'::regclass);


--
-- Data for Name: applicant; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.applicant (id, person_id, yes_or_no, yes_or_no2, preferred_transportation, comments, role_id) FROM stdin;
\.


--
-- Data for Name: applicant_openings; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.applicant_openings (id, role, description, requirements, event_id) FROM stdin;
\.


--
-- Data for Name: auth; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.auth (id, type) FROM stdin;
1	User
2	Admin
\.


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.countries (id, country_name, phonecode) FROM stdin;
233	OTHER	0
32	BRUNEI	673
18	BANGLADESH	880
25	BHUTAN	975
36	CAMBODIA	855
44	CHINA	86
96	HONG KONG	852
99	INDIA	91
100	INDONESIA	62
107	JAPAN	81
112	KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF	850
113	KOREA, REPUBLIC OF	82
116	LAO PEOPLE'S DEMOCRATIC REPUBLIC	856
125	MACAO	853
129	MALAYSIA	60
146	MYANMAR	95
149	NEPAL	977
162	PAKISTAN	92
166	PAPUA NEW GUINEA	675
169	PHILIPPINES	63
192	SINGAPORE	65
200	SRI LANKA	94
208	TAIWAN, PROVINCE OF CHINA	886
211	THAILAND	66
218	TURKEY	90
219	TURKMENISTAN	7370
225	UNITED KINGDOM	44
226	UNITED STATES	1
232	VIET NAM	84
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.events (id, event_name, event_start_date, event_host, event_description, person_id, event_city, event_country, event_end_date, event_time) FROM stdin;
5	Lower Mekong Regional Workshop	2019-11-20	Ho Chi Minh Royal Resort	This year-long project will bring together leaders from the Lower Mekong region to discuss the complex and unique issues facing women.	\N	Saigon	Vietnam	2019-11-22	7 AM - 9 PM
2	ASEAN CommuniCon	2021-06-08	Villa Sookam 	This year-long project will bring together leaders from the Lower Mekong region to discuss the complex and unique issues facing women.	\N	Neming	Laos	2021-06-12	5 - 7 PM
3	LaosEducators 19	2019-02-06	Bali Hotel	This year-long project will bring together leaders from the Lower Mekong region to discuss the complex and unique issues facing women.	\N	Java	Indonesia	2019-02-07	5 - 11 PM
4	Sino Leadership Conference	2019-03-24	Sichuan Sheng, Chengdu Shi, Qingyang Qu, Shuncheng St	This year-long project will bring together leaders from the Lower Mekong region to discuss the complex and unique issues facing women.	\N	Chengdu	China	2019-07-27	11 AM - 8 PM
7	Leadership Forum	2019/08/24	King's Palace	This year-long project will bring together leaders from the Lower Mekong region to discuss the complex and unique issues facing women.	\N	Bangkok	Thailand	2019/08/27	9:00 AM - 8:00 PM 
21	Singapore Women's Leadership Forum	2019/07/22	Roaring Tiger Hotel and Conference Center	This will be the largest ever gathering of female educators in Singapore.	\N	Singapore	Singapore	2019/07/24	9:00 AM - 5:00 PM
6	Emerging Leaders Malaysia 2019	2019/07/07	Victory Event Center	This year-long project will bring together leaders from the Lower Mekong region to discuss the complex and unique issues facing women.	\N	Kuala Lumpur	Malaysia	2019/07/09	9:00 AM - 5:00 PM
22	Event Name	Start Date (YYYY/MM/DD)	Event Host	Description	\N	Event City	Event Country	End Date (YYYY/MM/DD)	Event Time (HH:MM - HH:MM)
23	Thai Educator's Forum	08/03/2019	Royal Event Center	A place for Thai educators to sharpen their communication skills.	\N	Phuket	Thailand	08/05/2019	9:00 AM - 5:00 PM
1	Communication Workshop	2019-12-07	King's Palace Center	This year-long project will bring together leaders from the Lower Mekong region to discuss the complex and unique issues facing women.	\N	Phnom Phenh	Cambodia	2019-12-08	9 AM - 5 PM
24	Educator's Forum 2020	Start Date (YYYY/MM/DD)	Event Host	Description	\N	Event City	Japan	End Date (YYYY/MM/DD)	Event Time (HH:MM - HH:MM)
25	Thai Educator's Conference 2020	Start Date (YYYY/MM/DD)	Event Host	Description	\N	Chang Mai	Thailand	End Date (YYYY/MM/DD)	Event Time (HH:MM - HH:MM)
\.


--
-- Data for Name: genders; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.genders (id, gender) FROM stdin;
1	male
2	female
3	non-binary
\.


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.person (id, username, password, name, dob, email, phone, hometown, gender_id, facebook_username, employer, job_title, food_preferences, preferred_transportation, comments, auth_id, country_id) FROM stdin;
5	marvelousmary	$2b$10$m2Ufyv1ua59G2l1Of0SApeonfmhspsGlC3.k/O5jr/TyTrbXbHsW.	Mary Soo	1976-10-03	mary@doe.com	67 679 8888	Jakarta	2	@marydoe	National University of Indonesia	Researcher	none	flight	\N	1	100
7	lucywong	$2b$10$mnjBMHiQgnlFk1T52pj5fuxmUEY4HMPfLxqcPWMbzXNwWDiSysVli	Lucy Wong	1989-10-10	lucy@wong.com	555-666-7777	Tapei	2	@lucywong	Tapei Public Schools	Career Counselor	none	none	none	1	208
12	wongfu	$2b$10$lkDi9SUkhXh1NtYyhB2JM.iwWj29VNlKEBEh5XlguYTB1oHacYFie	Wong Fu	1966-02-08	wong@fu.com	888-9999	Harbin	1	none	Harbin College of Technology	Assistant Professor	peanut allergy	none	none	1	44
3	reddragon	$2b$10$x6iZsrGmfeDVlDZpSRq9cOZlI3P7O4XsI6o/3HPiBhYTEbOADZl0K	Jimmy Wong	1955-01-01	jimmy@doe.com	555999	Saigon	1	@jimmydoe	Ming Schools	Teacher	none	bus	\N	2	232
6	Clarence	$2b$10$QDUXm.rryfv5euQ0XWqdEOcS/2hMBPJtEDydmgzSL/Mf5SRALCqWq	Clarence Cho	1986-04-20	clarence@cho.com	67 678-6788	Phnom Penh	1	@clarencecho	Royal Khmer College	Professor of Herpetology	carnivore	huh?	I'm a big deal!	1	36
11	cecilialee	$2b$10$wtCnySeM2NtVCc9gWuRsge1hBaIM3bykQHS1lQfxON6znmHN2TrMa	Cecilia Lee	2001-12-03	cecilia@lee.com	656-7891	Yangon	2	none	Ri Chit LLC	Supply Chain Manager	tofu allergy	none	none	2	146
1	James	$2b$10$EcZXFmPKsVAv7ywpWFun6.9Uf6oMa.1D7vT7aZ1oNlWn7jqdN1LZW	James Tucker	1991-12-07	james@doe.com	6124589612	Brooklyn	1	@jamesdoe	MAKE Communication LLC	Event Organizer	peanut allergy	car	Hello world!	2	226
2	John	$2b$10$eQ1u0WrO5x5TPiJWjlE/eu9qUslNrl7HHuSt7F00IuDPkip8wgwzS	John Chin	1967-07-12	john@doe.com	+67 567-877	Florence	1	@johndoe	Fedex	Packaging Agent	halal	train	Goodbye world!	1	44
4	Megan	$2b$10$MazyEx5xipHTKeduvfnM2uBGhzptK3pTsuAxcY1gMCVq7/R1pfwSe	Megan Tucker	1991-09-05	megan@doe.com	6124424296	Bemidji	2	@megandoe	Cassia	Gift Officer	vegan	plane	\N	2	226
\.


--
-- Data for Name: registration; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.registration (id, person_id, event_id) FROM stdin;
80	1	5
82	2	2
83	3	1
84	4	3
85	3	2
86	6	6
87	5	4
88	7	21
89	1	6
90	11	2
91	11	6
92	12	4
93	12	7
94	6	1
95	6	1
96	6	1
97	6	1
98	6	1
\.


--
-- Data for Name: volunteer; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.volunteer (id, person_id, preferred_transportation, comments, role_id) FROM stdin;
\.


--
-- Data for Name: volunteer_openings; Type: TABLE DATA; Schema: public; Owner: jamestucker
--

COPY public.volunteer_openings (id, role, description, event_id) FROM stdin;
\.


--
-- Name: applicant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.applicant_id_seq', 1, false);


--
-- Name: applicant_openings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.applicant_openings_id_seq', 1, false);


--
-- Name: auth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.auth_id_seq', 1, false);


--
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.countries_id_seq', 1, true);


--
-- Name: country_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.country_seq', 1, false);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.events_id_seq', 25, true);


--
-- Name: genders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.genders_id_seq', 1, false);


--
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.person_id_seq', 12, true);


--
-- Name: registration_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.registration_id_seq', 98, true);


--
-- Name: volunteer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.volunteer_id_seq', 1, false);


--
-- Name: volunteer_openings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jamestucker
--

SELECT pg_catalog.setval('public.volunteer_openings_id_seq', 1, false);


--
-- Name: applicant_openings applicant_openings_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.applicant_openings
    ADD CONSTRAINT applicant_openings_pk PRIMARY KEY (id);


--
-- Name: applicant applicant_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.applicant
    ADD CONSTRAINT applicant_pk PRIMARY KEY (id);


--
-- Name: auth auth_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.auth
    ADD CONSTRAINT auth_pk PRIMARY KEY (id);


--
-- Name: countries countries_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pk PRIMARY KEY (id);


--
-- Name: events events_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pk PRIMARY KEY (id);


--
-- Name: genders genders_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_pk PRIMARY KEY (id);


--
-- Name: person person_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pk PRIMARY KEY (id);


--
-- Name: registration registration_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.registration
    ADD CONSTRAINT registration_pk PRIMARY KEY (id);


--
-- Name: volunteer_openings volunteer_openings_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.volunteer_openings
    ADD CONSTRAINT volunteer_openings_pk PRIMARY KEY (id);


--
-- Name: volunteer volunteer_pk; Type: CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.volunteer
    ADD CONSTRAINT volunteer_pk PRIMARY KEY (id);


--
-- Name: applicant applicant_fk0; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.applicant
    ADD CONSTRAINT applicant_fk0 FOREIGN KEY (person_id) REFERENCES public.person(id);


--
-- Name: applicant applicant_fk1; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.applicant
    ADD CONSTRAINT applicant_fk1 FOREIGN KEY (role_id) REFERENCES public.applicant_openings(id);


--
-- Name: applicant_openings applicant_openings_fk0; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.applicant_openings
    ADD CONSTRAINT applicant_openings_fk0 FOREIGN KEY (event_id) REFERENCES public.events(id);


--
-- Name: person country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);


--
-- Name: events events_fk0; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_fk0 FOREIGN KEY (person_id) REFERENCES public.person(id);


--
-- Name: person person_fk1; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_fk1 FOREIGN KEY (gender_id) REFERENCES public.genders(id);


--
-- Name: person person_fk2; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_fk2 FOREIGN KEY (auth_id) REFERENCES public.auth(id);


--
-- Name: registration registration_fk0; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.registration
    ADD CONSTRAINT registration_fk0 FOREIGN KEY (person_id) REFERENCES public.person(id);


--
-- Name: registration registration_fk1; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.registration
    ADD CONSTRAINT registration_fk1 FOREIGN KEY (event_id) REFERENCES public.events(id);


--
-- Name: volunteer volunteer_fk0; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.volunteer
    ADD CONSTRAINT volunteer_fk0 FOREIGN KEY (person_id) REFERENCES public.person(id);


--
-- Name: volunteer volunteer_fk1; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.volunteer
    ADD CONSTRAINT volunteer_fk1 FOREIGN KEY (role_id) REFERENCES public.volunteer_openings(id);


--
-- Name: volunteer_openings volunteer_openings_fk0; Type: FK CONSTRAINT; Schema: public; Owner: jamestucker
--

ALTER TABLE ONLY public.volunteer_openings
    ADD CONSTRAINT volunteer_openings_fk0 FOREIGN KEY (event_id) REFERENCES public.events(id);


--
-- PostgreSQL database dump complete
--

