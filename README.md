# ember-cli-switch

[![Build Status](https://travis-ci.org/chauhansudhir/ember-cli-switch.svg?branch=master)](https://travis-ci.org/chauhansudhir/ember-cli-switch)
[![Code Climate](https://codeclimate.com/github/chauhansudhir/ember-cli-switch/badges/gpa.svg)](https://codeclimate.com/github/chauhansudhir/ember-cli-switch)

[![Demo URL](https://chauhansudhir.github.io/ember-cli-switch/)]

This README outlines the details of collaborating on this Ember addon.

## Installation

* ember install ember-cli-switch

## Usage
* Check demo app for more details...
```
Value={{value}}

{{em-switch
  checked=value
}}

{{em-switch
  onText='Is True?'
  offText='Is False?'
  checked=value
  disabled=false
  tabindex=1
  showLabels=true
  controlStyle='ember-cli-switch-control-default'
  onChangeAction=null
}}


{{em-switch
  onText='Is True?'
  offText='Is False?'
  checked=value
  disabled=false
  tabindex=1
  showLabels=true
  controlStyle='ember-cli-switch-control-thin'
  onChangeAction=null
}}
<br /><br />
Undefined value: {{undefinedValue}}
{{em-switch
  onText='Is True?'
  offText='Is False?'
  checked=undefinedValue
  disabled=false
  tabindex=1
  showLabels=true
  controlStyle='ember-cli-switch-control-thin'
  onChangeAction=null
}}
{{em-switch
  onText='Is True?'
  offText='Is False?'
  checked=undefinedValue
  disabled=false
  tabindex=1
  showLabels=true
  onChangeAction=(action 'pressAnyKey' undefinedValue)
}}

```


## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
