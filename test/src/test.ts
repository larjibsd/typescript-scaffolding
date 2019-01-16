import 'angular';
import 'angular-mocks';
import 'angular-resource';

const context: any = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
