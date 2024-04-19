module.exports = {
  name: 'vercosy',
  script: '.next/standalone/server.js',
  instances : "max",
  exec_mode : "cluster",
  interpreter: "bun", // Path to the Bun interpreter
  env: {
    HOSTNAME: '0.0.0.0',
    PORT: 3000,
  },
}