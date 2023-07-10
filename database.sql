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
( 'TITLE', 'The end of the Grandstaff Hike in Moab!', 'images/co-ut-trip-01.jpg'),
( 'TITLE', 'Walking down the Grandstaff trail near Moab!', 'images/co-ut-trip-02.jpg'),
( 'TITLE', 'Feel the Earth!', 'images/co-ut-trip-03.jpg'),
( 'TITLE', 'A couple of good humans I like to travel with', 'images/co-ut-trip-04.jpg'),
( 'TITLE', 'Cooling off in the river.', 'images/co-ut-trip-05.jpg'),
( 'TITLE', 'Welcome to my home.', 'images/co-ut-trip-06.jpg'),
( 'TITLE', 'Taking a long break from driving, contemplating the meaning of life', 'images/co-ut-trip-07.jpg'),
( 'TITLE', 'Not my kitty, but tempting to bring along for the ride!', 'images/co-ut-trip-08.jpg'),
( 'TITLE', 'A little slice of Boulder, CO', 'images/co-ut-trip-09.jpg');

