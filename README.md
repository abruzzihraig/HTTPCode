# HTTPCode
This is a CLI tool which could help you find out what does HTTP status code mean.

# Display
You can type something like below:  
`$ hcode 404 500`   
then output:
```
┌────────────────────┬──────────────────────────────────────────────────┐
│ Status Code        │ description                                      │
├────────────────────┼──────────────────────────────────────────────────┤
│ 403                │ forbidden                                        │
├────────────────────┼──────────────────────────────────────────────────┤
│ 500                │ internal server error                            │
└────────────────────┴──────────────────────────────────────────────────┘
```
# Usage

```
Usage: hcode [status code] [options]

Commands:
  [num...]  find out the meaning of inputed code

Options:
  -a, --all   find out all of HTTP status code
  -h, --help  Show help

Examples:
  hcode 404      find out the meaning of 404 code
  hcode 404 500  find out a group of meaning
```
# Install
`$ npm install -g httpcode`

# License
MIT
