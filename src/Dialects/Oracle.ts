/*
 * @adonisjs/lucid
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/// <reference path="../../adonis-typings/index.ts" />

import { DialectContract } from '@ioc:Adonis/Lucid/Database'

export class OracleDialect implements DialectContract {
  public readonly name = 'oracledb'
  public supportsAdvisoryLocks = false

  public async getAdvisoryLock (): Promise<boolean> {
    throw new Error(`Support for advisory locks is not implemented for oracledb. Create a PR to add the feature`)
  }

  public async releaseAdvisoryLock (): Promise<boolean> {
    throw new Error(`Support for advisory locks is not implemented for oracledb. Create a PR to add the feature`)
  }
}