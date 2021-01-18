### How to run locally
1. Type and run this in your terminal `git clone https://github.com/edamor/tangerine-monkeys.git`
2. Go into project directory with `cd tangerine-monkeys`
3. Run with Node
   * In the terminal, run `npm install`
   * After downloading node_modules, run `npm run dev`
4. Run with Docker
   * In the terminal, run `docker build -t coding-test .`
   * After build, run `docker-compose up`
5. Server will start listening on Port:3000

### Testing
1. In the terminal, run `npm run test`
2. Check test results



## Goal

This API endpoint would be used for typeahead suggestions for US counties.
It should be able to return a set of matching counties based on a user
provided fragment of a county name or state. See the examples in the
provided Open API spec.

### Requirements

* The command `docker-compose up` should launch the API, expose it on
  port 3000, and perform whatever initialization it needs.
* It's your choice on whether to use a database or not. But if you
  use one, it should also be launched and initialized by the above
  command.
* Use whatever libraries you are comfortable with.
* Feel free to use Typescript, it's what we use.
* Don't forget to write some tests!