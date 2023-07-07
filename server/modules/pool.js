const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'react_gallery', 
});

module.exports = pool;





// old gallery info
// const galleryItems = [
//     { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 }
// ];

// module.exports = galleryItems;