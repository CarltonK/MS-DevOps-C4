const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000',
    options: {
      'sonar.projectName': 'Group-One',
      'sonar.login': 'admin',
      'sonar.password': 'password',
      'sonar.projectDescription': 'Description for "Group-One" project...',
      'sonar.sources': '.',
      'sonar.tests': '.',
      'sonar.inclusions': '.',
      'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
    }
  },
  () => {}
);