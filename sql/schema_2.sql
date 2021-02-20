-- Join Tables
SELECT breweries.state, breweries.name, costs.total_cost, costs.cost_per_drink, 
costs.cost_per_capita, intensity.average_num_of_drinks, prevalence.percentage, health.health_percent
FROM breweries
JOIN costs
ON breweries.state = costs.state
JOIN intensity
ON intensity.state = costs.state
JOIN prevalence
ON prevalence.state = intensity.state
JOIN health
ON health.state = prevalence.state
ORDER BY breweries.state ASC;