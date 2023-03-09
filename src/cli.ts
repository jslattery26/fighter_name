#!/usr/bin/env node

import program from 'commander'
import { generateFiles } from '.'

program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .parse(process.argv)

generateFiles()