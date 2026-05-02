export function calculateMetrics({
  developerId,
  jiraIssues,
  pullRequests,
  deployments,
  bugs
}) {
  const issues = jiraIssues.filter(
    item => item.developer_id === developerId
  );

  const prs = pullRequests.filter(
    item =>
      item.developer_id === developerId &&
      item.status === 'merged'
  );

  const successfulDeployments = deployments.filter(
    item =>
      item.developer_id === developerId &&
      item.status === 'success'
  );

  const productionBugs = bugs.filter(
    item =>
      item.developer_id === developerId &&
      item.escaped_to_prod === 'Yes'
  );

  const cycleTime =
    issues.reduce((sum, item) => {
      return sum + Number(item.cycle_time_days || 0);
    }, 0) / (issues.length || 1);

  const leadTime =
    successfulDeployments.reduce((sum, item) => {
      return sum + Number(item.lead_time_days || 0);
    }, 0) / (successfulDeployments.length || 1);

  const bugRate =
    productionBugs.length / (issues.length || 1);

  return {
    leadTime: Number(leadTime.toFixed(2)),
    cycleTime: Number(cycleTime.toFixed(2)),
    deploymentFrequency: successfulDeployments.length,
    prThroughput: prs.length,
    bugRate: Number(bugRate.toFixed(2))
  };
}