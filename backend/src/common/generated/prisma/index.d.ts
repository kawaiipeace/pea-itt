
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin_log
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin_log = $Result.DefaultSelection<Prisma.$admin_logPayload>
/**
 * Model check_time
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type check_time = $Result.DefaultSelection<Prisma.$check_timePayload>
/**
 * Model department
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>
/**
 * Model leave_request
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type leave_request = $Result.DefaultSelection<Prisma.$leave_requestPayload>
/**
 * Model mentor_profile
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type mentor_profile = $Result.DefaultSelection<Prisma.$mentor_profilePayload>
/**
 * Model role
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model student_profile
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type student_profile = $Result.DefaultSelection<Prisma.$student_profilePayload>
/**
 * Model user
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admin_logs
 * const admin_logs = await prisma.admin_log.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admin_logs
   * const admin_logs = await prisma.admin_log.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin_log`: Exposes CRUD operations for the **admin_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_logs
    * const admin_logs = await prisma.admin_log.findMany()
    * ```
    */
  get admin_log(): Prisma.admin_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.check_time`: Exposes CRUD operations for the **check_time** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Check_times
    * const check_times = await prisma.check_time.findMany()
    * ```
    */
  get check_time(): Prisma.check_timeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave_request`: Exposes CRUD operations for the **leave_request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leave_requests
    * const leave_requests = await prisma.leave_request.findMany()
    * ```
    */
  get leave_request(): Prisma.leave_requestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentor_profile`: Exposes CRUD operations for the **mentor_profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentor_profiles
    * const mentor_profiles = await prisma.mentor_profile.findMany()
    * ```
    */
  get mentor_profile(): Prisma.mentor_profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_profile`: Exposes CRUD operations for the **student_profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_profiles
    * const student_profiles = await prisma.student_profile.findMany()
    * ```
    */
  get student_profile(): Prisma.student_profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin_log: 'admin_log',
    check_time: 'check_time',
    department: 'department',
    leave_request: 'leave_request',
    mentor_profile: 'mentor_profile',
    role: 'role',
    student_profile: 'student_profile',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin_log" | "check_time" | "department" | "leave_request" | "mentor_profile" | "role" | "student_profile" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin_log: {
        payload: Prisma.$admin_logPayload<ExtArgs>
        fields: Prisma.admin_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>
          }
          findFirst: {
            args: Prisma.admin_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>
          }
          findMany: {
            args: Prisma.admin_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>[]
          }
          create: {
            args: Prisma.admin_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>
          }
          createMany: {
            args: Prisma.admin_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.admin_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>[]
          }
          delete: {
            args: Prisma.admin_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>
          }
          update: {
            args: Prisma.admin_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>
          }
          deleteMany: {
            args: Prisma.admin_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.admin_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>[]
          }
          upsert: {
            args: Prisma.admin_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_logPayload>
          }
          aggregate: {
            args: Prisma.Admin_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_log>
          }
          groupBy: {
            args: Prisma.admin_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_logCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_logCountAggregateOutputType> | number
          }
        }
      }
      check_time: {
        payload: Prisma.$check_timePayload<ExtArgs>
        fields: Prisma.check_timeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.check_timeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.check_timeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>
          }
          findFirst: {
            args: Prisma.check_timeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.check_timeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>
          }
          findMany: {
            args: Prisma.check_timeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>[]
          }
          create: {
            args: Prisma.check_timeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>
          }
          createMany: {
            args: Prisma.check_timeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.check_timeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>[]
          }
          delete: {
            args: Prisma.check_timeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>
          }
          update: {
            args: Prisma.check_timeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>
          }
          deleteMany: {
            args: Prisma.check_timeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.check_timeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.check_timeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>[]
          }
          upsert: {
            args: Prisma.check_timeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$check_timePayload>
          }
          aggregate: {
            args: Prisma.Check_timeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheck_time>
          }
          groupBy: {
            args: Prisma.check_timeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Check_timeGroupByOutputType>[]
          }
          count: {
            args: Prisma.check_timeCountArgs<ExtArgs>
            result: $Utils.Optional<Check_timeCountAggregateOutputType> | number
          }
        }
      }
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>
        fields: Prisma.departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      leave_request: {
        payload: Prisma.$leave_requestPayload<ExtArgs>
        fields: Prisma.leave_requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leave_requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leave_requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          findFirst: {
            args: Prisma.leave_requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leave_requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          findMany: {
            args: Prisma.leave_requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>[]
          }
          create: {
            args: Prisma.leave_requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          createMany: {
            args: Prisma.leave_requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leave_requestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>[]
          }
          delete: {
            args: Prisma.leave_requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          update: {
            args: Prisma.leave_requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          deleteMany: {
            args: Prisma.leave_requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leave_requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leave_requestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>[]
          }
          upsert: {
            args: Prisma.leave_requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          aggregate: {
            args: Prisma.Leave_requestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave_request>
          }
          groupBy: {
            args: Prisma.leave_requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<Leave_requestGroupByOutputType>[]
          }
          count: {
            args: Prisma.leave_requestCountArgs<ExtArgs>
            result: $Utils.Optional<Leave_requestCountAggregateOutputType> | number
          }
        }
      }
      mentor_profile: {
        payload: Prisma.$mentor_profilePayload<ExtArgs>
        fields: Prisma.mentor_profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mentor_profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mentor_profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>
          }
          findFirst: {
            args: Prisma.mentor_profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mentor_profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>
          }
          findMany: {
            args: Prisma.mentor_profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>[]
          }
          create: {
            args: Prisma.mentor_profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>
          }
          createMany: {
            args: Prisma.mentor_profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mentor_profileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>[]
          }
          delete: {
            args: Prisma.mentor_profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>
          }
          update: {
            args: Prisma.mentor_profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>
          }
          deleteMany: {
            args: Prisma.mentor_profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mentor_profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mentor_profileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>[]
          }
          upsert: {
            args: Prisma.mentor_profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentor_profilePayload>
          }
          aggregate: {
            args: Prisma.Mentor_profileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentor_profile>
          }
          groupBy: {
            args: Prisma.mentor_profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mentor_profileGroupByOutputType>[]
          }
          count: {
            args: Prisma.mentor_profileCountArgs<ExtArgs>
            result: $Utils.Optional<Mentor_profileCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      student_profile: {
        payload: Prisma.$student_profilePayload<ExtArgs>
        fields: Prisma.student_profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.student_profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.student_profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>
          }
          findFirst: {
            args: Prisma.student_profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.student_profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>
          }
          findMany: {
            args: Prisma.student_profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>[]
          }
          create: {
            args: Prisma.student_profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>
          }
          createMany: {
            args: Prisma.student_profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.student_profileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>[]
          }
          delete: {
            args: Prisma.student_profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>
          }
          update: {
            args: Prisma.student_profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>
          }
          deleteMany: {
            args: Prisma.student_profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.student_profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.student_profileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>[]
          }
          upsert: {
            args: Prisma.student_profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_profilePayload>
          }
          aggregate: {
            args: Prisma.Student_profileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_profile>
          }
          groupBy: {
            args: Prisma.student_profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_profileGroupByOutputType>[]
          }
          count: {
            args: Prisma.student_profileCountArgs<ExtArgs>
            result: $Utils.Optional<Student_profileCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin_log?: admin_logOmit
    check_time?: check_timeOmit
    department?: departmentOmit
    leave_request?: leave_requestOmit
    mentor_profile?: mentor_profileOmit
    role?: roleOmit
    student_profile?: student_profileOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    user: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DepartmentCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type Mentor_profileCountOutputType
   */

  export type Mentor_profileCountOutputType = {
    student_profile: number
  }

  export type Mentor_profileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_profile?: boolean | Mentor_profileCountOutputTypeCountStudent_profileArgs
  }

  // Custom InputTypes
  /**
   * Mentor_profileCountOutputType without action
   */
  export type Mentor_profileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor_profileCountOutputType
     */
    select?: Mentor_profileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Mentor_profileCountOutputType without action
   */
  export type Mentor_profileCountOutputTypeCountStudent_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_profileWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    user: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    admin_log: number
    check_time: number
    leave_request_leave_request_approverTouser: number
    leave_request_leave_request_user_idTouser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_log?: boolean | UserCountOutputTypeCountAdmin_logArgs
    check_time?: boolean | UserCountOutputTypeCountCheck_timeArgs
    leave_request_leave_request_approverTouser?: boolean | UserCountOutputTypeCountLeave_request_leave_request_approverTouserArgs
    leave_request_leave_request_user_idTouser?: boolean | UserCountOutputTypeCountLeave_request_leave_request_user_idTouserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdmin_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_logWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheck_timeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: check_timeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeave_request_leave_request_approverTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeave_request_leave_request_user_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin_log
   */

  export type AggregateAdmin_log = {
    _count: Admin_logCountAggregateOutputType | null
    _avg: Admin_logAvgAggregateOutputType | null
    _sum: Admin_logSumAggregateOutputType | null
    _min: Admin_logMinAggregateOutputType | null
    _max: Admin_logMaxAggregateOutputType | null
  }

  export type Admin_logAvgAggregateOutputType = {
    id: number | null
    admin_id: number | null
  }

  export type Admin_logSumAggregateOutputType = {
    id: number | null
    admin_id: number | null
  }

  export type Admin_logMinAggregateOutputType = {
    id: number | null
    admin_id: number | null
    action: string | null
    created_at: Date | null
  }

  export type Admin_logMaxAggregateOutputType = {
    id: number | null
    admin_id: number | null
    action: string | null
    created_at: Date | null
  }

  export type Admin_logCountAggregateOutputType = {
    id: number
    admin_id: number
    action: number
    created_at: number
    _all: number
  }


  export type Admin_logAvgAggregateInputType = {
    id?: true
    admin_id?: true
  }

  export type Admin_logSumAggregateInputType = {
    id?: true
    admin_id?: true
  }

  export type Admin_logMinAggregateInputType = {
    id?: true
    admin_id?: true
    action?: true
    created_at?: true
  }

  export type Admin_logMaxAggregateInputType = {
    id?: true
    admin_id?: true
    action?: true
    created_at?: true
  }

  export type Admin_logCountAggregateInputType = {
    id?: true
    admin_id?: true
    action?: true
    created_at?: true
    _all?: true
  }

  export type Admin_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_log to aggregate.
     */
    where?: admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_logs to fetch.
     */
    orderBy?: admin_logOrderByWithRelationInput | admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_logs
    **/
    _count?: true | Admin_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_logMaxAggregateInputType
  }

  export type GetAdmin_logAggregateType<T extends Admin_logAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_log[P]>
      : GetScalarType<T[P], AggregateAdmin_log[P]>
  }




  export type admin_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_logWhereInput
    orderBy?: admin_logOrderByWithAggregationInput | admin_logOrderByWithAggregationInput[]
    by: Admin_logScalarFieldEnum[] | Admin_logScalarFieldEnum
    having?: admin_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_logCountAggregateInputType | true
    _avg?: Admin_logAvgAggregateInputType
    _sum?: Admin_logSumAggregateInputType
    _min?: Admin_logMinAggregateInputType
    _max?: Admin_logMaxAggregateInputType
  }

  export type Admin_logGroupByOutputType = {
    id: number
    admin_id: number
    action: string | null
    created_at: Date | null
    _count: Admin_logCountAggregateOutputType | null
    _avg: Admin_logAvgAggregateOutputType | null
    _sum: Admin_logSumAggregateOutputType | null
    _min: Admin_logMinAggregateOutputType | null
    _max: Admin_logMaxAggregateOutputType | null
  }

  type GetAdmin_logGroupByPayload<T extends admin_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_logGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_logGroupByOutputType[P]>
        }
      >
    >


  export type admin_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin_log"]>

  export type admin_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin_log"]>

  export type admin_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin_log"]>

  export type admin_logSelectScalar = {
    id?: boolean
    admin_id?: boolean
    action?: boolean
    created_at?: boolean
  }

  export type admin_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin_id" | "action" | "created_at", ExtArgs["result"]["admin_log"]>
  export type admin_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type admin_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type admin_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $admin_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_log"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      admin_id: number
      action: string | null
      created_at: Date | null
    }, ExtArgs["result"]["admin_log"]>
    composites: {}
  }

  type admin_logGetPayload<S extends boolean | null | undefined | admin_logDefaultArgs> = $Result.GetResult<Prisma.$admin_logPayload, S>

  type admin_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_logCountAggregateInputType | true
    }

  export interface admin_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_log'], meta: { name: 'admin_log' } }
    /**
     * Find zero or one Admin_log that matches the filter.
     * @param {admin_logFindUniqueArgs} args - Arguments to find a Admin_log
     * @example
     * // Get one Admin_log
     * const admin_log = await prisma.admin_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_logFindUniqueArgs>(args: SelectSubset<T, admin_logFindUniqueArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_logFindUniqueOrThrowArgs} args - Arguments to find a Admin_log
     * @example
     * // Get one Admin_log
     * const admin_log = await prisma.admin_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_logFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_logFindFirstArgs} args - Arguments to find a Admin_log
     * @example
     * // Get one Admin_log
     * const admin_log = await prisma.admin_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_logFindFirstArgs>(args?: SelectSubset<T, admin_logFindFirstArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_logFindFirstOrThrowArgs} args - Arguments to find a Admin_log
     * @example
     * // Get one Admin_log
     * const admin_log = await prisma.admin_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_logFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_logs
     * const admin_logs = await prisma.admin_log.findMany()
     * 
     * // Get first 10 Admin_logs
     * const admin_logs = await prisma.admin_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_logWithIdOnly = await prisma.admin_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends admin_logFindManyArgs>(args?: SelectSubset<T, admin_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_log.
     * @param {admin_logCreateArgs} args - Arguments to create a Admin_log.
     * @example
     * // Create one Admin_log
     * const Admin_log = await prisma.admin_log.create({
     *   data: {
     *     // ... data to create a Admin_log
     *   }
     * })
     * 
     */
    create<T extends admin_logCreateArgs>(args: SelectSubset<T, admin_logCreateArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_logs.
     * @param {admin_logCreateManyArgs} args - Arguments to create many Admin_logs.
     * @example
     * // Create many Admin_logs
     * const admin_log = await prisma.admin_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_logCreateManyArgs>(args?: SelectSubset<T, admin_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admin_logs and returns the data saved in the database.
     * @param {admin_logCreateManyAndReturnArgs} args - Arguments to create many Admin_logs.
     * @example
     * // Create many Admin_logs
     * const admin_log = await prisma.admin_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admin_logs and only return the `id`
     * const admin_logWithIdOnly = await prisma.admin_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends admin_logCreateManyAndReturnArgs>(args?: SelectSubset<T, admin_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin_log.
     * @param {admin_logDeleteArgs} args - Arguments to delete one Admin_log.
     * @example
     * // Delete one Admin_log
     * const Admin_log = await prisma.admin_log.delete({
     *   where: {
     *     // ... filter to delete one Admin_log
     *   }
     * })
     * 
     */
    delete<T extends admin_logDeleteArgs>(args: SelectSubset<T, admin_logDeleteArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_log.
     * @param {admin_logUpdateArgs} args - Arguments to update one Admin_log.
     * @example
     * // Update one Admin_log
     * const admin_log = await prisma.admin_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_logUpdateArgs>(args: SelectSubset<T, admin_logUpdateArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_logs.
     * @param {admin_logDeleteManyArgs} args - Arguments to filter Admin_logs to delete.
     * @example
     * // Delete a few Admin_logs
     * const { count } = await prisma.admin_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_logDeleteManyArgs>(args?: SelectSubset<T, admin_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_logs
     * const admin_log = await prisma.admin_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_logUpdateManyArgs>(args: SelectSubset<T, admin_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_logs and returns the data updated in the database.
     * @param {admin_logUpdateManyAndReturnArgs} args - Arguments to update many Admin_logs.
     * @example
     * // Update many Admin_logs
     * const admin_log = await prisma.admin_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admin_logs and only return the `id`
     * const admin_logWithIdOnly = await prisma.admin_log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends admin_logUpdateManyAndReturnArgs>(args: SelectSubset<T, admin_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin_log.
     * @param {admin_logUpsertArgs} args - Arguments to update or create a Admin_log.
     * @example
     * // Update or create a Admin_log
     * const admin_log = await prisma.admin_log.upsert({
     *   create: {
     *     // ... data to create a Admin_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_log we want to update
     *   }
     * })
     */
    upsert<T extends admin_logUpsertArgs>(args: SelectSubset<T, admin_logUpsertArgs<ExtArgs>>): Prisma__admin_logClient<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_logCountArgs} args - Arguments to filter Admin_logs to count.
     * @example
     * // Count the number of Admin_logs
     * const count = await prisma.admin_log.count({
     *   where: {
     *     // ... the filter for the Admin_logs we want to count
     *   }
     * })
    **/
    count<T extends admin_logCountArgs>(
      args?: Subset<T, admin_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_logAggregateArgs>(args: Subset<T, Admin_logAggregateArgs>): Prisma.PrismaPromise<GetAdmin_logAggregateType<T>>

    /**
     * Group by Admin_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_logGroupByArgs['orderBy'] }
        : { orderBy?: admin_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_log model
   */
  readonly fields: admin_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_log model
   */
  interface admin_logFieldRefs {
    readonly id: FieldRef<"admin_log", 'Int'>
    readonly admin_id: FieldRef<"admin_log", 'Int'>
    readonly action: FieldRef<"admin_log", 'String'>
    readonly created_at: FieldRef<"admin_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin_log findUnique
   */
  export type admin_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * Filter, which admin_log to fetch.
     */
    where: admin_logWhereUniqueInput
  }

  /**
   * admin_log findUniqueOrThrow
   */
  export type admin_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * Filter, which admin_log to fetch.
     */
    where: admin_logWhereUniqueInput
  }

  /**
   * admin_log findFirst
   */
  export type admin_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * Filter, which admin_log to fetch.
     */
    where?: admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_logs to fetch.
     */
    orderBy?: admin_logOrderByWithRelationInput | admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_logs.
     */
    cursor?: admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_logs.
     */
    distinct?: Admin_logScalarFieldEnum | Admin_logScalarFieldEnum[]
  }

  /**
   * admin_log findFirstOrThrow
   */
  export type admin_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * Filter, which admin_log to fetch.
     */
    where?: admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_logs to fetch.
     */
    orderBy?: admin_logOrderByWithRelationInput | admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_logs.
     */
    cursor?: admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_logs.
     */
    distinct?: Admin_logScalarFieldEnum | Admin_logScalarFieldEnum[]
  }

  /**
   * admin_log findMany
   */
  export type admin_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * Filter, which admin_logs to fetch.
     */
    where?: admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_logs to fetch.
     */
    orderBy?: admin_logOrderByWithRelationInput | admin_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_logs.
     */
    cursor?: admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_logs.
     */
    skip?: number
    distinct?: Admin_logScalarFieldEnum | Admin_logScalarFieldEnum[]
  }

  /**
   * admin_log create
   */
  export type admin_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * The data needed to create a admin_log.
     */
    data: XOR<admin_logCreateInput, admin_logUncheckedCreateInput>
  }

  /**
   * admin_log createMany
   */
  export type admin_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_logs.
     */
    data: admin_logCreateManyInput | admin_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_log createManyAndReturn
   */
  export type admin_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * The data used to create many admin_logs.
     */
    data: admin_logCreateManyInput | admin_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * admin_log update
   */
  export type admin_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * The data needed to update a admin_log.
     */
    data: XOR<admin_logUpdateInput, admin_logUncheckedUpdateInput>
    /**
     * Choose, which admin_log to update.
     */
    where: admin_logWhereUniqueInput
  }

  /**
   * admin_log updateMany
   */
  export type admin_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_logs.
     */
    data: XOR<admin_logUpdateManyMutationInput, admin_logUncheckedUpdateManyInput>
    /**
     * Filter which admin_logs to update
     */
    where?: admin_logWhereInput
    /**
     * Limit how many admin_logs to update.
     */
    limit?: number
  }

  /**
   * admin_log updateManyAndReturn
   */
  export type admin_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * The data used to update admin_logs.
     */
    data: XOR<admin_logUpdateManyMutationInput, admin_logUncheckedUpdateManyInput>
    /**
     * Filter which admin_logs to update
     */
    where?: admin_logWhereInput
    /**
     * Limit how many admin_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * admin_log upsert
   */
  export type admin_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * The filter to search for the admin_log to update in case it exists.
     */
    where: admin_logWhereUniqueInput
    /**
     * In case the admin_log found by the `where` argument doesn't exist, create a new admin_log with this data.
     */
    create: XOR<admin_logCreateInput, admin_logUncheckedCreateInput>
    /**
     * In case the admin_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_logUpdateInput, admin_logUncheckedUpdateInput>
  }

  /**
   * admin_log delete
   */
  export type admin_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    /**
     * Filter which admin_log to delete.
     */
    where: admin_logWhereUniqueInput
  }

  /**
   * admin_log deleteMany
   */
  export type admin_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_logs to delete
     */
    where?: admin_logWhereInput
    /**
     * Limit how many admin_logs to delete.
     */
    limit?: number
  }

  /**
   * admin_log without action
   */
  export type admin_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
  }


  /**
   * Model check_time
   */

  export type AggregateCheck_time = {
    _count: Check_timeCountAggregateOutputType | null
    _avg: Check_timeAvgAggregateOutputType | null
    _sum: Check_timeSumAggregateOutputType | null
    _min: Check_timeMinAggregateOutputType | null
    _max: Check_timeMaxAggregateOutputType | null
  }

  export type Check_timeAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Check_timeSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Check_timeMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    time: Date | null
    type_check: string | null
    location: string | null
    note: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Check_timeMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    time: Date | null
    type_check: string | null
    location: string | null
    note: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Check_timeCountAggregateOutputType = {
    id: number
    user_id: number
    time: number
    type_check: number
    location: number
    note: number
    latitude: number
    longitude: number
    _all: number
  }


  export type Check_timeAvgAggregateInputType = {
    id?: true
    user_id?: true
    latitude?: true
    longitude?: true
  }

  export type Check_timeSumAggregateInputType = {
    id?: true
    user_id?: true
    latitude?: true
    longitude?: true
  }

  export type Check_timeMinAggregateInputType = {
    id?: true
    user_id?: true
    time?: true
    type_check?: true
    location?: true
    note?: true
    latitude?: true
    longitude?: true
  }

  export type Check_timeMaxAggregateInputType = {
    id?: true
    user_id?: true
    time?: true
    type_check?: true
    location?: true
    note?: true
    latitude?: true
    longitude?: true
  }

  export type Check_timeCountAggregateInputType = {
    id?: true
    user_id?: true
    time?: true
    type_check?: true
    location?: true
    note?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type Check_timeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which check_time to aggregate.
     */
    where?: check_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_times to fetch.
     */
    orderBy?: check_timeOrderByWithRelationInput | check_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: check_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned check_times
    **/
    _count?: true | Check_timeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Check_timeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Check_timeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Check_timeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Check_timeMaxAggregateInputType
  }

  export type GetCheck_timeAggregateType<T extends Check_timeAggregateArgs> = {
        [P in keyof T & keyof AggregateCheck_time]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheck_time[P]>
      : GetScalarType<T[P], AggregateCheck_time[P]>
  }




  export type check_timeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: check_timeWhereInput
    orderBy?: check_timeOrderByWithAggregationInput | check_timeOrderByWithAggregationInput[]
    by: Check_timeScalarFieldEnum[] | Check_timeScalarFieldEnum
    having?: check_timeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Check_timeCountAggregateInputType | true
    _avg?: Check_timeAvgAggregateInputType
    _sum?: Check_timeSumAggregateInputType
    _min?: Check_timeMinAggregateInputType
    _max?: Check_timeMaxAggregateInputType
  }

  export type Check_timeGroupByOutputType = {
    id: number
    user_id: number
    time: Date | null
    type_check: string | null
    location: string | null
    note: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    _count: Check_timeCountAggregateOutputType | null
    _avg: Check_timeAvgAggregateOutputType | null
    _sum: Check_timeSumAggregateOutputType | null
    _min: Check_timeMinAggregateOutputType | null
    _max: Check_timeMaxAggregateOutputType | null
  }

  type GetCheck_timeGroupByPayload<T extends check_timeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Check_timeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Check_timeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Check_timeGroupByOutputType[P]>
            : GetScalarType<T[P], Check_timeGroupByOutputType[P]>
        }
      >
    >


  export type check_timeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    time?: boolean
    type_check?: boolean
    location?: boolean
    note?: boolean
    latitude?: boolean
    longitude?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check_time"]>

  export type check_timeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    time?: boolean
    type_check?: boolean
    location?: boolean
    note?: boolean
    latitude?: boolean
    longitude?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check_time"]>

  export type check_timeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    time?: boolean
    type_check?: boolean
    location?: boolean
    note?: boolean
    latitude?: boolean
    longitude?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check_time"]>

  export type check_timeSelectScalar = {
    id?: boolean
    user_id?: boolean
    time?: boolean
    type_check?: boolean
    location?: boolean
    note?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type check_timeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "time" | "type_check" | "location" | "note" | "latitude" | "longitude", ExtArgs["result"]["check_time"]>
  export type check_timeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type check_timeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type check_timeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $check_timePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "check_time"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      time: Date | null
      type_check: string | null
      location: string | null
      note: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
    }, ExtArgs["result"]["check_time"]>
    composites: {}
  }

  type check_timeGetPayload<S extends boolean | null | undefined | check_timeDefaultArgs> = $Result.GetResult<Prisma.$check_timePayload, S>

  type check_timeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<check_timeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Check_timeCountAggregateInputType | true
    }

  export interface check_timeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['check_time'], meta: { name: 'check_time' } }
    /**
     * Find zero or one Check_time that matches the filter.
     * @param {check_timeFindUniqueArgs} args - Arguments to find a Check_time
     * @example
     * // Get one Check_time
     * const check_time = await prisma.check_time.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends check_timeFindUniqueArgs>(args: SelectSubset<T, check_timeFindUniqueArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Check_time that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {check_timeFindUniqueOrThrowArgs} args - Arguments to find a Check_time
     * @example
     * // Get one Check_time
     * const check_time = await prisma.check_time.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends check_timeFindUniqueOrThrowArgs>(args: SelectSubset<T, check_timeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check_time that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_timeFindFirstArgs} args - Arguments to find a Check_time
     * @example
     * // Get one Check_time
     * const check_time = await prisma.check_time.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends check_timeFindFirstArgs>(args?: SelectSubset<T, check_timeFindFirstArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check_time that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_timeFindFirstOrThrowArgs} args - Arguments to find a Check_time
     * @example
     * // Get one Check_time
     * const check_time = await prisma.check_time.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends check_timeFindFirstOrThrowArgs>(args?: SelectSubset<T, check_timeFindFirstOrThrowArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Check_times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_timeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Check_times
     * const check_times = await prisma.check_time.findMany()
     * 
     * // Get first 10 Check_times
     * const check_times = await prisma.check_time.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const check_timeWithIdOnly = await prisma.check_time.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends check_timeFindManyArgs>(args?: SelectSubset<T, check_timeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Check_time.
     * @param {check_timeCreateArgs} args - Arguments to create a Check_time.
     * @example
     * // Create one Check_time
     * const Check_time = await prisma.check_time.create({
     *   data: {
     *     // ... data to create a Check_time
     *   }
     * })
     * 
     */
    create<T extends check_timeCreateArgs>(args: SelectSubset<T, check_timeCreateArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Check_times.
     * @param {check_timeCreateManyArgs} args - Arguments to create many Check_times.
     * @example
     * // Create many Check_times
     * const check_time = await prisma.check_time.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends check_timeCreateManyArgs>(args?: SelectSubset<T, check_timeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Check_times and returns the data saved in the database.
     * @param {check_timeCreateManyAndReturnArgs} args - Arguments to create many Check_times.
     * @example
     * // Create many Check_times
     * const check_time = await prisma.check_time.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Check_times and only return the `id`
     * const check_timeWithIdOnly = await prisma.check_time.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends check_timeCreateManyAndReturnArgs>(args?: SelectSubset<T, check_timeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Check_time.
     * @param {check_timeDeleteArgs} args - Arguments to delete one Check_time.
     * @example
     * // Delete one Check_time
     * const Check_time = await prisma.check_time.delete({
     *   where: {
     *     // ... filter to delete one Check_time
     *   }
     * })
     * 
     */
    delete<T extends check_timeDeleteArgs>(args: SelectSubset<T, check_timeDeleteArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Check_time.
     * @param {check_timeUpdateArgs} args - Arguments to update one Check_time.
     * @example
     * // Update one Check_time
     * const check_time = await prisma.check_time.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends check_timeUpdateArgs>(args: SelectSubset<T, check_timeUpdateArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Check_times.
     * @param {check_timeDeleteManyArgs} args - Arguments to filter Check_times to delete.
     * @example
     * // Delete a few Check_times
     * const { count } = await prisma.check_time.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends check_timeDeleteManyArgs>(args?: SelectSubset<T, check_timeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Check_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_timeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Check_times
     * const check_time = await prisma.check_time.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends check_timeUpdateManyArgs>(args: SelectSubset<T, check_timeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Check_times and returns the data updated in the database.
     * @param {check_timeUpdateManyAndReturnArgs} args - Arguments to update many Check_times.
     * @example
     * // Update many Check_times
     * const check_time = await prisma.check_time.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Check_times and only return the `id`
     * const check_timeWithIdOnly = await prisma.check_time.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends check_timeUpdateManyAndReturnArgs>(args: SelectSubset<T, check_timeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Check_time.
     * @param {check_timeUpsertArgs} args - Arguments to update or create a Check_time.
     * @example
     * // Update or create a Check_time
     * const check_time = await prisma.check_time.upsert({
     *   create: {
     *     // ... data to create a Check_time
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Check_time we want to update
     *   }
     * })
     */
    upsert<T extends check_timeUpsertArgs>(args: SelectSubset<T, check_timeUpsertArgs<ExtArgs>>): Prisma__check_timeClient<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Check_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_timeCountArgs} args - Arguments to filter Check_times to count.
     * @example
     * // Count the number of Check_times
     * const count = await prisma.check_time.count({
     *   where: {
     *     // ... the filter for the Check_times we want to count
     *   }
     * })
    **/
    count<T extends check_timeCountArgs>(
      args?: Subset<T, check_timeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Check_timeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Check_time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Check_timeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Check_timeAggregateArgs>(args: Subset<T, Check_timeAggregateArgs>): Prisma.PrismaPromise<GetCheck_timeAggregateType<T>>

    /**
     * Group by Check_time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {check_timeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends check_timeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: check_timeGroupByArgs['orderBy'] }
        : { orderBy?: check_timeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, check_timeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheck_timeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the check_time model
   */
  readonly fields: check_timeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for check_time.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__check_timeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the check_time model
   */
  interface check_timeFieldRefs {
    readonly id: FieldRef<"check_time", 'Int'>
    readonly user_id: FieldRef<"check_time", 'Int'>
    readonly time: FieldRef<"check_time", 'DateTime'>
    readonly type_check: FieldRef<"check_time", 'String'>
    readonly location: FieldRef<"check_time", 'String'>
    readonly note: FieldRef<"check_time", 'String'>
    readonly latitude: FieldRef<"check_time", 'Decimal'>
    readonly longitude: FieldRef<"check_time", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * check_time findUnique
   */
  export type check_timeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * Filter, which check_time to fetch.
     */
    where: check_timeWhereUniqueInput
  }

  /**
   * check_time findUniqueOrThrow
   */
  export type check_timeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * Filter, which check_time to fetch.
     */
    where: check_timeWhereUniqueInput
  }

  /**
   * check_time findFirst
   */
  export type check_timeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * Filter, which check_time to fetch.
     */
    where?: check_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_times to fetch.
     */
    orderBy?: check_timeOrderByWithRelationInput | check_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for check_times.
     */
    cursor?: check_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of check_times.
     */
    distinct?: Check_timeScalarFieldEnum | Check_timeScalarFieldEnum[]
  }

  /**
   * check_time findFirstOrThrow
   */
  export type check_timeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * Filter, which check_time to fetch.
     */
    where?: check_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_times to fetch.
     */
    orderBy?: check_timeOrderByWithRelationInput | check_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for check_times.
     */
    cursor?: check_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of check_times.
     */
    distinct?: Check_timeScalarFieldEnum | Check_timeScalarFieldEnum[]
  }

  /**
   * check_time findMany
   */
  export type check_timeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * Filter, which check_times to fetch.
     */
    where?: check_timeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of check_times to fetch.
     */
    orderBy?: check_timeOrderByWithRelationInput | check_timeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing check_times.
     */
    cursor?: check_timeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` check_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` check_times.
     */
    skip?: number
    distinct?: Check_timeScalarFieldEnum | Check_timeScalarFieldEnum[]
  }

  /**
   * check_time create
   */
  export type check_timeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * The data needed to create a check_time.
     */
    data: XOR<check_timeCreateInput, check_timeUncheckedCreateInput>
  }

  /**
   * check_time createMany
   */
  export type check_timeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many check_times.
     */
    data: check_timeCreateManyInput | check_timeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * check_time createManyAndReturn
   */
  export type check_timeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * The data used to create many check_times.
     */
    data: check_timeCreateManyInput | check_timeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * check_time update
   */
  export type check_timeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * The data needed to update a check_time.
     */
    data: XOR<check_timeUpdateInput, check_timeUncheckedUpdateInput>
    /**
     * Choose, which check_time to update.
     */
    where: check_timeWhereUniqueInput
  }

  /**
   * check_time updateMany
   */
  export type check_timeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update check_times.
     */
    data: XOR<check_timeUpdateManyMutationInput, check_timeUncheckedUpdateManyInput>
    /**
     * Filter which check_times to update
     */
    where?: check_timeWhereInput
    /**
     * Limit how many check_times to update.
     */
    limit?: number
  }

  /**
   * check_time updateManyAndReturn
   */
  export type check_timeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * The data used to update check_times.
     */
    data: XOR<check_timeUpdateManyMutationInput, check_timeUncheckedUpdateManyInput>
    /**
     * Filter which check_times to update
     */
    where?: check_timeWhereInput
    /**
     * Limit how many check_times to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * check_time upsert
   */
  export type check_timeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * The filter to search for the check_time to update in case it exists.
     */
    where: check_timeWhereUniqueInput
    /**
     * In case the check_time found by the `where` argument doesn't exist, create a new check_time with this data.
     */
    create: XOR<check_timeCreateInput, check_timeUncheckedCreateInput>
    /**
     * In case the check_time was found with the provided `where` argument, update it with this data.
     */
    update: XOR<check_timeUpdateInput, check_timeUncheckedUpdateInput>
  }

  /**
   * check_time delete
   */
  export type check_timeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    /**
     * Filter which check_time to delete.
     */
    where: check_timeWhereUniqueInput
  }

  /**
   * check_time deleteMany
   */
  export type check_timeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which check_times to delete
     */
    where?: check_timeWhereInput
    /**
     * Limit how many check_times to delete.
     */
    limit?: number
  }

  /**
   * check_time without action
   */
  export type check_timeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
  }


  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    dept_id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    dept_id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    dept_id: number | null
    dept_name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    dept_id: number | null
    dept_name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    dept_id: number
    dept_name: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    dept_id?: true
  }

  export type DepartmentSumAggregateInputType = {
    dept_id?: true
  }

  export type DepartmentMinAggregateInputType = {
    dept_id?: true
    dept_name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    dept_id?: true
    dept_name?: true
  }

  export type DepartmentCountAggregateInputType = {
    dept_id?: true
    dept_name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    dept_id: number
    dept_name: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
    user?: boolean | department$userArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type departmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
  }, ExtArgs["result"]["department"]>

  export type departmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
  }, ExtArgs["result"]["department"]>

  export type departmentSelectScalar = {
    dept_id?: boolean
    dept_name?: boolean
  }

  export type departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dept_id" | "dept_name", ExtArgs["result"]["department"]>
  export type departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | department$userArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type departmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "department"
    objects: {
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dept_id: number
      dept_name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<Prisma.$departmentPayload, S>

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department'], meta: { name: 'department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentFindUniqueArgs>(args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentFindFirstArgs>(args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `dept_id`
     * const departmentWithDept_idOnly = await prisma.department.findMany({ select: { dept_id: true } })
     * 
     */
    findMany<T extends departmentFindManyArgs>(args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends departmentCreateArgs>(args: SelectSubset<T, departmentCreateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentCreateManyArgs>(args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `dept_id`
     * const departmentWithDept_idOnly = await prisma.department.createManyAndReturn({
     *   select: { dept_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends departmentDeleteArgs>(args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentUpdateArgs>(args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentDeleteManyArgs>(args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentUpdateManyArgs>(args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {departmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `dept_id`
     * const departmentWithDept_idOnly = await prisma.department.updateManyAndReturn({
     *   select: { dept_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends departmentUpdateManyAndReturnArgs>(args: SelectSubset<T, departmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends departmentUpsertArgs>(args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the department model
   */
  readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends department$userArgs<ExtArgs> = {}>(args?: Subset<T, department$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly dept_id: FieldRef<"department", 'Int'>
    readonly dept_name: FieldRef<"department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a department.
     */
    data: XOR<departmentCreateInput, departmentUncheckedCreateInput>
  }

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department createManyAndReturn
   */
  export type departmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department updateManyAndReturn
   */
  export type departmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
  }

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * department.user
   */
  export type department$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
  }


  /**
   * Model leave_request
   */

  export type AggregateLeave_request = {
    _count: Leave_requestCountAggregateOutputType | null
    _avg: Leave_requestAvgAggregateOutputType | null
    _sum: Leave_requestSumAggregateOutputType | null
    _min: Leave_requestMinAggregateOutputType | null
    _max: Leave_requestMaxAggregateOutputType | null
  }

  export type Leave_requestAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    approver: number | null
  }

  export type Leave_requestSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    approver: number | null
  }

  export type Leave_requestMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    leave_datetime: Date | null
    reason: string | null
    file: Uint8Array | null
    status: string | null
    approver: number | null
    approved_at: Date | null
  }

  export type Leave_requestMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    leave_datetime: Date | null
    reason: string | null
    file: Uint8Array | null
    status: string | null
    approver: number | null
    approved_at: Date | null
  }

  export type Leave_requestCountAggregateOutputType = {
    id: number
    user_id: number
    leave_datetime: number
    reason: number
    file: number
    status: number
    approver: number
    approved_at: number
    _all: number
  }


  export type Leave_requestAvgAggregateInputType = {
    id?: true
    user_id?: true
    approver?: true
  }

  export type Leave_requestSumAggregateInputType = {
    id?: true
    user_id?: true
    approver?: true
  }

  export type Leave_requestMinAggregateInputType = {
    id?: true
    user_id?: true
    leave_datetime?: true
    reason?: true
    file?: true
    status?: true
    approver?: true
    approved_at?: true
  }

  export type Leave_requestMaxAggregateInputType = {
    id?: true
    user_id?: true
    leave_datetime?: true
    reason?: true
    file?: true
    status?: true
    approver?: true
    approved_at?: true
  }

  export type Leave_requestCountAggregateInputType = {
    id?: true
    user_id?: true
    leave_datetime?: true
    reason?: true
    file?: true
    status?: true
    approver?: true
    approved_at?: true
    _all?: true
  }

  export type Leave_requestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_request to aggregate.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leave_requests
    **/
    _count?: true | Leave_requestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Leave_requestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Leave_requestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leave_requestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leave_requestMaxAggregateInputType
  }

  export type GetLeave_requestAggregateType<T extends Leave_requestAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave_request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_request[P]>
      : GetScalarType<T[P], AggregateLeave_request[P]>
  }




  export type leave_requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput
    orderBy?: leave_requestOrderByWithAggregationInput | leave_requestOrderByWithAggregationInput[]
    by: Leave_requestScalarFieldEnum[] | Leave_requestScalarFieldEnum
    having?: leave_requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leave_requestCountAggregateInputType | true
    _avg?: Leave_requestAvgAggregateInputType
    _sum?: Leave_requestSumAggregateInputType
    _min?: Leave_requestMinAggregateInputType
    _max?: Leave_requestMaxAggregateInputType
  }

  export type Leave_requestGroupByOutputType = {
    id: number
    user_id: number
    leave_datetime: Date | null
    reason: string | null
    file: Uint8Array | null
    status: string | null
    approver: number | null
    approved_at: Date | null
    _count: Leave_requestCountAggregateOutputType | null
    _avg: Leave_requestAvgAggregateOutputType | null
    _sum: Leave_requestSumAggregateOutputType | null
    _min: Leave_requestMinAggregateOutputType | null
    _max: Leave_requestMaxAggregateOutputType | null
  }

  type GetLeave_requestGroupByPayload<T extends leave_requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_requestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leave_requestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leave_requestGroupByOutputType[P]>
            : GetScalarType<T[P], Leave_requestGroupByOutputType[P]>
        }
      >
    >


  export type leave_requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    leave_datetime?: boolean
    reason?: boolean
    file?: boolean
    status?: boolean
    approver?: boolean
    approved_at?: boolean
    user_leave_request_approverTouser?: boolean | leave_request$user_leave_request_approverTouserArgs<ExtArgs>
    user_leave_request_user_idTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request"]>

  export type leave_requestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    leave_datetime?: boolean
    reason?: boolean
    file?: boolean
    status?: boolean
    approver?: boolean
    approved_at?: boolean
    user_leave_request_approverTouser?: boolean | leave_request$user_leave_request_approverTouserArgs<ExtArgs>
    user_leave_request_user_idTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request"]>

  export type leave_requestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    leave_datetime?: boolean
    reason?: boolean
    file?: boolean
    status?: boolean
    approver?: boolean
    approved_at?: boolean
    user_leave_request_approverTouser?: boolean | leave_request$user_leave_request_approverTouserArgs<ExtArgs>
    user_leave_request_user_idTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request"]>

  export type leave_requestSelectScalar = {
    id?: boolean
    user_id?: boolean
    leave_datetime?: boolean
    reason?: boolean
    file?: boolean
    status?: boolean
    approver?: boolean
    approved_at?: boolean
  }

  export type leave_requestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "leave_datetime" | "reason" | "file" | "status" | "approver" | "approved_at", ExtArgs["result"]["leave_request"]>
  export type leave_requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_leave_request_approverTouser?: boolean | leave_request$user_leave_request_approverTouserArgs<ExtArgs>
    user_leave_request_user_idTouser?: boolean | userDefaultArgs<ExtArgs>
  }
  export type leave_requestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_leave_request_approverTouser?: boolean | leave_request$user_leave_request_approverTouserArgs<ExtArgs>
    user_leave_request_user_idTouser?: boolean | userDefaultArgs<ExtArgs>
  }
  export type leave_requestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_leave_request_approverTouser?: boolean | leave_request$user_leave_request_approverTouserArgs<ExtArgs>
    user_leave_request_user_idTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $leave_requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leave_request"
    objects: {
      user_leave_request_approverTouser: Prisma.$userPayload<ExtArgs> | null
      user_leave_request_user_idTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      leave_datetime: Date | null
      reason: string | null
      file: Uint8Array | null
      status: string | null
      approver: number | null
      approved_at: Date | null
    }, ExtArgs["result"]["leave_request"]>
    composites: {}
  }

  type leave_requestGetPayload<S extends boolean | null | undefined | leave_requestDefaultArgs> = $Result.GetResult<Prisma.$leave_requestPayload, S>

  type leave_requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leave_requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Leave_requestCountAggregateInputType | true
    }

  export interface leave_requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_request'], meta: { name: 'leave_request' } }
    /**
     * Find zero or one Leave_request that matches the filter.
     * @param {leave_requestFindUniqueArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leave_requestFindUniqueArgs>(args: SelectSubset<T, leave_requestFindUniqueArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave_request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leave_requestFindUniqueOrThrowArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leave_requestFindUniqueOrThrowArgs>(args: SelectSubset<T, leave_requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindFirstArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leave_requestFindFirstArgs>(args?: SelectSubset<T, leave_requestFindFirstArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindFirstOrThrowArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leave_requestFindFirstOrThrowArgs>(args?: SelectSubset<T, leave_requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leave_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_requests
     * const leave_requests = await prisma.leave_request.findMany()
     * 
     * // Get first 10 Leave_requests
     * const leave_requests = await prisma.leave_request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leave_requestWithIdOnly = await prisma.leave_request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leave_requestFindManyArgs>(args?: SelectSubset<T, leave_requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave_request.
     * @param {leave_requestCreateArgs} args - Arguments to create a Leave_request.
     * @example
     * // Create one Leave_request
     * const Leave_request = await prisma.leave_request.create({
     *   data: {
     *     // ... data to create a Leave_request
     *   }
     * })
     * 
     */
    create<T extends leave_requestCreateArgs>(args: SelectSubset<T, leave_requestCreateArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leave_requests.
     * @param {leave_requestCreateManyArgs} args - Arguments to create many Leave_requests.
     * @example
     * // Create many Leave_requests
     * const leave_request = await prisma.leave_request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leave_requestCreateManyArgs>(args?: SelectSubset<T, leave_requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leave_requests and returns the data saved in the database.
     * @param {leave_requestCreateManyAndReturnArgs} args - Arguments to create many Leave_requests.
     * @example
     * // Create many Leave_requests
     * const leave_request = await prisma.leave_request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leave_requests and only return the `id`
     * const leave_requestWithIdOnly = await prisma.leave_request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leave_requestCreateManyAndReturnArgs>(args?: SelectSubset<T, leave_requestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave_request.
     * @param {leave_requestDeleteArgs} args - Arguments to delete one Leave_request.
     * @example
     * // Delete one Leave_request
     * const Leave_request = await prisma.leave_request.delete({
     *   where: {
     *     // ... filter to delete one Leave_request
     *   }
     * })
     * 
     */
    delete<T extends leave_requestDeleteArgs>(args: SelectSubset<T, leave_requestDeleteArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave_request.
     * @param {leave_requestUpdateArgs} args - Arguments to update one Leave_request.
     * @example
     * // Update one Leave_request
     * const leave_request = await prisma.leave_request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leave_requestUpdateArgs>(args: SelectSubset<T, leave_requestUpdateArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leave_requests.
     * @param {leave_requestDeleteManyArgs} args - Arguments to filter Leave_requests to delete.
     * @example
     * // Delete a few Leave_requests
     * const { count } = await prisma.leave_request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leave_requestDeleteManyArgs>(args?: SelectSubset<T, leave_requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_requests
     * const leave_request = await prisma.leave_request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leave_requestUpdateManyArgs>(args: SelectSubset<T, leave_requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_requests and returns the data updated in the database.
     * @param {leave_requestUpdateManyAndReturnArgs} args - Arguments to update many Leave_requests.
     * @example
     * // Update many Leave_requests
     * const leave_request = await prisma.leave_request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leave_requests and only return the `id`
     * const leave_requestWithIdOnly = await prisma.leave_request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leave_requestUpdateManyAndReturnArgs>(args: SelectSubset<T, leave_requestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave_request.
     * @param {leave_requestUpsertArgs} args - Arguments to update or create a Leave_request.
     * @example
     * // Update or create a Leave_request
     * const leave_request = await prisma.leave_request.upsert({
     *   create: {
     *     // ... data to create a Leave_request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_request we want to update
     *   }
     * })
     */
    upsert<T extends leave_requestUpsertArgs>(args: SelectSubset<T, leave_requestUpsertArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leave_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestCountArgs} args - Arguments to filter Leave_requests to count.
     * @example
     * // Count the number of Leave_requests
     * const count = await prisma.leave_request.count({
     *   where: {
     *     // ... the filter for the Leave_requests we want to count
     *   }
     * })
    **/
    count<T extends leave_requestCountArgs>(
      args?: Subset<T, leave_requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_requestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_requestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leave_requestAggregateArgs>(args: Subset<T, Leave_requestAggregateArgs>): Prisma.PrismaPromise<GetLeave_requestAggregateType<T>>

    /**
     * Group by Leave_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leave_requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_requestGroupByArgs['orderBy'] }
        : { orderBy?: leave_requestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leave_requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeave_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leave_request model
   */
  readonly fields: leave_requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_leave_request_approverTouser<T extends leave_request$user_leave_request_approverTouserArgs<ExtArgs> = {}>(args?: Subset<T, leave_request$user_leave_request_approverTouserArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_leave_request_user_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leave_request model
   */
  interface leave_requestFieldRefs {
    readonly id: FieldRef<"leave_request", 'Int'>
    readonly user_id: FieldRef<"leave_request", 'Int'>
    readonly leave_datetime: FieldRef<"leave_request", 'DateTime'>
    readonly reason: FieldRef<"leave_request", 'String'>
    readonly file: FieldRef<"leave_request", 'Bytes'>
    readonly status: FieldRef<"leave_request", 'String'>
    readonly approver: FieldRef<"leave_request", 'Int'>
    readonly approved_at: FieldRef<"leave_request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * leave_request findUnique
   */
  export type leave_requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request findUniqueOrThrow
   */
  export type leave_requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request findFirst
   */
  export type leave_requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_requests.
     */
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_request findFirstOrThrow
   */
  export type leave_requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_requests.
     */
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_request findMany
   */
  export type leave_requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_requests to fetch.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_request create
   */
  export type leave_requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * The data needed to create a leave_request.
     */
    data: XOR<leave_requestCreateInput, leave_requestUncheckedCreateInput>
  }

  /**
   * leave_request createMany
   */
  export type leave_requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_requests.
     */
    data: leave_requestCreateManyInput | leave_requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_request createManyAndReturn
   */
  export type leave_requestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * The data used to create many leave_requests.
     */
    data: leave_requestCreateManyInput | leave_requestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_request update
   */
  export type leave_requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * The data needed to update a leave_request.
     */
    data: XOR<leave_requestUpdateInput, leave_requestUncheckedUpdateInput>
    /**
     * Choose, which leave_request to update.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request updateMany
   */
  export type leave_requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_requests.
     */
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyInput>
    /**
     * Filter which leave_requests to update
     */
    where?: leave_requestWhereInput
    /**
     * Limit how many leave_requests to update.
     */
    limit?: number
  }

  /**
   * leave_request updateManyAndReturn
   */
  export type leave_requestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * The data used to update leave_requests.
     */
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyInput>
    /**
     * Filter which leave_requests to update
     */
    where?: leave_requestWhereInput
    /**
     * Limit how many leave_requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_request upsert
   */
  export type leave_requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * The filter to search for the leave_request to update in case it exists.
     */
    where: leave_requestWhereUniqueInput
    /**
     * In case the leave_request found by the `where` argument doesn't exist, create a new leave_request with this data.
     */
    create: XOR<leave_requestCreateInput, leave_requestUncheckedCreateInput>
    /**
     * In case the leave_request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_requestUpdateInput, leave_requestUncheckedUpdateInput>
  }

  /**
   * leave_request delete
   */
  export type leave_requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter which leave_request to delete.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request deleteMany
   */
  export type leave_requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_requests to delete
     */
    where?: leave_requestWhereInput
    /**
     * Limit how many leave_requests to delete.
     */
    limit?: number
  }

  /**
   * leave_request.user_leave_request_approverTouser
   */
  export type leave_request$user_leave_request_approverTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * leave_request without action
   */
  export type leave_requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
  }


  /**
   * Model mentor_profile
   */

  export type AggregateMentor_profile = {
    _count: Mentor_profileCountAggregateOutputType | null
    _avg: Mentor_profileAvgAggregateOutputType | null
    _sum: Mentor_profileSumAggregateOutputType | null
    _min: Mentor_profileMinAggregateOutputType | null
    _max: Mentor_profileMaxAggregateOutputType | null
  }

  export type Mentor_profileAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Mentor_profileSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Mentor_profileMinAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Mentor_profileMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Mentor_profileCountAggregateOutputType = {
    id: number
    user_id: number
    _all: number
  }


  export type Mentor_profileAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Mentor_profileSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Mentor_profileMinAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Mentor_profileMaxAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Mentor_profileCountAggregateInputType = {
    id?: true
    user_id?: true
    _all?: true
  }

  export type Mentor_profileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mentor_profile to aggregate.
     */
    where?: mentor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentor_profiles to fetch.
     */
    orderBy?: mentor_profileOrderByWithRelationInput | mentor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mentor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentor_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mentor_profiles
    **/
    _count?: true | Mentor_profileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mentor_profileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mentor_profileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mentor_profileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mentor_profileMaxAggregateInputType
  }

  export type GetMentor_profileAggregateType<T extends Mentor_profileAggregateArgs> = {
        [P in keyof T & keyof AggregateMentor_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor_profile[P]>
      : GetScalarType<T[P], AggregateMentor_profile[P]>
  }




  export type mentor_profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mentor_profileWhereInput
    orderBy?: mentor_profileOrderByWithAggregationInput | mentor_profileOrderByWithAggregationInput[]
    by: Mentor_profileScalarFieldEnum[] | Mentor_profileScalarFieldEnum
    having?: mentor_profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mentor_profileCountAggregateInputType | true
    _avg?: Mentor_profileAvgAggregateInputType
    _sum?: Mentor_profileSumAggregateInputType
    _min?: Mentor_profileMinAggregateInputType
    _max?: Mentor_profileMaxAggregateInputType
  }

  export type Mentor_profileGroupByOutputType = {
    id: number
    user_id: number
    _count: Mentor_profileCountAggregateOutputType | null
    _avg: Mentor_profileAvgAggregateOutputType | null
    _sum: Mentor_profileSumAggregateOutputType | null
    _min: Mentor_profileMinAggregateOutputType | null
    _max: Mentor_profileMaxAggregateOutputType | null
  }

  type GetMentor_profileGroupByPayload<T extends mentor_profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mentor_profileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mentor_profileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mentor_profileGroupByOutputType[P]>
            : GetScalarType<T[P], Mentor_profileGroupByOutputType[P]>
        }
      >
    >


  export type mentor_profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    student_profile?: boolean | mentor_profile$student_profileArgs<ExtArgs>
    _count?: boolean | Mentor_profileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor_profile"]>

  export type mentor_profileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor_profile"]>

  export type mentor_profileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentor_profile"]>

  export type mentor_profileSelectScalar = {
    id?: boolean
    user_id?: boolean
  }

  export type mentor_profileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id", ExtArgs["result"]["mentor_profile"]>
  export type mentor_profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    student_profile?: boolean | mentor_profile$student_profileArgs<ExtArgs>
    _count?: boolean | Mentor_profileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mentor_profileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type mentor_profileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $mentor_profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mentor_profile"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      student_profile: Prisma.$student_profilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
    }, ExtArgs["result"]["mentor_profile"]>
    composites: {}
  }

  type mentor_profileGetPayload<S extends boolean | null | undefined | mentor_profileDefaultArgs> = $Result.GetResult<Prisma.$mentor_profilePayload, S>

  type mentor_profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mentor_profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mentor_profileCountAggregateInputType | true
    }

  export interface mentor_profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mentor_profile'], meta: { name: 'mentor_profile' } }
    /**
     * Find zero or one Mentor_profile that matches the filter.
     * @param {mentor_profileFindUniqueArgs} args - Arguments to find a Mentor_profile
     * @example
     * // Get one Mentor_profile
     * const mentor_profile = await prisma.mentor_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mentor_profileFindUniqueArgs>(args: SelectSubset<T, mentor_profileFindUniqueArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mentor_profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mentor_profileFindUniqueOrThrowArgs} args - Arguments to find a Mentor_profile
     * @example
     * // Get one Mentor_profile
     * const mentor_profile = await prisma.mentor_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mentor_profileFindUniqueOrThrowArgs>(args: SelectSubset<T, mentor_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentor_profileFindFirstArgs} args - Arguments to find a Mentor_profile
     * @example
     * // Get one Mentor_profile
     * const mentor_profile = await prisma.mentor_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mentor_profileFindFirstArgs>(args?: SelectSubset<T, mentor_profileFindFirstArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentor_profileFindFirstOrThrowArgs} args - Arguments to find a Mentor_profile
     * @example
     * // Get one Mentor_profile
     * const mentor_profile = await prisma.mentor_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mentor_profileFindFirstOrThrowArgs>(args?: SelectSubset<T, mentor_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentor_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentor_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentor_profiles
     * const mentor_profiles = await prisma.mentor_profile.findMany()
     * 
     * // Get first 10 Mentor_profiles
     * const mentor_profiles = await prisma.mentor_profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentor_profileWithIdOnly = await prisma.mentor_profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mentor_profileFindManyArgs>(args?: SelectSubset<T, mentor_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mentor_profile.
     * @param {mentor_profileCreateArgs} args - Arguments to create a Mentor_profile.
     * @example
     * // Create one Mentor_profile
     * const Mentor_profile = await prisma.mentor_profile.create({
     *   data: {
     *     // ... data to create a Mentor_profile
     *   }
     * })
     * 
     */
    create<T extends mentor_profileCreateArgs>(args: SelectSubset<T, mentor_profileCreateArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentor_profiles.
     * @param {mentor_profileCreateManyArgs} args - Arguments to create many Mentor_profiles.
     * @example
     * // Create many Mentor_profiles
     * const mentor_profile = await prisma.mentor_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mentor_profileCreateManyArgs>(args?: SelectSubset<T, mentor_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mentor_profiles and returns the data saved in the database.
     * @param {mentor_profileCreateManyAndReturnArgs} args - Arguments to create many Mentor_profiles.
     * @example
     * // Create many Mentor_profiles
     * const mentor_profile = await prisma.mentor_profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mentor_profiles and only return the `id`
     * const mentor_profileWithIdOnly = await prisma.mentor_profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mentor_profileCreateManyAndReturnArgs>(args?: SelectSubset<T, mentor_profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mentor_profile.
     * @param {mentor_profileDeleteArgs} args - Arguments to delete one Mentor_profile.
     * @example
     * // Delete one Mentor_profile
     * const Mentor_profile = await prisma.mentor_profile.delete({
     *   where: {
     *     // ... filter to delete one Mentor_profile
     *   }
     * })
     * 
     */
    delete<T extends mentor_profileDeleteArgs>(args: SelectSubset<T, mentor_profileDeleteArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mentor_profile.
     * @param {mentor_profileUpdateArgs} args - Arguments to update one Mentor_profile.
     * @example
     * // Update one Mentor_profile
     * const mentor_profile = await prisma.mentor_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mentor_profileUpdateArgs>(args: SelectSubset<T, mentor_profileUpdateArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentor_profiles.
     * @param {mentor_profileDeleteManyArgs} args - Arguments to filter Mentor_profiles to delete.
     * @example
     * // Delete a few Mentor_profiles
     * const { count } = await prisma.mentor_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mentor_profileDeleteManyArgs>(args?: SelectSubset<T, mentor_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentor_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentor_profiles
     * const mentor_profile = await prisma.mentor_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mentor_profileUpdateManyArgs>(args: SelectSubset<T, mentor_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentor_profiles and returns the data updated in the database.
     * @param {mentor_profileUpdateManyAndReturnArgs} args - Arguments to update many Mentor_profiles.
     * @example
     * // Update many Mentor_profiles
     * const mentor_profile = await prisma.mentor_profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mentor_profiles and only return the `id`
     * const mentor_profileWithIdOnly = await prisma.mentor_profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mentor_profileUpdateManyAndReturnArgs>(args: SelectSubset<T, mentor_profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mentor_profile.
     * @param {mentor_profileUpsertArgs} args - Arguments to update or create a Mentor_profile.
     * @example
     * // Update or create a Mentor_profile
     * const mentor_profile = await prisma.mentor_profile.upsert({
     *   create: {
     *     // ... data to create a Mentor_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor_profile we want to update
     *   }
     * })
     */
    upsert<T extends mentor_profileUpsertArgs>(args: SelectSubset<T, mentor_profileUpsertArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentor_profileCountArgs} args - Arguments to filter Mentor_profiles to count.
     * @example
     * // Count the number of Mentor_profiles
     * const count = await prisma.mentor_profile.count({
     *   where: {
     *     // ... the filter for the Mentor_profiles we want to count
     *   }
     * })
    **/
    count<T extends mentor_profileCountArgs>(
      args?: Subset<T, mentor_profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mentor_profileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mentor_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mentor_profileAggregateArgs>(args: Subset<T, Mentor_profileAggregateArgs>): Prisma.PrismaPromise<GetMentor_profileAggregateType<T>>

    /**
     * Group by Mentor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentor_profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mentor_profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mentor_profileGroupByArgs['orderBy'] }
        : { orderBy?: mentor_profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mentor_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentor_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mentor_profile model
   */
  readonly fields: mentor_profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mentor_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mentor_profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student_profile<T extends mentor_profile$student_profileArgs<ExtArgs> = {}>(args?: Subset<T, mentor_profile$student_profileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mentor_profile model
   */
  interface mentor_profileFieldRefs {
    readonly id: FieldRef<"mentor_profile", 'Int'>
    readonly user_id: FieldRef<"mentor_profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mentor_profile findUnique
   */
  export type mentor_profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * Filter, which mentor_profile to fetch.
     */
    where: mentor_profileWhereUniqueInput
  }

  /**
   * mentor_profile findUniqueOrThrow
   */
  export type mentor_profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * Filter, which mentor_profile to fetch.
     */
    where: mentor_profileWhereUniqueInput
  }

  /**
   * mentor_profile findFirst
   */
  export type mentor_profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * Filter, which mentor_profile to fetch.
     */
    where?: mentor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentor_profiles to fetch.
     */
    orderBy?: mentor_profileOrderByWithRelationInput | mentor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mentor_profiles.
     */
    cursor?: mentor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentor_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mentor_profiles.
     */
    distinct?: Mentor_profileScalarFieldEnum | Mentor_profileScalarFieldEnum[]
  }

  /**
   * mentor_profile findFirstOrThrow
   */
  export type mentor_profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * Filter, which mentor_profile to fetch.
     */
    where?: mentor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentor_profiles to fetch.
     */
    orderBy?: mentor_profileOrderByWithRelationInput | mentor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mentor_profiles.
     */
    cursor?: mentor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentor_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mentor_profiles.
     */
    distinct?: Mentor_profileScalarFieldEnum | Mentor_profileScalarFieldEnum[]
  }

  /**
   * mentor_profile findMany
   */
  export type mentor_profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * Filter, which mentor_profiles to fetch.
     */
    where?: mentor_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentor_profiles to fetch.
     */
    orderBy?: mentor_profileOrderByWithRelationInput | mentor_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mentor_profiles.
     */
    cursor?: mentor_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentor_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentor_profiles.
     */
    skip?: number
    distinct?: Mentor_profileScalarFieldEnum | Mentor_profileScalarFieldEnum[]
  }

  /**
   * mentor_profile create
   */
  export type mentor_profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * The data needed to create a mentor_profile.
     */
    data: XOR<mentor_profileCreateInput, mentor_profileUncheckedCreateInput>
  }

  /**
   * mentor_profile createMany
   */
  export type mentor_profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mentor_profiles.
     */
    data: mentor_profileCreateManyInput | mentor_profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mentor_profile createManyAndReturn
   */
  export type mentor_profileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * The data used to create many mentor_profiles.
     */
    data: mentor_profileCreateManyInput | mentor_profileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mentor_profile update
   */
  export type mentor_profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * The data needed to update a mentor_profile.
     */
    data: XOR<mentor_profileUpdateInput, mentor_profileUncheckedUpdateInput>
    /**
     * Choose, which mentor_profile to update.
     */
    where: mentor_profileWhereUniqueInput
  }

  /**
   * mentor_profile updateMany
   */
  export type mentor_profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mentor_profiles.
     */
    data: XOR<mentor_profileUpdateManyMutationInput, mentor_profileUncheckedUpdateManyInput>
    /**
     * Filter which mentor_profiles to update
     */
    where?: mentor_profileWhereInput
    /**
     * Limit how many mentor_profiles to update.
     */
    limit?: number
  }

  /**
   * mentor_profile updateManyAndReturn
   */
  export type mentor_profileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * The data used to update mentor_profiles.
     */
    data: XOR<mentor_profileUpdateManyMutationInput, mentor_profileUncheckedUpdateManyInput>
    /**
     * Filter which mentor_profiles to update
     */
    where?: mentor_profileWhereInput
    /**
     * Limit how many mentor_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mentor_profile upsert
   */
  export type mentor_profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * The filter to search for the mentor_profile to update in case it exists.
     */
    where: mentor_profileWhereUniqueInput
    /**
     * In case the mentor_profile found by the `where` argument doesn't exist, create a new mentor_profile with this data.
     */
    create: XOR<mentor_profileCreateInput, mentor_profileUncheckedCreateInput>
    /**
     * In case the mentor_profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mentor_profileUpdateInput, mentor_profileUncheckedUpdateInput>
  }

  /**
   * mentor_profile delete
   */
  export type mentor_profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    /**
     * Filter which mentor_profile to delete.
     */
    where: mentor_profileWhereUniqueInput
  }

  /**
   * mentor_profile deleteMany
   */
  export type mentor_profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mentor_profiles to delete
     */
    where?: mentor_profileWhereInput
    /**
     * Limit how many mentor_profiles to delete.
     */
    limit?: number
  }

  /**
   * mentor_profile.student_profile
   */
  export type mentor_profile$student_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    where?: student_profileWhereInput
    orderBy?: student_profileOrderByWithRelationInput | student_profileOrderByWithRelationInput[]
    cursor?: student_profileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_profileScalarFieldEnum | Student_profileScalarFieldEnum[]
  }

  /**
   * mentor_profile without action
   */
  export type mentor_profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends role$userArgs<ExtArgs> = {}>(args?: Subset<T, role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly name: FieldRef<"role", 'String'>
    readonly description: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.user
   */
  export type role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model student_profile
   */

  export type AggregateStudent_profile = {
    _count: Student_profileCountAggregateOutputType | null
    _avg: Student_profileAvgAggregateOutputType | null
    _sum: Student_profileSumAggregateOutputType | null
    _min: Student_profileMinAggregateOutputType | null
    _max: Student_profileMaxAggregateOutputType | null
  }

  export type Student_profileAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    mentor_id: number | null
  }

  export type Student_profileSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    mentor_id: number | null
  }

  export type Student_profileMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    mentor_id: number | null
    picture: Uint8Array | null
    university: string | null
    start_date: Date | null
    end_date: Date | null
  }

  export type Student_profileMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    mentor_id: number | null
    picture: Uint8Array | null
    university: string | null
    start_date: Date | null
    end_date: Date | null
  }

  export type Student_profileCountAggregateOutputType = {
    id: number
    user_id: number
    mentor_id: number
    picture: number
    university: number
    start_date: number
    end_date: number
    _all: number
  }


  export type Student_profileAvgAggregateInputType = {
    id?: true
    user_id?: true
    mentor_id?: true
  }

  export type Student_profileSumAggregateInputType = {
    id?: true
    user_id?: true
    mentor_id?: true
  }

  export type Student_profileMinAggregateInputType = {
    id?: true
    user_id?: true
    mentor_id?: true
    picture?: true
    university?: true
    start_date?: true
    end_date?: true
  }

  export type Student_profileMaxAggregateInputType = {
    id?: true
    user_id?: true
    mentor_id?: true
    picture?: true
    university?: true
    start_date?: true
    end_date?: true
  }

  export type Student_profileCountAggregateInputType = {
    id?: true
    user_id?: true
    mentor_id?: true
    picture?: true
    university?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type Student_profileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_profile to aggregate.
     */
    where?: student_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_profiles to fetch.
     */
    orderBy?: student_profileOrderByWithRelationInput | student_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: student_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned student_profiles
    **/
    _count?: true | Student_profileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_profileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_profileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_profileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_profileMaxAggregateInputType
  }

  export type GetStudent_profileAggregateType<T extends Student_profileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_profile[P]>
      : GetScalarType<T[P], AggregateStudent_profile[P]>
  }




  export type student_profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_profileWhereInput
    orderBy?: student_profileOrderByWithAggregationInput | student_profileOrderByWithAggregationInput[]
    by: Student_profileScalarFieldEnum[] | Student_profileScalarFieldEnum
    having?: student_profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_profileCountAggregateInputType | true
    _avg?: Student_profileAvgAggregateInputType
    _sum?: Student_profileSumAggregateInputType
    _min?: Student_profileMinAggregateInputType
    _max?: Student_profileMaxAggregateInputType
  }

  export type Student_profileGroupByOutputType = {
    id: number
    user_id: number
    mentor_id: number | null
    picture: Uint8Array | null
    university: string | null
    start_date: Date | null
    end_date: Date | null
    _count: Student_profileCountAggregateOutputType | null
    _avg: Student_profileAvgAggregateOutputType | null
    _sum: Student_profileSumAggregateOutputType | null
    _min: Student_profileMinAggregateOutputType | null
    _max: Student_profileMaxAggregateOutputType | null
  }

  type GetStudent_profileGroupByPayload<T extends student_profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_profileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_profileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_profileGroupByOutputType[P]>
            : GetScalarType<T[P], Student_profileGroupByOutputType[P]>
        }
      >
    >


  export type student_profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    mentor_id?: boolean
    picture?: boolean
    university?: boolean
    start_date?: boolean
    end_date?: boolean
    mentor_profile?: boolean | student_profile$mentor_profileArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_profile"]>

  export type student_profileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    mentor_id?: boolean
    picture?: boolean
    university?: boolean
    start_date?: boolean
    end_date?: boolean
    mentor_profile?: boolean | student_profile$mentor_profileArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_profile"]>

  export type student_profileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    mentor_id?: boolean
    picture?: boolean
    university?: boolean
    start_date?: boolean
    end_date?: boolean
    mentor_profile?: boolean | student_profile$mentor_profileArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_profile"]>

  export type student_profileSelectScalar = {
    id?: boolean
    user_id?: boolean
    mentor_id?: boolean
    picture?: boolean
    university?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type student_profileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "mentor_id" | "picture" | "university" | "start_date" | "end_date", ExtArgs["result"]["student_profile"]>
  export type student_profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor_profile?: boolean | student_profile$mentor_profileArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type student_profileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor_profile?: boolean | student_profile$mentor_profileArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type student_profileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor_profile?: boolean | student_profile$mentor_profileArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $student_profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student_profile"
    objects: {
      mentor_profile: Prisma.$mentor_profilePayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      mentor_id: number | null
      picture: Uint8Array | null
      university: string | null
      start_date: Date | null
      end_date: Date | null
    }, ExtArgs["result"]["student_profile"]>
    composites: {}
  }

  type student_profileGetPayload<S extends boolean | null | undefined | student_profileDefaultArgs> = $Result.GetResult<Prisma.$student_profilePayload, S>

  type student_profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<student_profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_profileCountAggregateInputType | true
    }

  export interface student_profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student_profile'], meta: { name: 'student_profile' } }
    /**
     * Find zero or one Student_profile that matches the filter.
     * @param {student_profileFindUniqueArgs} args - Arguments to find a Student_profile
     * @example
     * // Get one Student_profile
     * const student_profile = await prisma.student_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_profileFindUniqueArgs>(args: SelectSubset<T, student_profileFindUniqueArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_profileFindUniqueOrThrowArgs} args - Arguments to find a Student_profile
     * @example
     * // Get one Student_profile
     * const student_profile = await prisma.student_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_profileFindUniqueOrThrowArgs>(args: SelectSubset<T, student_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_profileFindFirstArgs} args - Arguments to find a Student_profile
     * @example
     * // Get one Student_profile
     * const student_profile = await prisma.student_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_profileFindFirstArgs>(args?: SelectSubset<T, student_profileFindFirstArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_profileFindFirstOrThrowArgs} args - Arguments to find a Student_profile
     * @example
     * // Get one Student_profile
     * const student_profile = await prisma.student_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_profileFindFirstOrThrowArgs>(args?: SelectSubset<T, student_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_profiles
     * const student_profiles = await prisma.student_profile.findMany()
     * 
     * // Get first 10 Student_profiles
     * const student_profiles = await prisma.student_profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const student_profileWithIdOnly = await prisma.student_profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends student_profileFindManyArgs>(args?: SelectSubset<T, student_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_profile.
     * @param {student_profileCreateArgs} args - Arguments to create a Student_profile.
     * @example
     * // Create one Student_profile
     * const Student_profile = await prisma.student_profile.create({
     *   data: {
     *     // ... data to create a Student_profile
     *   }
     * })
     * 
     */
    create<T extends student_profileCreateArgs>(args: SelectSubset<T, student_profileCreateArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_profiles.
     * @param {student_profileCreateManyArgs} args - Arguments to create many Student_profiles.
     * @example
     * // Create many Student_profiles
     * const student_profile = await prisma.student_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends student_profileCreateManyArgs>(args?: SelectSubset<T, student_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_profiles and returns the data saved in the database.
     * @param {student_profileCreateManyAndReturnArgs} args - Arguments to create many Student_profiles.
     * @example
     * // Create many Student_profiles
     * const student_profile = await prisma.student_profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Student_profiles and only return the `id`
     * const student_profileWithIdOnly = await prisma.student_profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends student_profileCreateManyAndReturnArgs>(args?: SelectSubset<T, student_profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_profile.
     * @param {student_profileDeleteArgs} args - Arguments to delete one Student_profile.
     * @example
     * // Delete one Student_profile
     * const Student_profile = await prisma.student_profile.delete({
     *   where: {
     *     // ... filter to delete one Student_profile
     *   }
     * })
     * 
     */
    delete<T extends student_profileDeleteArgs>(args: SelectSubset<T, student_profileDeleteArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_profile.
     * @param {student_profileUpdateArgs} args - Arguments to update one Student_profile.
     * @example
     * // Update one Student_profile
     * const student_profile = await prisma.student_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends student_profileUpdateArgs>(args: SelectSubset<T, student_profileUpdateArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_profiles.
     * @param {student_profileDeleteManyArgs} args - Arguments to filter Student_profiles to delete.
     * @example
     * // Delete a few Student_profiles
     * const { count } = await prisma.student_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends student_profileDeleteManyArgs>(args?: SelectSubset<T, student_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_profiles
     * const student_profile = await prisma.student_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends student_profileUpdateManyArgs>(args: SelectSubset<T, student_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_profiles and returns the data updated in the database.
     * @param {student_profileUpdateManyAndReturnArgs} args - Arguments to update many Student_profiles.
     * @example
     * // Update many Student_profiles
     * const student_profile = await prisma.student_profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Student_profiles and only return the `id`
     * const student_profileWithIdOnly = await prisma.student_profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends student_profileUpdateManyAndReturnArgs>(args: SelectSubset<T, student_profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_profile.
     * @param {student_profileUpsertArgs} args - Arguments to update or create a Student_profile.
     * @example
     * // Update or create a Student_profile
     * const student_profile = await prisma.student_profile.upsert({
     *   create: {
     *     // ... data to create a Student_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_profile we want to update
     *   }
     * })
     */
    upsert<T extends student_profileUpsertArgs>(args: SelectSubset<T, student_profileUpsertArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_profileCountArgs} args - Arguments to filter Student_profiles to count.
     * @example
     * // Count the number of Student_profiles
     * const count = await prisma.student_profile.count({
     *   where: {
     *     // ... the filter for the Student_profiles we want to count
     *   }
     * })
    **/
    count<T extends student_profileCountArgs>(
      args?: Subset<T, student_profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_profileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Student_profileAggregateArgs>(args: Subset<T, Student_profileAggregateArgs>): Prisma.PrismaPromise<GetStudent_profileAggregateType<T>>

    /**
     * Group by Student_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends student_profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: student_profileGroupByArgs['orderBy'] }
        : { orderBy?: student_profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, student_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student_profile model
   */
  readonly fields: student_profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__student_profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor_profile<T extends student_profile$mentor_profileArgs<ExtArgs> = {}>(args?: Subset<T, student_profile$mentor_profileArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student_profile model
   */
  interface student_profileFieldRefs {
    readonly id: FieldRef<"student_profile", 'Int'>
    readonly user_id: FieldRef<"student_profile", 'Int'>
    readonly mentor_id: FieldRef<"student_profile", 'Int'>
    readonly picture: FieldRef<"student_profile", 'Bytes'>
    readonly university: FieldRef<"student_profile", 'String'>
    readonly start_date: FieldRef<"student_profile", 'DateTime'>
    readonly end_date: FieldRef<"student_profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student_profile findUnique
   */
  export type student_profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * Filter, which student_profile to fetch.
     */
    where: student_profileWhereUniqueInput
  }

  /**
   * student_profile findUniqueOrThrow
   */
  export type student_profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * Filter, which student_profile to fetch.
     */
    where: student_profileWhereUniqueInput
  }

  /**
   * student_profile findFirst
   */
  export type student_profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * Filter, which student_profile to fetch.
     */
    where?: student_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_profiles to fetch.
     */
    orderBy?: student_profileOrderByWithRelationInput | student_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_profiles.
     */
    cursor?: student_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_profiles.
     */
    distinct?: Student_profileScalarFieldEnum | Student_profileScalarFieldEnum[]
  }

  /**
   * student_profile findFirstOrThrow
   */
  export type student_profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * Filter, which student_profile to fetch.
     */
    where?: student_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_profiles to fetch.
     */
    orderBy?: student_profileOrderByWithRelationInput | student_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_profiles.
     */
    cursor?: student_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_profiles.
     */
    distinct?: Student_profileScalarFieldEnum | Student_profileScalarFieldEnum[]
  }

  /**
   * student_profile findMany
   */
  export type student_profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * Filter, which student_profiles to fetch.
     */
    where?: student_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_profiles to fetch.
     */
    orderBy?: student_profileOrderByWithRelationInput | student_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing student_profiles.
     */
    cursor?: student_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_profiles.
     */
    skip?: number
    distinct?: Student_profileScalarFieldEnum | Student_profileScalarFieldEnum[]
  }

  /**
   * student_profile create
   */
  export type student_profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * The data needed to create a student_profile.
     */
    data: XOR<student_profileCreateInput, student_profileUncheckedCreateInput>
  }

  /**
   * student_profile createMany
   */
  export type student_profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_profiles.
     */
    data: student_profileCreateManyInput | student_profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_profile createManyAndReturn
   */
  export type student_profileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * The data used to create many student_profiles.
     */
    data: student_profileCreateManyInput | student_profileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_profile update
   */
  export type student_profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * The data needed to update a student_profile.
     */
    data: XOR<student_profileUpdateInput, student_profileUncheckedUpdateInput>
    /**
     * Choose, which student_profile to update.
     */
    where: student_profileWhereUniqueInput
  }

  /**
   * student_profile updateMany
   */
  export type student_profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update student_profiles.
     */
    data: XOR<student_profileUpdateManyMutationInput, student_profileUncheckedUpdateManyInput>
    /**
     * Filter which student_profiles to update
     */
    where?: student_profileWhereInput
    /**
     * Limit how many student_profiles to update.
     */
    limit?: number
  }

  /**
   * student_profile updateManyAndReturn
   */
  export type student_profileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * The data used to update student_profiles.
     */
    data: XOR<student_profileUpdateManyMutationInput, student_profileUncheckedUpdateManyInput>
    /**
     * Filter which student_profiles to update
     */
    where?: student_profileWhereInput
    /**
     * Limit how many student_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_profile upsert
   */
  export type student_profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * The filter to search for the student_profile to update in case it exists.
     */
    where: student_profileWhereUniqueInput
    /**
     * In case the student_profile found by the `where` argument doesn't exist, create a new student_profile with this data.
     */
    create: XOR<student_profileCreateInput, student_profileUncheckedCreateInput>
    /**
     * In case the student_profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<student_profileUpdateInput, student_profileUncheckedUpdateInput>
  }

  /**
   * student_profile delete
   */
  export type student_profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    /**
     * Filter which student_profile to delete.
     */
    where: student_profileWhereUniqueInput
  }

  /**
   * student_profile deleteMany
   */
  export type student_profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_profiles to delete
     */
    where?: student_profileWhereInput
    /**
     * Limit how many student_profiles to delete.
     */
    limit?: number
  }

  /**
   * student_profile.mentor_profile
   */
  export type student_profile$mentor_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    where?: mentor_profileWhereInput
  }

  /**
   * student_profile without action
   */
  export type student_profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    department_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role_id: number | null
    department_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    role_id: number | null
    department_id: number | null
    fname: string | null
    lname: string | null
    phone_number: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    role_id: number | null
    department_id: number | null
    fname: string | null
    lname: string | null
    phone_number: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role_id: number
    department_id: number
    fname: number
    lname: number
    phone_number: number
    email: number
    password_hash: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role_id?: true
    department_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role_id?: true
    department_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    role_id?: true
    department_id?: true
    fname?: true
    lname?: true
    phone_number?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role_id?: true
    department_id?: true
    fname?: true
    lname?: true
    phone_number?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role_id?: true
    department_id?: true
    fname?: true
    lname?: true
    phone_number?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    role_id: number
    department_id: number | null
    fname: string | null
    lname: string | null
    phone_number: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    department_id?: boolean
    fname?: boolean
    lname?: boolean
    phone_number?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    admin_log?: boolean | user$admin_logArgs<ExtArgs>
    check_time?: boolean | user$check_timeArgs<ExtArgs>
    leave_request_leave_request_approverTouser?: boolean | user$leave_request_leave_request_approverTouserArgs<ExtArgs>
    leave_request_leave_request_user_idTouser?: boolean | user$leave_request_leave_request_user_idTouserArgs<ExtArgs>
    mentor_profile?: boolean | user$mentor_profileArgs<ExtArgs>
    student_profile?: boolean | user$student_profileArgs<ExtArgs>
    department?: boolean | user$departmentArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    department_id?: boolean
    fname?: boolean
    lname?: boolean
    phone_number?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    department?: boolean | user$departmentArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    department_id?: boolean
    fname?: boolean
    lname?: boolean
    phone_number?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    department?: boolean | user$departmentArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    role_id?: boolean
    department_id?: boolean
    fname?: boolean
    lname?: boolean
    phone_number?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_id" | "department_id" | "fname" | "lname" | "phone_number" | "email" | "password_hash" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_log?: boolean | user$admin_logArgs<ExtArgs>
    check_time?: boolean | user$check_timeArgs<ExtArgs>
    leave_request_leave_request_approverTouser?: boolean | user$leave_request_leave_request_approverTouserArgs<ExtArgs>
    leave_request_leave_request_user_idTouser?: boolean | user$leave_request_leave_request_user_idTouserArgs<ExtArgs>
    mentor_profile?: boolean | user$mentor_profileArgs<ExtArgs>
    student_profile?: boolean | user$student_profileArgs<ExtArgs>
    department?: boolean | user$departmentArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | user$departmentArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | user$departmentArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      admin_log: Prisma.$admin_logPayload<ExtArgs>[]
      check_time: Prisma.$check_timePayload<ExtArgs>[]
      leave_request_leave_request_approverTouser: Prisma.$leave_requestPayload<ExtArgs>[]
      leave_request_leave_request_user_idTouser: Prisma.$leave_requestPayload<ExtArgs>[]
      mentor_profile: Prisma.$mentor_profilePayload<ExtArgs> | null
      student_profile: Prisma.$student_profilePayload<ExtArgs> | null
      department: Prisma.$departmentPayload<ExtArgs> | null
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_id: number
      department_id: number | null
      fname: string | null
      lname: string | null
      phone_number: string | null
      email: string | null
      password_hash: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin_log<T extends user$admin_logArgs<ExtArgs> = {}>(args?: Subset<T, user$admin_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    check_time<T extends user$check_timeArgs<ExtArgs> = {}>(args?: Subset<T, user$check_timeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$check_timePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_request_leave_request_approverTouser<T extends user$leave_request_leave_request_approverTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$leave_request_leave_request_approverTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_request_leave_request_user_idTouser<T extends user$leave_request_leave_request_user_idTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$leave_request_leave_request_user_idTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentor_profile<T extends user$mentor_profileArgs<ExtArgs> = {}>(args?: Subset<T, user$mentor_profileArgs<ExtArgs>>): Prisma__mentor_profileClient<$Result.GetResult<Prisma.$mentor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student_profile<T extends user$student_profileArgs<ExtArgs> = {}>(args?: Subset<T, user$student_profileArgs<ExtArgs>>): Prisma__student_profileClient<$Result.GetResult<Prisma.$student_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    department<T extends user$departmentArgs<ExtArgs> = {}>(args?: Subset<T, user$departmentArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly role_id: FieldRef<"user", 'Int'>
    readonly department_id: FieldRef<"user", 'Int'>
    readonly fname: FieldRef<"user", 'String'>
    readonly lname: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password_hash: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.admin_log
   */
  export type user$admin_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_log
     */
    select?: admin_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_log
     */
    omit?: admin_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_logInclude<ExtArgs> | null
    where?: admin_logWhereInput
    orderBy?: admin_logOrderByWithRelationInput | admin_logOrderByWithRelationInput[]
    cursor?: admin_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Admin_logScalarFieldEnum | Admin_logScalarFieldEnum[]
  }

  /**
   * user.check_time
   */
  export type user$check_timeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the check_time
     */
    select?: check_timeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the check_time
     */
    omit?: check_timeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: check_timeInclude<ExtArgs> | null
    where?: check_timeWhereInput
    orderBy?: check_timeOrderByWithRelationInput | check_timeOrderByWithRelationInput[]
    cursor?: check_timeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Check_timeScalarFieldEnum | Check_timeScalarFieldEnum[]
  }

  /**
   * user.leave_request_leave_request_approverTouser
   */
  export type user$leave_request_leave_request_approverTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    where?: leave_requestWhereInput
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    cursor?: leave_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * user.leave_request_leave_request_user_idTouser
   */
  export type user$leave_request_leave_request_user_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    where?: leave_requestWhereInput
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    cursor?: leave_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * user.mentor_profile
   */
  export type user$mentor_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor_profile
     */
    select?: mentor_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor_profile
     */
    omit?: mentor_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentor_profileInclude<ExtArgs> | null
    where?: mentor_profileWhereInput
  }

  /**
   * user.student_profile
   */
  export type user$student_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_profile
     */
    select?: student_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_profile
     */
    omit?: student_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_profileInclude<ExtArgs> | null
    where?: student_profileWhereInput
  }

  /**
   * user.department
   */
  export type user$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    where?: departmentWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Admin_logScalarFieldEnum: {
    id: 'id',
    admin_id: 'admin_id',
    action: 'action',
    created_at: 'created_at'
  };

  export type Admin_logScalarFieldEnum = (typeof Admin_logScalarFieldEnum)[keyof typeof Admin_logScalarFieldEnum]


  export const Check_timeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    time: 'time',
    type_check: 'type_check',
    location: 'location',
    note: 'note',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type Check_timeScalarFieldEnum = (typeof Check_timeScalarFieldEnum)[keyof typeof Check_timeScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    dept_id: 'dept_id',
    dept_name: 'dept_name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const Leave_requestScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    leave_datetime: 'leave_datetime',
    reason: 'reason',
    file: 'file',
    status: 'status',
    approver: 'approver',
    approved_at: 'approved_at'
  };

  export type Leave_requestScalarFieldEnum = (typeof Leave_requestScalarFieldEnum)[keyof typeof Leave_requestScalarFieldEnum]


  export const Mentor_profileScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type Mentor_profileScalarFieldEnum = (typeof Mentor_profileScalarFieldEnum)[keyof typeof Mentor_profileScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Student_profileScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    mentor_id: 'mentor_id',
    picture: 'picture',
    university: 'university',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type Student_profileScalarFieldEnum = (typeof Student_profileScalarFieldEnum)[keyof typeof Student_profileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    department_id: 'department_id',
    fname: 'fname',
    lname: 'lname',
    phone_number: 'phone_number',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type admin_logWhereInput = {
    AND?: admin_logWhereInput | admin_logWhereInput[]
    OR?: admin_logWhereInput[]
    NOT?: admin_logWhereInput | admin_logWhereInput[]
    id?: IntFilter<"admin_log"> | number
    admin_id?: IntFilter<"admin_log"> | number
    action?: StringNullableFilter<"admin_log"> | string | null
    created_at?: DateTimeNullableFilter<"admin_log"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type admin_logOrderByWithRelationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type admin_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: admin_logWhereInput | admin_logWhereInput[]
    OR?: admin_logWhereInput[]
    NOT?: admin_logWhereInput | admin_logWhereInput[]
    admin_id?: IntFilter<"admin_log"> | number
    action?: StringNullableFilter<"admin_log"> | string | null
    created_at?: DateTimeNullableFilter<"admin_log"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type admin_logOrderByWithAggregationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: admin_logCountOrderByAggregateInput
    _avg?: admin_logAvgOrderByAggregateInput
    _max?: admin_logMaxOrderByAggregateInput
    _min?: admin_logMinOrderByAggregateInput
    _sum?: admin_logSumOrderByAggregateInput
  }

  export type admin_logScalarWhereWithAggregatesInput = {
    AND?: admin_logScalarWhereWithAggregatesInput | admin_logScalarWhereWithAggregatesInput[]
    OR?: admin_logScalarWhereWithAggregatesInput[]
    NOT?: admin_logScalarWhereWithAggregatesInput | admin_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin_log"> | number
    admin_id?: IntWithAggregatesFilter<"admin_log"> | number
    action?: StringNullableWithAggregatesFilter<"admin_log"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"admin_log"> | Date | string | null
  }

  export type check_timeWhereInput = {
    AND?: check_timeWhereInput | check_timeWhereInput[]
    OR?: check_timeWhereInput[]
    NOT?: check_timeWhereInput | check_timeWhereInput[]
    id?: IntFilter<"check_time"> | number
    user_id?: IntFilter<"check_time"> | number
    time?: DateTimeNullableFilter<"check_time"> | Date | string | null
    type_check?: StringNullableFilter<"check_time"> | string | null
    location?: StringNullableFilter<"check_time"> | string | null
    note?: StringNullableFilter<"check_time"> | string | null
    latitude?: DecimalNullableFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type check_timeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    time?: SortOrderInput | SortOrder
    type_check?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type check_timeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: check_timeWhereInput | check_timeWhereInput[]
    OR?: check_timeWhereInput[]
    NOT?: check_timeWhereInput | check_timeWhereInput[]
    user_id?: IntFilter<"check_time"> | number
    time?: DateTimeNullableFilter<"check_time"> | Date | string | null
    type_check?: StringNullableFilter<"check_time"> | string | null
    location?: StringNullableFilter<"check_time"> | string | null
    note?: StringNullableFilter<"check_time"> | string | null
    latitude?: DecimalNullableFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type check_timeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    time?: SortOrderInput | SortOrder
    type_check?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    _count?: check_timeCountOrderByAggregateInput
    _avg?: check_timeAvgOrderByAggregateInput
    _max?: check_timeMaxOrderByAggregateInput
    _min?: check_timeMinOrderByAggregateInput
    _sum?: check_timeSumOrderByAggregateInput
  }

  export type check_timeScalarWhereWithAggregatesInput = {
    AND?: check_timeScalarWhereWithAggregatesInput | check_timeScalarWhereWithAggregatesInput[]
    OR?: check_timeScalarWhereWithAggregatesInput[]
    NOT?: check_timeScalarWhereWithAggregatesInput | check_timeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"check_time"> | number
    user_id?: IntWithAggregatesFilter<"check_time"> | number
    time?: DateTimeNullableWithAggregatesFilter<"check_time"> | Date | string | null
    type_check?: StringNullableWithAggregatesFilter<"check_time"> | string | null
    location?: StringNullableWithAggregatesFilter<"check_time"> | string | null
    note?: StringNullableWithAggregatesFilter<"check_time"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
  }

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    dept_id?: IntFilter<"department"> | number
    dept_name?: StringFilter<"department"> | string
    user?: UserListRelationFilter
  }

  export type departmentOrderByWithRelationInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    user?: userOrderByRelationAggregateInput
  }

  export type departmentWhereUniqueInput = Prisma.AtLeast<{
    dept_id?: number
    dept_name?: string
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    user?: UserListRelationFilter
  }, "dept_id" | "dept_name">

  export type departmentOrderByWithAggregationInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    _count?: departmentCountOrderByAggregateInput
    _avg?: departmentAvgOrderByAggregateInput
    _max?: departmentMaxOrderByAggregateInput
    _min?: departmentMinOrderByAggregateInput
    _sum?: departmentSumOrderByAggregateInput
  }

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    OR?: departmentScalarWhereWithAggregatesInput[]
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    dept_id?: IntWithAggregatesFilter<"department"> | number
    dept_name?: StringWithAggregatesFilter<"department"> | string
  }

  export type leave_requestWhereInput = {
    AND?: leave_requestWhereInput | leave_requestWhereInput[]
    OR?: leave_requestWhereInput[]
    NOT?: leave_requestWhereInput | leave_requestWhereInput[]
    id?: IntFilter<"leave_request"> | number
    user_id?: IntFilter<"leave_request"> | number
    leave_datetime?: DateTimeNullableFilter<"leave_request"> | Date | string | null
    reason?: StringNullableFilter<"leave_request"> | string | null
    file?: BytesNullableFilter<"leave_request"> | Uint8Array | null
    status?: StringNullableFilter<"leave_request"> | string | null
    approver?: IntNullableFilter<"leave_request"> | number | null
    approved_at?: DateTimeNullableFilter<"leave_request"> | Date | string | null
    user_leave_request_approverTouser?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    user_leave_request_user_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type leave_requestOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    leave_datetime?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    approver?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    user_leave_request_approverTouser?: userOrderByWithRelationInput
    user_leave_request_user_idTouser?: userOrderByWithRelationInput
  }

  export type leave_requestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: leave_requestWhereInput | leave_requestWhereInput[]
    OR?: leave_requestWhereInput[]
    NOT?: leave_requestWhereInput | leave_requestWhereInput[]
    user_id?: IntFilter<"leave_request"> | number
    leave_datetime?: DateTimeNullableFilter<"leave_request"> | Date | string | null
    reason?: StringNullableFilter<"leave_request"> | string | null
    file?: BytesNullableFilter<"leave_request"> | Uint8Array | null
    status?: StringNullableFilter<"leave_request"> | string | null
    approver?: IntNullableFilter<"leave_request"> | number | null
    approved_at?: DateTimeNullableFilter<"leave_request"> | Date | string | null
    user_leave_request_approverTouser?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    user_leave_request_user_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type leave_requestOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    leave_datetime?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    approver?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    _count?: leave_requestCountOrderByAggregateInput
    _avg?: leave_requestAvgOrderByAggregateInput
    _max?: leave_requestMaxOrderByAggregateInput
    _min?: leave_requestMinOrderByAggregateInput
    _sum?: leave_requestSumOrderByAggregateInput
  }

  export type leave_requestScalarWhereWithAggregatesInput = {
    AND?: leave_requestScalarWhereWithAggregatesInput | leave_requestScalarWhereWithAggregatesInput[]
    OR?: leave_requestScalarWhereWithAggregatesInput[]
    NOT?: leave_requestScalarWhereWithAggregatesInput | leave_requestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leave_request"> | number
    user_id?: IntWithAggregatesFilter<"leave_request"> | number
    leave_datetime?: DateTimeNullableWithAggregatesFilter<"leave_request"> | Date | string | null
    reason?: StringNullableWithAggregatesFilter<"leave_request"> | string | null
    file?: BytesNullableWithAggregatesFilter<"leave_request"> | Uint8Array | null
    status?: StringNullableWithAggregatesFilter<"leave_request"> | string | null
    approver?: IntNullableWithAggregatesFilter<"leave_request"> | number | null
    approved_at?: DateTimeNullableWithAggregatesFilter<"leave_request"> | Date | string | null
  }

  export type mentor_profileWhereInput = {
    AND?: mentor_profileWhereInput | mentor_profileWhereInput[]
    OR?: mentor_profileWhereInput[]
    NOT?: mentor_profileWhereInput | mentor_profileWhereInput[]
    id?: IntFilter<"mentor_profile"> | number
    user_id?: IntFilter<"mentor_profile"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    student_profile?: Student_profileListRelationFilter
  }

  export type mentor_profileOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    student_profile?: student_profileOrderByRelationAggregateInput
  }

  export type mentor_profileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: mentor_profileWhereInput | mentor_profileWhereInput[]
    OR?: mentor_profileWhereInput[]
    NOT?: mentor_profileWhereInput | mentor_profileWhereInput[]
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    student_profile?: Student_profileListRelationFilter
  }, "id" | "user_id">

  export type mentor_profileOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    _count?: mentor_profileCountOrderByAggregateInput
    _avg?: mentor_profileAvgOrderByAggregateInput
    _max?: mentor_profileMaxOrderByAggregateInput
    _min?: mentor_profileMinOrderByAggregateInput
    _sum?: mentor_profileSumOrderByAggregateInput
  }

  export type mentor_profileScalarWhereWithAggregatesInput = {
    AND?: mentor_profileScalarWhereWithAggregatesInput | mentor_profileScalarWhereWithAggregatesInput[]
    OR?: mentor_profileScalarWhereWithAggregatesInput[]
    NOT?: mentor_profileScalarWhereWithAggregatesInput | mentor_profileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mentor_profile"> | number
    user_id?: IntWithAggregatesFilter<"mentor_profile"> | number
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    name?: StringFilter<"role"> | string
    description?: StringNullableFilter<"role"> | string | null
    user?: UserListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    user?: userOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    description?: StringNullableFilter<"role"> | string | null
    user?: UserListRelationFilter
  }, "id" | "name">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    name?: StringWithAggregatesFilter<"role"> | string
    description?: StringNullableWithAggregatesFilter<"role"> | string | null
  }

  export type student_profileWhereInput = {
    AND?: student_profileWhereInput | student_profileWhereInput[]
    OR?: student_profileWhereInput[]
    NOT?: student_profileWhereInput | student_profileWhereInput[]
    id?: IntFilter<"student_profile"> | number
    user_id?: IntFilter<"student_profile"> | number
    mentor_id?: IntNullableFilter<"student_profile"> | number | null
    picture?: BytesNullableFilter<"student_profile"> | Uint8Array | null
    university?: StringNullableFilter<"student_profile"> | string | null
    start_date?: DateTimeNullableFilter<"student_profile"> | Date | string | null
    end_date?: DateTimeNullableFilter<"student_profile"> | Date | string | null
    mentor_profile?: XOR<Mentor_profileNullableScalarRelationFilter, mentor_profileWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type student_profileOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    mentor_id?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    mentor_profile?: mentor_profileOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type student_profileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: student_profileWhereInput | student_profileWhereInput[]
    OR?: student_profileWhereInput[]
    NOT?: student_profileWhereInput | student_profileWhereInput[]
    mentor_id?: IntNullableFilter<"student_profile"> | number | null
    picture?: BytesNullableFilter<"student_profile"> | Uint8Array | null
    university?: StringNullableFilter<"student_profile"> | string | null
    start_date?: DateTimeNullableFilter<"student_profile"> | Date | string | null
    end_date?: DateTimeNullableFilter<"student_profile"> | Date | string | null
    mentor_profile?: XOR<Mentor_profileNullableScalarRelationFilter, mentor_profileWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "user_id">

  export type student_profileOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    mentor_id?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    _count?: student_profileCountOrderByAggregateInput
    _avg?: student_profileAvgOrderByAggregateInput
    _max?: student_profileMaxOrderByAggregateInput
    _min?: student_profileMinOrderByAggregateInput
    _sum?: student_profileSumOrderByAggregateInput
  }

  export type student_profileScalarWhereWithAggregatesInput = {
    AND?: student_profileScalarWhereWithAggregatesInput | student_profileScalarWhereWithAggregatesInput[]
    OR?: student_profileScalarWhereWithAggregatesInput[]
    NOT?: student_profileScalarWhereWithAggregatesInput | student_profileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"student_profile"> | number
    user_id?: IntWithAggregatesFilter<"student_profile"> | number
    mentor_id?: IntNullableWithAggregatesFilter<"student_profile"> | number | null
    picture?: BytesNullableWithAggregatesFilter<"student_profile"> | Uint8Array | null
    university?: StringNullableWithAggregatesFilter<"student_profile"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"student_profile"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"student_profile"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    role_id?: IntFilter<"user"> | number
    department_id?: IntNullableFilter<"user"> | number | null
    fname?: StringNullableFilter<"user"> | string | null
    lname?: StringNullableFilter<"user"> | string | null
    phone_number?: StringNullableFilter<"user"> | string | null
    email?: StringNullableFilter<"user"> | string | null
    password_hash?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    admin_log?: Admin_logListRelationFilter
    check_time?: Check_timeListRelationFilter
    leave_request_leave_request_approverTouser?: Leave_requestListRelationFilter
    leave_request_leave_request_user_idTouser?: Leave_requestListRelationFilter
    mentor_profile?: XOR<Mentor_profileNullableScalarRelationFilter, mentor_profileWhereInput> | null
    student_profile?: XOR<Student_profileNullableScalarRelationFilter, student_profileWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, departmentWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrder
    department_id?: SortOrderInput | SortOrder
    fname?: SortOrderInput | SortOrder
    lname?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    admin_log?: admin_logOrderByRelationAggregateInput
    check_time?: check_timeOrderByRelationAggregateInput
    leave_request_leave_request_approverTouser?: leave_requestOrderByRelationAggregateInput
    leave_request_leave_request_user_idTouser?: leave_requestOrderByRelationAggregateInput
    mentor_profile?: mentor_profileOrderByWithRelationInput
    student_profile?: student_profileOrderByWithRelationInput
    department?: departmentOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone_number?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    role_id?: IntFilter<"user"> | number
    department_id?: IntNullableFilter<"user"> | number | null
    fname?: StringNullableFilter<"user"> | string | null
    lname?: StringNullableFilter<"user"> | string | null
    password_hash?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    admin_log?: Admin_logListRelationFilter
    check_time?: Check_timeListRelationFilter
    leave_request_leave_request_approverTouser?: Leave_requestListRelationFilter
    leave_request_leave_request_user_idTouser?: Leave_requestListRelationFilter
    mentor_profile?: XOR<Mentor_profileNullableScalarRelationFilter, mentor_profileWhereInput> | null
    student_profile?: XOR<Student_profileNullableScalarRelationFilter, student_profileWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, departmentWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }, "id" | "phone_number" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrder
    department_id?: SortOrderInput | SortOrder
    fname?: SortOrderInput | SortOrder
    lname?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    role_id?: IntWithAggregatesFilter<"user"> | number
    department_id?: IntNullableWithAggregatesFilter<"user"> | number | null
    fname?: StringNullableWithAggregatesFilter<"user"> | string | null
    lname?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"user"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type admin_logCreateInput = {
    action?: string | null
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutAdmin_logInput
  }

  export type admin_logUncheckedCreateInput = {
    id?: number
    admin_id: number
    action?: string | null
    created_at?: Date | string | null
  }

  export type admin_logUpdateInput = {
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutAdmin_logNestedInput
  }

  export type admin_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_logCreateManyInput = {
    id?: number
    admin_id: number
    action?: string | null
    created_at?: Date | string | null
  }

  export type admin_logUpdateManyMutationInput = {
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type check_timeCreateInput = {
    time?: Date | string | null
    type_check?: string | null
    location?: string | null
    note?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    user: userCreateNestedOneWithoutCheck_timeInput
  }

  export type check_timeUncheckedCreateInput = {
    id?: number
    user_id: number
    time?: Date | string | null
    type_check?: string | null
    location?: string | null
    note?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeUpdateInput = {
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type_check?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: userUpdateOneRequiredWithoutCheck_timeNestedInput
  }

  export type check_timeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type_check?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeCreateManyInput = {
    id?: number
    user_id: number
    time?: Date | string | null
    type_check?: string | null
    location?: string | null
    note?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeUpdateManyMutationInput = {
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type_check?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type_check?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type departmentCreateInput = {
    dept_name: string
    user?: userCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateInput = {
    dept_id?: number
    dept_name: string
    user?: userUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUpdateInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentCreateManyInput = {
    dept_id?: number
    dept_name: string
  }

  export type departmentUpdateManyMutationInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
  }

  export type departmentUncheckedUpdateManyInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
  }

  export type leave_requestCreateInput = {
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approved_at?: Date | string | null
    user_leave_request_approverTouser?: userCreateNestedOneWithoutLeave_request_leave_request_approverTouserInput
    user_leave_request_user_idTouser: userCreateNestedOneWithoutLeave_request_leave_request_user_idTouserInput
  }

  export type leave_requestUncheckedCreateInput = {
    id?: number
    user_id: number
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approver?: number | null
    approved_at?: Date | string | null
  }

  export type leave_requestUpdateInput = {
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_leave_request_approverTouser?: userUpdateOneWithoutLeave_request_leave_request_approverTouserNestedInput
    user_leave_request_user_idTouser?: userUpdateOneRequiredWithoutLeave_request_leave_request_user_idTouserNestedInput
  }

  export type leave_requestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leave_requestCreateManyInput = {
    id?: number
    user_id: number
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approver?: number | null
    approved_at?: Date | string | null
  }

  export type leave_requestUpdateManyMutationInput = {
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leave_requestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mentor_profileCreateInput = {
    user: userCreateNestedOneWithoutMentor_profileInput
    student_profile?: student_profileCreateNestedManyWithoutMentor_profileInput
  }

  export type mentor_profileUncheckedCreateInput = {
    id?: number
    user_id: number
    student_profile?: student_profileUncheckedCreateNestedManyWithoutMentor_profileInput
  }

  export type mentor_profileUpdateInput = {
    user?: userUpdateOneRequiredWithoutMentor_profileNestedInput
    student_profile?: student_profileUpdateManyWithoutMentor_profileNestedInput
  }

  export type mentor_profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    student_profile?: student_profileUncheckedUpdateManyWithoutMentor_profileNestedInput
  }

  export type mentor_profileCreateManyInput = {
    id?: number
    user_id: number
  }

  export type mentor_profileUpdateManyMutationInput = {

  }

  export type mentor_profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type roleCreateInput = {
    name: string
    description?: string | null
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type student_profileCreateInput = {
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    mentor_profile?: mentor_profileCreateNestedOneWithoutStudent_profileInput
    user: userCreateNestedOneWithoutStudent_profileInput
  }

  export type student_profileUncheckedCreateInput = {
    id?: number
    user_id: number
    mentor_id?: number | null
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type student_profileUpdateInput = {
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mentor_profile?: mentor_profileUpdateOneWithoutStudent_profileNestedInput
    user?: userUpdateOneRequiredWithoutStudent_profileNestedInput
  }

  export type student_profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    mentor_id?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_profileCreateManyInput = {
    id?: number
    user_id: number
    mentor_id?: number | null
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type student_profileUpdateManyMutationInput = {
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    mentor_id?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type admin_logCountOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type admin_logAvgOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
  }

  export type admin_logMaxOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type admin_logMinOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type admin_logSumOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    time?: SortOrder
    type_check?: SortOrder
    location?: SortOrder
    note?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type check_timeAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type check_timeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    time?: SortOrder
    type_check?: SortOrder
    location?: SortOrder
    note?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type check_timeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    time?: SortOrder
    type_check?: SortOrder
    location?: SortOrder
    note?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type check_timeSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentCountOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
  }

  export type departmentAvgOrderByAggregateInput = {
    dept_id?: SortOrder
  }

  export type departmentMaxOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
  }

  export type departmentMinOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
  }

  export type departmentSumOrderByAggregateInput = {
    dept_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type leave_requestCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    leave_datetime?: SortOrder
    reason?: SortOrder
    file?: SortOrder
    status?: SortOrder
    approver?: SortOrder
    approved_at?: SortOrder
  }

  export type leave_requestAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    approver?: SortOrder
  }

  export type leave_requestMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    leave_datetime?: SortOrder
    reason?: SortOrder
    file?: SortOrder
    status?: SortOrder
    approver?: SortOrder
    approved_at?: SortOrder
  }

  export type leave_requestMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    leave_datetime?: SortOrder
    reason?: SortOrder
    file?: SortOrder
    status?: SortOrder
    approver?: SortOrder
    approved_at?: SortOrder
  }

  export type leave_requestSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    approver?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Student_profileListRelationFilter = {
    every?: student_profileWhereInput
    some?: student_profileWhereInput
    none?: student_profileWhereInput
  }

  export type student_profileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mentor_profileCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type mentor_profileAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type mentor_profileMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type mentor_profileMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type mentor_profileSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Mentor_profileNullableScalarRelationFilter = {
    is?: mentor_profileWhereInput | null
    isNot?: mentor_profileWhereInput | null
  }

  export type student_profileCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mentor_id?: SortOrder
    picture?: SortOrder
    university?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type student_profileAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mentor_id?: SortOrder
  }

  export type student_profileMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mentor_id?: SortOrder
    picture?: SortOrder
    university?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type student_profileMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mentor_id?: SortOrder
    picture?: SortOrder
    university?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type student_profileSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mentor_id?: SortOrder
  }

  export type Admin_logListRelationFilter = {
    every?: admin_logWhereInput
    some?: admin_logWhereInput
    none?: admin_logWhereInput
  }

  export type Check_timeListRelationFilter = {
    every?: check_timeWhereInput
    some?: check_timeWhereInput
    none?: check_timeWhereInput
  }

  export type Leave_requestListRelationFilter = {
    every?: leave_requestWhereInput
    some?: leave_requestWhereInput
    none?: leave_requestWhereInput
  }

  export type Student_profileNullableScalarRelationFilter = {
    is?: student_profileWhereInput | null
    isNot?: student_profileWhereInput | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: departmentWhereInput | null
    isNot?: departmentWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type admin_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type check_timeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leave_requestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    department_id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    department_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    department_id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    department_id?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    department_id?: SortOrder
  }

  export type userCreateNestedOneWithoutAdmin_logInput = {
    create?: XOR<userCreateWithoutAdmin_logInput, userUncheckedCreateWithoutAdmin_logInput>
    connectOrCreate?: userCreateOrConnectWithoutAdmin_logInput
    connect?: userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutAdmin_logNestedInput = {
    create?: XOR<userCreateWithoutAdmin_logInput, userUncheckedCreateWithoutAdmin_logInput>
    connectOrCreate?: userCreateOrConnectWithoutAdmin_logInput
    upsert?: userUpsertWithoutAdmin_logInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAdmin_logInput, userUpdateWithoutAdmin_logInput>, userUncheckedUpdateWithoutAdmin_logInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutCheck_timeInput = {
    create?: XOR<userCreateWithoutCheck_timeInput, userUncheckedCreateWithoutCheck_timeInput>
    connectOrCreate?: userCreateOrConnectWithoutCheck_timeInput
    connect?: userWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type userUpdateOneRequiredWithoutCheck_timeNestedInput = {
    create?: XOR<userCreateWithoutCheck_timeInput, userUncheckedCreateWithoutCheck_timeInput>
    connectOrCreate?: userCreateOrConnectWithoutCheck_timeInput
    upsert?: userUpsertWithoutCheck_timeInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCheck_timeInput, userUpdateWithoutCheck_timeInput>, userUncheckedUpdateWithoutCheck_timeInput>
  }

  export type userCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type userUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    upsert?: userUpsertWithWhereUniqueWithoutDepartmentInput | userUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutDepartmentInput | userUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: userUpdateManyWithWhereWithoutDepartmentInput | userUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    upsert?: userUpsertWithWhereUniqueWithoutDepartmentInput | userUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutDepartmentInput | userUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: userUpdateManyWithWhereWithoutDepartmentInput | userUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutLeave_request_leave_request_approverTouserInput = {
    create?: XOR<userCreateWithoutLeave_request_leave_request_approverTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_approverTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_request_leave_request_approverTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutLeave_request_leave_request_user_idTouserInput = {
    create?: XOR<userCreateWithoutLeave_request_leave_request_user_idTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_user_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_request_leave_request_user_idTouserInput
    connect?: userWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type userUpdateOneWithoutLeave_request_leave_request_approverTouserNestedInput = {
    create?: XOR<userCreateWithoutLeave_request_leave_request_approverTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_approverTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_request_leave_request_approverTouserInput
    upsert?: userUpsertWithoutLeave_request_leave_request_approverTouserInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLeave_request_leave_request_approverTouserInput, userUpdateWithoutLeave_request_leave_request_approverTouserInput>, userUncheckedUpdateWithoutLeave_request_leave_request_approverTouserInput>
  }

  export type userUpdateOneRequiredWithoutLeave_request_leave_request_user_idTouserNestedInput = {
    create?: XOR<userCreateWithoutLeave_request_leave_request_user_idTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_user_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_request_leave_request_user_idTouserInput
    upsert?: userUpsertWithoutLeave_request_leave_request_user_idTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLeave_request_leave_request_user_idTouserInput, userUpdateWithoutLeave_request_leave_request_user_idTouserInput>, userUncheckedUpdateWithoutLeave_request_leave_request_user_idTouserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutMentor_profileInput = {
    create?: XOR<userCreateWithoutMentor_profileInput, userUncheckedCreateWithoutMentor_profileInput>
    connectOrCreate?: userCreateOrConnectWithoutMentor_profileInput
    connect?: userWhereUniqueInput
  }

  export type student_profileCreateNestedManyWithoutMentor_profileInput = {
    create?: XOR<student_profileCreateWithoutMentor_profileInput, student_profileUncheckedCreateWithoutMentor_profileInput> | student_profileCreateWithoutMentor_profileInput[] | student_profileUncheckedCreateWithoutMentor_profileInput[]
    connectOrCreate?: student_profileCreateOrConnectWithoutMentor_profileInput | student_profileCreateOrConnectWithoutMentor_profileInput[]
    createMany?: student_profileCreateManyMentor_profileInputEnvelope
    connect?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
  }

  export type student_profileUncheckedCreateNestedManyWithoutMentor_profileInput = {
    create?: XOR<student_profileCreateWithoutMentor_profileInput, student_profileUncheckedCreateWithoutMentor_profileInput> | student_profileCreateWithoutMentor_profileInput[] | student_profileUncheckedCreateWithoutMentor_profileInput[]
    connectOrCreate?: student_profileCreateOrConnectWithoutMentor_profileInput | student_profileCreateOrConnectWithoutMentor_profileInput[]
    createMany?: student_profileCreateManyMentor_profileInputEnvelope
    connect?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutMentor_profileNestedInput = {
    create?: XOR<userCreateWithoutMentor_profileInput, userUncheckedCreateWithoutMentor_profileInput>
    connectOrCreate?: userCreateOrConnectWithoutMentor_profileInput
    upsert?: userUpsertWithoutMentor_profileInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMentor_profileInput, userUpdateWithoutMentor_profileInput>, userUncheckedUpdateWithoutMentor_profileInput>
  }

  export type student_profileUpdateManyWithoutMentor_profileNestedInput = {
    create?: XOR<student_profileCreateWithoutMentor_profileInput, student_profileUncheckedCreateWithoutMentor_profileInput> | student_profileCreateWithoutMentor_profileInput[] | student_profileUncheckedCreateWithoutMentor_profileInput[]
    connectOrCreate?: student_profileCreateOrConnectWithoutMentor_profileInput | student_profileCreateOrConnectWithoutMentor_profileInput[]
    upsert?: student_profileUpsertWithWhereUniqueWithoutMentor_profileInput | student_profileUpsertWithWhereUniqueWithoutMentor_profileInput[]
    createMany?: student_profileCreateManyMentor_profileInputEnvelope
    set?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    disconnect?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    delete?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    connect?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    update?: student_profileUpdateWithWhereUniqueWithoutMentor_profileInput | student_profileUpdateWithWhereUniqueWithoutMentor_profileInput[]
    updateMany?: student_profileUpdateManyWithWhereWithoutMentor_profileInput | student_profileUpdateManyWithWhereWithoutMentor_profileInput[]
    deleteMany?: student_profileScalarWhereInput | student_profileScalarWhereInput[]
  }

  export type student_profileUncheckedUpdateManyWithoutMentor_profileNestedInput = {
    create?: XOR<student_profileCreateWithoutMentor_profileInput, student_profileUncheckedCreateWithoutMentor_profileInput> | student_profileCreateWithoutMentor_profileInput[] | student_profileUncheckedCreateWithoutMentor_profileInput[]
    connectOrCreate?: student_profileCreateOrConnectWithoutMentor_profileInput | student_profileCreateOrConnectWithoutMentor_profileInput[]
    upsert?: student_profileUpsertWithWhereUniqueWithoutMentor_profileInput | student_profileUpsertWithWhereUniqueWithoutMentor_profileInput[]
    createMany?: student_profileCreateManyMentor_profileInputEnvelope
    set?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    disconnect?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    delete?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    connect?: student_profileWhereUniqueInput | student_profileWhereUniqueInput[]
    update?: student_profileUpdateWithWhereUniqueWithoutMentor_profileInput | student_profileUpdateWithWhereUniqueWithoutMentor_profileInput[]
    updateMany?: student_profileUpdateManyWithWhereWithoutMentor_profileInput | student_profileUpdateManyWithWhereWithoutMentor_profileInput[]
    deleteMany?: student_profileScalarWhereInput | student_profileScalarWhereInput[]
  }

  export type userCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type mentor_profileCreateNestedOneWithoutStudent_profileInput = {
    create?: XOR<mentor_profileCreateWithoutStudent_profileInput, mentor_profileUncheckedCreateWithoutStudent_profileInput>
    connectOrCreate?: mentor_profileCreateOrConnectWithoutStudent_profileInput
    connect?: mentor_profileWhereUniqueInput
  }

  export type userCreateNestedOneWithoutStudent_profileInput = {
    create?: XOR<userCreateWithoutStudent_profileInput, userUncheckedCreateWithoutStudent_profileInput>
    connectOrCreate?: userCreateOrConnectWithoutStudent_profileInput
    connect?: userWhereUniqueInput
  }

  export type mentor_profileUpdateOneWithoutStudent_profileNestedInput = {
    create?: XOR<mentor_profileCreateWithoutStudent_profileInput, mentor_profileUncheckedCreateWithoutStudent_profileInput>
    connectOrCreate?: mentor_profileCreateOrConnectWithoutStudent_profileInput
    upsert?: mentor_profileUpsertWithoutStudent_profileInput
    disconnect?: mentor_profileWhereInput | boolean
    delete?: mentor_profileWhereInput | boolean
    connect?: mentor_profileWhereUniqueInput
    update?: XOR<XOR<mentor_profileUpdateToOneWithWhereWithoutStudent_profileInput, mentor_profileUpdateWithoutStudent_profileInput>, mentor_profileUncheckedUpdateWithoutStudent_profileInput>
  }

  export type userUpdateOneRequiredWithoutStudent_profileNestedInput = {
    create?: XOR<userCreateWithoutStudent_profileInput, userUncheckedCreateWithoutStudent_profileInput>
    connectOrCreate?: userCreateOrConnectWithoutStudent_profileInput
    upsert?: userUpsertWithoutStudent_profileInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStudent_profileInput, userUpdateWithoutStudent_profileInput>, userUncheckedUpdateWithoutStudent_profileInput>
  }

  export type admin_logCreateNestedManyWithoutUserInput = {
    create?: XOR<admin_logCreateWithoutUserInput, admin_logUncheckedCreateWithoutUserInput> | admin_logCreateWithoutUserInput[] | admin_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: admin_logCreateOrConnectWithoutUserInput | admin_logCreateOrConnectWithoutUserInput[]
    createMany?: admin_logCreateManyUserInputEnvelope
    connect?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
  }

  export type check_timeCreateNestedManyWithoutUserInput = {
    create?: XOR<check_timeCreateWithoutUserInput, check_timeUncheckedCreateWithoutUserInput> | check_timeCreateWithoutUserInput[] | check_timeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: check_timeCreateOrConnectWithoutUserInput | check_timeCreateOrConnectWithoutUserInput[]
    createMany?: check_timeCreateManyUserInputEnvelope
    connect?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
  }

  export type leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput> | leave_requestCreateWithoutUser_leave_request_approverTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_approverTouserInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput> | leave_requestCreateWithoutUser_leave_request_user_idTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_user_idTouserInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type mentor_profileCreateNestedOneWithoutUserInput = {
    create?: XOR<mentor_profileCreateWithoutUserInput, mentor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: mentor_profileCreateOrConnectWithoutUserInput
    connect?: mentor_profileWhereUniqueInput
  }

  export type student_profileCreateNestedOneWithoutUserInput = {
    create?: XOR<student_profileCreateWithoutUserInput, student_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: student_profileCreateOrConnectWithoutUserInput
    connect?: student_profileWhereUniqueInput
  }

  export type departmentCreateNestedOneWithoutUserInput = {
    create?: XOR<departmentCreateWithoutUserInput, departmentUncheckedCreateWithoutUserInput>
    connectOrCreate?: departmentCreateOrConnectWithoutUserInput
    connect?: departmentWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutUserInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    connect?: roleWhereUniqueInput
  }

  export type admin_logUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<admin_logCreateWithoutUserInput, admin_logUncheckedCreateWithoutUserInput> | admin_logCreateWithoutUserInput[] | admin_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: admin_logCreateOrConnectWithoutUserInput | admin_logCreateOrConnectWithoutUserInput[]
    createMany?: admin_logCreateManyUserInputEnvelope
    connect?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
  }

  export type check_timeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<check_timeCreateWithoutUserInput, check_timeUncheckedCreateWithoutUserInput> | check_timeCreateWithoutUserInput[] | check_timeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: check_timeCreateOrConnectWithoutUserInput | check_timeCreateOrConnectWithoutUserInput[]
    createMany?: check_timeCreateManyUserInputEnvelope
    connect?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
  }

  export type leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput> | leave_requestCreateWithoutUser_leave_request_approverTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_approverTouserInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput> | leave_requestCreateWithoutUser_leave_request_user_idTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_user_idTouserInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type mentor_profileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<mentor_profileCreateWithoutUserInput, mentor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: mentor_profileCreateOrConnectWithoutUserInput
    connect?: mentor_profileWhereUniqueInput
  }

  export type student_profileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<student_profileCreateWithoutUserInput, student_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: student_profileCreateOrConnectWithoutUserInput
    connect?: student_profileWhereUniqueInput
  }

  export type admin_logUpdateManyWithoutUserNestedInput = {
    create?: XOR<admin_logCreateWithoutUserInput, admin_logUncheckedCreateWithoutUserInput> | admin_logCreateWithoutUserInput[] | admin_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: admin_logCreateOrConnectWithoutUserInput | admin_logCreateOrConnectWithoutUserInput[]
    upsert?: admin_logUpsertWithWhereUniqueWithoutUserInput | admin_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: admin_logCreateManyUserInputEnvelope
    set?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    disconnect?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    delete?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    connect?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    update?: admin_logUpdateWithWhereUniqueWithoutUserInput | admin_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: admin_logUpdateManyWithWhereWithoutUserInput | admin_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: admin_logScalarWhereInput | admin_logScalarWhereInput[]
  }

  export type check_timeUpdateManyWithoutUserNestedInput = {
    create?: XOR<check_timeCreateWithoutUserInput, check_timeUncheckedCreateWithoutUserInput> | check_timeCreateWithoutUserInput[] | check_timeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: check_timeCreateOrConnectWithoutUserInput | check_timeCreateOrConnectWithoutUserInput[]
    upsert?: check_timeUpsertWithWhereUniqueWithoutUserInput | check_timeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: check_timeCreateManyUserInputEnvelope
    set?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    disconnect?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    delete?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    connect?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    update?: check_timeUpdateWithWhereUniqueWithoutUserInput | check_timeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: check_timeUpdateManyWithWhereWithoutUserInput | check_timeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: check_timeScalarWhereInput | check_timeScalarWhereInput[]
  }

  export type leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput> | leave_requestCreateWithoutUser_leave_request_approverTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_approverTouserInput | leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_approverTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_approverTouserInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_approverTouserInput | leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_approverTouserInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutUser_leave_request_approverTouserInput | leave_requestUpdateManyWithWhereWithoutUser_leave_request_approverTouserInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput> | leave_requestCreateWithoutUser_leave_request_user_idTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_user_idTouserInput | leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_user_idTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_user_idTouserInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_user_idTouserInput | leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_user_idTouserInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutUser_leave_request_user_idTouserInput | leave_requestUpdateManyWithWhereWithoutUser_leave_request_user_idTouserInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type mentor_profileUpdateOneWithoutUserNestedInput = {
    create?: XOR<mentor_profileCreateWithoutUserInput, mentor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: mentor_profileCreateOrConnectWithoutUserInput
    upsert?: mentor_profileUpsertWithoutUserInput
    disconnect?: mentor_profileWhereInput | boolean
    delete?: mentor_profileWhereInput | boolean
    connect?: mentor_profileWhereUniqueInput
    update?: XOR<XOR<mentor_profileUpdateToOneWithWhereWithoutUserInput, mentor_profileUpdateWithoutUserInput>, mentor_profileUncheckedUpdateWithoutUserInput>
  }

  export type student_profileUpdateOneWithoutUserNestedInput = {
    create?: XOR<student_profileCreateWithoutUserInput, student_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: student_profileCreateOrConnectWithoutUserInput
    upsert?: student_profileUpsertWithoutUserInput
    disconnect?: student_profileWhereInput | boolean
    delete?: student_profileWhereInput | boolean
    connect?: student_profileWhereUniqueInput
    update?: XOR<XOR<student_profileUpdateToOneWithWhereWithoutUserInput, student_profileUpdateWithoutUserInput>, student_profileUncheckedUpdateWithoutUserInput>
  }

  export type departmentUpdateOneWithoutUserNestedInput = {
    create?: XOR<departmentCreateWithoutUserInput, departmentUncheckedCreateWithoutUserInput>
    connectOrCreate?: departmentCreateOrConnectWithoutUserInput
    upsert?: departmentUpsertWithoutUserInput
    disconnect?: departmentWhereInput | boolean
    delete?: departmentWhereInput | boolean
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutUserInput, departmentUpdateWithoutUserInput>, departmentUncheckedUpdateWithoutUserInput>
  }

  export type roleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    upsert?: roleUpsertWithoutUserInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUserInput, roleUpdateWithoutUserInput>, roleUncheckedUpdateWithoutUserInput>
  }

  export type admin_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<admin_logCreateWithoutUserInput, admin_logUncheckedCreateWithoutUserInput> | admin_logCreateWithoutUserInput[] | admin_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: admin_logCreateOrConnectWithoutUserInput | admin_logCreateOrConnectWithoutUserInput[]
    upsert?: admin_logUpsertWithWhereUniqueWithoutUserInput | admin_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: admin_logCreateManyUserInputEnvelope
    set?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    disconnect?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    delete?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    connect?: admin_logWhereUniqueInput | admin_logWhereUniqueInput[]
    update?: admin_logUpdateWithWhereUniqueWithoutUserInput | admin_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: admin_logUpdateManyWithWhereWithoutUserInput | admin_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: admin_logScalarWhereInput | admin_logScalarWhereInput[]
  }

  export type check_timeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<check_timeCreateWithoutUserInput, check_timeUncheckedCreateWithoutUserInput> | check_timeCreateWithoutUserInput[] | check_timeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: check_timeCreateOrConnectWithoutUserInput | check_timeCreateOrConnectWithoutUserInput[]
    upsert?: check_timeUpsertWithWhereUniqueWithoutUserInput | check_timeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: check_timeCreateManyUserInputEnvelope
    set?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    disconnect?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    delete?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    connect?: check_timeWhereUniqueInput | check_timeWhereUniqueInput[]
    update?: check_timeUpdateWithWhereUniqueWithoutUserInput | check_timeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: check_timeUpdateManyWithWhereWithoutUserInput | check_timeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: check_timeScalarWhereInput | check_timeScalarWhereInput[]
  }

  export type leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput> | leave_requestCreateWithoutUser_leave_request_approverTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_approverTouserInput | leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_approverTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_approverTouserInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_approverTouserInput | leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_approverTouserInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutUser_leave_request_approverTouserInput | leave_requestUpdateManyWithWhereWithoutUser_leave_request_approverTouserInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput = {
    create?: XOR<leave_requestCreateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput> | leave_requestCreateWithoutUser_leave_request_user_idTouserInput[] | leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput | leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_user_idTouserInput | leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_user_idTouserInput[]
    createMany?: leave_requestCreateManyUser_leave_request_user_idTouserInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_user_idTouserInput | leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_user_idTouserInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutUser_leave_request_user_idTouserInput | leave_requestUpdateManyWithWhereWithoutUser_leave_request_user_idTouserInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type mentor_profileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<mentor_profileCreateWithoutUserInput, mentor_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: mentor_profileCreateOrConnectWithoutUserInput
    upsert?: mentor_profileUpsertWithoutUserInput
    disconnect?: mentor_profileWhereInput | boolean
    delete?: mentor_profileWhereInput | boolean
    connect?: mentor_profileWhereUniqueInput
    update?: XOR<XOR<mentor_profileUpdateToOneWithWhereWithoutUserInput, mentor_profileUpdateWithoutUserInput>, mentor_profileUncheckedUpdateWithoutUserInput>
  }

  export type student_profileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<student_profileCreateWithoutUserInput, student_profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: student_profileCreateOrConnectWithoutUserInput
    upsert?: student_profileUpsertWithoutUserInput
    disconnect?: student_profileWhereInput | boolean
    delete?: student_profileWhereInput | boolean
    connect?: student_profileWhereUniqueInput
    update?: XOR<XOR<student_profileUpdateToOneWithWhereWithoutUserInput, student_profileUpdateWithoutUserInput>, student_profileUncheckedUpdateWithoutUserInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type userCreateWithoutAdmin_logInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutAdmin_logInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutAdmin_logInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAdmin_logInput, userUncheckedCreateWithoutAdmin_logInput>
  }

  export type userUpsertWithoutAdmin_logInput = {
    update: XOR<userUpdateWithoutAdmin_logInput, userUncheckedUpdateWithoutAdmin_logInput>
    create: XOR<userCreateWithoutAdmin_logInput, userUncheckedCreateWithoutAdmin_logInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAdmin_logInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAdmin_logInput, userUncheckedUpdateWithoutAdmin_logInput>
  }

  export type userUpdateWithoutAdmin_logInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAdmin_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutCheck_timeInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutCheck_timeInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutCheck_timeInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCheck_timeInput, userUncheckedCreateWithoutCheck_timeInput>
  }

  export type userUpsertWithoutCheck_timeInput = {
    update: XOR<userUpdateWithoutCheck_timeInput, userUncheckedUpdateWithoutCheck_timeInput>
    create: XOR<userCreateWithoutCheck_timeInput, userUncheckedCreateWithoutCheck_timeInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCheck_timeInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCheck_timeInput, userUncheckedUpdateWithoutCheck_timeInput>
  }

  export type userUpdateWithoutCheck_timeInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCheck_timeInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutDepartmentInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutDepartmentInput = {
    id?: number
    role_id: number
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutDepartmentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput>
  }

  export type userCreateManyDepartmentInputEnvelope = {
    data: userCreateManyDepartmentInput | userCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutDepartmentInput, userUncheckedUpdateWithoutDepartmentInput>
    create: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput>
  }

  export type userUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutDepartmentInput, userUncheckedUpdateWithoutDepartmentInput>
  }

  export type userUpdateManyWithWhereWithoutDepartmentInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    role_id?: IntFilter<"user"> | number
    department_id?: IntNullableFilter<"user"> | number | null
    fname?: StringNullableFilter<"user"> | string | null
    lname?: StringNullableFilter<"user"> | string | null
    phone_number?: StringNullableFilter<"user"> | string | null
    email?: StringNullableFilter<"user"> | string | null
    password_hash?: StringNullableFilter<"user"> | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
  }

  export type userCreateWithoutLeave_request_leave_request_approverTouserInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutLeave_request_leave_request_approverTouserInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutLeave_request_leave_request_approverTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLeave_request_leave_request_approverTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_approverTouserInput>
  }

  export type userCreateWithoutLeave_request_leave_request_user_idTouserInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutLeave_request_leave_request_user_idTouserInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutLeave_request_leave_request_user_idTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLeave_request_leave_request_user_idTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_user_idTouserInput>
  }

  export type userUpsertWithoutLeave_request_leave_request_approverTouserInput = {
    update: XOR<userUpdateWithoutLeave_request_leave_request_approverTouserInput, userUncheckedUpdateWithoutLeave_request_leave_request_approverTouserInput>
    create: XOR<userCreateWithoutLeave_request_leave_request_approverTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_approverTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLeave_request_leave_request_approverTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLeave_request_leave_request_approverTouserInput, userUncheckedUpdateWithoutLeave_request_leave_request_approverTouserInput>
  }

  export type userUpdateWithoutLeave_request_leave_request_approverTouserInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLeave_request_leave_request_approverTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUpsertWithoutLeave_request_leave_request_user_idTouserInput = {
    update: XOR<userUpdateWithoutLeave_request_leave_request_user_idTouserInput, userUncheckedUpdateWithoutLeave_request_leave_request_user_idTouserInput>
    create: XOR<userCreateWithoutLeave_request_leave_request_user_idTouserInput, userUncheckedCreateWithoutLeave_request_leave_request_user_idTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLeave_request_leave_request_user_idTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLeave_request_leave_request_user_idTouserInput, userUncheckedUpdateWithoutLeave_request_leave_request_user_idTouserInput>
  }

  export type userUpdateWithoutLeave_request_leave_request_user_idTouserInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLeave_request_leave_request_user_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutMentor_profileInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutMentor_profileInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutMentor_profileInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMentor_profileInput, userUncheckedCreateWithoutMentor_profileInput>
  }

  export type student_profileCreateWithoutMentor_profileInput = {
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    user: userCreateNestedOneWithoutStudent_profileInput
  }

  export type student_profileUncheckedCreateWithoutMentor_profileInput = {
    id?: number
    user_id: number
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type student_profileCreateOrConnectWithoutMentor_profileInput = {
    where: student_profileWhereUniqueInput
    create: XOR<student_profileCreateWithoutMentor_profileInput, student_profileUncheckedCreateWithoutMentor_profileInput>
  }

  export type student_profileCreateManyMentor_profileInputEnvelope = {
    data: student_profileCreateManyMentor_profileInput | student_profileCreateManyMentor_profileInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutMentor_profileInput = {
    update: XOR<userUpdateWithoutMentor_profileInput, userUncheckedUpdateWithoutMentor_profileInput>
    create: XOR<userCreateWithoutMentor_profileInput, userUncheckedCreateWithoutMentor_profileInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMentor_profileInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMentor_profileInput, userUncheckedUpdateWithoutMentor_profileInput>
  }

  export type userUpdateWithoutMentor_profileInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMentor_profileInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type student_profileUpsertWithWhereUniqueWithoutMentor_profileInput = {
    where: student_profileWhereUniqueInput
    update: XOR<student_profileUpdateWithoutMentor_profileInput, student_profileUncheckedUpdateWithoutMentor_profileInput>
    create: XOR<student_profileCreateWithoutMentor_profileInput, student_profileUncheckedCreateWithoutMentor_profileInput>
  }

  export type student_profileUpdateWithWhereUniqueWithoutMentor_profileInput = {
    where: student_profileWhereUniqueInput
    data: XOR<student_profileUpdateWithoutMentor_profileInput, student_profileUncheckedUpdateWithoutMentor_profileInput>
  }

  export type student_profileUpdateManyWithWhereWithoutMentor_profileInput = {
    where: student_profileScalarWhereInput
    data: XOR<student_profileUpdateManyMutationInput, student_profileUncheckedUpdateManyWithoutMentor_profileInput>
  }

  export type student_profileScalarWhereInput = {
    AND?: student_profileScalarWhereInput | student_profileScalarWhereInput[]
    OR?: student_profileScalarWhereInput[]
    NOT?: student_profileScalarWhereInput | student_profileScalarWhereInput[]
    id?: IntFilter<"student_profile"> | number
    user_id?: IntFilter<"student_profile"> | number
    mentor_id?: IntNullableFilter<"student_profile"> | number | null
    picture?: BytesNullableFilter<"student_profile"> | Uint8Array | null
    university?: StringNullableFilter<"student_profile"> | string | null
    start_date?: DateTimeNullableFilter<"student_profile"> | Date | string | null
    end_date?: DateTimeNullableFilter<"student_profile"> | Date | string | null
  }

  export type userCreateWithoutRoleInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    student_profile?: student_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutRoleInput = {
    id?: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
    student_profile?: student_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userCreateManyRoleInputEnvelope = {
    data: userCreateManyRoleInput | userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userUpdateWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
  }

  export type userUpdateManyWithWhereWithoutRoleInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutRoleInput>
  }

  export type mentor_profileCreateWithoutStudent_profileInput = {
    user: userCreateNestedOneWithoutMentor_profileInput
  }

  export type mentor_profileUncheckedCreateWithoutStudent_profileInput = {
    id?: number
    user_id: number
  }

  export type mentor_profileCreateOrConnectWithoutStudent_profileInput = {
    where: mentor_profileWhereUniqueInput
    create: XOR<mentor_profileCreateWithoutStudent_profileInput, mentor_profileUncheckedCreateWithoutStudent_profileInput>
  }

  export type userCreateWithoutStudent_profileInput = {
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logCreateNestedManyWithoutUserInput
    check_time?: check_timeCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileCreateNestedOneWithoutUserInput
    department?: departmentCreateNestedOneWithoutUserInput
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutStudent_profileInput = {
    id?: number
    role_id: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    admin_log?: admin_logUncheckedCreateNestedManyWithoutUserInput
    check_time?: check_timeUncheckedCreateNestedManyWithoutUserInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_approverTouserInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedCreateNestedManyWithoutUser_leave_request_user_idTouserInput
    mentor_profile?: mentor_profileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutStudent_profileInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStudent_profileInput, userUncheckedCreateWithoutStudent_profileInput>
  }

  export type mentor_profileUpsertWithoutStudent_profileInput = {
    update: XOR<mentor_profileUpdateWithoutStudent_profileInput, mentor_profileUncheckedUpdateWithoutStudent_profileInput>
    create: XOR<mentor_profileCreateWithoutStudent_profileInput, mentor_profileUncheckedCreateWithoutStudent_profileInput>
    where?: mentor_profileWhereInput
  }

  export type mentor_profileUpdateToOneWithWhereWithoutStudent_profileInput = {
    where?: mentor_profileWhereInput
    data: XOR<mentor_profileUpdateWithoutStudent_profileInput, mentor_profileUncheckedUpdateWithoutStudent_profileInput>
  }

  export type mentor_profileUpdateWithoutStudent_profileInput = {
    user?: userUpdateOneRequiredWithoutMentor_profileNestedInput
  }

  export type mentor_profileUncheckedUpdateWithoutStudent_profileInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type userUpsertWithoutStudent_profileInput = {
    update: XOR<userUpdateWithoutStudent_profileInput, userUncheckedUpdateWithoutStudent_profileInput>
    create: XOR<userCreateWithoutStudent_profileInput, userUncheckedCreateWithoutStudent_profileInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStudent_profileInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStudent_profileInput, userUncheckedUpdateWithoutStudent_profileInput>
  }

  export type userUpdateWithoutStudent_profileInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutStudent_profileInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type admin_logCreateWithoutUserInput = {
    action?: string | null
    created_at?: Date | string | null
  }

  export type admin_logUncheckedCreateWithoutUserInput = {
    id?: number
    action?: string | null
    created_at?: Date | string | null
  }

  export type admin_logCreateOrConnectWithoutUserInput = {
    where: admin_logWhereUniqueInput
    create: XOR<admin_logCreateWithoutUserInput, admin_logUncheckedCreateWithoutUserInput>
  }

  export type admin_logCreateManyUserInputEnvelope = {
    data: admin_logCreateManyUserInput | admin_logCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type check_timeCreateWithoutUserInput = {
    time?: Date | string | null
    type_check?: string | null
    location?: string | null
    note?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeUncheckedCreateWithoutUserInput = {
    id?: number
    time?: Date | string | null
    type_check?: string | null
    location?: string | null
    note?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeCreateOrConnectWithoutUserInput = {
    where: check_timeWhereUniqueInput
    create: XOR<check_timeCreateWithoutUserInput, check_timeUncheckedCreateWithoutUserInput>
  }

  export type check_timeCreateManyUserInputEnvelope = {
    data: check_timeCreateManyUserInput | check_timeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type leave_requestCreateWithoutUser_leave_request_approverTouserInput = {
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approved_at?: Date | string | null
    user_leave_request_user_idTouser: userCreateNestedOneWithoutLeave_request_leave_request_user_idTouserInput
  }

  export type leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput = {
    id?: number
    user_id: number
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approved_at?: Date | string | null
  }

  export type leave_requestCreateOrConnectWithoutUser_leave_request_approverTouserInput = {
    where: leave_requestWhereUniqueInput
    create: XOR<leave_requestCreateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput>
  }

  export type leave_requestCreateManyUser_leave_request_approverTouserInputEnvelope = {
    data: leave_requestCreateManyUser_leave_request_approverTouserInput | leave_requestCreateManyUser_leave_request_approverTouserInput[]
    skipDuplicates?: boolean
  }

  export type leave_requestCreateWithoutUser_leave_request_user_idTouserInput = {
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approved_at?: Date | string | null
    user_leave_request_approverTouser?: userCreateNestedOneWithoutLeave_request_leave_request_approverTouserInput
  }

  export type leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput = {
    id?: number
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approver?: number | null
    approved_at?: Date | string | null
  }

  export type leave_requestCreateOrConnectWithoutUser_leave_request_user_idTouserInput = {
    where: leave_requestWhereUniqueInput
    create: XOR<leave_requestCreateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput>
  }

  export type leave_requestCreateManyUser_leave_request_user_idTouserInputEnvelope = {
    data: leave_requestCreateManyUser_leave_request_user_idTouserInput | leave_requestCreateManyUser_leave_request_user_idTouserInput[]
    skipDuplicates?: boolean
  }

  export type mentor_profileCreateWithoutUserInput = {
    student_profile?: student_profileCreateNestedManyWithoutMentor_profileInput
  }

  export type mentor_profileUncheckedCreateWithoutUserInput = {
    id?: number
    student_profile?: student_profileUncheckedCreateNestedManyWithoutMentor_profileInput
  }

  export type mentor_profileCreateOrConnectWithoutUserInput = {
    where: mentor_profileWhereUniqueInput
    create: XOR<mentor_profileCreateWithoutUserInput, mentor_profileUncheckedCreateWithoutUserInput>
  }

  export type student_profileCreateWithoutUserInput = {
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    mentor_profile?: mentor_profileCreateNestedOneWithoutStudent_profileInput
  }

  export type student_profileUncheckedCreateWithoutUserInput = {
    id?: number
    mentor_id?: number | null
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type student_profileCreateOrConnectWithoutUserInput = {
    where: student_profileWhereUniqueInput
    create: XOR<student_profileCreateWithoutUserInput, student_profileUncheckedCreateWithoutUserInput>
  }

  export type departmentCreateWithoutUserInput = {
    dept_name: string
  }

  export type departmentUncheckedCreateWithoutUserInput = {
    dept_id?: number
    dept_name: string
  }

  export type departmentCreateOrConnectWithoutUserInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutUserInput, departmentUncheckedCreateWithoutUserInput>
  }

  export type roleCreateWithoutUserInput = {
    name: string
    description?: string | null
  }

  export type roleUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type roleCreateOrConnectWithoutUserInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
  }

  export type admin_logUpsertWithWhereUniqueWithoutUserInput = {
    where: admin_logWhereUniqueInput
    update: XOR<admin_logUpdateWithoutUserInput, admin_logUncheckedUpdateWithoutUserInput>
    create: XOR<admin_logCreateWithoutUserInput, admin_logUncheckedCreateWithoutUserInput>
  }

  export type admin_logUpdateWithWhereUniqueWithoutUserInput = {
    where: admin_logWhereUniqueInput
    data: XOR<admin_logUpdateWithoutUserInput, admin_logUncheckedUpdateWithoutUserInput>
  }

  export type admin_logUpdateManyWithWhereWithoutUserInput = {
    where: admin_logScalarWhereInput
    data: XOR<admin_logUpdateManyMutationInput, admin_logUncheckedUpdateManyWithoutUserInput>
  }

  export type admin_logScalarWhereInput = {
    AND?: admin_logScalarWhereInput | admin_logScalarWhereInput[]
    OR?: admin_logScalarWhereInput[]
    NOT?: admin_logScalarWhereInput | admin_logScalarWhereInput[]
    id?: IntFilter<"admin_log"> | number
    admin_id?: IntFilter<"admin_log"> | number
    action?: StringNullableFilter<"admin_log"> | string | null
    created_at?: DateTimeNullableFilter<"admin_log"> | Date | string | null
  }

  export type check_timeUpsertWithWhereUniqueWithoutUserInput = {
    where: check_timeWhereUniqueInput
    update: XOR<check_timeUpdateWithoutUserInput, check_timeUncheckedUpdateWithoutUserInput>
    create: XOR<check_timeCreateWithoutUserInput, check_timeUncheckedCreateWithoutUserInput>
  }

  export type check_timeUpdateWithWhereUniqueWithoutUserInput = {
    where: check_timeWhereUniqueInput
    data: XOR<check_timeUpdateWithoutUserInput, check_timeUncheckedUpdateWithoutUserInput>
  }

  export type check_timeUpdateManyWithWhereWithoutUserInput = {
    where: check_timeScalarWhereInput
    data: XOR<check_timeUpdateManyMutationInput, check_timeUncheckedUpdateManyWithoutUserInput>
  }

  export type check_timeScalarWhereInput = {
    AND?: check_timeScalarWhereInput | check_timeScalarWhereInput[]
    OR?: check_timeScalarWhereInput[]
    NOT?: check_timeScalarWhereInput | check_timeScalarWhereInput[]
    id?: IntFilter<"check_time"> | number
    user_id?: IntFilter<"check_time"> | number
    time?: DateTimeNullableFilter<"check_time"> | Date | string | null
    type_check?: StringNullableFilter<"check_time"> | string | null
    location?: StringNullableFilter<"check_time"> | string | null
    note?: StringNullableFilter<"check_time"> | string | null
    latitude?: DecimalNullableFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"check_time"> | Decimal | DecimalJsLike | number | string | null
  }

  export type leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_approverTouserInput = {
    where: leave_requestWhereUniqueInput
    update: XOR<leave_requestUpdateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedUpdateWithoutUser_leave_request_approverTouserInput>
    create: XOR<leave_requestCreateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_approverTouserInput>
  }

  export type leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_approverTouserInput = {
    where: leave_requestWhereUniqueInput
    data: XOR<leave_requestUpdateWithoutUser_leave_request_approverTouserInput, leave_requestUncheckedUpdateWithoutUser_leave_request_approverTouserInput>
  }

  export type leave_requestUpdateManyWithWhereWithoutUser_leave_request_approverTouserInput = {
    where: leave_requestScalarWhereInput
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserInput>
  }

  export type leave_requestScalarWhereInput = {
    AND?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
    OR?: leave_requestScalarWhereInput[]
    NOT?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
    id?: IntFilter<"leave_request"> | number
    user_id?: IntFilter<"leave_request"> | number
    leave_datetime?: DateTimeNullableFilter<"leave_request"> | Date | string | null
    reason?: StringNullableFilter<"leave_request"> | string | null
    file?: BytesNullableFilter<"leave_request"> | Uint8Array | null
    status?: StringNullableFilter<"leave_request"> | string | null
    approver?: IntNullableFilter<"leave_request"> | number | null
    approved_at?: DateTimeNullableFilter<"leave_request"> | Date | string | null
  }

  export type leave_requestUpsertWithWhereUniqueWithoutUser_leave_request_user_idTouserInput = {
    where: leave_requestWhereUniqueInput
    update: XOR<leave_requestUpdateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedUpdateWithoutUser_leave_request_user_idTouserInput>
    create: XOR<leave_requestCreateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedCreateWithoutUser_leave_request_user_idTouserInput>
  }

  export type leave_requestUpdateWithWhereUniqueWithoutUser_leave_request_user_idTouserInput = {
    where: leave_requestWhereUniqueInput
    data: XOR<leave_requestUpdateWithoutUser_leave_request_user_idTouserInput, leave_requestUncheckedUpdateWithoutUser_leave_request_user_idTouserInput>
  }

  export type leave_requestUpdateManyWithWhereWithoutUser_leave_request_user_idTouserInput = {
    where: leave_requestScalarWhereInput
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserInput>
  }

  export type mentor_profileUpsertWithoutUserInput = {
    update: XOR<mentor_profileUpdateWithoutUserInput, mentor_profileUncheckedUpdateWithoutUserInput>
    create: XOR<mentor_profileCreateWithoutUserInput, mentor_profileUncheckedCreateWithoutUserInput>
    where?: mentor_profileWhereInput
  }

  export type mentor_profileUpdateToOneWithWhereWithoutUserInput = {
    where?: mentor_profileWhereInput
    data: XOR<mentor_profileUpdateWithoutUserInput, mentor_profileUncheckedUpdateWithoutUserInput>
  }

  export type mentor_profileUpdateWithoutUserInput = {
    student_profile?: student_profileUpdateManyWithoutMentor_profileNestedInput
  }

  export type mentor_profileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_profile?: student_profileUncheckedUpdateManyWithoutMentor_profileNestedInput
  }

  export type student_profileUpsertWithoutUserInput = {
    update: XOR<student_profileUpdateWithoutUserInput, student_profileUncheckedUpdateWithoutUserInput>
    create: XOR<student_profileCreateWithoutUserInput, student_profileUncheckedCreateWithoutUserInput>
    where?: student_profileWhereInput
  }

  export type student_profileUpdateToOneWithWhereWithoutUserInput = {
    where?: student_profileWhereInput
    data: XOR<student_profileUpdateWithoutUserInput, student_profileUncheckedUpdateWithoutUserInput>
  }

  export type student_profileUpdateWithoutUserInput = {
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mentor_profile?: mentor_profileUpdateOneWithoutStudent_profileNestedInput
  }

  export type student_profileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentor_id?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentUpsertWithoutUserInput = {
    update: XOR<departmentUpdateWithoutUserInput, departmentUncheckedUpdateWithoutUserInput>
    create: XOR<departmentCreateWithoutUserInput, departmentUncheckedCreateWithoutUserInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutUserInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutUserInput, departmentUncheckedUpdateWithoutUserInput>
  }

  export type departmentUpdateWithoutUserInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
  }

  export type departmentUncheckedUpdateWithoutUserInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUpsertWithoutUserInput = {
    update: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUserInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
  }

  export type roleUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyDepartmentInput = {
    id?: number
    role_id: number
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateWithoutDepartmentInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_profileCreateManyMentor_profileInput = {
    id?: number
    user_id: number
    picture?: Uint8Array | null
    university?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type student_profileUpdateWithoutMentor_profileInput = {
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutStudent_profileNestedInput
  }

  export type student_profileUncheckedUpdateWithoutMentor_profileInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_profileUncheckedUpdateManyWithoutMentor_profileInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    picture?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateManyRoleInput = {
    id?: number
    department_id?: number | null
    fname?: string | null
    lname?: string | null
    phone_number?: string | null
    email?: string | null
    password_hash?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateWithoutRoleInput = {
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUpdateManyWithoutUserNestedInput
    check_time?: check_timeUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUpdateOneWithoutUserNestedInput
    department?: departmentUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_log?: admin_logUncheckedUpdateManyWithoutUserNestedInput
    check_time?: check_timeUncheckedUpdateManyWithoutUserNestedInput
    leave_request_leave_request_approverTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserNestedInput
    leave_request_leave_request_user_idTouser?: leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserNestedInput
    mentor_profile?: mentor_profileUncheckedUpdateOneWithoutUserNestedInput
    student_profile?: student_profileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_logCreateManyUserInput = {
    id?: number
    action?: string | null
    created_at?: Date | string | null
  }

  export type check_timeCreateManyUserInput = {
    id?: number
    time?: Date | string | null
    type_check?: string | null
    location?: string | null
    note?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type leave_requestCreateManyUser_leave_request_approverTouserInput = {
    id?: number
    user_id: number
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approved_at?: Date | string | null
  }

  export type leave_requestCreateManyUser_leave_request_user_idTouserInput = {
    id?: number
    leave_datetime?: Date | string | null
    reason?: string | null
    file?: Uint8Array | null
    status?: string | null
    approver?: number | null
    approved_at?: Date | string | null
  }

  export type admin_logUpdateWithoutUserInput = {
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_logUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type admin_logUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type check_timeUpdateWithoutUserInput = {
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type_check?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type_check?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type check_timeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type_check?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type leave_requestUpdateWithoutUser_leave_request_approverTouserInput = {
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_leave_request_user_idTouser?: userUpdateOneRequiredWithoutLeave_request_leave_request_user_idTouserNestedInput
  }

  export type leave_requestUncheckedUpdateWithoutUser_leave_request_approverTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leave_requestUncheckedUpdateManyWithoutUser_leave_request_approverTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leave_requestUpdateWithoutUser_leave_request_user_idTouserInput = {
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_leave_request_approverTouser?: userUpdateOneWithoutLeave_request_leave_request_approverTouserNestedInput
  }

  export type leave_requestUncheckedUpdateWithoutUser_leave_request_user_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leave_requestUncheckedUpdateManyWithoutUser_leave_request_user_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    leave_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableIntFieldUpdateOperationsInput | number | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}