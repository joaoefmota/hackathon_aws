CREATE DATABASE aws;

USE aws;

DROP TABLE IF EXISTS bookings;

DROP TABLE IF EXISTS vehicles;

CREATE TABLE
    `bookings` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
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
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        brand varchar(255),
        seats varchar(255),
        rental_price varchar(255),
        gear_box varchar(255),
        fuel_consumption varchar(255),
        yearcar int NOT NULL,
        image_main varchar(255),
        image_second varchar(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO
    vehicles (
        brand,
        seats,
        rental_price,
        gear_box,
        fuel_consumption,
        yearcar,
        image_main,
        image_second
    )
values (
        'Volkswagen',
        4,
        '20€/h',
        'Manual',
        'test',
        1996,
        'images/home-page/VolkswagenBeetleLightBlue.png',
        'images/car-page/volkswagen-beetle-light-blue.png'
    ), (
        'Ford Escort',
        5,
        '30€/h',
        'Automatic',
        'test',
        2000,
        'images/home-page/FordEscortWhite.png',
        'images/car-page/ford-escort-blue.png'
    ), (
        'Ford Mustang',
        5,
        '50€/h',
        'Automatic',
        'test',
        2001,
        'images/home-page/FordMustangRed.png',
        'images/car-page/ford-mustang-red.png'
    ), (
        'MG Sport Vintage Car',
        5,
        '60€/h',
        'Automatic',
        'test',
        1986,
        'images/home-page/BlueSportVintage.png',
        'images/car-page/red-sport-vintage.png'
    ), (
        'Volkswagen Camper Van',
        5,
        '20€/h',
        'Automatic',
        'test',
        1999,
        'images/home-page/VolkswagenCamperVanOrange.png',
        'images/car-page/volkswagen-camper-van-orange.png'
    ), (
        'Volkswagen Camper Van',
        5,
        '20€/h',
        'Automatic',
        'test',
        1999,
        'images/home-page/VolkswagenCamperVanYellow.png',
        'images/car-page/volkswagen-camper-van-yellow.png'
    ), (
        'Ford Mustang',
        5,
        '30€/h',
        'Automatic',
        'test',
        2000,
        'images/home-page/FordMustangBlack.png',
        'images/car-page/ford-mustang-black.png'
    );

INSERT INTO
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