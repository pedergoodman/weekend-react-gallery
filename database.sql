-- DB Name `react_gallery`

CREATE TABLE "image_gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" varchar(100) NOT NULL,
	"description" varchar(100) NOT NULL,
	"url" varchar(255) NOT NULL,
	"likes" INT DEFAULT 0,
	"favorite" BOOLEAN DEFAULT FALSE
);


INSERT INTO
	"image_gallery" ("title", "description", "url")
VALUES
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-01.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-02.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-03.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-04.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-05.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-06.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-07.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-08.jpg'),
( 'TITLE', 'description text goes here!', 'public/images/co-ut-trip-09.jpg');

