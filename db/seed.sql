CREATE TABLE houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage DECIMAL,
    rent decimal
);

INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES ('Park Place', '123 Boardwalk Ave', 'Monopoly City', 'CA', 12365, 'none', 175, 1500),
('Boardwalk', '456 Boardwalk Ave', 'Monopoly City', 'CA', 12365, 'none', 200, 2000),
('Mediterranean', '687 Baltic St', 'Cash Town', 'TX', 45896, 'none', 30, 2),
('Baltic', '648 Baltic St', 'Cash Town', 'TX', 45896, 'none', 30, 4),
('B&O RR', '17 N Railroad Junction', 'Steamyville', 'CO', 74568, 'none', 100, 200);