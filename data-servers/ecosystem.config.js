module.exports = {
  apps: [{
    name: 'data',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: [
             'ec2-3-19-81-204.us-east-2.compute.amazonaws.com',
             'ec2-3-131-208-75.us-east-2.compute.amazonaws.com',
             'ec2-3-134-127-43.us-east-2.compute.amazonaws.com',
             'ec2-3-23-75-251.us-east-2.compute.amazonaws.com',
             'ec2-3-14-22-135.us-east-2.compute.amazonaws.com',
             'ec2-3-130-41-253.us-east-2.compute.amazonaws.com',
             'ec2-18-117-62-208.us-east-2.compute.amazonaws.com',
             'ec2-18-116-206-114.us-east-2.compute.amazonaws.com'
            ],
      key: './Login_Scripts/App-Server-1.pem',
      ref: 'origin/main',
      repo: 'git@github.com:rpt26-sdc-prototype/app-server-1.git',
      path: '/home/ubuntu/app-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js && pm2 save'
    }
  }
}
