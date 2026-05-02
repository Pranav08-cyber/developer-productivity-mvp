import developers from '../data/Dim_Developers.json';
import jiraIssues from '../data/Fact_Jira_Issues.json';
import pullRequests from '../data/Fact_Pull_Requests.json';
import deployments from '../data/Fact_CI_Deployments.json';
import bugs from '../data/Fact_Bug_Reports.json';

import { calculateMetrics } from '../utils/metricsEngine';
import { generateInsights } from '../utils/insightEngine';

export async function getDashboardData(developerId) {
  const developer = developers.find(d => d.developer_id === developerId) || developers[0];

  const metricsData = calculateMetrics({
    developerId: developer.developer_id,
    jiraIssues,
    pullRequests,
    deployments,
    bugs
  });

  const ai = generateInsights(metricsData);

  return {
    developer: {
      name: developer.developer_name,
      role: developer.role || 'Software Engineer',
      avatar:
        'https://i.pravatar.cc/150?img=12'
    },

    metrics: [
      {
        label: 'Lead Time',
        value: metricsData.leadTime,
        trend: 12,
        unit: 'days'
      },
      {
        label: 'Cycle Time',
        value: metricsData.cycleTime,
        trend: -8,
        unit: 'days'
      },
      {
        label: 'Bug Rate',
        value: metricsData.bugRate,
        trend: 3,
        unit: 'ratio'
      },
      {
        label: 'Deployments',
        value: metricsData.deploymentFrequency,
        trend: 18,
        unit: 'count'
      },
      {
        label: 'PR Throughput',
        value: metricsData.prThroughput,
        trend: 9,
        unit: 'count'
      }
    ],

    trends: [
      { name: 'Jan', focus: 45, meetings: 20 },
      { name: 'Feb', focus: 52, meetings: 18 },
      { name: 'Mar', focus: 48, meetings: 22 },
      { name: 'Apr', focus: 61, meetings: 15 },
      { name: 'May', focus: 58, meetings: 17 }
    ],

    insights: ai.insights.map((text, index) => ({
      id: index,
      text
    })),

    recommendations: ai.recommendations.map(
      (text, index) => ({
        id: index,
        title: 'Optimization Suggestion',
        description: text
      })
    ),

    team: {
      collaborationScore: 92,
      reviewDistribution: [
        { name: 'Code Reviews', value: 45 },
        { name: 'Architecture', value: 30 },
        { name: 'Testing', value: 25 }
      ],
      members: [
        {
          name: 'Noah Patel',
          role: 'Backend Engineer',
          avatar: 'https://i.pravatar.cc/150?img=5',
          contribution: 88
        },
        {
          name: 'Mia Lopez',
          role: 'Frontend Engineer',
          avatar: 'https://i.pravatar.cc/150?img=8',
          contribution: 92
        },
        {
          name: 'Lucas Reed',
          role: 'Full Stack',
          avatar: 'https://i.pravatar.cc/150?img=10',
          contribution: 85
        },
        {
          name: 'Emma Roy',
          role: 'Mobile Engineer',
          avatar: 'https://i.pravatar.cc/150?img=3',
          contribution: 78
        }
      ]
    },

    activity: [
      {
        id: 1,
        action: 'Merged PR #421',
        time: '2h ago'
      },
      {
        id: 2,
        action: 'Production deployment completed',
        time: '5h ago'
      },
      {
        id: 3,
        action: 'Bug issue resolved',
        time: '1 day ago'
      }
    ]
  };
}