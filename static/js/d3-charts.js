function drawGroupedBarChart({
  svgId,
  title,
  data,
  yLabel,
  yDomain
}) {
  const svg = d3.select(svgId);
  svg.selectAll("*").remove(); // important for re-use

  const margin = { top: 40, right: 30, bottom: 100, left: 60 };
  const width = 900 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const keys = Object.keys(data[0].values);

  const color = d3.scaleOrdinal()
    .domain(keys)
    .range([
      "#3273dc",
      "#ff3860",
      "#23d160",
      "#209cee",
      "#ffdd57",
      "#7957d5"
    ]);

  const x0 = d3.scaleBand()
    .domain(data.map(d => d.model))
    .range([0, width])
    .padding(0.2);

  const x1 = d3.scaleBand()
    .domain(keys)
    .range([0, x0.bandwidth()])
    .padding(0.05);

  const y = d3.scaleLinear()
    .domain(yDomain)
    .nice()
    .range([height, 0]);

  // Axes
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x0));
/*
  g.append("g")
    .call(d3.axisLeft(y));
*/
  // Bars
  const groups = g.selectAll(".model")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", d => `translate(${x0(d.model)},0)`);

  groups.selectAll("rect")
    .data(d => keys.map(k => ({ key: k, value: d.values[k] })))
    .enter()
    .append("rect")
    .attr("x", d => x1(d.key))
    .attr("y", d => y(d.value))
    .attr("width", x1.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("fill", d => color(d.key));

  // Labels
  groups.selectAll("text")
    .data(d => keys.map(k => ({ key: k, value: d.values[k] })))
    .enter()
    .append("text")
    .attr("class", "bar-label")
    .attr("x", d => x1(d.key) + x1.bandwidth() / 2)
    .attr("y", d => y(d.value) - 5)
    .text(d => `${d.value}%`);

  // Legend (wrapped)
  const legendItemWidth = 160;
  const legendItemHeight = 22;
  const itemsPerRow = Math.floor(width / legendItemWidth);

  const legend = svg.append("g")
    .attr(
      "transform",
      `translate(${margin.left}, ${margin.top + height + 40})`
    );

  const legendItem = legend.selectAll(".legend-item")
    .data(keys)
    .enter()
    .append("g")
    .attr("transform", (d, i) => {
      const row = Math.floor(i / itemsPerRow);
      const col = i % itemsPerRow;
      return `translate(${col * legendItemWidth}, ${row * legendItemHeight})`;
    });

  legendItem.append("rect")
    .attr("width", 12)
    .attr("height", 12)
    .attr("y", -7)
    .attr("fill", d => color(d));

  legendItem.append("text")
    .attr("x", 18)
    .attr("alignment-baseline", "middle")
    .style("font-size", "12px")
    .text(d => d);
}

