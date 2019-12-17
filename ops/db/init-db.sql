-- Adminer 4.7.5 PostgreSQL dump

\connect "parkside";

DROP TABLE IF EXISTS "danceoff";
DROP SEQUENCE IF EXISTS danceoff_id_seq;
CREATE SEQUENCE danceoff_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1;

CREATE TABLE "public"."danceoff" (
    "id" integer DEFAULT nextval('danceoff_id_seq') NOT NULL,
    "winner" integer NOT NULL,
    "loser" integer NOT NULL,
    "dancedAt" timestamp NOT NULL,
    CONSTRAINT "PK_27469fb68f73746607e51585230" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "danceoff" ("id", "winner", "loser", "dancedAt") VALUES
(2,	17,	27,	'2019-12-17 15:25:15.607392'),
(3,	2,	1,	'2019-12-17 15:25:25.694856'),
(4,	7,	6,	'2019-12-17 15:25:38.797953'),
(5,	8,	7,	'2019-12-17 15:25:47.235214'),
(6,	39,	11,	'2019-12-17 15:25:59.943204'),
(7,	14,	23,	'2019-12-17 15:26:11.690523'),
(8,	1,	12,	'2019-12-17 15:26:25.266683'),
(9,	30,	34,	'2019-12-17 15:26:34.20732');

DROP TABLE IF EXISTS "robot";
DROP SEQUENCE IF EXISTS robot_id_seq;
CREATE SEQUENCE robot_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1;

CREATE TABLE "public"."robot" (
    "id" integer DEFAULT nextval('robot_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    "powermove" character varying NOT NULL,
    "experience" integer NOT NULL,
    "outOfOrder" boolean NOT NULL,
    "avatar" character varying NOT NULL,
    CONSTRAINT "PK_b4fbeccee808e9f8ffe2540b0c2" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "robot" ("id", "name", "powermove", "experience", "outOfOrder", "avatar") VALUES
(1,	'Funky Joe',	'Spinning Turtle',	5,	'0',	'https://robohash.org/funky-joe.png'),
(2,	'Ternary Tim',	'Type Coercion',	8,	'0',	'https://robohash.org/ternary-tim.png'),
(3,	'Amazing Helen',	'Observing Ostrich',	8,	'0',	'https://robohash.org/amazing-helen.png'),
(4,	'Hilarious Jack',	'Yielding Yak',	8,	'0',	'https://robohash.org/hilarious-jack.png'),
(5,	'Productive Paula',	'Celebrating Lobster',	11,	'0',	'https://robohash.org/productive-paula.png'),
(6,	'Flexible Stuart',	'Searching Swan',	10,	'0',	'https://robohash.org/flexible-stuart.png'),
(7,	'Lisa "Root" Allen',	'Fork Join',	15,	'0',	'https://robohash.org/lisa-root-allen.png'),
(8,	'Decisive Sarah',	'Smashing Pineapple',	8,	'0',	'https://robohash.org/decisive-sarah.png'),
(9,	'Efficient Linda',	'Relaxing Sloth',	7,	'0',	'https://robohash.org/erfficient-linda.png'),
(10,	'Variable Vicky',	'Thread Drop',	12,	'1',	'https://robohash.org/variable-vicky.png'),
(11,	'Dancing Jorge',	'Privilege Escalation',	7,	'0',	'https://robohash.org/dancing-jorge.png'),
(12,	'Fred "Detail-Oriented" Miller',	'Deep Cloning',	9,	'0',	'https://robohash.org/fred-miller.png'),
(13,	'General Garcia',	'Constructor Overloading',	12,	'0',	'https://robohash.org/gerneral-garcia.png'),
(14,	'Infinity Sam',	'Database Migration',	11,	'0',	'https://robohash.org/infinity-sam.png'),
(15,	'Responsible Stella',	'Integer Factorization',	13,	'0',	'https://robohash.org/responsible-stella.png'),
(16,	'Solid Sandra',	'Monkey Patching',	8,	'1',	'https://robohash.org/solid-sandra.png'),
(17,	'Danger Dan',	'Floating Unicorn',	15,	'0',	'https://robohash.org/danger-dan.png'),
(18,	'Exceptional Alice',	'Heap Allocation',	12,	'0',	'https://robohash.org/exceptional-alice.png'),
(19,	'Sliding Stephanie',	'Cache Invalidation',	8,	'0',	'https://robohash.org/sliding-stephanie.png'),
(20,	'Excellent Erin',	'Changing Chameleon',	7,	'1',	'https://robohash.org/excellent-erin.png'),
(21,	'Versatile Hector',	'Exception Handling',	9,	'0',	'https://robohash.org/versatile-hector.png'),
(22,	'Rebasing Isabel',	'Path Traversal',	10,	'0',	'https://robohash.org/rebasing-isabel.png'),
(23,	'Reflective Jim',	'Chair Freeze',	6,	'1',	'https://robohash.org/reflective-jim.png'),
(24,	'Merge Mike',	'Protective Otter',	8,	'0',	'https://robohash.org/merge-mike.png'),
(25,	'Charismatic Valeria',	'Secondary Indexing',	7,	'0',	'https://robohash.org/charismatic-valeria.png'),
(26,	'Confident Carol',	'Brute Force Detection',	9,	'0',	'https://robohash.org/confident-carol.png'),
(27,	'Elastic Eddie',	'Dabbing Penguin',	11,	'0',	'https://robohash.org/elastic-eddie.png'),
(28,	'Endearing Fred',	'Lazy Loading',	9,	'0',	'https://robohash.org/endearing-fred.png'),
(29,	'Positive Anna',	'Tree Shaking',	10,	'0',	'https://robohash.org/positive-anna.png'),
(30,	'Hipster Kate',	'Dancing Frog',	10,	'0',	'https://robohash.org/hipster-kate.png'),
(31,	'Honest Mark',	'Argument Destructuring',	8,	'0',	'https://robohash.org/honest-mark.png'),
(32,	'Crazy Brian',	'Sleeping Crocodile',	7,	'1',	'https://robohash.org/crazy-brian.png'),
(33,	'Anxious Andy',	'Implicit Invocation',	6,	'1',	'https://robohash.org/anxious-andy.png'),
(34,	'Agile Anna',	'Pretzel Hop',	5,	'0',	'https://robohash.org/agile-anna.png'),
(35,	'Victor "Void" Smith',	'Swimming Ferret',	9,	'0',	'https://robohash.org/victor-void-smith.png'),
(36,	'Functional Chris',	'Subscribing Kangaroo',	7,	'0',	'https://robohash.org/functional-chris.png'),
(37,	'Eloquent Teresa',	'Just-in-time Compilation',	10,	'0',	'https://robohash.org/eloquent-teresa.png'),
(38,	'Spinning Christina',	'Optional Chaining',	11,	'0',	'https://robohash.org/spinning-christina.png'),
(39,	'Zero-Downtime Sophie',	'Duck Typing',	7,	'0',	'https://robohash.org/zero-downtime-sophie.png'),
(40,	'Rational Randy',	'Kicking Koala',	12,	'0',	'https://robohash.org/rational-randy.png');

-- 2019-12-17 15:26:55.595529+00