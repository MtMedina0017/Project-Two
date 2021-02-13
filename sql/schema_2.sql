-- Join Tables
SELECT breweries.state, breweries.name, costs.total_cost, costs.cost_per_drink, 
costs.cost_per_capita, intensity.average_num_of_drinks, prevalence.percentage
FROM breweries
JOIN costs
ON breweries.state = costs.state
JOIN intensity
ON breweries.state = intensity.state
JOIN prevalence
ON breweries.state = prevalence.state
ORDER BY breweries.state ASC;