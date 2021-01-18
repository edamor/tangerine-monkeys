# Propelio Backend Coding Excercise

Build a Dockerized Node.js REST API for the included Open API spec (spec.yaml)
using the data from the data.json file.

## Goal

This API endpoint would be used for typeahead suggestions for US counties.
It should be able to return a set of matching counties based on a user
provided fragment of a county name or state. See the examples in the
provided Open API spec.

## Requirements

* The command `docker-compose up` should launch the API, expose it on
  port 3000, and perform whatever initialization it needs.
* It's your choice on whether to use a database or not. But if you
  use one, it should also be launched and initialized by the above
  command.
* Use whatever libraries you are comfortable with.
* Feel free to use Typescript, it's what we use.
* Don't forget to write some tests!

## Submitting your work
Compress your source code as a zip archive and either send it to us,
or send us a link where we can download it. Sharing via Dropbox,
Google Drive, or similar should be fine.