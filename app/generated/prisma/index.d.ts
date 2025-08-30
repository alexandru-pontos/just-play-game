
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Console
 * 
 */
export type Console = $Result.DefaultSelection<Prisma.$ConsolePayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>
/**
 * Model UserGame
 * 
 */
export type UserGame = $Result.DefaultSelection<Prisma.$UserGamePayload>
/**
 * Model ForumCategory
 * 
 */
export type ForumCategory = $Result.DefaultSelection<Prisma.$ForumCategoryPayload>
/**
 * Model ForumSubforum
 * 
 */
export type ForumSubforum = $Result.DefaultSelection<Prisma.$ForumSubforumPayload>
/**
 * Model ForumThread
 * 
 */
export type ForumThread = $Result.DefaultSelection<Prisma.$ForumThreadPayload>
/**
 * Model ForumPost
 * 
 */
export type ForumPost = $Result.DefaultSelection<Prisma.$ForumPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.console`: Exposes CRUD operations for the **Console** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consoles
    * const consoles = await prisma.console.findMany()
    * ```
    */
  get console(): Prisma.ConsoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGame`: Exposes CRUD operations for the **UserGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGames
    * const userGames = await prisma.userGame.findMany()
    * ```
    */
  get userGame(): Prisma.UserGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumCategory`: Exposes CRUD operations for the **ForumCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumCategories
    * const forumCategories = await prisma.forumCategory.findMany()
    * ```
    */
  get forumCategory(): Prisma.ForumCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumSubforum`: Exposes CRUD operations for the **ForumSubforum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumSubforums
    * const forumSubforums = await prisma.forumSubforum.findMany()
    * ```
    */
  get forumSubforum(): Prisma.ForumSubforumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumThread`: Exposes CRUD operations for the **ForumThread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumThreads
    * const forumThreads = await prisma.forumThread.findMany()
    * ```
    */
  get forumThread(): Prisma.ForumThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumPost`: Exposes CRUD operations for the **ForumPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumPosts
    * const forumPosts = await prisma.forumPost.findMany()
    * ```
    */
  get forumPost(): Prisma.ForumPostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Console: 'Console',
    Game: 'Game',
    Achievement: 'Achievement',
    UserAchievement: 'UserAchievement',
    UserGame: 'UserGame',
    ForumCategory: 'ForumCategory',
    ForumSubforum: 'ForumSubforum',
    ForumThread: 'ForumThread',
    ForumPost: 'ForumPost'
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
      modelProps: "user" | "console" | "game" | "achievement" | "userAchievement" | "userGame" | "forumCategory" | "forumSubforum" | "forumThread" | "forumPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Console: {
        payload: Prisma.$ConsolePayload<ExtArgs>
        fields: Prisma.ConsoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          findFirst: {
            args: Prisma.ConsoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          findMany: {
            args: Prisma.ConsoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>[]
          }
          create: {
            args: Prisma.ConsoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          createMany: {
            args: Prisma.ConsoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>[]
          }
          delete: {
            args: Prisma.ConsoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          update: {
            args: Prisma.ConsoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          deleteMany: {
            args: Prisma.ConsoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>[]
          }
          upsert: {
            args: Prisma.ConsoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsolePayload>
          }
          aggregate: {
            args: Prisma.ConsoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsole>
          }
          groupBy: {
            args: Prisma.ConsoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsoleCountArgs<ExtArgs>
            result: $Utils.Optional<ConsoleCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
          }
        }
      }
      UserGame: {
        payload: Prisma.$UserGamePayload<ExtArgs>
        fields: Prisma.UserGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findFirst: {
            args: Prisma.UserGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findMany: {
            args: Prisma.UserGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          create: {
            args: Prisma.UserGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          createMany: {
            args: Prisma.UserGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          delete: {
            args: Prisma.UserGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          update: {
            args: Prisma.UserGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          deleteMany: {
            args: Prisma.UserGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          upsert: {
            args: Prisma.UserGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          aggregate: {
            args: Prisma.UserGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGame>
          }
          groupBy: {
            args: Prisma.UserGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameCountArgs<ExtArgs>
            result: $Utils.Optional<UserGameCountAggregateOutputType> | number
          }
        }
      }
      ForumCategory: {
        payload: Prisma.$ForumCategoryPayload<ExtArgs>
        fields: Prisma.ForumCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          findFirst: {
            args: Prisma.ForumCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          findMany: {
            args: Prisma.ForumCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>[]
          }
          create: {
            args: Prisma.ForumCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          createMany: {
            args: Prisma.ForumCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>[]
          }
          delete: {
            args: Prisma.ForumCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          update: {
            args: Prisma.ForumCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ForumCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ForumCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          aggregate: {
            args: Prisma.ForumCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumCategory>
          }
          groupBy: {
            args: Prisma.ForumCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCategoryCountAggregateOutputType> | number
          }
        }
      }
      ForumSubforum: {
        payload: Prisma.$ForumSubforumPayload<ExtArgs>
        fields: Prisma.ForumSubforumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumSubforumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumSubforumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>
          }
          findFirst: {
            args: Prisma.ForumSubforumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumSubforumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>
          }
          findMany: {
            args: Prisma.ForumSubforumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>[]
          }
          create: {
            args: Prisma.ForumSubforumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>
          }
          createMany: {
            args: Prisma.ForumSubforumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumSubforumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>[]
          }
          delete: {
            args: Prisma.ForumSubforumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>
          }
          update: {
            args: Prisma.ForumSubforumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>
          }
          deleteMany: {
            args: Prisma.ForumSubforumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumSubforumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumSubforumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>[]
          }
          upsert: {
            args: Prisma.ForumSubforumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubforumPayload>
          }
          aggregate: {
            args: Prisma.ForumSubforumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumSubforum>
          }
          groupBy: {
            args: Prisma.ForumSubforumGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumSubforumGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumSubforumCountArgs<ExtArgs>
            result: $Utils.Optional<ForumSubforumCountAggregateOutputType> | number
          }
        }
      }
      ForumThread: {
        payload: Prisma.$ForumThreadPayload<ExtArgs>
        fields: Prisma.ForumThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          findFirst: {
            args: Prisma.ForumThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          findMany: {
            args: Prisma.ForumThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>[]
          }
          create: {
            args: Prisma.ForumThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          createMany: {
            args: Prisma.ForumThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>[]
          }
          delete: {
            args: Prisma.ForumThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          update: {
            args: Prisma.ForumThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          deleteMany: {
            args: Prisma.ForumThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>[]
          }
          upsert: {
            args: Prisma.ForumThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          aggregate: {
            args: Prisma.ForumThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumThread>
          }
          groupBy: {
            args: Prisma.ForumThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumThreadCountArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadCountAggregateOutputType> | number
          }
        }
      }
      ForumPost: {
        payload: Prisma.$ForumPostPayload<ExtArgs>
        fields: Prisma.ForumPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          findFirst: {
            args: Prisma.ForumPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          findMany: {
            args: Prisma.ForumPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>[]
          }
          create: {
            args: Prisma.ForumPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          createMany: {
            args: Prisma.ForumPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>[]
          }
          delete: {
            args: Prisma.ForumPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          update: {
            args: Prisma.ForumPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          deleteMany: {
            args: Prisma.ForumPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>[]
          }
          upsert: {
            args: Prisma.ForumPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          aggregate: {
            args: Prisma.ForumPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumPost>
          }
          groupBy: {
            args: Prisma.ForumPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumPostCountArgs<ExtArgs>
            result: $Utils.Optional<ForumPostCountAggregateOutputType> | number
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
    user?: UserOmit
    console?: ConsoleOmit
    game?: GameOmit
    achievement?: AchievementOmit
    userAchievement?: UserAchievementOmit
    userGame?: UserGameOmit
    forumCategory?: ForumCategoryOmit
    forumSubforum?: ForumSubforumOmit
    forumThread?: ForumThreadOmit
    forumPost?: ForumPostOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    games: number
    posts: number
    threadsAuthored: number
    lastPostThreads: number
    postsDeleted: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | UserCountOutputTypeCountGamesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    threadsAuthored?: boolean | UserCountOutputTypeCountThreadsAuthoredArgs
    lastPostThreads?: boolean | UserCountOutputTypeCountLastPostThreadsArgs
    postsDeleted?: boolean | UserCountOutputTypeCountPostsDeletedArgs
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
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadsAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLastPostThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsDeletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
  }


  /**
   * Count Type ConsoleCountOutputType
   */

  export type ConsoleCountOutputType = {
    games: number
  }

  export type ConsoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | ConsoleCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * ConsoleCountOutputType without action
   */
  export type ConsoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsoleCountOutputType
     */
    select?: ConsoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsoleCountOutputType without action
   */
  export type ConsoleCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    achievements: number
    users: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | GameCountOutputTypeCountAchievementsArgs
    users?: boolean | GameCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    UserAchievement: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserAchievement?: boolean | AchievementCountOutputTypeCountUserAchievementArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUserAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Count Type UserGameCountOutputType
   */

  export type UserGameCountOutputType = {
    achievements: number
  }

  export type UserGameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | UserGameCountOutputTypeCountAchievementsArgs
  }

  // Custom InputTypes
  /**
   * UserGameCountOutputType without action
   */
  export type UserGameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameCountOutputType
     */
    select?: UserGameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserGameCountOutputType without action
   */
  export type UserGameCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Count Type ForumCategoryCountOutputType
   */

  export type ForumCategoryCountOutputType = {
    subforums: number
  }

  export type ForumCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subforums?: boolean | ForumCategoryCountOutputTypeCountSubforumsArgs
  }

  // Custom InputTypes
  /**
   * ForumCategoryCountOutputType without action
   */
  export type ForumCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategoryCountOutputType
     */
    select?: ForumCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumCategoryCountOutputType without action
   */
  export type ForumCategoryCountOutputTypeCountSubforumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumSubforumWhereInput
  }


  /**
   * Count Type ForumSubforumCountOutputType
   */

  export type ForumSubforumCountOutputType = {
    threads: number
  }

  export type ForumSubforumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threads?: boolean | ForumSubforumCountOutputTypeCountThreadsArgs
  }

  // Custom InputTypes
  /**
   * ForumSubforumCountOutputType without action
   */
  export type ForumSubforumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforumCountOutputType
     */
    select?: ForumSubforumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumSubforumCountOutputType without action
   */
  export type ForumSubforumCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadWhereInput
  }


  /**
   * Count Type ForumThreadCountOutputType
   */

  export type ForumThreadCountOutputType = {
    posts: number
  }

  export type ForumThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ForumThreadCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * ForumThreadCountOutputType without action
   */
  export type ForumThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadCountOutputType
     */
    select?: ForumThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumThreadCountOutputType without action
   */
  export type ForumThreadCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    bio: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    bio: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isAdmin: number
    bio: number
    avatar: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    bio?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    bio?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    bio?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    isAdmin: boolean
    bio: string | null
    avatar: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    bio?: boolean
    avatar?: boolean
    games?: boolean | User$gamesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    threadsAuthored?: boolean | User$threadsAuthoredArgs<ExtArgs>
    lastPostThreads?: boolean | User$lastPostThreadsArgs<ExtArgs>
    postsDeleted?: boolean | User$postsDeletedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    bio?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    bio?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    bio?: boolean
    avatar?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "isAdmin" | "bio" | "avatar", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | User$gamesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    threadsAuthored?: boolean | User$threadsAuthoredArgs<ExtArgs>
    lastPostThreads?: boolean | User$lastPostThreadsArgs<ExtArgs>
    postsDeleted?: boolean | User$postsDeletedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      games: Prisma.$UserGamePayload<ExtArgs>[]
      posts: Prisma.$ForumPostPayload<ExtArgs>[]
      threadsAuthored: Prisma.$ForumThreadPayload<ExtArgs>[]
      lastPostThreads: Prisma.$ForumThreadPayload<ExtArgs>[]
      postsDeleted: Prisma.$ForumPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      isAdmin: boolean
      bio: string | null
      avatar: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    threadsAuthored<T extends User$threadsAuthoredArgs<ExtArgs> = {}>(args?: Subset<T, User$threadsAuthoredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastPostThreads<T extends User$lastPostThreadsArgs<ExtArgs> = {}>(args?: Subset<T, User$lastPostThreadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postsDeleted<T extends User$postsDeletedArgs<ExtArgs> = {}>(args?: Subset<T, User$postsDeletedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    cursor?: ForumPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * User.threadsAuthored
   */
  export type User$threadsAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    where?: ForumThreadWhereInput
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    cursor?: ForumThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * User.lastPostThreads
   */
  export type User$lastPostThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    where?: ForumThreadWhereInput
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    cursor?: ForumThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * User.postsDeleted
   */
  export type User$postsDeletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    cursor?: ForumPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Console
   */

  export type AggregateConsole = {
    _count: ConsoleCountAggregateOutputType | null
    _min: ConsoleMinAggregateOutputType | null
    _max: ConsoleMaxAggregateOutputType | null
  }

  export type ConsoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ConsoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ConsoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ConsoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ConsoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ConsoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ConsoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Console to aggregate.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consoles
    **/
    _count?: true | ConsoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsoleMaxAggregateInputType
  }

  export type GetConsoleAggregateType<T extends ConsoleAggregateArgs> = {
        [P in keyof T & keyof AggregateConsole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsole[P]>
      : GetScalarType<T[P], AggregateConsole[P]>
  }




  export type ConsoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsoleWhereInput
    orderBy?: ConsoleOrderByWithAggregationInput | ConsoleOrderByWithAggregationInput[]
    by: ConsoleScalarFieldEnum[] | ConsoleScalarFieldEnum
    having?: ConsoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsoleCountAggregateInputType | true
    _min?: ConsoleMinAggregateInputType
    _max?: ConsoleMaxAggregateInputType
  }

  export type ConsoleGroupByOutputType = {
    id: string
    name: string
    _count: ConsoleCountAggregateOutputType | null
    _min: ConsoleMinAggregateOutputType | null
    _max: ConsoleMaxAggregateOutputType | null
  }

  type GetConsoleGroupByPayload<T extends ConsoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsoleGroupByOutputType[P]>
            : GetScalarType<T[P], ConsoleGroupByOutputType[P]>
        }
      >
    >


  export type ConsoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    games?: boolean | Console$gamesArgs<ExtArgs>
    _count?: boolean | ConsoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["console"]>

  export type ConsoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["console"]>

  export type ConsoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["console"]>

  export type ConsoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ConsoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["console"]>
  export type ConsoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Console$gamesArgs<ExtArgs>
    _count?: boolean | ConsoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConsoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConsolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Console"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["console"]>
    composites: {}
  }

  type ConsoleGetPayload<S extends boolean | null | undefined | ConsoleDefaultArgs> = $Result.GetResult<Prisma.$ConsolePayload, S>

  type ConsoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsoleCountAggregateInputType | true
    }

  export interface ConsoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Console'], meta: { name: 'Console' } }
    /**
     * Find zero or one Console that matches the filter.
     * @param {ConsoleFindUniqueArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsoleFindUniqueArgs>(args: SelectSubset<T, ConsoleFindUniqueArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Console that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsoleFindUniqueOrThrowArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Console that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleFindFirstArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsoleFindFirstArgs>(args?: SelectSubset<T, ConsoleFindFirstArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Console that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleFindFirstOrThrowArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consoles
     * const consoles = await prisma.console.findMany()
     * 
     * // Get first 10 Consoles
     * const consoles = await prisma.console.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consoleWithIdOnly = await prisma.console.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsoleFindManyArgs>(args?: SelectSubset<T, ConsoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Console.
     * @param {ConsoleCreateArgs} args - Arguments to create a Console.
     * @example
     * // Create one Console
     * const Console = await prisma.console.create({
     *   data: {
     *     // ... data to create a Console
     *   }
     * })
     * 
     */
    create<T extends ConsoleCreateArgs>(args: SelectSubset<T, ConsoleCreateArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consoles.
     * @param {ConsoleCreateManyArgs} args - Arguments to create many Consoles.
     * @example
     * // Create many Consoles
     * const console = await prisma.console.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsoleCreateManyArgs>(args?: SelectSubset<T, ConsoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consoles and returns the data saved in the database.
     * @param {ConsoleCreateManyAndReturnArgs} args - Arguments to create many Consoles.
     * @example
     * // Create many Consoles
     * const console = await prisma.console.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consoles and only return the `id`
     * const consoleWithIdOnly = await prisma.console.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Console.
     * @param {ConsoleDeleteArgs} args - Arguments to delete one Console.
     * @example
     * // Delete one Console
     * const Console = await prisma.console.delete({
     *   where: {
     *     // ... filter to delete one Console
     *   }
     * })
     * 
     */
    delete<T extends ConsoleDeleteArgs>(args: SelectSubset<T, ConsoleDeleteArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Console.
     * @param {ConsoleUpdateArgs} args - Arguments to update one Console.
     * @example
     * // Update one Console
     * const console = await prisma.console.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsoleUpdateArgs>(args: SelectSubset<T, ConsoleUpdateArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consoles.
     * @param {ConsoleDeleteManyArgs} args - Arguments to filter Consoles to delete.
     * @example
     * // Delete a few Consoles
     * const { count } = await prisma.console.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsoleDeleteManyArgs>(args?: SelectSubset<T, ConsoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consoles
     * const console = await prisma.console.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsoleUpdateManyArgs>(args: SelectSubset<T, ConsoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consoles and returns the data updated in the database.
     * @param {ConsoleUpdateManyAndReturnArgs} args - Arguments to update many Consoles.
     * @example
     * // Update many Consoles
     * const console = await prisma.console.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consoles and only return the `id`
     * const consoleWithIdOnly = await prisma.console.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Console.
     * @param {ConsoleUpsertArgs} args - Arguments to update or create a Console.
     * @example
     * // Update or create a Console
     * const console = await prisma.console.upsert({
     *   create: {
     *     // ... data to create a Console
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Console we want to update
     *   }
     * })
     */
    upsert<T extends ConsoleUpsertArgs>(args: SelectSubset<T, ConsoleUpsertArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleCountArgs} args - Arguments to filter Consoles to count.
     * @example
     * // Count the number of Consoles
     * const count = await prisma.console.count({
     *   where: {
     *     // ... the filter for the Consoles we want to count
     *   }
     * })
    **/
    count<T extends ConsoleCountArgs>(
      args?: Subset<T, ConsoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Console.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsoleAggregateArgs>(args: Subset<T, ConsoleAggregateArgs>): Prisma.PrismaPromise<GetConsoleAggregateType<T>>

    /**
     * Group by Console.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleGroupByArgs} args - Group by arguments.
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
      T extends ConsoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsoleGroupByArgs['orderBy'] }
        : { orderBy?: ConsoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Console model
   */
  readonly fields: ConsoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Console.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Console$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Console$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Console model
   */
  interface ConsoleFieldRefs {
    readonly id: FieldRef<"Console", 'String'>
    readonly name: FieldRef<"Console", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Console findUnique
   */
  export type ConsoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where: ConsoleWhereUniqueInput
  }

  /**
   * Console findUniqueOrThrow
   */
  export type ConsoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where: ConsoleWhereUniqueInput
  }

  /**
   * Console findFirst
   */
  export type ConsoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consoles.
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consoles.
     */
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }

  /**
   * Console findFirstOrThrow
   */
  export type ConsoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Console to fetch.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consoles.
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consoles.
     */
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }

  /**
   * Console findMany
   */
  export type ConsoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter, which Consoles to fetch.
     */
    where?: ConsoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consoles to fetch.
     */
    orderBy?: ConsoleOrderByWithRelationInput | ConsoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consoles.
     */
    cursor?: ConsoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consoles.
     */
    skip?: number
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }

  /**
   * Console create
   */
  export type ConsoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Console.
     */
    data: XOR<ConsoleCreateInput, ConsoleUncheckedCreateInput>
  }

  /**
   * Console createMany
   */
  export type ConsoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consoles.
     */
    data: ConsoleCreateManyInput | ConsoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Console createManyAndReturn
   */
  export type ConsoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * The data used to create many Consoles.
     */
    data: ConsoleCreateManyInput | ConsoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Console update
   */
  export type ConsoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Console.
     */
    data: XOR<ConsoleUpdateInput, ConsoleUncheckedUpdateInput>
    /**
     * Choose, which Console to update.
     */
    where: ConsoleWhereUniqueInput
  }

  /**
   * Console updateMany
   */
  export type ConsoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consoles.
     */
    data: XOR<ConsoleUpdateManyMutationInput, ConsoleUncheckedUpdateManyInput>
    /**
     * Filter which Consoles to update
     */
    where?: ConsoleWhereInput
    /**
     * Limit how many Consoles to update.
     */
    limit?: number
  }

  /**
   * Console updateManyAndReturn
   */
  export type ConsoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * The data used to update Consoles.
     */
    data: XOR<ConsoleUpdateManyMutationInput, ConsoleUncheckedUpdateManyInput>
    /**
     * Filter which Consoles to update
     */
    where?: ConsoleWhereInput
    /**
     * Limit how many Consoles to update.
     */
    limit?: number
  }

  /**
   * Console upsert
   */
  export type ConsoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Console to update in case it exists.
     */
    where: ConsoleWhereUniqueInput
    /**
     * In case the Console found by the `where` argument doesn't exist, create a new Console with this data.
     */
    create: XOR<ConsoleCreateInput, ConsoleUncheckedCreateInput>
    /**
     * In case the Console was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsoleUpdateInput, ConsoleUncheckedUpdateInput>
  }

  /**
   * Console delete
   */
  export type ConsoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    /**
     * Filter which Console to delete.
     */
    where: ConsoleWhereUniqueInput
  }

  /**
   * Console deleteMany
   */
  export type ConsoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consoles to delete
     */
    where?: ConsoleWhereInput
    /**
     * Limit how many Consoles to delete.
     */
    limit?: number
  }

  /**
   * Console.games
   */
  export type Console$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Console without action
   */
  export type ConsoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    coverImage: string | null
    developer: string | null
    publisher: string | null
    releaseDate: Date | null
    consoleId: string | null
    createdAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    coverImage: string | null
    developer: string | null
    publisher: string | null
    releaseDate: Date | null
    consoleId: string | null
    createdAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    coverImage: number
    developer: number
    publisher: number
    releaseDate: number
    consoleId: number
    screenshots: number
    createdAt: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    coverImage?: true
    developer?: true
    publisher?: true
    releaseDate?: true
    consoleId?: true
    createdAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    coverImage?: true
    developer?: true
    publisher?: true
    releaseDate?: true
    consoleId?: true
    createdAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    coverImage?: true
    developer?: true
    publisher?: true
    releaseDate?: true
    consoleId?: true
    screenshots?: true
    createdAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate: Date | null
    consoleId: string | null
    screenshots: string[]
    createdAt: Date
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    developer?: boolean
    publisher?: boolean
    releaseDate?: boolean
    consoleId?: boolean
    screenshots?: boolean
    createdAt?: boolean
    console?: boolean | Game$consoleArgs<ExtArgs>
    achievements?: boolean | Game$achievementsArgs<ExtArgs>
    users?: boolean | Game$usersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    developer?: boolean
    publisher?: boolean
    releaseDate?: boolean
    consoleId?: boolean
    screenshots?: boolean
    createdAt?: boolean
    console?: boolean | Game$consoleArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    developer?: boolean
    publisher?: boolean
    releaseDate?: boolean
    consoleId?: boolean
    screenshots?: boolean
    createdAt?: boolean
    console?: boolean | Game$consoleArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    developer?: boolean
    publisher?: boolean
    releaseDate?: boolean
    consoleId?: boolean
    screenshots?: boolean
    createdAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "description" | "coverImage" | "developer" | "publisher" | "releaseDate" | "consoleId" | "screenshots" | "createdAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    console?: boolean | Game$consoleArgs<ExtArgs>
    achievements?: boolean | Game$achievementsArgs<ExtArgs>
    users?: boolean | Game$usersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    console?: boolean | Game$consoleArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    console?: boolean | Game$consoleArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      console: Prisma.$ConsolePayload<ExtArgs> | null
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      users: Prisma.$UserGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string
      coverImage: string
      developer: string
      publisher: string
      releaseDate: Date | null
      consoleId: string | null
      screenshots: string[]
      createdAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    console<T extends Game$consoleArgs<ExtArgs> = {}>(args?: Subset<T, Game$consoleArgs<ExtArgs>>): Prisma__ConsoleClient<$Result.GetResult<Prisma.$ConsolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    achievements<T extends Game$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, Game$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Game$usersArgs<ExtArgs> = {}>(args?: Subset<T, Game$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly slug: FieldRef<"Game", 'String'>
    readonly title: FieldRef<"Game", 'String'>
    readonly description: FieldRef<"Game", 'String'>
    readonly coverImage: FieldRef<"Game", 'String'>
    readonly developer: FieldRef<"Game", 'String'>
    readonly publisher: FieldRef<"Game", 'String'>
    readonly releaseDate: FieldRef<"Game", 'DateTime'>
    readonly consoleId: FieldRef<"Game", 'String'>
    readonly screenshots: FieldRef<"Game", 'String[]'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.console
   */
  export type Game$consoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Console
     */
    select?: ConsoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Console
     */
    omit?: ConsoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsoleInclude<ExtArgs> | null
    where?: ConsoleWhereInput
  }

  /**
   * Game.achievements
   */
  export type Game$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Game.users
   */
  export type Game$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    gameId: string | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    gameId: string | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    gameId: number
    _all: number
  }


  export type AchievementMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    gameId?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    gameId?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    gameId?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    title: string
    description: string
    image: string | null
    gameId: string
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    UserAchievement?: boolean | Achievement$UserAchievementArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    gameId?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "gameId", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    UserAchievement?: boolean | Achievement$UserAchievementArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      UserAchievement: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      image: string | null
      gameId: string
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserAchievement<T extends Achievement$UserAchievementArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$UserAchievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly title: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly image: FieldRef<"Achievement", 'String'>
    readonly gameId: FieldRef<"Achievement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.UserAchievement
   */
  export type Achievement$UserAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: string | null
    userGameId: string | null
    achievementId: string | null
    earnedAt: Date | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: string | null
    userGameId: string | null
    achievementId: string | null
    earnedAt: Date | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    userGameId: number
    achievementId: number
    earnedAt: number
    _all: number
  }


  export type UserAchievementMinAggregateInputType = {
    id?: true
    userGameId?: true
    achievementId?: true
    earnedAt?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    userGameId?: true
    achievementId?: true
    earnedAt?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    userGameId?: true
    achievementId?: true
    earnedAt?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: string
    userGameId: string
    achievementId: string
    earnedAt: Date
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userGameId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    userGame?: boolean | UserGameDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userGameId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    userGame?: boolean | UserGameDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userGameId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    userGame?: boolean | UserGameDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    userGameId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
  }

  export type UserAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userGameId" | "achievementId" | "earnedAt", ExtArgs["result"]["userAchievement"]>
  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGame?: boolean | UserGameDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGame?: boolean | UserGameDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGame?: boolean | UserGameDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      userGame: Prisma.$UserGamePayload<ExtArgs>
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userGameId: string
      achievementId: string
      earnedAt: Date
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
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
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userGame<T extends UserGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserGameDefaultArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAchievement model
   */
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'String'>
    readonly userGameId: FieldRef<"UserAchievement", 'String'>
    readonly achievementId: FieldRef<"UserAchievement", 'String'>
    readonly earnedAt: FieldRef<"UserAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
  }

  /**
   * UserAchievement updateManyAndReturn
   */
  export type UserAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserGame
   */

  export type AggregateUserGame = {
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  export type UserGameMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    owned: boolean | null
  }

  export type UserGameMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    owned: boolean | null
  }

  export type UserGameCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    owned: number
    _all: number
  }


  export type UserGameMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    owned?: true
  }

  export type UserGameMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    owned?: true
  }

  export type UserGameCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    owned?: true
    _all?: true
  }

  export type UserGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGame to aggregate.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGames
    **/
    _count?: true | UserGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameMaxAggregateInputType
  }

  export type GetUserGameAggregateType<T extends UserGameAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGame[P]>
      : GetScalarType<T[P], AggregateUserGame[P]>
  }




  export type UserGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithAggregationInput | UserGameOrderByWithAggregationInput[]
    by: UserGameScalarFieldEnum[] | UserGameScalarFieldEnum
    having?: UserGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameCountAggregateInputType | true
    _min?: UserGameMinAggregateInputType
    _max?: UserGameMaxAggregateInputType
  }

  export type UserGameGroupByOutputType = {
    id: string
    userId: string
    gameId: string
    owned: boolean
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  type GetUserGameGroupByPayload<T extends UserGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameGroupByOutputType[P]>
        }
      >
    >


  export type UserGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    owned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    achievements?: boolean | UserGame$achievementsArgs<ExtArgs>
    _count?: boolean | UserGameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    owned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    owned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    owned?: boolean
  }

  export type UserGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gameId" | "owned", ExtArgs["result"]["userGame"]>
  export type UserGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    achievements?: boolean | UserGame$achievementsArgs<ExtArgs>
    _count?: boolean | UserGameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $UserGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGame"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
      achievements: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gameId: string
      owned: boolean
    }, ExtArgs["result"]["userGame"]>
    composites: {}
  }

  type UserGameGetPayload<S extends boolean | null | undefined | UserGameDefaultArgs> = $Result.GetResult<Prisma.$UserGamePayload, S>

  type UserGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGameCountAggregateInputType | true
    }

  export interface UserGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGame'], meta: { name: 'UserGame' } }
    /**
     * Find zero or one UserGame that matches the filter.
     * @param {UserGameFindUniqueArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGameFindUniqueArgs>(args: SelectSubset<T, UserGameFindUniqueArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGameFindUniqueOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGameFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGameFindFirstArgs>(args?: SelectSubset<T, UserGameFindFirstArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGameFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGames
     * const userGames = await prisma.userGame.findMany()
     * 
     * // Get first 10 UserGames
     * const userGames = await prisma.userGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGameWithIdOnly = await prisma.userGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGameFindManyArgs>(args?: SelectSubset<T, UserGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGame.
     * @param {UserGameCreateArgs} args - Arguments to create a UserGame.
     * @example
     * // Create one UserGame
     * const UserGame = await prisma.userGame.create({
     *   data: {
     *     // ... data to create a UserGame
     *   }
     * })
     * 
     */
    create<T extends UserGameCreateArgs>(args: SelectSubset<T, UserGameCreateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGames.
     * @param {UserGameCreateManyArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGameCreateManyArgs>(args?: SelectSubset<T, UserGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGames and returns the data saved in the database.
     * @param {UserGameCreateManyAndReturnArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGames and only return the `id`
     * const userGameWithIdOnly = await prisma.userGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGameCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGame.
     * @param {UserGameDeleteArgs} args - Arguments to delete one UserGame.
     * @example
     * // Delete one UserGame
     * const UserGame = await prisma.userGame.delete({
     *   where: {
     *     // ... filter to delete one UserGame
     *   }
     * })
     * 
     */
    delete<T extends UserGameDeleteArgs>(args: SelectSubset<T, UserGameDeleteArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGame.
     * @param {UserGameUpdateArgs} args - Arguments to update one UserGame.
     * @example
     * // Update one UserGame
     * const userGame = await prisma.userGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGameUpdateArgs>(args: SelectSubset<T, UserGameUpdateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGames.
     * @param {UserGameDeleteManyArgs} args - Arguments to filter UserGames to delete.
     * @example
     * // Delete a few UserGames
     * const { count } = await prisma.userGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGameDeleteManyArgs>(args?: SelectSubset<T, UserGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGameUpdateManyArgs>(args: SelectSubset<T, UserGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames and returns the data updated in the database.
     * @param {UserGameUpdateManyAndReturnArgs} args - Arguments to update many UserGames.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGames and only return the `id`
     * const userGameWithIdOnly = await prisma.userGame.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserGameUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGame.
     * @param {UserGameUpsertArgs} args - Arguments to update or create a UserGame.
     * @example
     * // Update or create a UserGame
     * const userGame = await prisma.userGame.upsert({
     *   create: {
     *     // ... data to create a UserGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGame we want to update
     *   }
     * })
     */
    upsert<T extends UserGameUpsertArgs>(args: SelectSubset<T, UserGameUpsertArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameCountArgs} args - Arguments to filter UserGames to count.
     * @example
     * // Count the number of UserGames
     * const count = await prisma.userGame.count({
     *   where: {
     *     // ... the filter for the UserGames we want to count
     *   }
     * })
    **/
    count<T extends UserGameCountArgs>(
      args?: Subset<T, UserGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGameAggregateArgs>(args: Subset<T, UserGameAggregateArgs>): Prisma.PrismaPromise<GetUserGameAggregateType<T>>

    /**
     * Group by UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameGroupByArgs} args - Group by arguments.
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
      T extends UserGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameGroupByArgs['orderBy'] }
        : { orderBy?: UserGameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGame model
   */
  readonly fields: UserGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievements<T extends UserGame$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, UserGame$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserGame model
   */
  interface UserGameFieldRefs {
    readonly id: FieldRef<"UserGame", 'String'>
    readonly userId: FieldRef<"UserGame", 'String'>
    readonly gameId: FieldRef<"UserGame", 'String'>
    readonly owned: FieldRef<"UserGame", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserGame findUnique
   */
  export type UserGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findUniqueOrThrow
   */
  export type UserGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findFirst
   */
  export type UserGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findFirstOrThrow
   */
  export type UserGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findMany
   */
  export type UserGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGames to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame create
   */
  export type UserGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGame.
     */
    data: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
  }

  /**
   * UserGame createMany
   */
  export type UserGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGame createManyAndReturn
   */
  export type UserGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame update
   */
  export type UserGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGame.
     */
    data: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
    /**
     * Choose, which UserGame to update.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame updateMany
   */
  export type UserGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
  }

  /**
   * UserGame updateManyAndReturn
   */
  export type UserGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame upsert
   */
  export type UserGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGame to update in case it exists.
     */
    where: UserGameWhereUniqueInput
    /**
     * In case the UserGame found by the `where` argument doesn't exist, create a new UserGame with this data.
     */
    create: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
    /**
     * In case the UserGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
  }

  /**
   * UserGame delete
   */
  export type UserGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter which UserGame to delete.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame deleteMany
   */
  export type UserGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGames to delete
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to delete.
     */
    limit?: number
  }

  /**
   * UserGame.achievements
   */
  export type UserGame$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserGame without action
   */
  export type UserGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
  }


  /**
   * Model ForumCategory
   */

  export type AggregateForumCategory = {
    _count: ForumCategoryCountAggregateOutputType | null
    _avg: ForumCategoryAvgAggregateOutputType | null
    _sum: ForumCategorySumAggregateOutputType | null
    _min: ForumCategoryMinAggregateOutputType | null
    _max: ForumCategoryMaxAggregateOutputType | null
  }

  export type ForumCategoryAvgAggregateOutputType = {
    position: number | null
  }

  export type ForumCategorySumAggregateOutputType = {
    position: number | null
  }

  export type ForumCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ForumCategoryAvgAggregateInputType = {
    position?: true
  }

  export type ForumCategorySumAggregateInputType = {
    position?: true
  }

  export type ForumCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForumCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCategory to aggregate.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumCategories
    **/
    _count?: true | ForumCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCategoryMaxAggregateInputType
  }

  export type GetForumCategoryAggregateType<T extends ForumCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateForumCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumCategory[P]>
      : GetScalarType<T[P], AggregateForumCategory[P]>
  }




  export type ForumCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCategoryWhereInput
    orderBy?: ForumCategoryOrderByWithAggregationInput | ForumCategoryOrderByWithAggregationInput[]
    by: ForumCategoryScalarFieldEnum[] | ForumCategoryScalarFieldEnum
    having?: ForumCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCategoryCountAggregateInputType | true
    _avg?: ForumCategoryAvgAggregateInputType
    _sum?: ForumCategorySumAggregateInputType
    _min?: ForumCategoryMinAggregateInputType
    _max?: ForumCategoryMaxAggregateInputType
  }

  export type ForumCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    position: number
    createdAt: Date
    updatedAt: Date
    _count: ForumCategoryCountAggregateOutputType | null
    _avg: ForumCategoryAvgAggregateOutputType | null
    _sum: ForumCategorySumAggregateOutputType | null
    _min: ForumCategoryMinAggregateOutputType | null
    _max: ForumCategoryMaxAggregateOutputType | null
  }

  type GetForumCategoryGroupByPayload<T extends ForumCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ForumCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ForumCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subforums?: boolean | ForumCategory$subforumsArgs<ExtArgs>
    _count?: boolean | ForumCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumCategory"]>

  export type ForumCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["forumCategory"]>

  export type ForumCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["forumCategory"]>

  export type ForumCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ForumCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["forumCategory"]>
  export type ForumCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subforums?: boolean | ForumCategory$subforumsArgs<ExtArgs>
    _count?: boolean | ForumCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ForumCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ForumCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumCategory"
    objects: {
      subforums: Prisma.$ForumSubforumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      position: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forumCategory"]>
    composites: {}
  }

  type ForumCategoryGetPayload<S extends boolean | null | undefined | ForumCategoryDefaultArgs> = $Result.GetResult<Prisma.$ForumCategoryPayload, S>

  type ForumCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCategoryCountAggregateInputType | true
    }

  export interface ForumCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumCategory'], meta: { name: 'ForumCategory' } }
    /**
     * Find zero or one ForumCategory that matches the filter.
     * @param {ForumCategoryFindUniqueArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCategoryFindUniqueArgs>(args: SelectSubset<T, ForumCategoryFindUniqueArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCategoryFindUniqueOrThrowArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryFindFirstArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCategoryFindFirstArgs>(args?: SelectSubset<T, ForumCategoryFindFirstArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryFindFirstOrThrowArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumCategories
     * const forumCategories = await prisma.forumCategory.findMany()
     * 
     * // Get first 10 ForumCategories
     * const forumCategories = await prisma.forumCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCategoryWithIdOnly = await prisma.forumCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCategoryFindManyArgs>(args?: SelectSubset<T, ForumCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumCategory.
     * @param {ForumCategoryCreateArgs} args - Arguments to create a ForumCategory.
     * @example
     * // Create one ForumCategory
     * const ForumCategory = await prisma.forumCategory.create({
     *   data: {
     *     // ... data to create a ForumCategory
     *   }
     * })
     * 
     */
    create<T extends ForumCategoryCreateArgs>(args: SelectSubset<T, ForumCategoryCreateArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumCategories.
     * @param {ForumCategoryCreateManyArgs} args - Arguments to create many ForumCategories.
     * @example
     * // Create many ForumCategories
     * const forumCategory = await prisma.forumCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCategoryCreateManyArgs>(args?: SelectSubset<T, ForumCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumCategories and returns the data saved in the database.
     * @param {ForumCategoryCreateManyAndReturnArgs} args - Arguments to create many ForumCategories.
     * @example
     * // Create many ForumCategories
     * const forumCategory = await prisma.forumCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumCategories and only return the `id`
     * const forumCategoryWithIdOnly = await prisma.forumCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumCategory.
     * @param {ForumCategoryDeleteArgs} args - Arguments to delete one ForumCategory.
     * @example
     * // Delete one ForumCategory
     * const ForumCategory = await prisma.forumCategory.delete({
     *   where: {
     *     // ... filter to delete one ForumCategory
     *   }
     * })
     * 
     */
    delete<T extends ForumCategoryDeleteArgs>(args: SelectSubset<T, ForumCategoryDeleteArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumCategory.
     * @param {ForumCategoryUpdateArgs} args - Arguments to update one ForumCategory.
     * @example
     * // Update one ForumCategory
     * const forumCategory = await prisma.forumCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCategoryUpdateArgs>(args: SelectSubset<T, ForumCategoryUpdateArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumCategories.
     * @param {ForumCategoryDeleteManyArgs} args - Arguments to filter ForumCategories to delete.
     * @example
     * // Delete a few ForumCategories
     * const { count } = await prisma.forumCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCategoryDeleteManyArgs>(args?: SelectSubset<T, ForumCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumCategories
     * const forumCategory = await prisma.forumCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCategoryUpdateManyArgs>(args: SelectSubset<T, ForumCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumCategories and returns the data updated in the database.
     * @param {ForumCategoryUpdateManyAndReturnArgs} args - Arguments to update many ForumCategories.
     * @example
     * // Update many ForumCategories
     * const forumCategory = await prisma.forumCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumCategories and only return the `id`
     * const forumCategoryWithIdOnly = await prisma.forumCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumCategory.
     * @param {ForumCategoryUpsertArgs} args - Arguments to update or create a ForumCategory.
     * @example
     * // Update or create a ForumCategory
     * const forumCategory = await prisma.forumCategory.upsert({
     *   create: {
     *     // ... data to create a ForumCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumCategory we want to update
     *   }
     * })
     */
    upsert<T extends ForumCategoryUpsertArgs>(args: SelectSubset<T, ForumCategoryUpsertArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryCountArgs} args - Arguments to filter ForumCategories to count.
     * @example
     * // Count the number of ForumCategories
     * const count = await prisma.forumCategory.count({
     *   where: {
     *     // ... the filter for the ForumCategories we want to count
     *   }
     * })
    **/
    count<T extends ForumCategoryCountArgs>(
      args?: Subset<T, ForumCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumCategoryAggregateArgs>(args: Subset<T, ForumCategoryAggregateArgs>): Prisma.PrismaPromise<GetForumCategoryAggregateType<T>>

    /**
     * Group by ForumCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryGroupByArgs} args - Group by arguments.
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
      T extends ForumCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ForumCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumCategory model
   */
  readonly fields: ForumCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subforums<T extends ForumCategory$subforumsArgs<ExtArgs> = {}>(args?: Subset<T, ForumCategory$subforumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ForumCategory model
   */
  interface ForumCategoryFieldRefs {
    readonly id: FieldRef<"ForumCategory", 'String'>
    readonly name: FieldRef<"ForumCategory", 'String'>
    readonly slug: FieldRef<"ForumCategory", 'String'>
    readonly position: FieldRef<"ForumCategory", 'Int'>
    readonly createdAt: FieldRef<"ForumCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumCategory findUnique
   */
  export type ForumCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory findUniqueOrThrow
   */
  export type ForumCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory findFirst
   */
  export type ForumCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCategories.
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCategories.
     */
    distinct?: ForumCategoryScalarFieldEnum | ForumCategoryScalarFieldEnum[]
  }

  /**
   * ForumCategory findFirstOrThrow
   */
  export type ForumCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCategories.
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCategories.
     */
    distinct?: ForumCategoryScalarFieldEnum | ForumCategoryScalarFieldEnum[]
  }

  /**
   * ForumCategory findMany
   */
  export type ForumCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategories to fetch.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumCategories.
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    distinct?: ForumCategoryScalarFieldEnum | ForumCategoryScalarFieldEnum[]
  }

  /**
   * ForumCategory create
   */
  export type ForumCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumCategory.
     */
    data: XOR<ForumCategoryCreateInput, ForumCategoryUncheckedCreateInput>
  }

  /**
   * ForumCategory createMany
   */
  export type ForumCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumCategories.
     */
    data: ForumCategoryCreateManyInput | ForumCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumCategory createManyAndReturn
   */
  export type ForumCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ForumCategories.
     */
    data: ForumCategoryCreateManyInput | ForumCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumCategory update
   */
  export type ForumCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumCategory.
     */
    data: XOR<ForumCategoryUpdateInput, ForumCategoryUncheckedUpdateInput>
    /**
     * Choose, which ForumCategory to update.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory updateMany
   */
  export type ForumCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumCategories.
     */
    data: XOR<ForumCategoryUpdateManyMutationInput, ForumCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ForumCategories to update
     */
    where?: ForumCategoryWhereInput
    /**
     * Limit how many ForumCategories to update.
     */
    limit?: number
  }

  /**
   * ForumCategory updateManyAndReturn
   */
  export type ForumCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ForumCategories.
     */
    data: XOR<ForumCategoryUpdateManyMutationInput, ForumCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ForumCategories to update
     */
    where?: ForumCategoryWhereInput
    /**
     * Limit how many ForumCategories to update.
     */
    limit?: number
  }

  /**
   * ForumCategory upsert
   */
  export type ForumCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumCategory to update in case it exists.
     */
    where: ForumCategoryWhereUniqueInput
    /**
     * In case the ForumCategory found by the `where` argument doesn't exist, create a new ForumCategory with this data.
     */
    create: XOR<ForumCategoryCreateInput, ForumCategoryUncheckedCreateInput>
    /**
     * In case the ForumCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCategoryUpdateInput, ForumCategoryUncheckedUpdateInput>
  }

  /**
   * ForumCategory delete
   */
  export type ForumCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter which ForumCategory to delete.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory deleteMany
   */
  export type ForumCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCategories to delete
     */
    where?: ForumCategoryWhereInput
    /**
     * Limit how many ForumCategories to delete.
     */
    limit?: number
  }

  /**
   * ForumCategory.subforums
   */
  export type ForumCategory$subforumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    where?: ForumSubforumWhereInput
    orderBy?: ForumSubforumOrderByWithRelationInput | ForumSubforumOrderByWithRelationInput[]
    cursor?: ForumSubforumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumSubforumScalarFieldEnum | ForumSubforumScalarFieldEnum[]
  }

  /**
   * ForumCategory without action
   */
  export type ForumCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ForumSubforum
   */

  export type AggregateForumSubforum = {
    _count: ForumSubforumCountAggregateOutputType | null
    _avg: ForumSubforumAvgAggregateOutputType | null
    _sum: ForumSubforumSumAggregateOutputType | null
    _min: ForumSubforumMinAggregateOutputType | null
    _max: ForumSubforumMaxAggregateOutputType | null
  }

  export type ForumSubforumAvgAggregateOutputType = {
    position: number | null
  }

  export type ForumSubforumSumAggregateOutputType = {
    position: number | null
  }

  export type ForumSubforumMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumSubforumMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumSubforumCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    slug: number
    description: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ForumSubforumAvgAggregateInputType = {
    position?: true
  }

  export type ForumSubforumSumAggregateInputType = {
    position?: true
  }

  export type ForumSubforumMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumSubforumMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumSubforumCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForumSubforumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumSubforum to aggregate.
     */
    where?: ForumSubforumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubforums to fetch.
     */
    orderBy?: ForumSubforumOrderByWithRelationInput | ForumSubforumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumSubforumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubforums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubforums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumSubforums
    **/
    _count?: true | ForumSubforumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumSubforumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumSubforumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumSubforumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumSubforumMaxAggregateInputType
  }

  export type GetForumSubforumAggregateType<T extends ForumSubforumAggregateArgs> = {
        [P in keyof T & keyof AggregateForumSubforum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumSubforum[P]>
      : GetScalarType<T[P], AggregateForumSubforum[P]>
  }




  export type ForumSubforumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumSubforumWhereInput
    orderBy?: ForumSubforumOrderByWithAggregationInput | ForumSubforumOrderByWithAggregationInput[]
    by: ForumSubforumScalarFieldEnum[] | ForumSubforumScalarFieldEnum
    having?: ForumSubforumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumSubforumCountAggregateInputType | true
    _avg?: ForumSubforumAvgAggregateInputType
    _sum?: ForumSubforumSumAggregateInputType
    _min?: ForumSubforumMinAggregateInputType
    _max?: ForumSubforumMaxAggregateInputType
  }

  export type ForumSubforumGroupByOutputType = {
    id: string
    categoryId: string
    name: string
    slug: string
    description: string | null
    position: number
    createdAt: Date
    updatedAt: Date
    _count: ForumSubforumCountAggregateOutputType | null
    _avg: ForumSubforumAvgAggregateOutputType | null
    _sum: ForumSubforumSumAggregateOutputType | null
    _min: ForumSubforumMinAggregateOutputType | null
    _max: ForumSubforumMaxAggregateOutputType | null
  }

  type GetForumSubforumGroupByPayload<T extends ForumSubforumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumSubforumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumSubforumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumSubforumGroupByOutputType[P]>
            : GetScalarType<T[P], ForumSubforumGroupByOutputType[P]>
        }
      >
    >


  export type ForumSubforumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ForumCategoryDefaultArgs<ExtArgs>
    threads?: boolean | ForumSubforum$threadsArgs<ExtArgs>
    _count?: boolean | ForumSubforumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumSubforum"]>

  export type ForumSubforumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ForumCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumSubforum"]>

  export type ForumSubforumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ForumCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumSubforum"]>

  export type ForumSubforumSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ForumSubforumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "slug" | "description" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["forumSubforum"]>
  export type ForumSubforumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ForumCategoryDefaultArgs<ExtArgs>
    threads?: boolean | ForumSubforum$threadsArgs<ExtArgs>
    _count?: boolean | ForumSubforumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumSubforumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ForumCategoryDefaultArgs<ExtArgs>
  }
  export type ForumSubforumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ForumCategoryDefaultArgs<ExtArgs>
  }

  export type $ForumSubforumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumSubforum"
    objects: {
      category: Prisma.$ForumCategoryPayload<ExtArgs>
      threads: Prisma.$ForumThreadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      name: string
      slug: string
      description: string | null
      position: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forumSubforum"]>
    composites: {}
  }

  type ForumSubforumGetPayload<S extends boolean | null | undefined | ForumSubforumDefaultArgs> = $Result.GetResult<Prisma.$ForumSubforumPayload, S>

  type ForumSubforumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumSubforumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumSubforumCountAggregateInputType | true
    }

  export interface ForumSubforumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumSubforum'], meta: { name: 'ForumSubforum' } }
    /**
     * Find zero or one ForumSubforum that matches the filter.
     * @param {ForumSubforumFindUniqueArgs} args - Arguments to find a ForumSubforum
     * @example
     * // Get one ForumSubforum
     * const forumSubforum = await prisma.forumSubforum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumSubforumFindUniqueArgs>(args: SelectSubset<T, ForumSubforumFindUniqueArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumSubforum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumSubforumFindUniqueOrThrowArgs} args - Arguments to find a ForumSubforum
     * @example
     * // Get one ForumSubforum
     * const forumSubforum = await prisma.forumSubforum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumSubforumFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumSubforumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumSubforum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubforumFindFirstArgs} args - Arguments to find a ForumSubforum
     * @example
     * // Get one ForumSubforum
     * const forumSubforum = await prisma.forumSubforum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumSubforumFindFirstArgs>(args?: SelectSubset<T, ForumSubforumFindFirstArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumSubforum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubforumFindFirstOrThrowArgs} args - Arguments to find a ForumSubforum
     * @example
     * // Get one ForumSubforum
     * const forumSubforum = await prisma.forumSubforum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumSubforumFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumSubforumFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumSubforums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubforumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumSubforums
     * const forumSubforums = await prisma.forumSubforum.findMany()
     * 
     * // Get first 10 ForumSubforums
     * const forumSubforums = await prisma.forumSubforum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumSubforumWithIdOnly = await prisma.forumSubforum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumSubforumFindManyArgs>(args?: SelectSubset<T, ForumSubforumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumSubforum.
     * @param {ForumSubforumCreateArgs} args - Arguments to create a ForumSubforum.
     * @example
     * // Create one ForumSubforum
     * const ForumSubforum = await prisma.forumSubforum.create({
     *   data: {
     *     // ... data to create a ForumSubforum
     *   }
     * })
     * 
     */
    create<T extends ForumSubforumCreateArgs>(args: SelectSubset<T, ForumSubforumCreateArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumSubforums.
     * @param {ForumSubforumCreateManyArgs} args - Arguments to create many ForumSubforums.
     * @example
     * // Create many ForumSubforums
     * const forumSubforum = await prisma.forumSubforum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumSubforumCreateManyArgs>(args?: SelectSubset<T, ForumSubforumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumSubforums and returns the data saved in the database.
     * @param {ForumSubforumCreateManyAndReturnArgs} args - Arguments to create many ForumSubforums.
     * @example
     * // Create many ForumSubforums
     * const forumSubforum = await prisma.forumSubforum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumSubforums and only return the `id`
     * const forumSubforumWithIdOnly = await prisma.forumSubforum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumSubforumCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumSubforumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumSubforum.
     * @param {ForumSubforumDeleteArgs} args - Arguments to delete one ForumSubforum.
     * @example
     * // Delete one ForumSubforum
     * const ForumSubforum = await prisma.forumSubforum.delete({
     *   where: {
     *     // ... filter to delete one ForumSubforum
     *   }
     * })
     * 
     */
    delete<T extends ForumSubforumDeleteArgs>(args: SelectSubset<T, ForumSubforumDeleteArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumSubforum.
     * @param {ForumSubforumUpdateArgs} args - Arguments to update one ForumSubforum.
     * @example
     * // Update one ForumSubforum
     * const forumSubforum = await prisma.forumSubforum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumSubforumUpdateArgs>(args: SelectSubset<T, ForumSubforumUpdateArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumSubforums.
     * @param {ForumSubforumDeleteManyArgs} args - Arguments to filter ForumSubforums to delete.
     * @example
     * // Delete a few ForumSubforums
     * const { count } = await prisma.forumSubforum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumSubforumDeleteManyArgs>(args?: SelectSubset<T, ForumSubforumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumSubforums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubforumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumSubforums
     * const forumSubforum = await prisma.forumSubforum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumSubforumUpdateManyArgs>(args: SelectSubset<T, ForumSubforumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumSubforums and returns the data updated in the database.
     * @param {ForumSubforumUpdateManyAndReturnArgs} args - Arguments to update many ForumSubforums.
     * @example
     * // Update many ForumSubforums
     * const forumSubforum = await prisma.forumSubforum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumSubforums and only return the `id`
     * const forumSubforumWithIdOnly = await prisma.forumSubforum.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumSubforumUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumSubforumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumSubforum.
     * @param {ForumSubforumUpsertArgs} args - Arguments to update or create a ForumSubforum.
     * @example
     * // Update or create a ForumSubforum
     * const forumSubforum = await prisma.forumSubforum.upsert({
     *   create: {
     *     // ... data to create a ForumSubforum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumSubforum we want to update
     *   }
     * })
     */
    upsert<T extends ForumSubforumUpsertArgs>(args: SelectSubset<T, ForumSubforumUpsertArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumSubforums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubforumCountArgs} args - Arguments to filter ForumSubforums to count.
     * @example
     * // Count the number of ForumSubforums
     * const count = await prisma.forumSubforum.count({
     *   where: {
     *     // ... the filter for the ForumSubforums we want to count
     *   }
     * })
    **/
    count<T extends ForumSubforumCountArgs>(
      args?: Subset<T, ForumSubforumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumSubforumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumSubforum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubforumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumSubforumAggregateArgs>(args: Subset<T, ForumSubforumAggregateArgs>): Prisma.PrismaPromise<GetForumSubforumAggregateType<T>>

    /**
     * Group by ForumSubforum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubforumGroupByArgs} args - Group by arguments.
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
      T extends ForumSubforumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumSubforumGroupByArgs['orderBy'] }
        : { orderBy?: ForumSubforumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumSubforumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumSubforumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumSubforum model
   */
  readonly fields: ForumSubforumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumSubforum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumSubforumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ForumCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumCategoryDefaultArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    threads<T extends ForumSubforum$threadsArgs<ExtArgs> = {}>(args?: Subset<T, ForumSubforum$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ForumSubforum model
   */
  interface ForumSubforumFieldRefs {
    readonly id: FieldRef<"ForumSubforum", 'String'>
    readonly categoryId: FieldRef<"ForumSubforum", 'String'>
    readonly name: FieldRef<"ForumSubforum", 'String'>
    readonly slug: FieldRef<"ForumSubforum", 'String'>
    readonly description: FieldRef<"ForumSubforum", 'String'>
    readonly position: FieldRef<"ForumSubforum", 'Int'>
    readonly createdAt: FieldRef<"ForumSubforum", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumSubforum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumSubforum findUnique
   */
  export type ForumSubforumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * Filter, which ForumSubforum to fetch.
     */
    where: ForumSubforumWhereUniqueInput
  }

  /**
   * ForumSubforum findUniqueOrThrow
   */
  export type ForumSubforumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * Filter, which ForumSubforum to fetch.
     */
    where: ForumSubforumWhereUniqueInput
  }

  /**
   * ForumSubforum findFirst
   */
  export type ForumSubforumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * Filter, which ForumSubforum to fetch.
     */
    where?: ForumSubforumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubforums to fetch.
     */
    orderBy?: ForumSubforumOrderByWithRelationInput | ForumSubforumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumSubforums.
     */
    cursor?: ForumSubforumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubforums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubforums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumSubforums.
     */
    distinct?: ForumSubforumScalarFieldEnum | ForumSubforumScalarFieldEnum[]
  }

  /**
   * ForumSubforum findFirstOrThrow
   */
  export type ForumSubforumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * Filter, which ForumSubforum to fetch.
     */
    where?: ForumSubforumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubforums to fetch.
     */
    orderBy?: ForumSubforumOrderByWithRelationInput | ForumSubforumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumSubforums.
     */
    cursor?: ForumSubforumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubforums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubforums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumSubforums.
     */
    distinct?: ForumSubforumScalarFieldEnum | ForumSubforumScalarFieldEnum[]
  }

  /**
   * ForumSubforum findMany
   */
  export type ForumSubforumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * Filter, which ForumSubforums to fetch.
     */
    where?: ForumSubforumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubforums to fetch.
     */
    orderBy?: ForumSubforumOrderByWithRelationInput | ForumSubforumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumSubforums.
     */
    cursor?: ForumSubforumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubforums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubforums.
     */
    skip?: number
    distinct?: ForumSubforumScalarFieldEnum | ForumSubforumScalarFieldEnum[]
  }

  /**
   * ForumSubforum create
   */
  export type ForumSubforumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumSubforum.
     */
    data: XOR<ForumSubforumCreateInput, ForumSubforumUncheckedCreateInput>
  }

  /**
   * ForumSubforum createMany
   */
  export type ForumSubforumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumSubforums.
     */
    data: ForumSubforumCreateManyInput | ForumSubforumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumSubforum createManyAndReturn
   */
  export type ForumSubforumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * The data used to create many ForumSubforums.
     */
    data: ForumSubforumCreateManyInput | ForumSubforumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumSubforum update
   */
  export type ForumSubforumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumSubforum.
     */
    data: XOR<ForumSubforumUpdateInput, ForumSubforumUncheckedUpdateInput>
    /**
     * Choose, which ForumSubforum to update.
     */
    where: ForumSubforumWhereUniqueInput
  }

  /**
   * ForumSubforum updateMany
   */
  export type ForumSubforumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumSubforums.
     */
    data: XOR<ForumSubforumUpdateManyMutationInput, ForumSubforumUncheckedUpdateManyInput>
    /**
     * Filter which ForumSubforums to update
     */
    where?: ForumSubforumWhereInput
    /**
     * Limit how many ForumSubforums to update.
     */
    limit?: number
  }

  /**
   * ForumSubforum updateManyAndReturn
   */
  export type ForumSubforumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * The data used to update ForumSubforums.
     */
    data: XOR<ForumSubforumUpdateManyMutationInput, ForumSubforumUncheckedUpdateManyInput>
    /**
     * Filter which ForumSubforums to update
     */
    where?: ForumSubforumWhereInput
    /**
     * Limit how many ForumSubforums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumSubforum upsert
   */
  export type ForumSubforumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumSubforum to update in case it exists.
     */
    where: ForumSubforumWhereUniqueInput
    /**
     * In case the ForumSubforum found by the `where` argument doesn't exist, create a new ForumSubforum with this data.
     */
    create: XOR<ForumSubforumCreateInput, ForumSubforumUncheckedCreateInput>
    /**
     * In case the ForumSubforum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumSubforumUpdateInput, ForumSubforumUncheckedUpdateInput>
  }

  /**
   * ForumSubforum delete
   */
  export type ForumSubforumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
    /**
     * Filter which ForumSubforum to delete.
     */
    where: ForumSubforumWhereUniqueInput
  }

  /**
   * ForumSubforum deleteMany
   */
  export type ForumSubforumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumSubforums to delete
     */
    where?: ForumSubforumWhereInput
    /**
     * Limit how many ForumSubforums to delete.
     */
    limit?: number
  }

  /**
   * ForumSubforum.threads
   */
  export type ForumSubforum$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    where?: ForumThreadWhereInput
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    cursor?: ForumThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * ForumSubforum without action
   */
  export type ForumSubforumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubforum
     */
    select?: ForumSubforumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubforum
     */
    omit?: ForumSubforumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubforumInclude<ExtArgs> | null
  }


  /**
   * Model ForumThread
   */

  export type AggregateForumThread = {
    _count: ForumThreadCountAggregateOutputType | null
    _min: ForumThreadMinAggregateOutputType | null
    _max: ForumThreadMaxAggregateOutputType | null
  }

  export type ForumThreadMinAggregateOutputType = {
    id: string | null
    subforumId: string | null
    authorId: string | null
    title: string | null
    pinned: boolean | null
    locked: boolean | null
    lastPostAt: Date | null
    lastPostById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumThreadMaxAggregateOutputType = {
    id: string | null
    subforumId: string | null
    authorId: string | null
    title: string | null
    pinned: boolean | null
    locked: boolean | null
    lastPostAt: Date | null
    lastPostById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumThreadCountAggregateOutputType = {
    id: number
    subforumId: number
    authorId: number
    title: number
    pinned: number
    locked: number
    lastPostAt: number
    lastPostById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ForumThreadMinAggregateInputType = {
    id?: true
    subforumId?: true
    authorId?: true
    title?: true
    pinned?: true
    locked?: true
    lastPostAt?: true
    lastPostById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumThreadMaxAggregateInputType = {
    id?: true
    subforumId?: true
    authorId?: true
    title?: true
    pinned?: true
    locked?: true
    lastPostAt?: true
    lastPostById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumThreadCountAggregateInputType = {
    id?: true
    subforumId?: true
    authorId?: true
    title?: true
    pinned?: true
    locked?: true
    lastPostAt?: true
    lastPostById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForumThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThread to aggregate.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumThreads
    **/
    _count?: true | ForumThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumThreadMaxAggregateInputType
  }

  export type GetForumThreadAggregateType<T extends ForumThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateForumThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumThread[P]>
      : GetScalarType<T[P], AggregateForumThread[P]>
  }




  export type ForumThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadWhereInput
    orderBy?: ForumThreadOrderByWithAggregationInput | ForumThreadOrderByWithAggregationInput[]
    by: ForumThreadScalarFieldEnum[] | ForumThreadScalarFieldEnum
    having?: ForumThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumThreadCountAggregateInputType | true
    _min?: ForumThreadMinAggregateInputType
    _max?: ForumThreadMaxAggregateInputType
  }

  export type ForumThreadGroupByOutputType = {
    id: string
    subforumId: string
    authorId: string
    title: string
    pinned: boolean
    locked: boolean
    lastPostAt: Date
    lastPostById: string | null
    createdAt: Date
    updatedAt: Date
    _count: ForumThreadCountAggregateOutputType | null
    _min: ForumThreadMinAggregateOutputType | null
    _max: ForumThreadMaxAggregateOutputType | null
  }

  type GetForumThreadGroupByPayload<T extends ForumThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ForumThreadGroupByOutputType[P]>
        }
      >
    >


  export type ForumThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subforumId?: boolean
    authorId?: boolean
    title?: boolean
    pinned?: boolean
    locked?: boolean
    lastPostAt?: boolean
    lastPostById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subforum?: boolean | ForumSubforumDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    lastPostBy?: boolean | ForumThread$lastPostByArgs<ExtArgs>
    posts?: boolean | ForumThread$postsArgs<ExtArgs>
    _count?: boolean | ForumThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumThread"]>

  export type ForumThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subforumId?: boolean
    authorId?: boolean
    title?: boolean
    pinned?: boolean
    locked?: boolean
    lastPostAt?: boolean
    lastPostById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subforum?: boolean | ForumSubforumDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    lastPostBy?: boolean | ForumThread$lastPostByArgs<ExtArgs>
  }, ExtArgs["result"]["forumThread"]>

  export type ForumThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subforumId?: boolean
    authorId?: boolean
    title?: boolean
    pinned?: boolean
    locked?: boolean
    lastPostAt?: boolean
    lastPostById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subforum?: boolean | ForumSubforumDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    lastPostBy?: boolean | ForumThread$lastPostByArgs<ExtArgs>
  }, ExtArgs["result"]["forumThread"]>

  export type ForumThreadSelectScalar = {
    id?: boolean
    subforumId?: boolean
    authorId?: boolean
    title?: boolean
    pinned?: boolean
    locked?: boolean
    lastPostAt?: boolean
    lastPostById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ForumThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subforumId" | "authorId" | "title" | "pinned" | "locked" | "lastPostAt" | "lastPostById" | "createdAt" | "updatedAt", ExtArgs["result"]["forumThread"]>
  export type ForumThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subforum?: boolean | ForumSubforumDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    lastPostBy?: boolean | ForumThread$lastPostByArgs<ExtArgs>
    posts?: boolean | ForumThread$postsArgs<ExtArgs>
    _count?: boolean | ForumThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subforum?: boolean | ForumSubforumDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    lastPostBy?: boolean | ForumThread$lastPostByArgs<ExtArgs>
  }
  export type ForumThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subforum?: boolean | ForumSubforumDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    lastPostBy?: boolean | ForumThread$lastPostByArgs<ExtArgs>
  }

  export type $ForumThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumThread"
    objects: {
      subforum: Prisma.$ForumSubforumPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      lastPostBy: Prisma.$UserPayload<ExtArgs> | null
      posts: Prisma.$ForumPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subforumId: string
      authorId: string
      title: string
      pinned: boolean
      locked: boolean
      lastPostAt: Date
      lastPostById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forumThread"]>
    composites: {}
  }

  type ForumThreadGetPayload<S extends boolean | null | undefined | ForumThreadDefaultArgs> = $Result.GetResult<Prisma.$ForumThreadPayload, S>

  type ForumThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumThreadCountAggregateInputType | true
    }

  export interface ForumThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumThread'], meta: { name: 'ForumThread' } }
    /**
     * Find zero or one ForumThread that matches the filter.
     * @param {ForumThreadFindUniqueArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumThreadFindUniqueArgs>(args: SelectSubset<T, ForumThreadFindUniqueArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumThread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumThreadFindUniqueOrThrowArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadFindFirstArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumThreadFindFirstArgs>(args?: SelectSubset<T, ForumThreadFindFirstArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadFindFirstOrThrowArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumThreads
     * const forumThreads = await prisma.forumThread.findMany()
     * 
     * // Get first 10 ForumThreads
     * const forumThreads = await prisma.forumThread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumThreadWithIdOnly = await prisma.forumThread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumThreadFindManyArgs>(args?: SelectSubset<T, ForumThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumThread.
     * @param {ForumThreadCreateArgs} args - Arguments to create a ForumThread.
     * @example
     * // Create one ForumThread
     * const ForumThread = await prisma.forumThread.create({
     *   data: {
     *     // ... data to create a ForumThread
     *   }
     * })
     * 
     */
    create<T extends ForumThreadCreateArgs>(args: SelectSubset<T, ForumThreadCreateArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumThreads.
     * @param {ForumThreadCreateManyArgs} args - Arguments to create many ForumThreads.
     * @example
     * // Create many ForumThreads
     * const forumThread = await prisma.forumThread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumThreadCreateManyArgs>(args?: SelectSubset<T, ForumThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumThreads and returns the data saved in the database.
     * @param {ForumThreadCreateManyAndReturnArgs} args - Arguments to create many ForumThreads.
     * @example
     * // Create many ForumThreads
     * const forumThread = await prisma.forumThread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumThreads and only return the `id`
     * const forumThreadWithIdOnly = await prisma.forumThread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumThread.
     * @param {ForumThreadDeleteArgs} args - Arguments to delete one ForumThread.
     * @example
     * // Delete one ForumThread
     * const ForumThread = await prisma.forumThread.delete({
     *   where: {
     *     // ... filter to delete one ForumThread
     *   }
     * })
     * 
     */
    delete<T extends ForumThreadDeleteArgs>(args: SelectSubset<T, ForumThreadDeleteArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumThread.
     * @param {ForumThreadUpdateArgs} args - Arguments to update one ForumThread.
     * @example
     * // Update one ForumThread
     * const forumThread = await prisma.forumThread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumThreadUpdateArgs>(args: SelectSubset<T, ForumThreadUpdateArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumThreads.
     * @param {ForumThreadDeleteManyArgs} args - Arguments to filter ForumThreads to delete.
     * @example
     * // Delete a few ForumThreads
     * const { count } = await prisma.forumThread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumThreadDeleteManyArgs>(args?: SelectSubset<T, ForumThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumThreads
     * const forumThread = await prisma.forumThread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumThreadUpdateManyArgs>(args: SelectSubset<T, ForumThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreads and returns the data updated in the database.
     * @param {ForumThreadUpdateManyAndReturnArgs} args - Arguments to update many ForumThreads.
     * @example
     * // Update many ForumThreads
     * const forumThread = await prisma.forumThread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumThreads and only return the `id`
     * const forumThreadWithIdOnly = await prisma.forumThread.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumThread.
     * @param {ForumThreadUpsertArgs} args - Arguments to update or create a ForumThread.
     * @example
     * // Update or create a ForumThread
     * const forumThread = await prisma.forumThread.upsert({
     *   create: {
     *     // ... data to create a ForumThread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumThread we want to update
     *   }
     * })
     */
    upsert<T extends ForumThreadUpsertArgs>(args: SelectSubset<T, ForumThreadUpsertArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadCountArgs} args - Arguments to filter ForumThreads to count.
     * @example
     * // Count the number of ForumThreads
     * const count = await prisma.forumThread.count({
     *   where: {
     *     // ... the filter for the ForumThreads we want to count
     *   }
     * })
    **/
    count<T extends ForumThreadCountArgs>(
      args?: Subset<T, ForumThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumThreadAggregateArgs>(args: Subset<T, ForumThreadAggregateArgs>): Prisma.PrismaPromise<GetForumThreadAggregateType<T>>

    /**
     * Group by ForumThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadGroupByArgs} args - Group by arguments.
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
      T extends ForumThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumThreadGroupByArgs['orderBy'] }
        : { orderBy?: ForumThreadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumThread model
   */
  readonly fields: ForumThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumThread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subforum<T extends ForumSubforumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumSubforumDefaultArgs<ExtArgs>>): Prisma__ForumSubforumClient<$Result.GetResult<Prisma.$ForumSubforumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastPostBy<T extends ForumThread$lastPostByArgs<ExtArgs> = {}>(args?: Subset<T, ForumThread$lastPostByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends ForumThread$postsArgs<ExtArgs> = {}>(args?: Subset<T, ForumThread$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ForumThread model
   */
  interface ForumThreadFieldRefs {
    readonly id: FieldRef<"ForumThread", 'String'>
    readonly subforumId: FieldRef<"ForumThread", 'String'>
    readonly authorId: FieldRef<"ForumThread", 'String'>
    readonly title: FieldRef<"ForumThread", 'String'>
    readonly pinned: FieldRef<"ForumThread", 'Boolean'>
    readonly locked: FieldRef<"ForumThread", 'Boolean'>
    readonly lastPostAt: FieldRef<"ForumThread", 'DateTime'>
    readonly lastPostById: FieldRef<"ForumThread", 'String'>
    readonly createdAt: FieldRef<"ForumThread", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumThread", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumThread findUnique
   */
  export type ForumThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread findUniqueOrThrow
   */
  export type ForumThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread findFirst
   */
  export type ForumThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreads.
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreads.
     */
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * ForumThread findFirstOrThrow
   */
  export type ForumThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreads.
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreads.
     */
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * ForumThread findMany
   */
  export type ForumThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreads to fetch.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumThreads.
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * ForumThread create
   */
  export type ForumThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumThread.
     */
    data: XOR<ForumThreadCreateInput, ForumThreadUncheckedCreateInput>
  }

  /**
   * ForumThread createMany
   */
  export type ForumThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumThreads.
     */
    data: ForumThreadCreateManyInput | ForumThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumThread createManyAndReturn
   */
  export type ForumThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * The data used to create many ForumThreads.
     */
    data: ForumThreadCreateManyInput | ForumThreadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThread update
   */
  export type ForumThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumThread.
     */
    data: XOR<ForumThreadUpdateInput, ForumThreadUncheckedUpdateInput>
    /**
     * Choose, which ForumThread to update.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread updateMany
   */
  export type ForumThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumThreads.
     */
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreads to update
     */
    where?: ForumThreadWhereInput
    /**
     * Limit how many ForumThreads to update.
     */
    limit?: number
  }

  /**
   * ForumThread updateManyAndReturn
   */
  export type ForumThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * The data used to update ForumThreads.
     */
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreads to update
     */
    where?: ForumThreadWhereInput
    /**
     * Limit how many ForumThreads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThread upsert
   */
  export type ForumThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumThread to update in case it exists.
     */
    where: ForumThreadWhereUniqueInput
    /**
     * In case the ForumThread found by the `where` argument doesn't exist, create a new ForumThread with this data.
     */
    create: XOR<ForumThreadCreateInput, ForumThreadUncheckedCreateInput>
    /**
     * In case the ForumThread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumThreadUpdateInput, ForumThreadUncheckedUpdateInput>
  }

  /**
   * ForumThread delete
   */
  export type ForumThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter which ForumThread to delete.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread deleteMany
   */
  export type ForumThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThreads to delete
     */
    where?: ForumThreadWhereInput
    /**
     * Limit how many ForumThreads to delete.
     */
    limit?: number
  }

  /**
   * ForumThread.lastPostBy
   */
  export type ForumThread$lastPostByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ForumThread.posts
   */
  export type ForumThread$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    cursor?: ForumPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumThread without action
   */
  export type ForumThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
  }


  /**
   * Model ForumPost
   */

  export type AggregateForumPost = {
    _count: ForumPostCountAggregateOutputType | null
    _avg: ForumPostAvgAggregateOutputType | null
    _sum: ForumPostSumAggregateOutputType | null
    _min: ForumPostMinAggregateOutputType | null
    _max: ForumPostMaxAggregateOutputType | null
  }

  export type ForumPostAvgAggregateOutputType = {
    editCount: number | null
  }

  export type ForumPostSumAggregateOutputType = {
    editCount: number | null
  }

  export type ForumPostMinAggregateOutputType = {
    id: string | null
    threadId: string | null
    authorId: string | null
    content: string | null
    editedAt: Date | null
    editCount: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedById: string | null
    deletedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumPostMaxAggregateOutputType = {
    id: string | null
    threadId: string | null
    authorId: string | null
    content: string | null
    editedAt: Date | null
    editCount: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    deletedById: string | null
    deletedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumPostCountAggregateOutputType = {
    id: number
    threadId: number
    authorId: number
    content: number
    editedAt: number
    editCount: number
    isDeleted: number
    deletedAt: number
    deletedById: number
    deletedReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ForumPostAvgAggregateInputType = {
    editCount?: true
  }

  export type ForumPostSumAggregateInputType = {
    editCount?: true
  }

  export type ForumPostMinAggregateInputType = {
    id?: true
    threadId?: true
    authorId?: true
    content?: true
    editedAt?: true
    editCount?: true
    isDeleted?: true
    deletedAt?: true
    deletedById?: true
    deletedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumPostMaxAggregateInputType = {
    id?: true
    threadId?: true
    authorId?: true
    content?: true
    editedAt?: true
    editCount?: true
    isDeleted?: true
    deletedAt?: true
    deletedById?: true
    deletedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumPostCountAggregateInputType = {
    id?: true
    threadId?: true
    authorId?: true
    content?: true
    editedAt?: true
    editCount?: true
    isDeleted?: true
    deletedAt?: true
    deletedById?: true
    deletedReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForumPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumPost to aggregate.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumPosts
    **/
    _count?: true | ForumPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumPostMaxAggregateInputType
  }

  export type GetForumPostAggregateType<T extends ForumPostAggregateArgs> = {
        [P in keyof T & keyof AggregateForumPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumPost[P]>
      : GetScalarType<T[P], AggregateForumPost[P]>
  }




  export type ForumPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithAggregationInput | ForumPostOrderByWithAggregationInput[]
    by: ForumPostScalarFieldEnum[] | ForumPostScalarFieldEnum
    having?: ForumPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumPostCountAggregateInputType | true
    _avg?: ForumPostAvgAggregateInputType
    _sum?: ForumPostSumAggregateInputType
    _min?: ForumPostMinAggregateInputType
    _max?: ForumPostMaxAggregateInputType
  }

  export type ForumPostGroupByOutputType = {
    id: string
    threadId: string
    authorId: string
    content: string
    editedAt: Date | null
    editCount: number
    isDeleted: boolean
    deletedAt: Date | null
    deletedById: string | null
    deletedReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: ForumPostCountAggregateOutputType | null
    _avg: ForumPostAvgAggregateOutputType | null
    _sum: ForumPostSumAggregateOutputType | null
    _min: ForumPostMinAggregateOutputType | null
    _max: ForumPostMaxAggregateOutputType | null
  }

  type GetForumPostGroupByPayload<T extends ForumPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumPostGroupByOutputType[P]>
            : GetScalarType<T[P], ForumPostGroupByOutputType[P]>
        }
      >
    >


  export type ForumPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    authorId?: boolean
    content?: boolean
    editedAt?: boolean
    editCount?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedById?: boolean
    deletedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | ForumPost$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["forumPost"]>

  export type ForumPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    authorId?: boolean
    content?: boolean
    editedAt?: boolean
    editCount?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedById?: boolean
    deletedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | ForumPost$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["forumPost"]>

  export type ForumPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    authorId?: boolean
    content?: boolean
    editedAt?: boolean
    editCount?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedById?: boolean
    deletedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | ForumPost$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["forumPost"]>

  export type ForumPostSelectScalar = {
    id?: boolean
    threadId?: boolean
    authorId?: boolean
    content?: boolean
    editedAt?: boolean
    editCount?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    deletedById?: boolean
    deletedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ForumPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "threadId" | "authorId" | "content" | "editedAt" | "editCount" | "isDeleted" | "deletedAt" | "deletedById" | "deletedReason" | "createdAt" | "updatedAt", ExtArgs["result"]["forumPost"]>
  export type ForumPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | ForumPost$deletedByArgs<ExtArgs>
  }
  export type ForumPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | ForumPost$deletedByArgs<ExtArgs>
  }
  export type ForumPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | ForumPost$deletedByArgs<ExtArgs>
  }

  export type $ForumPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumPost"
    objects: {
      thread: Prisma.$ForumThreadPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      deletedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      threadId: string
      authorId: string
      content: string
      editedAt: Date | null
      editCount: number
      isDeleted: boolean
      deletedAt: Date | null
      deletedById: string | null
      deletedReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forumPost"]>
    composites: {}
  }

  type ForumPostGetPayload<S extends boolean | null | undefined | ForumPostDefaultArgs> = $Result.GetResult<Prisma.$ForumPostPayload, S>

  type ForumPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumPostCountAggregateInputType | true
    }

  export interface ForumPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumPost'], meta: { name: 'ForumPost' } }
    /**
     * Find zero or one ForumPost that matches the filter.
     * @param {ForumPostFindUniqueArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumPostFindUniqueArgs>(args: SelectSubset<T, ForumPostFindUniqueArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumPostFindUniqueOrThrowArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindFirstArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumPostFindFirstArgs>(args?: SelectSubset<T, ForumPostFindFirstArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindFirstOrThrowArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumPosts
     * const forumPosts = await prisma.forumPost.findMany()
     * 
     * // Get first 10 ForumPosts
     * const forumPosts = await prisma.forumPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumPostWithIdOnly = await prisma.forumPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumPostFindManyArgs>(args?: SelectSubset<T, ForumPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumPost.
     * @param {ForumPostCreateArgs} args - Arguments to create a ForumPost.
     * @example
     * // Create one ForumPost
     * const ForumPost = await prisma.forumPost.create({
     *   data: {
     *     // ... data to create a ForumPost
     *   }
     * })
     * 
     */
    create<T extends ForumPostCreateArgs>(args: SelectSubset<T, ForumPostCreateArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumPosts.
     * @param {ForumPostCreateManyArgs} args - Arguments to create many ForumPosts.
     * @example
     * // Create many ForumPosts
     * const forumPost = await prisma.forumPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumPostCreateManyArgs>(args?: SelectSubset<T, ForumPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumPosts and returns the data saved in the database.
     * @param {ForumPostCreateManyAndReturnArgs} args - Arguments to create many ForumPosts.
     * @example
     * // Create many ForumPosts
     * const forumPost = await prisma.forumPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumPosts and only return the `id`
     * const forumPostWithIdOnly = await prisma.forumPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumPostCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumPost.
     * @param {ForumPostDeleteArgs} args - Arguments to delete one ForumPost.
     * @example
     * // Delete one ForumPost
     * const ForumPost = await prisma.forumPost.delete({
     *   where: {
     *     // ... filter to delete one ForumPost
     *   }
     * })
     * 
     */
    delete<T extends ForumPostDeleteArgs>(args: SelectSubset<T, ForumPostDeleteArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumPost.
     * @param {ForumPostUpdateArgs} args - Arguments to update one ForumPost.
     * @example
     * // Update one ForumPost
     * const forumPost = await prisma.forumPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumPostUpdateArgs>(args: SelectSubset<T, ForumPostUpdateArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumPosts.
     * @param {ForumPostDeleteManyArgs} args - Arguments to filter ForumPosts to delete.
     * @example
     * // Delete a few ForumPosts
     * const { count } = await prisma.forumPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumPostDeleteManyArgs>(args?: SelectSubset<T, ForumPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumPosts
     * const forumPost = await prisma.forumPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumPostUpdateManyArgs>(args: SelectSubset<T, ForumPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumPosts and returns the data updated in the database.
     * @param {ForumPostUpdateManyAndReturnArgs} args - Arguments to update many ForumPosts.
     * @example
     * // Update many ForumPosts
     * const forumPost = await prisma.forumPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumPosts and only return the `id`
     * const forumPostWithIdOnly = await prisma.forumPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumPostUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumPost.
     * @param {ForumPostUpsertArgs} args - Arguments to update or create a ForumPost.
     * @example
     * // Update or create a ForumPost
     * const forumPost = await prisma.forumPost.upsert({
     *   create: {
     *     // ... data to create a ForumPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumPost we want to update
     *   }
     * })
     */
    upsert<T extends ForumPostUpsertArgs>(args: SelectSubset<T, ForumPostUpsertArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostCountArgs} args - Arguments to filter ForumPosts to count.
     * @example
     * // Count the number of ForumPosts
     * const count = await prisma.forumPost.count({
     *   where: {
     *     // ... the filter for the ForumPosts we want to count
     *   }
     * })
    **/
    count<T extends ForumPostCountArgs>(
      args?: Subset<T, ForumPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumPostAggregateArgs>(args: Subset<T, ForumPostAggregateArgs>): Prisma.PrismaPromise<GetForumPostAggregateType<T>>

    /**
     * Group by ForumPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostGroupByArgs} args - Group by arguments.
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
      T extends ForumPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumPostGroupByArgs['orderBy'] }
        : { orderBy?: ForumPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumPost model
   */
  readonly fields: ForumPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thread<T extends ForumThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumThreadDefaultArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deletedBy<T extends ForumPost$deletedByArgs<ExtArgs> = {}>(args?: Subset<T, ForumPost$deletedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ForumPost model
   */
  interface ForumPostFieldRefs {
    readonly id: FieldRef<"ForumPost", 'String'>
    readonly threadId: FieldRef<"ForumPost", 'String'>
    readonly authorId: FieldRef<"ForumPost", 'String'>
    readonly content: FieldRef<"ForumPost", 'String'>
    readonly editedAt: FieldRef<"ForumPost", 'DateTime'>
    readonly editCount: FieldRef<"ForumPost", 'Int'>
    readonly isDeleted: FieldRef<"ForumPost", 'Boolean'>
    readonly deletedAt: FieldRef<"ForumPost", 'DateTime'>
    readonly deletedById: FieldRef<"ForumPost", 'String'>
    readonly deletedReason: FieldRef<"ForumPost", 'String'>
    readonly createdAt: FieldRef<"ForumPost", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumPost findUnique
   */
  export type ForumPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost findUniqueOrThrow
   */
  export type ForumPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost findFirst
   */
  export type ForumPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumPosts.
     */
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost findFirstOrThrow
   */
  export type ForumPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumPosts.
     */
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost findMany
   */
  export type ForumPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPosts to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost create
   */
  export type ForumPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumPost.
     */
    data: XOR<ForumPostCreateInput, ForumPostUncheckedCreateInput>
  }

  /**
   * ForumPost createMany
   */
  export type ForumPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumPosts.
     */
    data: ForumPostCreateManyInput | ForumPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumPost createManyAndReturn
   */
  export type ForumPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * The data used to create many ForumPosts.
     */
    data: ForumPostCreateManyInput | ForumPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumPost update
   */
  export type ForumPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumPost.
     */
    data: XOR<ForumPostUpdateInput, ForumPostUncheckedUpdateInput>
    /**
     * Choose, which ForumPost to update.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost updateMany
   */
  export type ForumPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumPosts.
     */
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyInput>
    /**
     * Filter which ForumPosts to update
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to update.
     */
    limit?: number
  }

  /**
   * ForumPost updateManyAndReturn
   */
  export type ForumPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * The data used to update ForumPosts.
     */
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyInput>
    /**
     * Filter which ForumPosts to update
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumPost upsert
   */
  export type ForumPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumPost to update in case it exists.
     */
    where: ForumPostWhereUniqueInput
    /**
     * In case the ForumPost found by the `where` argument doesn't exist, create a new ForumPost with this data.
     */
    create: XOR<ForumPostCreateInput, ForumPostUncheckedCreateInput>
    /**
     * In case the ForumPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumPostUpdateInput, ForumPostUncheckedUpdateInput>
  }

  /**
   * ForumPost delete
   */
  export type ForumPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter which ForumPost to delete.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost deleteMany
   */
  export type ForumPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumPosts to delete
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to delete.
     */
    limit?: number
  }

  /**
   * ForumPost.deletedBy
   */
  export type ForumPost$deletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ForumPost without action
   */
  export type ForumPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    bio: 'bio',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConsoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ConsoleScalarFieldEnum = (typeof ConsoleScalarFieldEnum)[keyof typeof ConsoleScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    coverImage: 'coverImage',
    developer: 'developer',
    publisher: 'publisher',
    releaseDate: 'releaseDate',
    consoleId: 'consoleId',
    screenshots: 'screenshots',
    createdAt: 'createdAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    gameId: 'gameId'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    userGameId: 'userGameId',
    achievementId: 'achievementId',
    earnedAt: 'earnedAt'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


  export const UserGameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    owned: 'owned'
  };

  export type UserGameScalarFieldEnum = (typeof UserGameScalarFieldEnum)[keyof typeof UserGameScalarFieldEnum]


  export const ForumCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ForumCategoryScalarFieldEnum = (typeof ForumCategoryScalarFieldEnum)[keyof typeof ForumCategoryScalarFieldEnum]


  export const ForumSubforumScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ForumSubforumScalarFieldEnum = (typeof ForumSubforumScalarFieldEnum)[keyof typeof ForumSubforumScalarFieldEnum]


  export const ForumThreadScalarFieldEnum: {
    id: 'id',
    subforumId: 'subforumId',
    authorId: 'authorId',
    title: 'title',
    pinned: 'pinned',
    locked: 'locked',
    lastPostAt: 'lastPostAt',
    lastPostById: 'lastPostById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ForumThreadScalarFieldEnum = (typeof ForumThreadScalarFieldEnum)[keyof typeof ForumThreadScalarFieldEnum]


  export const ForumPostScalarFieldEnum: {
    id: 'id',
    threadId: 'threadId',
    authorId: 'authorId',
    content: 'content',
    editedAt: 'editedAt',
    editCount: 'editCount',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    deletedById: 'deletedById',
    deletedReason: 'deletedReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ForumPostScalarFieldEnum = (typeof ForumPostScalarFieldEnum)[keyof typeof ForumPostScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    games?: UserGameListRelationFilter
    posts?: ForumPostListRelationFilter
    threadsAuthored?: ForumThreadListRelationFilter
    lastPostThreads?: ForumThreadListRelationFilter
    postsDeleted?: ForumPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    games?: UserGameOrderByRelationAggregateInput
    posts?: ForumPostOrderByRelationAggregateInput
    threadsAuthored?: ForumThreadOrderByRelationAggregateInput
    lastPostThreads?: ForumThreadOrderByRelationAggregateInput
    postsDeleted?: ForumPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    games?: UserGameListRelationFilter
    posts?: ForumPostListRelationFilter
    threadsAuthored?: ForumThreadListRelationFilter
    lastPostThreads?: ForumThreadListRelationFilter
    postsDeleted?: ForumPostListRelationFilter
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ConsoleWhereInput = {
    AND?: ConsoleWhereInput | ConsoleWhereInput[]
    OR?: ConsoleWhereInput[]
    NOT?: ConsoleWhereInput | ConsoleWhereInput[]
    id?: StringFilter<"Console"> | string
    name?: StringFilter<"Console"> | string
    games?: GameListRelationFilter
  }

  export type ConsoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    games?: GameOrderByRelationAggregateInput
  }

  export type ConsoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ConsoleWhereInput | ConsoleWhereInput[]
    OR?: ConsoleWhereInput[]
    NOT?: ConsoleWhereInput | ConsoleWhereInput[]
    games?: GameListRelationFilter
  }, "id" | "name">

  export type ConsoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ConsoleCountOrderByAggregateInput
    _max?: ConsoleMaxOrderByAggregateInput
    _min?: ConsoleMinOrderByAggregateInput
  }

  export type ConsoleScalarWhereWithAggregatesInput = {
    AND?: ConsoleScalarWhereWithAggregatesInput | ConsoleScalarWhereWithAggregatesInput[]
    OR?: ConsoleScalarWhereWithAggregatesInput[]
    NOT?: ConsoleScalarWhereWithAggregatesInput | ConsoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Console"> | string
    name?: StringWithAggregatesFilter<"Console"> | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    slug?: StringFilter<"Game"> | string
    title?: StringFilter<"Game"> | string
    description?: StringFilter<"Game"> | string
    coverImage?: StringFilter<"Game"> | string
    developer?: StringFilter<"Game"> | string
    publisher?: StringFilter<"Game"> | string
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    consoleId?: StringNullableFilter<"Game"> | string | null
    screenshots?: StringNullableListFilter<"Game">
    createdAt?: DateTimeFilter<"Game"> | Date | string
    console?: XOR<ConsoleNullableScalarRelationFilter, ConsoleWhereInput> | null
    achievements?: AchievementListRelationFilter
    users?: UserGameListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    consoleId?: SortOrderInput | SortOrder
    screenshots?: SortOrder
    createdAt?: SortOrder
    console?: ConsoleOrderByWithRelationInput
    achievements?: AchievementOrderByRelationAggregateInput
    users?: UserGameOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    title?: StringFilter<"Game"> | string
    description?: StringFilter<"Game"> | string
    coverImage?: StringFilter<"Game"> | string
    developer?: StringFilter<"Game"> | string
    publisher?: StringFilter<"Game"> | string
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    consoleId?: StringNullableFilter<"Game"> | string | null
    screenshots?: StringNullableListFilter<"Game">
    createdAt?: DateTimeFilter<"Game"> | Date | string
    console?: XOR<ConsoleNullableScalarRelationFilter, ConsoleWhereInput> | null
    achievements?: AchievementListRelationFilter
    users?: UserGameListRelationFilter
  }, "id" | "slug">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    consoleId?: SortOrderInput | SortOrder
    screenshots?: SortOrder
    createdAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    slug?: StringWithAggregatesFilter<"Game"> | string
    title?: StringWithAggregatesFilter<"Game"> | string
    description?: StringWithAggregatesFilter<"Game"> | string
    coverImage?: StringWithAggregatesFilter<"Game"> | string
    developer?: StringWithAggregatesFilter<"Game"> | string
    publisher?: StringWithAggregatesFilter<"Game"> | string
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    consoleId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    screenshots?: StringNullableListFilter<"Game">
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    title?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    image?: StringNullableFilter<"Achievement"> | string | null
    gameId?: StringFilter<"Achievement"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    UserAchievement?: UserAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
    UserAchievement?: UserAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    title?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    image?: StringNullableFilter<"Achievement"> | string | null
    gameId?: StringFilter<"Achievement"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    UserAchievement?: UserAchievementListRelationFilter
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    gameId?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    title?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    image?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    gameId?: StringWithAggregatesFilter<"Achievement"> | string
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userGameId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    earnedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    userGame?: XOR<UserGameScalarRelationFilter, UserGameWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userGameId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    userGame?: UserGameOrderByWithRelationInput
    achievement?: AchievementOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userGameId_achievementId?: UserAchievementUserGameIdAchievementIdCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    userGameId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    earnedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    userGame?: XOR<UserGameScalarRelationFilter, UserGameWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }, "id" | "userGameId_achievementId">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userGameId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAchievement"> | string
    userGameId?: StringWithAggregatesFilter<"UserAchievement"> | string
    achievementId?: StringWithAggregatesFilter<"UserAchievement"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
  }

  export type UserGameWhereInput = {
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    id?: StringFilter<"UserGame"> | string
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    owned?: BoolFilter<"UserGame"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    achievements?: UserAchievementListRelationFilter
  }

  export type UserGameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    owned?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
    achievements?: UserAchievementOrderByRelationAggregateInput
  }

  export type UserGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_gameId?: UserGameUserIdGameIdCompoundUniqueInput
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    owned?: BoolFilter<"UserGame"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    achievements?: UserAchievementListRelationFilter
  }, "id" | "userId_gameId">

  export type UserGameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    owned?: SortOrder
    _count?: UserGameCountOrderByAggregateInput
    _max?: UserGameMaxOrderByAggregateInput
    _min?: UserGameMinOrderByAggregateInput
  }

  export type UserGameScalarWhereWithAggregatesInput = {
    AND?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    OR?: UserGameScalarWhereWithAggregatesInput[]
    NOT?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGame"> | string
    userId?: StringWithAggregatesFilter<"UserGame"> | string
    gameId?: StringWithAggregatesFilter<"UserGame"> | string
    owned?: BoolWithAggregatesFilter<"UserGame"> | boolean
  }

  export type ForumCategoryWhereInput = {
    AND?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
    OR?: ForumCategoryWhereInput[]
    NOT?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
    id?: StringFilter<"ForumCategory"> | string
    name?: StringFilter<"ForumCategory"> | string
    slug?: StringFilter<"ForumCategory"> | string
    position?: IntFilter<"ForumCategory"> | number
    createdAt?: DateTimeFilter<"ForumCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ForumCategory"> | Date | string
    subforums?: ForumSubforumListRelationFilter
  }

  export type ForumCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subforums?: ForumSubforumOrderByRelationAggregateInput
  }

  export type ForumCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
    OR?: ForumCategoryWhereInput[]
    NOT?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
    position?: IntFilter<"ForumCategory"> | number
    createdAt?: DateTimeFilter<"ForumCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ForumCategory"> | Date | string
    subforums?: ForumSubforumListRelationFilter
  }, "id" | "name" | "slug">

  export type ForumCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ForumCategoryCountOrderByAggregateInput
    _avg?: ForumCategoryAvgOrderByAggregateInput
    _max?: ForumCategoryMaxOrderByAggregateInput
    _min?: ForumCategoryMinOrderByAggregateInput
    _sum?: ForumCategorySumOrderByAggregateInput
  }

  export type ForumCategoryScalarWhereWithAggregatesInput = {
    AND?: ForumCategoryScalarWhereWithAggregatesInput | ForumCategoryScalarWhereWithAggregatesInput[]
    OR?: ForumCategoryScalarWhereWithAggregatesInput[]
    NOT?: ForumCategoryScalarWhereWithAggregatesInput | ForumCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumCategory"> | string
    name?: StringWithAggregatesFilter<"ForumCategory"> | string
    slug?: StringWithAggregatesFilter<"ForumCategory"> | string
    position?: IntWithAggregatesFilter<"ForumCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ForumCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumCategory"> | Date | string
  }

  export type ForumSubforumWhereInput = {
    AND?: ForumSubforumWhereInput | ForumSubforumWhereInput[]
    OR?: ForumSubforumWhereInput[]
    NOT?: ForumSubforumWhereInput | ForumSubforumWhereInput[]
    id?: StringFilter<"ForumSubforum"> | string
    categoryId?: StringFilter<"ForumSubforum"> | string
    name?: StringFilter<"ForumSubforum"> | string
    slug?: StringFilter<"ForumSubforum"> | string
    description?: StringNullableFilter<"ForumSubforum"> | string | null
    position?: IntFilter<"ForumSubforum"> | number
    createdAt?: DateTimeFilter<"ForumSubforum"> | Date | string
    updatedAt?: DateTimeFilter<"ForumSubforum"> | Date | string
    category?: XOR<ForumCategoryScalarRelationFilter, ForumCategoryWhereInput>
    threads?: ForumThreadListRelationFilter
  }

  export type ForumSubforumOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: ForumCategoryOrderByWithRelationInput
    threads?: ForumThreadOrderByRelationAggregateInput
  }

  export type ForumSubforumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_slug?: ForumSubforumCategoryIdSlugCompoundUniqueInput
    AND?: ForumSubforumWhereInput | ForumSubforumWhereInput[]
    OR?: ForumSubforumWhereInput[]
    NOT?: ForumSubforumWhereInput | ForumSubforumWhereInput[]
    categoryId?: StringFilter<"ForumSubforum"> | string
    name?: StringFilter<"ForumSubforum"> | string
    slug?: StringFilter<"ForumSubforum"> | string
    description?: StringNullableFilter<"ForumSubforum"> | string | null
    position?: IntFilter<"ForumSubforum"> | number
    createdAt?: DateTimeFilter<"ForumSubforum"> | Date | string
    updatedAt?: DateTimeFilter<"ForumSubforum"> | Date | string
    category?: XOR<ForumCategoryScalarRelationFilter, ForumCategoryWhereInput>
    threads?: ForumThreadListRelationFilter
  }, "id" | "categoryId_slug">

  export type ForumSubforumOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ForumSubforumCountOrderByAggregateInput
    _avg?: ForumSubforumAvgOrderByAggregateInput
    _max?: ForumSubforumMaxOrderByAggregateInput
    _min?: ForumSubforumMinOrderByAggregateInput
    _sum?: ForumSubforumSumOrderByAggregateInput
  }

  export type ForumSubforumScalarWhereWithAggregatesInput = {
    AND?: ForumSubforumScalarWhereWithAggregatesInput | ForumSubforumScalarWhereWithAggregatesInput[]
    OR?: ForumSubforumScalarWhereWithAggregatesInput[]
    NOT?: ForumSubforumScalarWhereWithAggregatesInput | ForumSubforumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumSubforum"> | string
    categoryId?: StringWithAggregatesFilter<"ForumSubforum"> | string
    name?: StringWithAggregatesFilter<"ForumSubforum"> | string
    slug?: StringWithAggregatesFilter<"ForumSubforum"> | string
    description?: StringNullableWithAggregatesFilter<"ForumSubforum"> | string | null
    position?: IntWithAggregatesFilter<"ForumSubforum"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ForumSubforum"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumSubforum"> | Date | string
  }

  export type ForumThreadWhereInput = {
    AND?: ForumThreadWhereInput | ForumThreadWhereInput[]
    OR?: ForumThreadWhereInput[]
    NOT?: ForumThreadWhereInput | ForumThreadWhereInput[]
    id?: StringFilter<"ForumThread"> | string
    subforumId?: StringFilter<"ForumThread"> | string
    authorId?: StringFilter<"ForumThread"> | string
    title?: StringFilter<"ForumThread"> | string
    pinned?: BoolFilter<"ForumThread"> | boolean
    locked?: BoolFilter<"ForumThread"> | boolean
    lastPostAt?: DateTimeFilter<"ForumThread"> | Date | string
    lastPostById?: StringNullableFilter<"ForumThread"> | string | null
    createdAt?: DateTimeFilter<"ForumThread"> | Date | string
    updatedAt?: DateTimeFilter<"ForumThread"> | Date | string
    subforum?: XOR<ForumSubforumScalarRelationFilter, ForumSubforumWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastPostBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: ForumPostListRelationFilter
  }

  export type ForumThreadOrderByWithRelationInput = {
    id?: SortOrder
    subforumId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    lastPostAt?: SortOrder
    lastPostById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subforum?: ForumSubforumOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    lastPostBy?: UserOrderByWithRelationInput
    posts?: ForumPostOrderByRelationAggregateInput
  }

  export type ForumThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumThreadWhereInput | ForumThreadWhereInput[]
    OR?: ForumThreadWhereInput[]
    NOT?: ForumThreadWhereInput | ForumThreadWhereInput[]
    subforumId?: StringFilter<"ForumThread"> | string
    authorId?: StringFilter<"ForumThread"> | string
    title?: StringFilter<"ForumThread"> | string
    pinned?: BoolFilter<"ForumThread"> | boolean
    locked?: BoolFilter<"ForumThread"> | boolean
    lastPostAt?: DateTimeFilter<"ForumThread"> | Date | string
    lastPostById?: StringNullableFilter<"ForumThread"> | string | null
    createdAt?: DateTimeFilter<"ForumThread"> | Date | string
    updatedAt?: DateTimeFilter<"ForumThread"> | Date | string
    subforum?: XOR<ForumSubforumScalarRelationFilter, ForumSubforumWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastPostBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: ForumPostListRelationFilter
  }, "id">

  export type ForumThreadOrderByWithAggregationInput = {
    id?: SortOrder
    subforumId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    lastPostAt?: SortOrder
    lastPostById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ForumThreadCountOrderByAggregateInput
    _max?: ForumThreadMaxOrderByAggregateInput
    _min?: ForumThreadMinOrderByAggregateInput
  }

  export type ForumThreadScalarWhereWithAggregatesInput = {
    AND?: ForumThreadScalarWhereWithAggregatesInput | ForumThreadScalarWhereWithAggregatesInput[]
    OR?: ForumThreadScalarWhereWithAggregatesInput[]
    NOT?: ForumThreadScalarWhereWithAggregatesInput | ForumThreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumThread"> | string
    subforumId?: StringWithAggregatesFilter<"ForumThread"> | string
    authorId?: StringWithAggregatesFilter<"ForumThread"> | string
    title?: StringWithAggregatesFilter<"ForumThread"> | string
    pinned?: BoolWithAggregatesFilter<"ForumThread"> | boolean
    locked?: BoolWithAggregatesFilter<"ForumThread"> | boolean
    lastPostAt?: DateTimeWithAggregatesFilter<"ForumThread"> | Date | string
    lastPostById?: StringNullableWithAggregatesFilter<"ForumThread"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ForumThread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumThread"> | Date | string
  }

  export type ForumPostWhereInput = {
    AND?: ForumPostWhereInput | ForumPostWhereInput[]
    OR?: ForumPostWhereInput[]
    NOT?: ForumPostWhereInput | ForumPostWhereInput[]
    id?: StringFilter<"ForumPost"> | string
    threadId?: StringFilter<"ForumPost"> | string
    authorId?: StringFilter<"ForumPost"> | string
    content?: StringFilter<"ForumPost"> | string
    editedAt?: DateTimeNullableFilter<"ForumPost"> | Date | string | null
    editCount?: IntFilter<"ForumPost"> | number
    isDeleted?: BoolFilter<"ForumPost"> | boolean
    deletedAt?: DateTimeNullableFilter<"ForumPost"> | Date | string | null
    deletedById?: StringNullableFilter<"ForumPost"> | string | null
    deletedReason?: StringNullableFilter<"ForumPost"> | string | null
    createdAt?: DateTimeFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
    thread?: XOR<ForumThreadScalarRelationFilter, ForumThreadWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ForumPostOrderByWithRelationInput = {
    id?: SortOrder
    threadId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    editCount?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    deletedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thread?: ForumThreadOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    deletedBy?: UserOrderByWithRelationInput
  }

  export type ForumPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumPostWhereInput | ForumPostWhereInput[]
    OR?: ForumPostWhereInput[]
    NOT?: ForumPostWhereInput | ForumPostWhereInput[]
    threadId?: StringFilter<"ForumPost"> | string
    authorId?: StringFilter<"ForumPost"> | string
    content?: StringFilter<"ForumPost"> | string
    editedAt?: DateTimeNullableFilter<"ForumPost"> | Date | string | null
    editCount?: IntFilter<"ForumPost"> | number
    isDeleted?: BoolFilter<"ForumPost"> | boolean
    deletedAt?: DateTimeNullableFilter<"ForumPost"> | Date | string | null
    deletedById?: StringNullableFilter<"ForumPost"> | string | null
    deletedReason?: StringNullableFilter<"ForumPost"> | string | null
    createdAt?: DateTimeFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
    thread?: XOR<ForumThreadScalarRelationFilter, ForumThreadWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ForumPostOrderByWithAggregationInput = {
    id?: SortOrder
    threadId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    editCount?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    deletedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ForumPostCountOrderByAggregateInput
    _avg?: ForumPostAvgOrderByAggregateInput
    _max?: ForumPostMaxOrderByAggregateInput
    _min?: ForumPostMinOrderByAggregateInput
    _sum?: ForumPostSumOrderByAggregateInput
  }

  export type ForumPostScalarWhereWithAggregatesInput = {
    AND?: ForumPostScalarWhereWithAggregatesInput | ForumPostScalarWhereWithAggregatesInput[]
    OR?: ForumPostScalarWhereWithAggregatesInput[]
    NOT?: ForumPostScalarWhereWithAggregatesInput | ForumPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumPost"> | string
    threadId?: StringWithAggregatesFilter<"ForumPost"> | string
    authorId?: StringWithAggregatesFilter<"ForumPost"> | string
    content?: StringWithAggregatesFilter<"ForumPost"> | string
    editedAt?: DateTimeNullableWithAggregatesFilter<"ForumPost"> | Date | string | null
    editCount?: IntWithAggregatesFilter<"ForumPost"> | number
    isDeleted?: BoolWithAggregatesFilter<"ForumPost"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ForumPost"> | Date | string | null
    deletedById?: StringNullableWithAggregatesFilter<"ForumPost"> | string | null
    deletedReason?: StringNullableWithAggregatesFilter<"ForumPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumPost"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameCreateNestedManyWithoutUserInput
    posts?: ForumPostCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameUncheckedCreateNestedManyWithoutUserInput
    posts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadUncheckedCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUpdateManyWithoutUserNestedInput
    posts?: ForumPostUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    posts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUncheckedUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsoleCreateInput = {
    id?: string
    name: string
    games?: GameCreateNestedManyWithoutConsoleInput
  }

  export type ConsoleUncheckedCreateInput = {
    id?: string
    name: string
    games?: GameUncheckedCreateNestedManyWithoutConsoleInput
  }

  export type ConsoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: GameUpdateManyWithoutConsoleNestedInput
  }

  export type ConsoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: GameUncheckedUpdateManyWithoutConsoleNestedInput
  }

  export type ConsoleCreateManyInput = {
    id?: string
    name: string
  }

  export type ConsoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConsoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    console?: ConsoleCreateNestedOneWithoutGamesInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
    users?: UserGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    consoleId?: string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    users?: UserGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    console?: ConsoleUpdateOneWithoutGamesNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    users?: UserGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consoleId?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    users?: UserGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    consoleId?: string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consoleId?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    game: GameCreateNestedOneWithoutAchievementsInput
    UserAchievement?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gameId: string
    UserAchievement?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUpdateOneRequiredWithoutAchievementsNestedInput
    UserAchievement?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    UserAchievement?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gameId: string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAchievementCreateInput = {
    id?: string
    earnedAt?: Date | string
    userGame: UserGameCreateNestedOneWithoutAchievementsInput
    achievement: AchievementCreateNestedOneWithoutUserAchievementInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: string
    userGameId: string
    achievementId: string
    earnedAt?: Date | string
  }

  export type UserAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGame?: UserGameUpdateOneRequiredWithoutAchievementsNestedInput
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyInput = {
    id?: string
    userGameId: string
    achievementId: string
    earnedAt?: Date | string
  }

  export type UserAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameCreateInput = {
    id?: string
    owned?: boolean
    user: UserCreateNestedOneWithoutGamesInput
    game: GameCreateNestedOneWithoutUsersInput
    achievements?: UserAchievementCreateNestedManyWithoutUserGameInput
  }

  export type UserGameUncheckedCreateInput = {
    id?: string
    userId: string
    gameId: string
    owned?: boolean
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserGameInput
  }

  export type UserGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
    game?: GameUpdateOneRequiredWithoutUsersNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserGameNestedInput
  }

  export type UserGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserGameNestedInput
  }

  export type UserGameCreateManyInput = {
    id?: string
    userId: string
    gameId: string
    owned?: boolean
  }

  export type UserGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ForumCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subforums?: ForumSubforumCreateNestedManyWithoutCategoryInput
  }

  export type ForumCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subforums?: ForumSubforumUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ForumCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subforums?: ForumSubforumUpdateManyWithoutCategoryNestedInput
  }

  export type ForumCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subforums?: ForumSubforumUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ForumCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumSubforumCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ForumCategoryCreateNestedOneWithoutSubforumsInput
    threads?: ForumThreadCreateNestedManyWithoutSubforumInput
  }

  export type ForumSubforumUncheckedCreateInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ForumThreadUncheckedCreateNestedManyWithoutSubforumInput
  }

  export type ForumSubforumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ForumCategoryUpdateOneRequiredWithoutSubforumsNestedInput
    threads?: ForumThreadUpdateManyWithoutSubforumNestedInput
  }

  export type ForumSubforumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ForumThreadUncheckedUpdateManyWithoutSubforumNestedInput
  }

  export type ForumSubforumCreateManyInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumSubforumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumSubforumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumThreadCreateInput = {
    id?: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subforum: ForumSubforumCreateNestedOneWithoutThreadsInput
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    lastPostBy?: UserCreateNestedOneWithoutLastPostThreadsInput
    posts?: ForumPostCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadUncheckedCreateInput = {
    id?: string
    subforumId: string
    authorId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    lastPostById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: ForumPostUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subforum?: ForumSubforumUpdateOneRequiredWithoutThreadsNestedInput
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    lastPostBy?: UserUpdateOneWithoutLastPostThreadsNestedInput
    posts?: ForumPostUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subforumId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPostById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: ForumPostUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadCreateManyInput = {
    id?: string
    subforumId: string
    authorId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    lastPostById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumThreadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumThreadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subforumId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPostById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostCreateInput = {
    id?: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ForumThreadCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    deletedBy?: UserCreateNestedOneWithoutPostsDeletedInput
  }

  export type ForumPostUncheckedCreateInput = {
    id?: string
    threadId: string
    authorId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ForumThreadUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    deletedBy?: UserUpdateOneWithoutPostsDeletedNestedInput
  }

  export type ForumPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostCreateManyInput = {
    id?: string
    threadId: string
    authorId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserGameListRelationFilter = {
    every?: UserGameWhereInput
    some?: UserGameWhereInput
    none?: UserGameWhereInput
  }

  export type ForumPostListRelationFilter = {
    every?: ForumPostWhereInput
    some?: ForumPostWhereInput
    none?: ForumPostWhereInput
  }

  export type ForumThreadListRelationFilter = {
    every?: ForumThreadWhereInput
    some?: ForumThreadWhereInput
    none?: ForumThreadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ConsoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ConsoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConsoleNullableScalarRelationFilter = {
    is?: ConsoleWhereInput | null
    isNot?: ConsoleWhereInput | null
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    releaseDate?: SortOrder
    consoleId?: SortOrder
    screenshots?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    releaseDate?: SortOrder
    consoleId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    developer?: SortOrder
    publisher?: SortOrder
    releaseDate?: SortOrder
    consoleId?: SortOrder
    createdAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    gameId?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    gameId?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    gameId?: SortOrder
  }

  export type UserGameScalarRelationFilter = {
    is?: UserGameWhereInput
    isNot?: UserGameWhereInput
  }

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UserAchievementUserGameIdAchievementIdCompoundUniqueInput = {
    userGameId: string
    achievementId: string
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userGameId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userGameId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userGameId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserGameUserIdGameIdCompoundUniqueInput = {
    userId: string
    gameId: string
  }

  export type UserGameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    owned?: SortOrder
  }

  export type UserGameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    owned?: SortOrder
  }

  export type UserGameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    owned?: SortOrder
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

  export type ForumSubforumListRelationFilter = {
    every?: ForumSubforumWhereInput
    some?: ForumSubforumWhereInput
    none?: ForumSubforumWhereInput
  }

  export type ForumSubforumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumCategoryAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ForumCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumCategorySumOrderByAggregateInput = {
    position?: SortOrder
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

  export type ForumCategoryScalarRelationFilter = {
    is?: ForumCategoryWhereInput
    isNot?: ForumCategoryWhereInput
  }

  export type ForumSubforumCategoryIdSlugCompoundUniqueInput = {
    categoryId: string
    slug: string
  }

  export type ForumSubforumCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumSubforumAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ForumSubforumMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumSubforumMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumSubforumSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ForumSubforumScalarRelationFilter = {
    is?: ForumSubforumWhereInput
    isNot?: ForumSubforumWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ForumThreadCountOrderByAggregateInput = {
    id?: SortOrder
    subforumId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    lastPostAt?: SortOrder
    lastPostById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    subforumId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    lastPostAt?: SortOrder
    lastPostById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumThreadMinOrderByAggregateInput = {
    id?: SortOrder
    subforumId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    lastPostAt?: SortOrder
    lastPostById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumThreadScalarRelationFilter = {
    is?: ForumThreadWhereInput
    isNot?: ForumThreadWhereInput
  }

  export type ForumPostCountOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    editedAt?: SortOrder
    editCount?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedById?: SortOrder
    deletedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostAvgOrderByAggregateInput = {
    editCount?: SortOrder
  }

  export type ForumPostMaxOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    editedAt?: SortOrder
    editCount?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedById?: SortOrder
    deletedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostMinOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    editedAt?: SortOrder
    editCount?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    deletedById?: SortOrder
    deletedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostSumOrderByAggregateInput = {
    editCount?: SortOrder
  }

  export type UserGameCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type ForumPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type ForumThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumThreadCreateNestedManyWithoutLastPostByInput = {
    create?: XOR<ForumThreadCreateWithoutLastPostByInput, ForumThreadUncheckedCreateWithoutLastPostByInput> | ForumThreadCreateWithoutLastPostByInput[] | ForumThreadUncheckedCreateWithoutLastPostByInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutLastPostByInput | ForumThreadCreateOrConnectWithoutLastPostByInput[]
    createMany?: ForumThreadCreateManyLastPostByInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumPostCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<ForumPostCreateWithoutDeletedByInput, ForumPostUncheckedCreateWithoutDeletedByInput> | ForumPostCreateWithoutDeletedByInput[] | ForumPostUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutDeletedByInput | ForumPostCreateOrConnectWithoutDeletedByInput[]
    createMany?: ForumPostCreateManyDeletedByInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type ForumPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type ForumThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumThreadUncheckedCreateNestedManyWithoutLastPostByInput = {
    create?: XOR<ForumThreadCreateWithoutLastPostByInput, ForumThreadUncheckedCreateWithoutLastPostByInput> | ForumThreadCreateWithoutLastPostByInput[] | ForumThreadUncheckedCreateWithoutLastPostByInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutLastPostByInput | ForumThreadCreateOrConnectWithoutLastPostByInput[]
    createMany?: ForumThreadCreateManyLastPostByInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumPostUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<ForumPostCreateWithoutDeletedByInput, ForumPostUncheckedCreateWithoutDeletedByInput> | ForumPostCreateWithoutDeletedByInput[] | ForumPostUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutDeletedByInput | ForumPostCreateOrConnectWithoutDeletedByInput[]
    createMany?: ForumPostCreateManyDeletedByInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type ForumPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutAuthorInput | ForumPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutAuthorInput | ForumPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutAuthorInput | ForumPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type ForumThreadUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutAuthorInput | ForumThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutAuthorInput | ForumThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutAuthorInput | ForumThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumThreadUpdateManyWithoutLastPostByNestedInput = {
    create?: XOR<ForumThreadCreateWithoutLastPostByInput, ForumThreadUncheckedCreateWithoutLastPostByInput> | ForumThreadCreateWithoutLastPostByInput[] | ForumThreadUncheckedCreateWithoutLastPostByInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutLastPostByInput | ForumThreadCreateOrConnectWithoutLastPostByInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutLastPostByInput | ForumThreadUpsertWithWhereUniqueWithoutLastPostByInput[]
    createMany?: ForumThreadCreateManyLastPostByInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutLastPostByInput | ForumThreadUpdateWithWhereUniqueWithoutLastPostByInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutLastPostByInput | ForumThreadUpdateManyWithWhereWithoutLastPostByInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumPostUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<ForumPostCreateWithoutDeletedByInput, ForumPostUncheckedCreateWithoutDeletedByInput> | ForumPostCreateWithoutDeletedByInput[] | ForumPostUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutDeletedByInput | ForumPostCreateOrConnectWithoutDeletedByInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutDeletedByInput | ForumPostUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: ForumPostCreateManyDeletedByInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutDeletedByInput | ForumPostUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutDeletedByInput | ForumPostUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type ForumPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutAuthorInput | ForumPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutAuthorInput | ForumPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutAuthorInput | ForumPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutAuthorInput | ForumThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutAuthorInput | ForumThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutAuthorInput | ForumThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumThreadUncheckedUpdateManyWithoutLastPostByNestedInput = {
    create?: XOR<ForumThreadCreateWithoutLastPostByInput, ForumThreadUncheckedCreateWithoutLastPostByInput> | ForumThreadCreateWithoutLastPostByInput[] | ForumThreadUncheckedCreateWithoutLastPostByInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutLastPostByInput | ForumThreadCreateOrConnectWithoutLastPostByInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutLastPostByInput | ForumThreadUpsertWithWhereUniqueWithoutLastPostByInput[]
    createMany?: ForumThreadCreateManyLastPostByInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutLastPostByInput | ForumThreadUpdateWithWhereUniqueWithoutLastPostByInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutLastPostByInput | ForumThreadUpdateManyWithWhereWithoutLastPostByInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumPostUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<ForumPostCreateWithoutDeletedByInput, ForumPostUncheckedCreateWithoutDeletedByInput> | ForumPostCreateWithoutDeletedByInput[] | ForumPostUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutDeletedByInput | ForumPostCreateOrConnectWithoutDeletedByInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutDeletedByInput | ForumPostUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: ForumPostCreateManyDeletedByInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutDeletedByInput | ForumPostUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutDeletedByInput | ForumPostUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutConsoleInput = {
    create?: XOR<GameCreateWithoutConsoleInput, GameUncheckedCreateWithoutConsoleInput> | GameCreateWithoutConsoleInput[] | GameUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutConsoleInput | GameCreateOrConnectWithoutConsoleInput[]
    createMany?: GameCreateManyConsoleInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutConsoleInput = {
    create?: XOR<GameCreateWithoutConsoleInput, GameUncheckedCreateWithoutConsoleInput> | GameCreateWithoutConsoleInput[] | GameUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutConsoleInput | GameCreateOrConnectWithoutConsoleInput[]
    createMany?: GameCreateManyConsoleInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutConsoleNestedInput = {
    create?: XOR<GameCreateWithoutConsoleInput, GameUncheckedCreateWithoutConsoleInput> | GameCreateWithoutConsoleInput[] | GameUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutConsoleInput | GameCreateOrConnectWithoutConsoleInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutConsoleInput | GameUpsertWithWhereUniqueWithoutConsoleInput[]
    createMany?: GameCreateManyConsoleInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutConsoleInput | GameUpdateWithWhereUniqueWithoutConsoleInput[]
    updateMany?: GameUpdateManyWithWhereWithoutConsoleInput | GameUpdateManyWithWhereWithoutConsoleInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutConsoleNestedInput = {
    create?: XOR<GameCreateWithoutConsoleInput, GameUncheckedCreateWithoutConsoleInput> | GameCreateWithoutConsoleInput[] | GameUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GameCreateOrConnectWithoutConsoleInput | GameCreateOrConnectWithoutConsoleInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutConsoleInput | GameUpsertWithWhereUniqueWithoutConsoleInput[]
    createMany?: GameCreateManyConsoleInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutConsoleInput | GameUpdateWithWhereUniqueWithoutConsoleInput[]
    updateMany?: GameUpdateManyWithWhereWithoutConsoleInput | GameUpdateManyWithWhereWithoutConsoleInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameCreatescreenshotsInput = {
    set: string[]
  }

  export type ConsoleCreateNestedOneWithoutGamesInput = {
    create?: XOR<ConsoleCreateWithoutGamesInput, ConsoleUncheckedCreateWithoutGamesInput>
    connectOrCreate?: ConsoleCreateOrConnectWithoutGamesInput
    connect?: ConsoleWhereUniqueInput
  }

  export type AchievementCreateNestedManyWithoutGameInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type UserGameCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GameUpdatescreenshotsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConsoleUpdateOneWithoutGamesNestedInput = {
    create?: XOR<ConsoleCreateWithoutGamesInput, ConsoleUncheckedCreateWithoutGamesInput>
    connectOrCreate?: ConsoleCreateOrConnectWithoutGamesInput
    upsert?: ConsoleUpsertWithoutGamesInput
    disconnect?: ConsoleWhereInput | boolean
    delete?: ConsoleWhereInput | boolean
    connect?: ConsoleWhereUniqueInput
    update?: XOR<XOR<ConsoleUpdateToOneWithWhereWithoutGamesInput, ConsoleUpdateWithoutGamesInput>, ConsoleUncheckedUpdateWithoutGamesInput>
  }

  export type AchievementUpdateManyWithoutGameNestedInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutGameInput | AchievementUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutGameInput | AchievementUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutGameInput | AchievementUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type UserGameUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput> | AchievementCreateWithoutGameInput[] | AchievementUncheckedCreateWithoutGameInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutGameInput | AchievementCreateOrConnectWithoutGameInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutGameInput | AchievementUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: AchievementCreateManyGameInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutGameInput | AchievementUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutGameInput | AchievementUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: GameCreateOrConnectWithoutAchievementsInput
    connect?: GameWhereUniqueInput
  }

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type GameUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: GameCreateOrConnectWithoutAchievementsInput
    upsert?: GameUpsertWithoutAchievementsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutAchievementsInput, GameUpdateWithoutAchievementsInput>, GameUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserGameCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserGameCreateWithoutAchievementsInput, UserGameUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserGameCreateOrConnectWithoutAchievementsInput
    connect?: UserGameWhereUniqueInput
  }

  export type AchievementCreateNestedOneWithoutUserAchievementInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementInput, AchievementUncheckedCreateWithoutUserAchievementInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementInput
    connect?: AchievementWhereUniqueInput
  }

  export type UserGameUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserGameCreateWithoutAchievementsInput, UserGameUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserGameCreateOrConnectWithoutAchievementsInput
    upsert?: UserGameUpsertWithoutAchievementsInput
    connect?: UserGameWhereUniqueInput
    update?: XOR<XOR<UserGameUpdateToOneWithWhereWithoutAchievementsInput, UserGameUpdateWithoutAchievementsInput>, UserGameUncheckedUpdateWithoutAchievementsInput>
  }

  export type AchievementUpdateOneRequiredWithoutUserAchievementNestedInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementInput, AchievementUncheckedCreateWithoutUserAchievementInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementInput
    upsert?: AchievementUpsertWithoutUserAchievementInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUserAchievementInput, AchievementUpdateWithoutUserAchievementInput>, AchievementUncheckedUpdateWithoutUserAchievementInput>
  }

  export type UserCreateNestedOneWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutUsersInput = {
    create?: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GameCreateOrConnectWithoutUsersInput
    connect?: GameWhereUniqueInput
  }

  export type UserAchievementCreateNestedManyWithoutUserGameInput = {
    create?: XOR<UserAchievementCreateWithoutUserGameInput, UserAchievementUncheckedCreateWithoutUserGameInput> | UserAchievementCreateWithoutUserGameInput[] | UserAchievementUncheckedCreateWithoutUserGameInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserGameInput | UserAchievementCreateOrConnectWithoutUserGameInput[]
    createMany?: UserAchievementCreateManyUserGameInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutUserGameInput = {
    create?: XOR<UserAchievementCreateWithoutUserGameInput, UserAchievementUncheckedCreateWithoutUserGameInput> | UserAchievementCreateWithoutUserGameInput[] | UserAchievementUncheckedCreateWithoutUserGameInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserGameInput | UserAchievementCreateOrConnectWithoutUserGameInput[]
    createMany?: UserAchievementCreateManyUserGameInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    upsert?: UserUpsertWithoutGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesInput, UserUpdateWithoutGamesInput>, UserUncheckedUpdateWithoutGamesInput>
  }

  export type GameUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GameCreateOrConnectWithoutUsersInput
    upsert?: GameUpsertWithoutUsersInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutUsersInput, GameUpdateWithoutUsersInput>, GameUncheckedUpdateWithoutUsersInput>
  }

  export type UserAchievementUpdateManyWithoutUserGameNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserGameInput, UserAchievementUncheckedCreateWithoutUserGameInput> | UserAchievementCreateWithoutUserGameInput[] | UserAchievementUncheckedCreateWithoutUserGameInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserGameInput | UserAchievementCreateOrConnectWithoutUserGameInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserGameInput | UserAchievementUpsertWithWhereUniqueWithoutUserGameInput[]
    createMany?: UserAchievementCreateManyUserGameInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserGameInput | UserAchievementUpdateWithWhereUniqueWithoutUserGameInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserGameInput | UserAchievementUpdateManyWithWhereWithoutUserGameInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserGameNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserGameInput, UserAchievementUncheckedCreateWithoutUserGameInput> | UserAchievementCreateWithoutUserGameInput[] | UserAchievementUncheckedCreateWithoutUserGameInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserGameInput | UserAchievementCreateOrConnectWithoutUserGameInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserGameInput | UserAchievementUpsertWithWhereUniqueWithoutUserGameInput[]
    createMany?: UserAchievementCreateManyUserGameInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserGameInput | UserAchievementUpdateWithWhereUniqueWithoutUserGameInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserGameInput | UserAchievementUpdateManyWithWhereWithoutUserGameInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type ForumSubforumCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ForumSubforumCreateWithoutCategoryInput, ForumSubforumUncheckedCreateWithoutCategoryInput> | ForumSubforumCreateWithoutCategoryInput[] | ForumSubforumUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ForumSubforumCreateOrConnectWithoutCategoryInput | ForumSubforumCreateOrConnectWithoutCategoryInput[]
    createMany?: ForumSubforumCreateManyCategoryInputEnvelope
    connect?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
  }

  export type ForumSubforumUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ForumSubforumCreateWithoutCategoryInput, ForumSubforumUncheckedCreateWithoutCategoryInput> | ForumSubforumCreateWithoutCategoryInput[] | ForumSubforumUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ForumSubforumCreateOrConnectWithoutCategoryInput | ForumSubforumCreateOrConnectWithoutCategoryInput[]
    createMany?: ForumSubforumCreateManyCategoryInputEnvelope
    connect?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ForumSubforumUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ForumSubforumCreateWithoutCategoryInput, ForumSubforumUncheckedCreateWithoutCategoryInput> | ForumSubforumCreateWithoutCategoryInput[] | ForumSubforumUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ForumSubforumCreateOrConnectWithoutCategoryInput | ForumSubforumCreateOrConnectWithoutCategoryInput[]
    upsert?: ForumSubforumUpsertWithWhereUniqueWithoutCategoryInput | ForumSubforumUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ForumSubforumCreateManyCategoryInputEnvelope
    set?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    disconnect?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    delete?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    connect?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    update?: ForumSubforumUpdateWithWhereUniqueWithoutCategoryInput | ForumSubforumUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ForumSubforumUpdateManyWithWhereWithoutCategoryInput | ForumSubforumUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ForumSubforumScalarWhereInput | ForumSubforumScalarWhereInput[]
  }

  export type ForumSubforumUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ForumSubforumCreateWithoutCategoryInput, ForumSubforumUncheckedCreateWithoutCategoryInput> | ForumSubforumCreateWithoutCategoryInput[] | ForumSubforumUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ForumSubforumCreateOrConnectWithoutCategoryInput | ForumSubforumCreateOrConnectWithoutCategoryInput[]
    upsert?: ForumSubforumUpsertWithWhereUniqueWithoutCategoryInput | ForumSubforumUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ForumSubforumCreateManyCategoryInputEnvelope
    set?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    disconnect?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    delete?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    connect?: ForumSubforumWhereUniqueInput | ForumSubforumWhereUniqueInput[]
    update?: ForumSubforumUpdateWithWhereUniqueWithoutCategoryInput | ForumSubforumUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ForumSubforumUpdateManyWithWhereWithoutCategoryInput | ForumSubforumUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ForumSubforumScalarWhereInput | ForumSubforumScalarWhereInput[]
  }

  export type ForumCategoryCreateNestedOneWithoutSubforumsInput = {
    create?: XOR<ForumCategoryCreateWithoutSubforumsInput, ForumCategoryUncheckedCreateWithoutSubforumsInput>
    connectOrCreate?: ForumCategoryCreateOrConnectWithoutSubforumsInput
    connect?: ForumCategoryWhereUniqueInput
  }

  export type ForumThreadCreateNestedManyWithoutSubforumInput = {
    create?: XOR<ForumThreadCreateWithoutSubforumInput, ForumThreadUncheckedCreateWithoutSubforumInput> | ForumThreadCreateWithoutSubforumInput[] | ForumThreadUncheckedCreateWithoutSubforumInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutSubforumInput | ForumThreadCreateOrConnectWithoutSubforumInput[]
    createMany?: ForumThreadCreateManySubforumInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumThreadUncheckedCreateNestedManyWithoutSubforumInput = {
    create?: XOR<ForumThreadCreateWithoutSubforumInput, ForumThreadUncheckedCreateWithoutSubforumInput> | ForumThreadCreateWithoutSubforumInput[] | ForumThreadUncheckedCreateWithoutSubforumInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutSubforumInput | ForumThreadCreateOrConnectWithoutSubforumInput[]
    createMany?: ForumThreadCreateManySubforumInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumCategoryUpdateOneRequiredWithoutSubforumsNestedInput = {
    create?: XOR<ForumCategoryCreateWithoutSubforumsInput, ForumCategoryUncheckedCreateWithoutSubforumsInput>
    connectOrCreate?: ForumCategoryCreateOrConnectWithoutSubforumsInput
    upsert?: ForumCategoryUpsertWithoutSubforumsInput
    connect?: ForumCategoryWhereUniqueInput
    update?: XOR<XOR<ForumCategoryUpdateToOneWithWhereWithoutSubforumsInput, ForumCategoryUpdateWithoutSubforumsInput>, ForumCategoryUncheckedUpdateWithoutSubforumsInput>
  }

  export type ForumThreadUpdateManyWithoutSubforumNestedInput = {
    create?: XOR<ForumThreadCreateWithoutSubforumInput, ForumThreadUncheckedCreateWithoutSubforumInput> | ForumThreadCreateWithoutSubforumInput[] | ForumThreadUncheckedCreateWithoutSubforumInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutSubforumInput | ForumThreadCreateOrConnectWithoutSubforumInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutSubforumInput | ForumThreadUpsertWithWhereUniqueWithoutSubforumInput[]
    createMany?: ForumThreadCreateManySubforumInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutSubforumInput | ForumThreadUpdateWithWhereUniqueWithoutSubforumInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutSubforumInput | ForumThreadUpdateManyWithWhereWithoutSubforumInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumThreadUncheckedUpdateManyWithoutSubforumNestedInput = {
    create?: XOR<ForumThreadCreateWithoutSubforumInput, ForumThreadUncheckedCreateWithoutSubforumInput> | ForumThreadCreateWithoutSubforumInput[] | ForumThreadUncheckedCreateWithoutSubforumInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutSubforumInput | ForumThreadCreateOrConnectWithoutSubforumInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutSubforumInput | ForumThreadUpsertWithWhereUniqueWithoutSubforumInput[]
    createMany?: ForumThreadCreateManySubforumInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutSubforumInput | ForumThreadUpdateWithWhereUniqueWithoutSubforumInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutSubforumInput | ForumThreadUpdateManyWithWhereWithoutSubforumInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumSubforumCreateNestedOneWithoutThreadsInput = {
    create?: XOR<ForumSubforumCreateWithoutThreadsInput, ForumSubforumUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: ForumSubforumCreateOrConnectWithoutThreadsInput
    connect?: ForumSubforumWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThreadsAuthoredInput = {
    create?: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsAuthoredInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLastPostThreadsInput = {
    create?: XOR<UserCreateWithoutLastPostThreadsInput, UserUncheckedCreateWithoutLastPostThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLastPostThreadsInput
    connect?: UserWhereUniqueInput
  }

  export type ForumPostCreateNestedManyWithoutThreadInput = {
    create?: XOR<ForumPostCreateWithoutThreadInput, ForumPostUncheckedCreateWithoutThreadInput> | ForumPostCreateWithoutThreadInput[] | ForumPostUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutThreadInput | ForumPostCreateOrConnectWithoutThreadInput[]
    createMany?: ForumPostCreateManyThreadInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type ForumPostUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<ForumPostCreateWithoutThreadInput, ForumPostUncheckedCreateWithoutThreadInput> | ForumPostCreateWithoutThreadInput[] | ForumPostUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutThreadInput | ForumPostCreateOrConnectWithoutThreadInput[]
    createMany?: ForumPostCreateManyThreadInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type ForumSubforumUpdateOneRequiredWithoutThreadsNestedInput = {
    create?: XOR<ForumSubforumCreateWithoutThreadsInput, ForumSubforumUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: ForumSubforumCreateOrConnectWithoutThreadsInput
    upsert?: ForumSubforumUpsertWithoutThreadsInput
    connect?: ForumSubforumWhereUniqueInput
    update?: XOR<XOR<ForumSubforumUpdateToOneWithWhereWithoutThreadsInput, ForumSubforumUpdateWithoutThreadsInput>, ForumSubforumUncheckedUpdateWithoutThreadsInput>
  }

  export type UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput = {
    create?: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsAuthoredInput
    upsert?: UserUpsertWithoutThreadsAuthoredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadsAuthoredInput, UserUpdateWithoutThreadsAuthoredInput>, UserUncheckedUpdateWithoutThreadsAuthoredInput>
  }

  export type UserUpdateOneWithoutLastPostThreadsNestedInput = {
    create?: XOR<UserCreateWithoutLastPostThreadsInput, UserUncheckedCreateWithoutLastPostThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLastPostThreadsInput
    upsert?: UserUpsertWithoutLastPostThreadsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLastPostThreadsInput, UserUpdateWithoutLastPostThreadsInput>, UserUncheckedUpdateWithoutLastPostThreadsInput>
  }

  export type ForumPostUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ForumPostCreateWithoutThreadInput, ForumPostUncheckedCreateWithoutThreadInput> | ForumPostCreateWithoutThreadInput[] | ForumPostUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutThreadInput | ForumPostCreateOrConnectWithoutThreadInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutThreadInput | ForumPostUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ForumPostCreateManyThreadInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutThreadInput | ForumPostUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutThreadInput | ForumPostUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type ForumPostUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ForumPostCreateWithoutThreadInput, ForumPostUncheckedCreateWithoutThreadInput> | ForumPostCreateWithoutThreadInput[] | ForumPostUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutThreadInput | ForumPostCreateOrConnectWithoutThreadInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutThreadInput | ForumPostUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ForumPostCreateManyThreadInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutThreadInput | ForumPostUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutThreadInput | ForumPostUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type ForumThreadCreateNestedOneWithoutPostsInput = {
    create?: XOR<ForumThreadCreateWithoutPostsInput, ForumThreadUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutPostsInput
    connect?: ForumThreadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsDeletedInput = {
    create?: XOR<UserCreateWithoutPostsDeletedInput, UserUncheckedCreateWithoutPostsDeletedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsDeletedInput
    connect?: UserWhereUniqueInput
  }

  export type ForumThreadUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<ForumThreadCreateWithoutPostsInput, ForumThreadUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutPostsInput
    upsert?: ForumThreadUpsertWithoutPostsInput
    connect?: ForumThreadWhereUniqueInput
    update?: XOR<XOR<ForumThreadUpdateToOneWithWhereWithoutPostsInput, ForumThreadUpdateWithoutPostsInput>, ForumThreadUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneWithoutPostsDeletedNestedInput = {
    create?: XOR<UserCreateWithoutPostsDeletedInput, UserUncheckedCreateWithoutPostsDeletedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsDeletedInput
    upsert?: UserUpsertWithoutPostsDeletedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsDeletedInput, UserUpdateWithoutPostsDeletedInput>, UserUncheckedUpdateWithoutPostsDeletedInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type UserGameCreateWithoutUserInput = {
    id?: string
    owned?: boolean
    game: GameCreateNestedOneWithoutUsersInput
    achievements?: UserAchievementCreateNestedManyWithoutUserGameInput
  }

  export type UserGameUncheckedCreateWithoutUserInput = {
    id?: string
    gameId: string
    owned?: boolean
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserGameInput
  }

  export type UserGameCreateOrConnectWithoutUserInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameCreateManyUserInputEnvelope = {
    data: UserGameCreateManyUserInput | UserGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ForumPostCreateWithoutAuthorInput = {
    id?: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ForumThreadCreateNestedOneWithoutPostsInput
    deletedBy?: UserCreateNestedOneWithoutPostsDeletedInput
  }

  export type ForumPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    threadId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostCreateOrConnectWithoutAuthorInput = {
    where: ForumPostWhereUniqueInput
    create: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput>
  }

  export type ForumPostCreateManyAuthorInputEnvelope = {
    data: ForumPostCreateManyAuthorInput | ForumPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ForumThreadCreateWithoutAuthorInput = {
    id?: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subforum: ForumSubforumCreateNestedOneWithoutThreadsInput
    lastPostBy?: UserCreateNestedOneWithoutLastPostThreadsInput
    posts?: ForumPostCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadUncheckedCreateWithoutAuthorInput = {
    id?: string
    subforumId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    lastPostById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: ForumPostUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadCreateOrConnectWithoutAuthorInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ForumThreadCreateManyAuthorInputEnvelope = {
    data: ForumThreadCreateManyAuthorInput | ForumThreadCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ForumThreadCreateWithoutLastPostByInput = {
    id?: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subforum: ForumSubforumCreateNestedOneWithoutThreadsInput
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    posts?: ForumPostCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadUncheckedCreateWithoutLastPostByInput = {
    id?: string
    subforumId: string
    authorId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: ForumPostUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadCreateOrConnectWithoutLastPostByInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutLastPostByInput, ForumThreadUncheckedCreateWithoutLastPostByInput>
  }

  export type ForumThreadCreateManyLastPostByInputEnvelope = {
    data: ForumThreadCreateManyLastPostByInput | ForumThreadCreateManyLastPostByInput[]
    skipDuplicates?: boolean
  }

  export type ForumPostCreateWithoutDeletedByInput = {
    id?: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ForumThreadCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type ForumPostUncheckedCreateWithoutDeletedByInput = {
    id?: string
    threadId: string
    authorId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostCreateOrConnectWithoutDeletedByInput = {
    where: ForumPostWhereUniqueInput
    create: XOR<ForumPostCreateWithoutDeletedByInput, ForumPostUncheckedCreateWithoutDeletedByInput>
  }

  export type ForumPostCreateManyDeletedByInputEnvelope = {
    data: ForumPostCreateManyDeletedByInput | ForumPostCreateManyDeletedByInput[]
    skipDuplicates?: boolean
  }

  export type UserGameUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
  }

  export type UserGameUpdateManyWithWhereWithoutUserInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGameScalarWhereInput = {
    AND?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    OR?: UserGameScalarWhereInput[]
    NOT?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    id?: StringFilter<"UserGame"> | string
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    owned?: BoolFilter<"UserGame"> | boolean
  }

  export type ForumPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ForumPostWhereUniqueInput
    update: XOR<ForumPostUpdateWithoutAuthorInput, ForumPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput>
  }

  export type ForumPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ForumPostWhereUniqueInput
    data: XOR<ForumPostUpdateWithoutAuthorInput, ForumPostUncheckedUpdateWithoutAuthorInput>
  }

  export type ForumPostUpdateManyWithWhereWithoutAuthorInput = {
    where: ForumPostScalarWhereInput
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ForumPostScalarWhereInput = {
    AND?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
    OR?: ForumPostScalarWhereInput[]
    NOT?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
    id?: StringFilter<"ForumPost"> | string
    threadId?: StringFilter<"ForumPost"> | string
    authorId?: StringFilter<"ForumPost"> | string
    content?: StringFilter<"ForumPost"> | string
    editedAt?: DateTimeNullableFilter<"ForumPost"> | Date | string | null
    editCount?: IntFilter<"ForumPost"> | number
    isDeleted?: BoolFilter<"ForumPost"> | boolean
    deletedAt?: DateTimeNullableFilter<"ForumPost"> | Date | string | null
    deletedById?: StringNullableFilter<"ForumPost"> | string | null
    deletedReason?: StringNullableFilter<"ForumPost"> | string | null
    createdAt?: DateTimeFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
  }

  export type ForumThreadUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ForumThreadWhereUniqueInput
    update: XOR<ForumThreadUpdateWithoutAuthorInput, ForumThreadUncheckedUpdateWithoutAuthorInput>
    create: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ForumThreadUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ForumThreadWhereUniqueInput
    data: XOR<ForumThreadUpdateWithoutAuthorInput, ForumThreadUncheckedUpdateWithoutAuthorInput>
  }

  export type ForumThreadUpdateManyWithWhereWithoutAuthorInput = {
    where: ForumThreadScalarWhereInput
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ForumThreadScalarWhereInput = {
    AND?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
    OR?: ForumThreadScalarWhereInput[]
    NOT?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
    id?: StringFilter<"ForumThread"> | string
    subforumId?: StringFilter<"ForumThread"> | string
    authorId?: StringFilter<"ForumThread"> | string
    title?: StringFilter<"ForumThread"> | string
    pinned?: BoolFilter<"ForumThread"> | boolean
    locked?: BoolFilter<"ForumThread"> | boolean
    lastPostAt?: DateTimeFilter<"ForumThread"> | Date | string
    lastPostById?: StringNullableFilter<"ForumThread"> | string | null
    createdAt?: DateTimeFilter<"ForumThread"> | Date | string
    updatedAt?: DateTimeFilter<"ForumThread"> | Date | string
  }

  export type ForumThreadUpsertWithWhereUniqueWithoutLastPostByInput = {
    where: ForumThreadWhereUniqueInput
    update: XOR<ForumThreadUpdateWithoutLastPostByInput, ForumThreadUncheckedUpdateWithoutLastPostByInput>
    create: XOR<ForumThreadCreateWithoutLastPostByInput, ForumThreadUncheckedCreateWithoutLastPostByInput>
  }

  export type ForumThreadUpdateWithWhereUniqueWithoutLastPostByInput = {
    where: ForumThreadWhereUniqueInput
    data: XOR<ForumThreadUpdateWithoutLastPostByInput, ForumThreadUncheckedUpdateWithoutLastPostByInput>
  }

  export type ForumThreadUpdateManyWithWhereWithoutLastPostByInput = {
    where: ForumThreadScalarWhereInput
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyWithoutLastPostByInput>
  }

  export type ForumPostUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: ForumPostWhereUniqueInput
    update: XOR<ForumPostUpdateWithoutDeletedByInput, ForumPostUncheckedUpdateWithoutDeletedByInput>
    create: XOR<ForumPostCreateWithoutDeletedByInput, ForumPostUncheckedCreateWithoutDeletedByInput>
  }

  export type ForumPostUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: ForumPostWhereUniqueInput
    data: XOR<ForumPostUpdateWithoutDeletedByInput, ForumPostUncheckedUpdateWithoutDeletedByInput>
  }

  export type ForumPostUpdateManyWithWhereWithoutDeletedByInput = {
    where: ForumPostScalarWhereInput
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyWithoutDeletedByInput>
  }

  export type GameCreateWithoutConsoleInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    achievements?: AchievementCreateNestedManyWithoutGameInput
    users?: UserGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutConsoleInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
    users?: UserGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutConsoleInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutConsoleInput, GameUncheckedCreateWithoutConsoleInput>
  }

  export type GameCreateManyConsoleInputEnvelope = {
    data: GameCreateManyConsoleInput | GameCreateManyConsoleInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutConsoleInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutConsoleInput, GameUncheckedUpdateWithoutConsoleInput>
    create: XOR<GameCreateWithoutConsoleInput, GameUncheckedCreateWithoutConsoleInput>
  }

  export type GameUpdateWithWhereUniqueWithoutConsoleInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutConsoleInput, GameUncheckedUpdateWithoutConsoleInput>
  }

  export type GameUpdateManyWithWhereWithoutConsoleInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutConsoleInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    slug?: StringFilter<"Game"> | string
    title?: StringFilter<"Game"> | string
    description?: StringFilter<"Game"> | string
    coverImage?: StringFilter<"Game"> | string
    developer?: StringFilter<"Game"> | string
    publisher?: StringFilter<"Game"> | string
    releaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    consoleId?: StringNullableFilter<"Game"> | string | null
    screenshots?: StringNullableListFilter<"Game">
    createdAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type ConsoleCreateWithoutGamesInput = {
    id?: string
    name: string
  }

  export type ConsoleUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
  }

  export type ConsoleCreateOrConnectWithoutGamesInput = {
    where: ConsoleWhereUniqueInput
    create: XOR<ConsoleCreateWithoutGamesInput, ConsoleUncheckedCreateWithoutGamesInput>
  }

  export type AchievementCreateWithoutGameInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    UserAchievement?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateWithoutGameInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    UserAchievement?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementCreateOrConnectWithoutGameInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput>
  }

  export type AchievementCreateManyGameInputEnvelope = {
    data: AchievementCreateManyGameInput | AchievementCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGameCreateWithoutGameInput = {
    id?: string
    owned?: boolean
    user: UserCreateNestedOneWithoutGamesInput
    achievements?: UserAchievementCreateNestedManyWithoutUserGameInput
  }

  export type UserGameUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
    owned?: boolean
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserGameInput
  }

  export type UserGameCreateOrConnectWithoutGameInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameCreateManyGameInputEnvelope = {
    data: UserGameCreateManyGameInput | UserGameCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type ConsoleUpsertWithoutGamesInput = {
    update: XOR<ConsoleUpdateWithoutGamesInput, ConsoleUncheckedUpdateWithoutGamesInput>
    create: XOR<ConsoleCreateWithoutGamesInput, ConsoleUncheckedCreateWithoutGamesInput>
    where?: ConsoleWhereInput
  }

  export type ConsoleUpdateToOneWithWhereWithoutGamesInput = {
    where?: ConsoleWhereInput
    data: XOR<ConsoleUpdateWithoutGamesInput, ConsoleUncheckedUpdateWithoutGamesInput>
  }

  export type ConsoleUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConsoleUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementUpsertWithWhereUniqueWithoutGameInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutGameInput, AchievementUncheckedUpdateWithoutGameInput>
    create: XOR<AchievementCreateWithoutGameInput, AchievementUncheckedCreateWithoutGameInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutGameInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutGameInput, AchievementUncheckedUpdateWithoutGameInput>
  }

  export type AchievementUpdateManyWithWhereWithoutGameInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutGameInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: StringFilter<"Achievement"> | string
    title?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    image?: StringNullableFilter<"Achievement"> | string | null
    gameId?: StringFilter<"Achievement"> | string
  }

  export type UserGameUpsertWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
  }

  export type UserGameUpdateManyWithWhereWithoutGameInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutAchievementsInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    console?: ConsoleCreateNestedOneWithoutGamesInput
    users?: UserGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutAchievementsInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    consoleId?: string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    users?: UserGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutAchievementsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
  }

  export type UserAchievementCreateWithoutAchievementInput = {
    id?: string
    earnedAt?: Date | string
    userGame: UserGameCreateNestedOneWithoutAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: string
    userGameId: string
    earnedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data: UserAchievementCreateManyAchievementInput | UserAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutAchievementsInput = {
    update: XOR<GameUpdateWithoutAchievementsInput, GameUncheckedUpdateWithoutAchievementsInput>
    create: XOR<GameCreateWithoutAchievementsInput, GameUncheckedCreateWithoutAchievementsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutAchievementsInput, GameUncheckedUpdateWithoutAchievementsInput>
  }

  export type GameUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    console?: ConsoleUpdateOneWithoutGamesNestedInput
    users?: UserGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consoleId?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userGameId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    earnedAt?: DateTimeFilter<"UserAchievement"> | Date | string
  }

  export type UserGameCreateWithoutAchievementsInput = {
    id?: string
    owned?: boolean
    user: UserCreateNestedOneWithoutGamesInput
    game: GameCreateNestedOneWithoutUsersInput
  }

  export type UserGameUncheckedCreateWithoutAchievementsInput = {
    id?: string
    userId: string
    gameId: string
    owned?: boolean
  }

  export type UserGameCreateOrConnectWithoutAchievementsInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutAchievementsInput, UserGameUncheckedCreateWithoutAchievementsInput>
  }

  export type AchievementCreateWithoutUserAchievementInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    game: GameCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateWithoutUserAchievementInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gameId: string
  }

  export type AchievementCreateOrConnectWithoutUserAchievementInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUserAchievementInput, AchievementUncheckedCreateWithoutUserAchievementInput>
  }

  export type UserGameUpsertWithoutAchievementsInput = {
    update: XOR<UserGameUpdateWithoutAchievementsInput, UserGameUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserGameCreateWithoutAchievementsInput, UserGameUncheckedCreateWithoutAchievementsInput>
    where?: UserGameWhereInput
  }

  export type UserGameUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserGameWhereInput
    data: XOR<UserGameUpdateWithoutAchievementsInput, UserGameUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserGameUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
    game?: GameUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserGameUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AchievementUpsertWithoutUserAchievementInput = {
    update: XOR<AchievementUpdateWithoutUserAchievementInput, AchievementUncheckedUpdateWithoutUserAchievementInput>
    create: XOR<AchievementCreateWithoutUserAchievementInput, AchievementUncheckedCreateWithoutUserAchievementInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUserAchievementInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUserAchievementInput, AchievementUncheckedUpdateWithoutUserAchievementInput>
  }

  export type AchievementUpdateWithoutUserAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateWithoutUserAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutGamesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    posts?: ForumPostCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    posts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadUncheckedCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type GameCreateWithoutUsersInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    console?: ConsoleCreateNestedOneWithoutGamesInput
    achievements?: AchievementCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUsersInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    consoleId?: string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
    achievements?: AchievementUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUsersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
  }

  export type UserAchievementCreateWithoutUserGameInput = {
    id?: string
    earnedAt?: Date | string
    achievement: AchievementCreateNestedOneWithoutUserAchievementInput
  }

  export type UserAchievementUncheckedCreateWithoutUserGameInput = {
    id?: string
    achievementId: string
    earnedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutUserGameInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutUserGameInput, UserAchievementUncheckedCreateWithoutUserGameInput>
  }

  export type UserAchievementCreateManyUserGameInputEnvelope = {
    data: UserAchievementCreateManyUserGameInput | UserAchievementCreateManyUserGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesInput = {
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: ForumPostUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUncheckedUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type GameUpsertWithoutUsersInput = {
    update: XOR<GameUpdateWithoutUsersInput, GameUncheckedUpdateWithoutUsersInput>
    create: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutUsersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutUsersInput, GameUncheckedUpdateWithoutUsersInput>
  }

  export type GameUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    console?: ConsoleUpdateOneWithoutGamesNestedInput
    achievements?: AchievementUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consoleId?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutUserGameInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutUserGameInput, UserAchievementUncheckedUpdateWithoutUserGameInput>
    create: XOR<UserAchievementCreateWithoutUserGameInput, UserAchievementUncheckedCreateWithoutUserGameInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutUserGameInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutUserGameInput, UserAchievementUncheckedUpdateWithoutUserGameInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutUserGameInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutUserGameInput>
  }

  export type ForumSubforumCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ForumThreadCreateNestedManyWithoutSubforumInput
  }

  export type ForumSubforumUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ForumThreadUncheckedCreateNestedManyWithoutSubforumInput
  }

  export type ForumSubforumCreateOrConnectWithoutCategoryInput = {
    where: ForumSubforumWhereUniqueInput
    create: XOR<ForumSubforumCreateWithoutCategoryInput, ForumSubforumUncheckedCreateWithoutCategoryInput>
  }

  export type ForumSubforumCreateManyCategoryInputEnvelope = {
    data: ForumSubforumCreateManyCategoryInput | ForumSubforumCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ForumSubforumUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ForumSubforumWhereUniqueInput
    update: XOR<ForumSubforumUpdateWithoutCategoryInput, ForumSubforumUncheckedUpdateWithoutCategoryInput>
    create: XOR<ForumSubforumCreateWithoutCategoryInput, ForumSubforumUncheckedCreateWithoutCategoryInput>
  }

  export type ForumSubforumUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ForumSubforumWhereUniqueInput
    data: XOR<ForumSubforumUpdateWithoutCategoryInput, ForumSubforumUncheckedUpdateWithoutCategoryInput>
  }

  export type ForumSubforumUpdateManyWithWhereWithoutCategoryInput = {
    where: ForumSubforumScalarWhereInput
    data: XOR<ForumSubforumUpdateManyMutationInput, ForumSubforumUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ForumSubforumScalarWhereInput = {
    AND?: ForumSubforumScalarWhereInput | ForumSubforumScalarWhereInput[]
    OR?: ForumSubforumScalarWhereInput[]
    NOT?: ForumSubforumScalarWhereInput | ForumSubforumScalarWhereInput[]
    id?: StringFilter<"ForumSubforum"> | string
    categoryId?: StringFilter<"ForumSubforum"> | string
    name?: StringFilter<"ForumSubforum"> | string
    slug?: StringFilter<"ForumSubforum"> | string
    description?: StringNullableFilter<"ForumSubforum"> | string | null
    position?: IntFilter<"ForumSubforum"> | number
    createdAt?: DateTimeFilter<"ForumSubforum"> | Date | string
    updatedAt?: DateTimeFilter<"ForumSubforum"> | Date | string
  }

  export type ForumCategoryCreateWithoutSubforumsInput = {
    id?: string
    name: string
    slug: string
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumCategoryUncheckedCreateWithoutSubforumsInput = {
    id?: string
    name: string
    slug: string
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumCategoryCreateOrConnectWithoutSubforumsInput = {
    where: ForumCategoryWhereUniqueInput
    create: XOR<ForumCategoryCreateWithoutSubforumsInput, ForumCategoryUncheckedCreateWithoutSubforumsInput>
  }

  export type ForumThreadCreateWithoutSubforumInput = {
    id?: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    lastPostBy?: UserCreateNestedOneWithoutLastPostThreadsInput
    posts?: ForumPostCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadUncheckedCreateWithoutSubforumInput = {
    id?: string
    authorId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    lastPostById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: ForumPostUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ForumThreadCreateOrConnectWithoutSubforumInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutSubforumInput, ForumThreadUncheckedCreateWithoutSubforumInput>
  }

  export type ForumThreadCreateManySubforumInputEnvelope = {
    data: ForumThreadCreateManySubforumInput | ForumThreadCreateManySubforumInput[]
    skipDuplicates?: boolean
  }

  export type ForumCategoryUpsertWithoutSubforumsInput = {
    update: XOR<ForumCategoryUpdateWithoutSubforumsInput, ForumCategoryUncheckedUpdateWithoutSubforumsInput>
    create: XOR<ForumCategoryCreateWithoutSubforumsInput, ForumCategoryUncheckedCreateWithoutSubforumsInput>
    where?: ForumCategoryWhereInput
  }

  export type ForumCategoryUpdateToOneWithWhereWithoutSubforumsInput = {
    where?: ForumCategoryWhereInput
    data: XOR<ForumCategoryUpdateWithoutSubforumsInput, ForumCategoryUncheckedUpdateWithoutSubforumsInput>
  }

  export type ForumCategoryUpdateWithoutSubforumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCategoryUncheckedUpdateWithoutSubforumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumThreadUpsertWithWhereUniqueWithoutSubforumInput = {
    where: ForumThreadWhereUniqueInput
    update: XOR<ForumThreadUpdateWithoutSubforumInput, ForumThreadUncheckedUpdateWithoutSubforumInput>
    create: XOR<ForumThreadCreateWithoutSubforumInput, ForumThreadUncheckedCreateWithoutSubforumInput>
  }

  export type ForumThreadUpdateWithWhereUniqueWithoutSubforumInput = {
    where: ForumThreadWhereUniqueInput
    data: XOR<ForumThreadUpdateWithoutSubforumInput, ForumThreadUncheckedUpdateWithoutSubforumInput>
  }

  export type ForumThreadUpdateManyWithWhereWithoutSubforumInput = {
    where: ForumThreadScalarWhereInput
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyWithoutSubforumInput>
  }

  export type ForumSubforumCreateWithoutThreadsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ForumCategoryCreateNestedOneWithoutSubforumsInput
  }

  export type ForumSubforumUncheckedCreateWithoutThreadsInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumSubforumCreateOrConnectWithoutThreadsInput = {
    where: ForumSubforumWhereUniqueInput
    create: XOR<ForumSubforumCreateWithoutThreadsInput, ForumSubforumUncheckedCreateWithoutThreadsInput>
  }

  export type UserCreateWithoutThreadsAuthoredInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameCreateNestedManyWithoutUserInput
    posts?: ForumPostCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutThreadsAuthoredInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameUncheckedCreateNestedManyWithoutUserInput
    posts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadUncheckedCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutThreadsAuthoredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
  }

  export type UserCreateWithoutLastPostThreadsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameCreateNestedManyWithoutUserInput
    posts?: ForumPostCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadCreateNestedManyWithoutAuthorInput
    postsDeleted?: ForumPostCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutLastPostThreadsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameUncheckedCreateNestedManyWithoutUserInput
    posts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
    postsDeleted?: ForumPostUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutLastPostThreadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLastPostThreadsInput, UserUncheckedCreateWithoutLastPostThreadsInput>
  }

  export type ForumPostCreateWithoutThreadInput = {
    id?: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    deletedBy?: UserCreateNestedOneWithoutPostsDeletedInput
  }

  export type ForumPostUncheckedCreateWithoutThreadInput = {
    id?: string
    authorId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostCreateOrConnectWithoutThreadInput = {
    where: ForumPostWhereUniqueInput
    create: XOR<ForumPostCreateWithoutThreadInput, ForumPostUncheckedCreateWithoutThreadInput>
  }

  export type ForumPostCreateManyThreadInputEnvelope = {
    data: ForumPostCreateManyThreadInput | ForumPostCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type ForumSubforumUpsertWithoutThreadsInput = {
    update: XOR<ForumSubforumUpdateWithoutThreadsInput, ForumSubforumUncheckedUpdateWithoutThreadsInput>
    create: XOR<ForumSubforumCreateWithoutThreadsInput, ForumSubforumUncheckedCreateWithoutThreadsInput>
    where?: ForumSubforumWhereInput
  }

  export type ForumSubforumUpdateToOneWithWhereWithoutThreadsInput = {
    where?: ForumSubforumWhereInput
    data: XOR<ForumSubforumUpdateWithoutThreadsInput, ForumSubforumUncheckedUpdateWithoutThreadsInput>
  }

  export type ForumSubforumUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ForumCategoryUpdateOneRequiredWithoutSubforumsNestedInput
  }

  export type ForumSubforumUncheckedUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutThreadsAuthoredInput = {
    update: XOR<UserUpdateWithoutThreadsAuthoredInput, UserUncheckedUpdateWithoutThreadsAuthoredInput>
    create: XOR<UserCreateWithoutThreadsAuthoredInput, UserUncheckedCreateWithoutThreadsAuthoredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadsAuthoredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadsAuthoredInput, UserUncheckedUpdateWithoutThreadsAuthoredInput>
  }

  export type UserUpdateWithoutThreadsAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUpdateManyWithoutUserNestedInput
    posts?: ForumPostUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadsAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    posts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUncheckedUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutLastPostThreadsInput = {
    update: XOR<UserUpdateWithoutLastPostThreadsInput, UserUncheckedUpdateWithoutLastPostThreadsInput>
    create: XOR<UserCreateWithoutLastPostThreadsInput, UserUncheckedCreateWithoutLastPostThreadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLastPostThreadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLastPostThreadsInput, UserUncheckedUpdateWithoutLastPostThreadsInput>
  }

  export type UserUpdateWithoutLastPostThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUpdateManyWithoutUserNestedInput
    posts?: ForumPostUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUpdateManyWithoutAuthorNestedInput
    postsDeleted?: ForumPostUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLastPostThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    posts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
    postsDeleted?: ForumPostUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type ForumPostUpsertWithWhereUniqueWithoutThreadInput = {
    where: ForumPostWhereUniqueInput
    update: XOR<ForumPostUpdateWithoutThreadInput, ForumPostUncheckedUpdateWithoutThreadInput>
    create: XOR<ForumPostCreateWithoutThreadInput, ForumPostUncheckedCreateWithoutThreadInput>
  }

  export type ForumPostUpdateWithWhereUniqueWithoutThreadInput = {
    where: ForumPostWhereUniqueInput
    data: XOR<ForumPostUpdateWithoutThreadInput, ForumPostUncheckedUpdateWithoutThreadInput>
  }

  export type ForumPostUpdateManyWithWhereWithoutThreadInput = {
    where: ForumPostScalarWhereInput
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyWithoutThreadInput>
  }

  export type ForumThreadCreateWithoutPostsInput = {
    id?: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subforum: ForumSubforumCreateNestedOneWithoutThreadsInput
    author: UserCreateNestedOneWithoutThreadsAuthoredInput
    lastPostBy?: UserCreateNestedOneWithoutLastPostThreadsInput
  }

  export type ForumThreadUncheckedCreateWithoutPostsInput = {
    id?: string
    subforumId: string
    authorId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    lastPostById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumThreadCreateOrConnectWithoutPostsInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutPostsInput, ForumThreadUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameCreateNestedManyWithoutUserInput
    threadsAuthored?: ForumThreadCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameUncheckedCreateNestedManyWithoutUserInput
    threadsAuthored?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadUncheckedCreateNestedManyWithoutLastPostByInput
    postsDeleted?: ForumPostUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutPostsDeletedInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameCreateNestedManyWithoutUserInput
    posts?: ForumPostCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadCreateNestedManyWithoutLastPostByInput
  }

  export type UserUncheckedCreateWithoutPostsDeletedInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    bio?: string | null
    avatar?: string | null
    games?: UserGameUncheckedCreateNestedManyWithoutUserInput
    posts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    threadsAuthored?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
    lastPostThreads?: ForumThreadUncheckedCreateNestedManyWithoutLastPostByInput
  }

  export type UserCreateOrConnectWithoutPostsDeletedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsDeletedInput, UserUncheckedCreateWithoutPostsDeletedInput>
  }

  export type ForumThreadUpsertWithoutPostsInput = {
    update: XOR<ForumThreadUpdateWithoutPostsInput, ForumThreadUncheckedUpdateWithoutPostsInput>
    create: XOR<ForumThreadCreateWithoutPostsInput, ForumThreadUncheckedCreateWithoutPostsInput>
    where?: ForumThreadWhereInput
  }

  export type ForumThreadUpdateToOneWithWhereWithoutPostsInput = {
    where?: ForumThreadWhereInput
    data: XOR<ForumThreadUpdateWithoutPostsInput, ForumThreadUncheckedUpdateWithoutPostsInput>
  }

  export type ForumThreadUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subforum?: ForumSubforumUpdateOneRequiredWithoutThreadsNestedInput
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    lastPostBy?: UserUpdateOneWithoutLastPostThreadsNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subforumId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPostById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUpdateManyWithoutUserNestedInput
    threadsAuthored?: ForumThreadUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    threadsAuthored?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUncheckedUpdateManyWithoutLastPostByNestedInput
    postsDeleted?: ForumPostUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutPostsDeletedInput = {
    update: XOR<UserUpdateWithoutPostsDeletedInput, UserUncheckedUpdateWithoutPostsDeletedInput>
    create: XOR<UserCreateWithoutPostsDeletedInput, UserUncheckedCreateWithoutPostsDeletedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsDeletedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsDeletedInput, UserUncheckedUpdateWithoutPostsDeletedInput>
  }

  export type UserUpdateWithoutPostsDeletedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUpdateManyWithoutUserNestedInput
    posts?: ForumPostUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUpdateManyWithoutLastPostByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsDeletedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    games?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    posts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    threadsAuthored?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
    lastPostThreads?: ForumThreadUncheckedUpdateManyWithoutLastPostByNestedInput
  }

  export type UserGameCreateManyUserInput = {
    id?: string
    gameId: string
    owned?: boolean
  }

  export type ForumPostCreateManyAuthorInput = {
    id?: string
    threadId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumThreadCreateManyAuthorInput = {
    id?: string
    subforumId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    lastPostById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumThreadCreateManyLastPostByInput = {
    id?: string
    subforumId: string
    authorId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostCreateManyDeletedByInput = {
    id?: string
    threadId: string
    authorId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
    game?: GameUpdateOneRequiredWithoutUsersNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserGameNestedInput
  }

  export type UserGameUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserGameNestedInput
  }

  export type UserGameUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ForumPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ForumThreadUpdateOneRequiredWithoutPostsNestedInput
    deletedBy?: UserUpdateOneWithoutPostsDeletedNestedInput
  }

  export type ForumPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumThreadUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subforum?: ForumSubforumUpdateOneRequiredWithoutThreadsNestedInput
    lastPostBy?: UserUpdateOneWithoutLastPostThreadsNestedInput
    posts?: ForumPostUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    subforumId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPostById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: ForumPostUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    subforumId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPostById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumThreadUpdateWithoutLastPostByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subforum?: ForumSubforumUpdateOneRequiredWithoutThreadsNestedInput
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    posts?: ForumPostUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutLastPostByInput = {
    id?: StringFieldUpdateOperationsInput | string
    subforumId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: ForumPostUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateManyWithoutLastPostByInput = {
    id?: StringFieldUpdateOperationsInput | string
    subforumId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ForumThreadUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type ForumPostUncheckedUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostUncheckedUpdateManyWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyConsoleInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImage: string
    developer: string
    publisher: string
    releaseDate?: Date | string | null
    screenshots?: GameCreatescreenshotsInput | string[]
    createdAt?: Date | string
  }

  export type GameUpdateWithoutConsoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievements?: AchievementUpdateManyWithoutGameNestedInput
    users?: UserGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutConsoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievements?: AchievementUncheckedUpdateManyWithoutGameNestedInput
    users?: UserGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutConsoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screenshots?: GameUpdatescreenshotsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateManyGameInput = {
    id?: string
    title: string
    description: string
    image?: string | null
  }

  export type UserGameCreateManyGameInput = {
    id?: string
    userId: string
    owned?: boolean
  }

  export type AchievementUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    UserAchievement?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    UserAchievement?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGameUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserGameNestedInput
  }

  export type UserGameUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserGameNestedInput
  }

  export type UserGameUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAchievementCreateManyAchievementInput = {
    id?: string
    userGameId: string
    earnedAt?: Date | string
  }

  export type UserAchievementUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGame?: UserGameUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyUserGameInput = {
    id?: string
    achievementId: string
    earnedAt?: Date | string
  }

  export type UserAchievementUpdateWithoutUserGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutUserGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumSubforumCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    position?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumSubforumUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ForumThreadUpdateManyWithoutSubforumNestedInput
  }

  export type ForumSubforumUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ForumThreadUncheckedUpdateManyWithoutSubforumNestedInput
  }

  export type ForumSubforumUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumThreadCreateManySubforumInput = {
    id?: string
    authorId: string
    title: string
    pinned?: boolean
    locked?: boolean
    lastPostAt?: Date | string
    lastPostById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumThreadUpdateWithoutSubforumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadsAuthoredNestedInput
    lastPostBy?: UserUpdateOneWithoutLastPostThreadsNestedInput
    posts?: ForumPostUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutSubforumInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPostById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: ForumPostUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateManyWithoutSubforumInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    lastPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPostById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostCreateManyThreadInput = {
    id?: string
    authorId: string
    content: string
    editedAt?: Date | string | null
    editCount?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    deletedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    deletedBy?: UserUpdateOneWithoutPostsDeletedNestedInput
  }

  export type ForumPostUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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