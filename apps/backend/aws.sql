CREATE DATABASE aws;

USE aws;

DROP TABLE IF EXISTS bookings;

DROP TABLE IF EXISTS vehicles;

CREATE TABLE
    `bookings` (
        title varchar(255),
        lastname varchar(255),
        name varchar(255),
        email varchar(255),
        country varchar(255),
        address varchar(255),
        phone_number int NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    `vehicles` (
        brand varchar(255),
        seats varchar(255),
        rental_price varchar(255),
        gear_box varchar(255),
        fuel_consumption varchar(255),
        yearcar int NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

insert into
    vehicles (
        brand,
        seats,
        rental_price,
        gear_box,
        fuel_consumption,
        yearcar
    )
values (
        'Volkswagen',
        4,
        '20€/h',
        'Manual',
        'test',
        1996
    ), (
        'Mercedes',
        5,
        '30€/h',
        'Automatic',
        'test',
        2000
    );

insert into
    bookings (
        title,
        lastname,
        name,
        email,
        country,
        address,
        phone_number
    )
values (
        'Mr.',
        'Agostinho',
        'Diogo',
        'gmail',
        'Portugal',
        '123 Street',
        123
    ), (
        'Mr.',
        'Mota',
        'João',
        'hotmail',
        'Germany',
        '123 Street',
        456
    );