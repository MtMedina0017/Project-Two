-- Drop table if exists
DROP TABLE breweries;
DROP TABLE costs;
DROP TABLE intensity;
DROP TABLE prevalence;

CREATE TABLE breweries(
    state VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    PRIMARY KEY (state)
);

CREATE TABLE costs(
    state VARCHAR NOT NULL,
    total_cost BIGINT,
    cost_per_drink INT,
    cost_per_capita INT,
    PRIMARY KEY (state)
);

CREATE TABLE intensity(
    state VARCHAR NOT NULL,
    average_num_of_drinks INT,
    PRIMARY KEY (state)
);

CREATE TABLE prevalence(
    state VARCHAR NOT NULL,
    percentage INT,
    PRIMARY KEY (state)
);

