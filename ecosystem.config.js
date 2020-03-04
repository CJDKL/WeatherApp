module.exports = {
  apps: [{
    name: 'WeatherApp',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-217-101-114.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/WeatherApp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:CJDKL/WeatherApp.git',
      path: '/home/ubuntu/WeatherApp',
      'post-deploy': 'npm install && npm install express && pm2 startOrRestart ecosystem.config.js'
    }
  }
}