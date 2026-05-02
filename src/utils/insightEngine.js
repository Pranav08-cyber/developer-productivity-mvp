export function generateInsights(metrics) {
  const insights = [];
  const recommendations = [];

  if (metrics.leadTime > 4) {
    insights.push(
      'Lead time is high which may indicate review bottlenecks.'
    );

    recommendations.push(
      'Reduce PR size and request reviews earlier.'
    );
  }

  if (metrics.cycleTime > 5) {
    insights.push(
      'Tasks are staying in progress too long.'
    );

    recommendations.push(
      'Break work into smaller tasks.'
    );
  }

  if (metrics.bugRate > 0.15) {
    insights.push(
      'Bug rate suggests testing gaps.'
    );

    recommendations.push(
      'Increase automated testing before deployment.'
    );
  }

  if (metrics.deploymentFrequency < 3) {
    insights.push(
      'Low deployment frequency suggests oversized releases.'
    );

    recommendations.push(
      'Ship smaller changes more frequently.'
    );
  }

  return {
    insights,
    recommendations
  };
}