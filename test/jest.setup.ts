// Note - we use an old version of aws-testing-library, because the latest version (3.X) depends
// on another library (filter-obj) which uses module import syntax that breaks Jest.
import 'aws-testing-library/lib/jest';

console.log("Inside jest.setup.ts");
