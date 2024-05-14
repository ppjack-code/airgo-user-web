const { generateService } = require('@umijs/openapi');
const { join } = require('path');

generateService({
  requestLibPath: "import request from '@/lib/request';",
  schemaPath:
    'https://sc4815cwcev.fylinkserver.free.hr:2610/api/swagger/doc.json',
  // schemaPath: join(__dirname, 'openapi.json'),
  // projectName: 'api',
  serversPath: './service',
});
