DROP TABLE IF EXISTS houses;

--This was my original create table, so I didn't need to alter it any further, so...
--For points, see ALTER TABLE STUFF below

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES ('Park Place', '123 Boardwalk Ave', 'Monopoly City', 'CA', 12365, 'none', 175, 1500),
('Boardwalk', '456 Boardwalk Ave', 'Monopoly City', 'CA', 12365, 'none', 200, 2000),
('Mediterranean', '687 Baltic St', 'Cash Town', 'TX', 45896, 'none', 30, 2),
('Baltic', '648 Baltic St', 'Cash Town', 'TX', 45896, 'none', 30, 4),
('B&O RR', '17 N Railroad Junction', 'Steamyville', 'CO', 74568, 'none', 100, 200);

-->>>>>>>>>ALTER TABLE STUFF<<<<<<<<<<

--ALTER TABLE houses
--ADD COLUMN img TEXT,
--ADD COLUMN mortgage DECIMAL,
--ADD COLUMN rent DECIMAL;