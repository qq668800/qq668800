name: 100
desc: 联通

http:
  force-http-engine:
    - "10010.json:80"
    - "10010.json:443"
  mitm:
    - 10010.json
  script:
    - match: ^https?:\/\/10010\.json
      name: "10010v3"
      type: request
      require-body: true
      timeout: 60
      # debug: true

tiles:
  - name: "10010v3"
    interval: 300
    title: "联通余量"
    content: ""
    icon: "arrow.up.arrow.down.circle"
    backgroundColor: "#663399"

cron:
  script:
    - name: "10010v3"
      cron: "*/1 * * * *" # at every 1th minute
      timeout: 60

script-providers:
  "100":
    url: https://github.com/qq668800/qq668800/raw/main/%E8%81%94%E9%80%9A.js
    interval: 86400
