# Angular Foundations

## Table of Contents
- Big Ideas
- Project Setup & Structure
- CLI Basics
- TS Basics
- Components 
    - Data Bindings
    - Directives
    - Events
- Styling
- Forms
- Custom Directives
- Pipes
- Services
- Providers
- Modules?
- Models and Interfaces
- Reactivity and Observability
- Routing
- Animations
- Unit Testing
- Building Libraries
- Profiling and Performace
- Building for Production
- Leveraging Web APIs and DOM Features
- Dependency Management 
- Updagrading/Downgrading Angular Versions

## Big Ideas

## CLI Basics
```bash

$ ng --version

# see options for a command
$ ng <command> --help

# make new project
$ ng new 

# make new project in existing directory
$ ng new --directory=.

# make new project with specific angular version
$ npx @angular/cli@<version> new
$ npx @angular/cli@^11.0.7 new ngx-primeng-ui --create-application=false

```

## Building Libraries

```bash
# create new lib
> ng g library <lin-name>

# build
> ng build --project=<lib-name>

# link globally for local development
> npm link

# confirm link worked 
> npm ls -g --depth=0 --link=true   
--<package_name> -> path/to/gloal/node_modules/<package_name>

# link in package
> npm link <package-name>

# unlink in package
> npm unlin <package-name>

# unlink globally
npm uninstall -g <package-name>
```

### Resources
1. [Using npm-link for package development | terodox.tech](https://terodox.tech/using-npm-link-for-package-development/)
