-- Drop table if exists
DROP TABLE breweries;
DROP TABLE costs;
DROP TABLE intensity;
DROP TABLE prevalence;
DROP TABLE health;

CREATE TABLE breweries(
    state VARCHAR NOT NULL,
    name INT NOT NULL,
    PRIMARY KEY (state)
);

CREATE TABLE costs(
    state VARCHAR NOT NULL,
    total_cost BIGINT,
    cost_per_drink FLOAT,
    cost_per_capita FLOAT,
    PRIMARY KEY (state)
);

CREATE TABLE intensity(
    state VARCHAR NOT NULL,
    average_num_of_drinks FLOAT,
    PRIMARY KEY (state)
);

CREATE TABLE prevalence(
    state VARCHAR NOT NULL,
    percentage FLOAT,
    PRIMARY KEY (state)
);

CREATE TABLE health(
    state VARCHAR NOT NULL,
    health_percent FLOAT,
    PRIMARY KEY (state)
);

